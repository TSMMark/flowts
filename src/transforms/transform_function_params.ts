import { NodePath } from '@babel/traverse';
import {
  Identifier,
  isNullableTypeAnnotation,
  isTSFunctionType,
  isTypeAnnotation,
  Pattern,
  RestElement,
  tsNullKeyword,
  TSParameterProperty,
  tsParenthesizedType,
  tsTypeAnnotation,
  tsUnionType,
} from '@babel/types';
import { convertFlowType } from '../converters/convert_flow_type';

export function transformFunctionParams(
  params: Array<NodePath<Identifier | Pattern | RestElement | TSParameterProperty>>,
) {
  let hasRequiredAfter = false;
  for (let i = params.length - 1; i >= 0; i--) {
    const paramNode = params[i];
    if (paramNode.isPattern()) {
      hasRequiredAfter = true;
    }
    if (paramNode.isIdentifier()) {
      const param = paramNode.node;

      if (param.typeAnnotation && isTypeAnnotation(param.typeAnnotation)) {
        if (isNullableTypeAnnotation(param.typeAnnotation.typeAnnotation)) {
          if (!hasRequiredAfter) {
            param.optional = true;
          }
          if (param.optional) {
            let tsType = convertFlowType(param.typeAnnotation.typeAnnotation.typeAnnotation);
            if (isTSFunctionType(tsType)) {
              tsType = tsParenthesizedType(tsType);
            }
            const typeAnnotation = tsUnionType([tsType, tsNullKeyword()]);
            paramNode.get('typeAnnotation').replaceWith(tsTypeAnnotation(typeAnnotation));
          } else {
            hasRequiredAfter = true;
          }
        } else {
          hasRequiredAfter = true;
        }
      }
    }
  }
}
