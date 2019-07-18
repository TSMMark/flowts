/* eslint-disable */
import { RuleSet } from '../../ruleTypes';

export default {
  globals: {
    /*
        lib/react-dom.js:119:0

        declare class SyntheticEvent<+T: EventTarget = EventTarget, +E: Event = Event> {
          bubbles: boolean;
          cancelable: boolean;
          +currentTarget: T;
          defaultPrevented: boolean;
          eventPhase: number;
          isDefaultPrevented(): boolean;
          isPropagationStopped(): boolean;
          isTrusted: boolean;
          nativeEvent: E;
          preventDefault(): void;
          stopPropagation(): void;
          // This should not be `T`. Use `currentTarget` instead. See:
          // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682
          +target: EventTarget;
          timeStamp: number;
          type: string;
          persist(): void;
        }
        */
    SyntheticEvent: {
      fix(context) {
        context.import('react', 'SyntheticEvent');
      },
    },

    /*
        lib/react-dom.js:139:0

        declare class SyntheticAnimationEvent<
          +T: EventTarget = EventTarget,
        > extends SyntheticEvent<T> {
          animationName: string;
          elapsedTime: number;
          pseudoElement: string;
        }
        */
    SyntheticAnimationEvent: {
      fix(context) {
        context.import('react', 'AnimationEvent');
      },
    },

    /*
        lib/react-dom.js:147:0

        declare class SyntheticClipboardEvent<
          +T: EventTarget = EventTarget,
        > extends SyntheticEvent<T> {
          clipboardData: any;
        }
        */
    SyntheticClipboardEvent: {
      fix(context) {
        context.import('react', 'ClipboardEvent');
      },
    },

    /*
        lib/react-dom.js:153:0

        declare class SyntheticCompositionEvent<
          +T: EventTarget = EventTarget,
        > extends SyntheticEvent<T> {
          data: any;
        }
        */
    SyntheticCompositionEvent: {
      fix(context) {
        context.import('react', 'CompositionEvent');
      },
    },

    /*
        lib/react-dom.js:159:0

        declare class SyntheticInputEvent<
          +T: EventTarget = EventTarget,
        > extends SyntheticEvent<T> {
          +target: HTMLInputElement;
          data: any;
        }
        */
    SyntheticInputEvent: {
      fix(context) {
        context.import('react', 'ChangeEvent');
      },
    },

    /*
        lib/react-dom.js:166:0

        declare class SyntheticUIEvent<
          +T: EventTarget = EventTarget,
          +E: Event = Event,
        > extends SyntheticEvent<T, E> {
          detail: number;
          view: any;
        }
        */
    SyntheticUIEvent: {
      fix(context) {
        context.import('react', 'UIEvent');
      },
    },

    /*
        lib/react-dom.js:174:0

        declare class SyntheticFocusEvent<
          +T: EventTarget = EventTarget,
        > extends SyntheticUIEvent<T> {
          relatedTarget: EventTarget;
        }
        */
    SyntheticFocusEvent: {
      fix(context) {
        context.import('react', 'FocusEvent');
      },
    },

    /*
        lib/react-dom.js:180:0

        declare class SyntheticKeyboardEvent<
          +T: EventTarget = EventTarget,
        > extends SyntheticUIEvent<T, KeyboardEvent> {
          altKey: boolean;
          charCode: number;
          ctrlKey: boolean;
          getModifierState(keyArg?: string): boolean;
          key: string;
          keyCode: number;
          locale: string;
          location: number;
          metaKey: boolean;
          repeat: boolean;
          shiftKey: boolean;
          which: number;
        }
        */
    SyntheticKeyboardEvent: {
      fix(context) {
        context.import('react', 'KeyboardEvent');
      },
    },

    /*
        lib/react-dom.js:197:0

        declare class SyntheticMouseEvent<
          +T: EventTarget = EventTarget,
          +E: Event = MouseEvent,
        > extends SyntheticUIEvent<T, E> {
          altKey: boolean;
          button: number;
          buttons: number;
          clientX: number;
          clientY: number;
          ctrlKey: boolean;
          getModifierState(keyArg: string): boolean;
          metaKey: boolean;
          pageX: number;
          pageY: number;
          relatedTarget: EventTarget;
          screenX: number;
          screenY: number;
          shiftKey: boolean;
        }
        */
    SyntheticMouseEvent: {
      fix(context) {
        context.import('react', 'MouseEvent');
      },
    },

    /*
        lib/react-dom.js:217:0

        declare class SyntheticDragEvent<
          +T: EventTarget = EventTarget,
        > extends SyntheticMouseEvent<T, DragEvent> {
          dataTransfer: any;
        }
        */
    SyntheticDragEvent: {
      fix(context) {
        context.import('react', 'DragEvent');
      },
    },

    /*
        lib/react-dom.js:223:0

        declare class SyntheticWheelEvent<
          +T: EventTarget = EventTarget,
        > extends SyntheticMouseEvent<T, WheelEvent> {
          deltaMode: number;
          deltaX: number;
          deltaY: number;
          deltaZ: number;
        }
        */
    SyntheticWheelEvent: {
      fix(context) {
        context.import('react', 'WheelEvent');
      },
    },

    /*
        lib/react-dom.js:232:0

        declare class SyntheticPointerEvent<
          +T: EventTarget = EventTarget,
        > extends SyntheticMouseEvent<T, PointerEvent> {
          pointerId: number;
          width: number;
          height: number;
          pressure: number;
          tangentialPressure: number;
          tiltX: number;
          tiltY: number;
          twist: number;
          pointerType: string;
          isPrimary: boolean;
        }
        */
    SyntheticPointerEvent: {
      fix(context) {
        context.import('react', 'PointerEvent');
      },
    },

    /*
        lib/react-dom.js:247:0

        declare class SyntheticTouchEvent<
          +T: EventTarget = EventTarget,
        > extends SyntheticUIEvent<T, TouchEvent> {
          altKey: boolean;
          changedTouches: any;
          ctrlKey: boolean;
          getModifierState: any;
          metaKey: boolean;
          shiftKey: boolean;
          targetTouches: any;
          touches: any;
        }
        */
    SyntheticTouchEvent: {
      fix(context) {
        context.import('react', 'TouchEvent');
      },
    },

    /*
        lib/react-dom.js:260:0

        declare class SyntheticTransitionEvent<
          +T: EventTarget = EventTarget,
        > extends SyntheticEvent<T> {
          propertyName: string;
          elapsedTime: number;
          pseudoElement: string;
        }
        */
    SyntheticTransitionEvent: {
      fix(context) {
        context.import('react', 'TransitionEvent');
      },
    },

    /*
        lib/react-dom.js:269:0

        declare type $JSXIntrinsics = {
          // Catch-all for custom elements.
          [string]: ReactDOM$HTMLElementJSXIntrinsic,
          // HTML
          a: {
            instance: HTMLAnchorElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          abbr: ReactDOM$HTMLElementJSXIntrinsic,
          address: ReactDOM$HTMLElementJSXIntrinsic,
          area: ReactDOM$HTMLElementJSXIntrinsic,
          article: ReactDOM$HTMLElementJSXIntrinsic,
          aside: ReactDOM$HTMLElementJSXIntrinsic,
          audio: {
            instance: HTMLAudioElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          b: ReactDOM$HTMLElementJSXIntrinsic,
          base: ReactDOM$HTMLElementJSXIntrinsic,
          bdi: ReactDOM$HTMLElementJSXIntrinsic,
          bdo: ReactDOM$HTMLElementJSXIntrinsic,
          big: ReactDOM$HTMLElementJSXIntrinsic,
          blockquote: ReactDOM$HTMLElementJSXIntrinsic,
          body: ReactDOM$HTMLElementJSXIntrinsic,
          br: {
            instance: HTMLBRElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          button: {
            instance: HTMLButtonElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          canvas: {
            instance: HTMLCanvasElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          caption: {
            instance: HTMLTableCaptionElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          cite: ReactDOM$HTMLElementJSXIntrinsic,
          code: ReactDOM$HTMLElementJSXIntrinsic,
          col: ReactDOM$HTMLElementJSXIntrinsic,
          colgroup: ReactDOM$HTMLElementJSXIntrinsic,
          data: ReactDOM$HTMLElementJSXIntrinsic,
          datalist: ReactDOM$HTMLElementJSXIntrinsic,
          dd: ReactDOM$HTMLElementJSXIntrinsic,
          del: ReactDOM$HTMLElementJSXIntrinsic,
          details: {
            instance: HTMLDetailsElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          dfn: ReactDOM$HTMLElementJSXIntrinsic,
          dialog: ReactDOM$HTMLElementJSXIntrinsic,
          div: {
            instance: HTMLDivElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          dl: {
            instance: HTMLDListElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          dt: ReactDOM$HTMLElementJSXIntrinsic,
          em: ReactDOM$HTMLElementJSXIntrinsic,
          embed: ReactDOM$HTMLElementJSXIntrinsic,
          fieldset: {
            instance: HTMLFieldSetElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          figcaption: ReactDOM$HTMLElementJSXIntrinsic,
          figure: ReactDOM$HTMLElementJSXIntrinsic,
          footer: ReactDOM$HTMLElementJSXIntrinsic,
          form: {
            instance: HTMLFormElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          h1: {
            instance: HTMLHeadingElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          h2: {
            instance: HTMLHeadingElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          h3: {
            instance: HTMLHeadingElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          h4: {
            instance: HTMLHeadingElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          h5: {
            instance: HTMLHeadingElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          h6: {
            instance: HTMLHeadingElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          head: ReactDOM$HTMLElementJSXIntrinsic,
          header: ReactDOM$HTMLElementJSXIntrinsic,
          hgroup: ReactDOM$HTMLElementJSXIntrinsic,
          hr: {
            instance: HTMLHRElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          html: ReactDOM$HTMLElementJSXIntrinsic,
          i: ReactDOM$HTMLElementJSXIntrinsic,
          iframe: {
            instance: HTMLIFrameElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          img: {
            instance: HTMLImageElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          ins: ReactDOM$HTMLElementJSXIntrinsic,
          kbd: ReactDOM$HTMLElementJSXIntrinsic,
          keygen: ReactDOM$HTMLElementJSXIntrinsic,
          label: {
            instance: HTMLLabelElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          legend: {
            instance: HTMLLegendElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          li: {
            instance: HTMLLIElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          link: {
            instance: HTMLLinkElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          main: ReactDOM$HTMLElementJSXIntrinsic,
          map: ReactDOM$HTMLElementJSXIntrinsic,
          mark: ReactDOM$HTMLElementJSXIntrinsic,
          menu: ReactDOM$HTMLElementJSXIntrinsic,
          menuitem: ReactDOM$HTMLElementJSXIntrinsic,
          meta: {
            instance: HTMLMetaElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          meter: ReactDOM$HTMLElementJSXIntrinsic,
          nav: ReactDOM$HTMLElementJSXIntrinsic,
          noscript: ReactDOM$HTMLElementJSXIntrinsic,
          object: ReactDOM$HTMLElementJSXIntrinsic,
          ol: {
            instance: HTMLOListElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          optgroup: {
            instance: HTMLOptGroupElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          option: {
            instance: HTMLOptionElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          output: ReactDOM$HTMLElementJSXIntrinsic,
          p: {
            instance: HTMLParagraphElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          param: ReactDOM$HTMLElementJSXIntrinsic,
          picture: ReactDOM$HTMLElementJSXIntrinsic,
          pre: {
            instance: HTMLPreElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          progress: ReactDOM$HTMLElementJSXIntrinsic,
          q: ReactDOM$HTMLElementJSXIntrinsic,
          rp: ReactDOM$HTMLElementJSXIntrinsic,
          rt: ReactDOM$HTMLElementJSXIntrinsic,
          ruby: ReactDOM$HTMLElementJSXIntrinsic,
          s: ReactDOM$HTMLElementJSXIntrinsic,
          samp: ReactDOM$HTMLElementJSXIntrinsic,
          script: {
            instance: HTMLScriptElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          section: ReactDOM$HTMLElementJSXIntrinsic,
          small: ReactDOM$HTMLElementJSXIntrinsic,
          source: {
            instance: HTMLSourceElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          span: {
            instance: HTMLSpanElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          strong: ReactDOM$HTMLElementJSXIntrinsic,
          style: {
            instance: HTMLStyleElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          sub: ReactDOM$HTMLElementJSXIntrinsic,
          summary: ReactDOM$HTMLElementJSXIntrinsic,
          sup: ReactDOM$HTMLElementJSXIntrinsic,
          table: {
            instance: HTMLTableElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          tbody: {
            instance: HTMLTableSectionElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          td: {
            instance: HTMLTableCellElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          tfoot: {
            instance: HTMLTableSectionElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          th: {
            instance: HTMLTableCellElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          thead: {
            instance: HTMLTableSectionElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          time: ReactDOM$HTMLElementJSXIntrinsic,
          title: ReactDOM$HTMLElementJSXIntrinsic,
          tr: {
            instance: HTMLTableRowElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          track: ReactDOM$HTMLElementJSXIntrinsic,
          u: ReactDOM$HTMLElementJSXIntrinsic,
          ul: {
            instance: HTMLUListElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          'var': ReactDOM$HTMLElementJSXIntrinsic,
          video: {
            instance: HTMLVideoElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          wbr: ReactDOM$HTMLElementJSXIntrinsic,
          // SVG
          svg: ReactDOM$SVGElementJSXIntrinsic,
          animate: ReactDOM$SVGElementJSXIntrinsic,
          circle: ReactDOM$SVGElementJSXIntrinsic,
          defs: ReactDOM$SVGElementJSXIntrinsic,
          ellipse: ReactDOM$SVGElementJSXIntrinsic,
          g: ReactDOM$SVGElementJSXIntrinsic,
          image: ReactDOM$SVGElementJSXIntrinsic,
          line: ReactDOM$SVGElementJSXIntrinsic,
          linearGradient: ReactDOM$SVGElementJSXIntrinsic,
          mask: ReactDOM$SVGElementJSXIntrinsic,
          path: ReactDOM$SVGElementJSXIntrinsic,
          pattern: ReactDOM$SVGElementJSXIntrinsic,
          polygon: ReactDOM$SVGElementJSXIntrinsic,
          polyline: ReactDOM$SVGElementJSXIntrinsic,
          radialGradient: ReactDOM$SVGElementJSXIntrinsic,
          rect: ReactDOM$SVGElementJSXIntrinsic,
          stop: ReactDOM$SVGElementJSXIntrinsic,
          symbol: ReactDOM$SVGElementJSXIntrinsic,
          text: ReactDOM$SVGElementJSXIntrinsic,
          tspan: ReactDOM$SVGElementJSXIntrinsic,
          use: ReactDOM$SVGElementJSXIntrinsic,
          // Elements React adds extra props for.
          input: {
            instance: HTMLInputElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          textarea: {
            instance: HTMLTextAreaElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          select: {
            instance: HTMLSelectElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          ...
        };
        */
    $JSXIntrinsics: {
      fix(context) {
        context.warnOnce('Rule for global "$JSXIntrinsics" is not verified');
      },
    },
  },

  modules: {
    'react-dom': {
      exports: {
        /*
                lib/react-dom.js:12:2

                declare function findDOMNode(
                    componentOrElement: Element | ?React$Component<any, any>,
                  ): null | Element | Text;
                */
        findDOMNode: {
          fix(context) {
            context.warnOnce(
              'Rule for export "findDOMNode" in module "react-dom" is not verified'
            );
          },
        },

        /*
                lib/react-dom.js:16:2

                declare function render<ElementType: React$ElementType>(
                    element: React$Element<ElementType>,
                    container: Element,
                    callback?: () => void,
                  ): React$ElementRef<ElementType>;
                */
        render: {
          fix(context) {
            context.warnOnce(
              'Rule for export "render" in module "react-dom" is not verified'
            );
          },
        },

        /*
                lib/react-dom.js:22:2

                declare function hydrate<ElementType: React$ElementType>(
                    element: React$Element<ElementType>,
                    container: Element,
                    callback?: () => void,
                  ): React$ElementRef<ElementType>;
                */
        hydrate: {
          fix(context) {
            context.warnOnce(
              'Rule for export "hydrate" in module "react-dom" is not verified'
            );
          },
        },

        /*
                lib/react-dom.js:28:2

                declare function createPortal(
                    node: React$Node,
                    container: Element,
                  ): React$Portal;
                */
        createPortal: {
          fix(context) {
            context.warnOnce(
              'Rule for export "createPortal" in module "react-dom" is not verified'
            );
          },
        },

        /*
                lib/react-dom.js:33:2

                declare function unmountComponentAtNode(container: any): boolean;
                */
        unmountComponentAtNode: {
          fix(context) {
            context.warnOnce(
              'Rule for export "unmountComponentAtNode" in module "react-dom" is not verified'
            );
          },
        },

        /*
                lib/react-dom.js:34:2

                declare var version: string;
                */
        version: {
          fix(context) {
            context.warnOnce(
              'Rule for export "version" in module "react-dom" is not verified'
            );
          },
        },

        /*
                lib/react-dom.js:36:2

                declare function unstable_batchedUpdates<A, B, C, D, E>(
                    callback: (a: A, b: B, c: C, d: D, e: E) => mixed,
                    a: A,
                    b: B,
                    c: C,
                    d: D,
                    e: E,
                  ): void;
                */
        unstable_batchedUpdates: {
          fix(context) {
            context.warnOnce(
              'Rule for export "unstable_batchedUpdates" in module "react-dom" is not verified'
            );
          },
        },

        /*
                lib/react-dom.js:44:2

                declare function unstable_renderSubtreeIntoContainer<
                    ElementType: React$ElementType,
                  >(
                    parentComponent: React$Component<any, any>,
                    nextElement: React$Element<ElementType>,
                    container: any,
                    callback?: () => void,
                  ): React$ElementRef<ElementType>;
                */
        unstable_renderSubtreeIntoContainer: {
          fix(context) {
            context.warnOnce(
              'Rule for export "unstable_renderSubtreeIntoContainer" in module "react-dom" is not verified'
            );
          },
        },
      },
    },

    'react-dom/server': {
      exports: {
        /*
                lib/react-dom.js:55:2

                declare function renderToString(element: React$Node): string;
                */
        renderToString: {
          fix(context) {
            context.warnOnce(
              'Rule for export "renderToString" in module "react-dom/server" is not verified'
            );
          },
        },

        /*
                lib/react-dom.js:56:2

                declare function renderToStaticMarkup(element: React$Node): string;
                */
        renderToStaticMarkup: {
          fix(context) {
            context.warnOnce(
              'Rule for export "renderToStaticMarkup" in module "react-dom/server" is not verified'
            );
          },
        },

        /*
                lib/react-dom.js:57:2

                declare function renderToNodeStream(element: React$Node): stream$Readable;
                */
        renderToNodeStream: {
          fix(context) {
            context.warnOnce(
              'Rule for export "renderToNodeStream" in module "react-dom/server" is not verified'
            );
          },
        },

        /*
                lib/react-dom.js:58:2

                declare function renderToStaticNodeStream(
                    element: React$Node,
                  ): stream$Readable;
                */
        renderToStaticNodeStream: {
          fix(context) {
            context.warnOnce(
              'Rule for export "renderToStaticNodeStream" in module "react-dom/server" is not verified'
            );
          },
        },

        /*
                lib/react-dom.js:61:2

                declare var version: string;
                */
        version: {
          fix(context) {
            context.warnOnce(
              'Rule for export "version" in module "react-dom/server" is not verified'
            );
          },
        },
      },
    },

    'react-dom/test-utils': {
      exports: {
        /*
                lib/react-dom.js:67:2

                declare var Simulate: { [eventName: string]: (element: Element, eventData?: Object) => void, ... };
                */
        Simulate: {
          fix(context) {
            context.warnOnce(
              'Rule for export "Simulate" in module "react-dom/test-utils" is not verified'
            );
          },
        },

        /*
                lib/react-dom.js:68:2

                declare function renderIntoDocument(
                    instance: React$Element<any>,
                  ): React$Component<any, any>;
                */
        renderIntoDocument: {
          fix(context) {
            context.warnOnce(
              'Rule for export "renderIntoDocument" in module "react-dom/test-utils" is not verified'
            );
          },
        },

        /*
                lib/react-dom.js:71:2

                declare function mockComponent(
                    componentClass: React$ElementType,
                    mockTagName?: string,
                  ): Object;
                */
        mockComponent: {
          fix(context) {
            context.warnOnce(
              'Rule for export "mockComponent" in module "react-dom/test-utils" is not verified'
            );
          },
        },

        /*
                lib/react-dom.js:75:2

                declare function isElement(element: React$Element<any>): boolean;
                */
        isElement: {
          fix(context) {
            context.warnOnce(
              'Rule for export "isElement" in module "react-dom/test-utils" is not verified'
            );
          },
        },

        /*
                lib/react-dom.js:76:2

                declare function isElementOfType(
                    element: React$Element<any>,
                    componentClass: React$ElementType,
                  ): boolean;
                */
        isElementOfType: {
          fix(context) {
            context.warnOnce(
              'Rule for export "isElementOfType" in module "react-dom/test-utils" is not verified'
            );
          },
        },

        /*
                lib/react-dom.js:80:2

                declare function isDOMComponent(instance: any): boolean;
                */
        isDOMComponent: {
          fix(context) {
            context.warnOnce(
              'Rule for export "isDOMComponent" in module "react-dom/test-utils" is not verified'
            );
          },
        },

        /*
                lib/react-dom.js:81:2

                declare function isCompositeComponent(
                    instance: React$Component<any, any>,
                  ): boolean;
                */
        isCompositeComponent: {
          fix(context) {
            context.warnOnce(
              'Rule for export "isCompositeComponent" in module "react-dom/test-utils" is not verified'
            );
          },
        },

        /*
                lib/react-dom.js:84:2

                declare function isCompositeComponentWithType(
                    instance: React$Component<any, any>,
                    componentClass: React$ElementType,
                  ): boolean;
                */
        isCompositeComponentWithType: {
          fix(context) {
            context.warnOnce(
              'Rule for export "isCompositeComponentWithType" in module "react-dom/test-utils" is not verified'
            );
          },
        },

        /*
                lib/react-dom.js:88:2

                declare function findAllInRenderedTree(
                    tree: React$Component<any, any>,
                    test: (child: React$Component<any, any>) => boolean,
                  ): Array<React$Component<any, any>>;
                */
        findAllInRenderedTree: {
          fix(context) {
            context.warnOnce(
              'Rule for export "findAllInRenderedTree" in module "react-dom/test-utils" is not verified'
            );
          },
        },

        /*
                lib/react-dom.js:92:2

                declare function scryRenderedDOMComponentsWithClass(
                    tree: React$Component<any, any>,
                    className: string,
                  ): Array<Element>;
                */
        scryRenderedDOMComponentsWithClass: {
          fix(context) {
            context.warnOnce(
              'Rule for export "scryRenderedDOMComponentsWithClass" in module "react-dom/test-utils" is not verified'
            );
          },
        },

        /*
                lib/react-dom.js:96:2

                declare function findRenderedDOMComponentWithClass(
                    tree: React$Component<any, any>,
                    className: string,
                  ): ?Element;
                */
        findRenderedDOMComponentWithClass: {
          fix(context) {
            context.warnOnce(
              'Rule for export "findRenderedDOMComponentWithClass" in module "react-dom/test-utils" is not verified'
            );
          },
        },

        /*
                lib/react-dom.js:100:2

                declare function scryRenderedDOMComponentsWithTag(
                    tree: React$Component<any, any>,
                    tagName: string,
                  ): Array<Element>;
                */
        scryRenderedDOMComponentsWithTag: {
          fix(context) {
            context.warnOnce(
              'Rule for export "scryRenderedDOMComponentsWithTag" in module "react-dom/test-utils" is not verified'
            );
          },
        },

        /*
                lib/react-dom.js:104:2

                declare function findRenderedDOMComponentWithTag(
                    tree: React$Component<any, any>,
                    tagName: string,
                  ): ?Element;
                */
        findRenderedDOMComponentWithTag: {
          fix(context) {
            context.warnOnce(
              'Rule for export "findRenderedDOMComponentWithTag" in module "react-dom/test-utils" is not verified'
            );
          },
        },

        /*
                lib/react-dom.js:108:2

                declare function scryRenderedComponentsWithType(
                    tree: React$Component<any, any>,
                    componentClass: React$ElementType,
                  ): Array<React$Component<any, any>>;
                */
        scryRenderedComponentsWithType: {
          fix(context) {
            context.warnOnce(
              'Rule for export "scryRenderedComponentsWithType" in module "react-dom/test-utils" is not verified'
            );
          },
        },

        /*
                lib/react-dom.js:112:2

                declare function findRenderedComponentWithType(
                    tree: React$Component<any, any>,
                    componentClass: React$ElementType,
                  ): ?React$Component<any, any>;
                */
        findRenderedComponentWithType: {
          fix(context) {
            context.warnOnce(
              'Rule for export "findRenderedComponentWithType" in module "react-dom/test-utils" is not verified'
            );
          },
        },

        /*
                lib/react-dom.js:116:2

                declare function act(callback: () => void | Thenable): Thenable;
                */
        act: {
          fix(context) {
            context.warnOnce(
              'Rule for export "act" in module "react-dom/test-utils" is not verified'
            );
          },
        },
      },
    },
  },
} as RuleSet;