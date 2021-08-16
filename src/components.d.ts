/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil/router";
export namespace Components {
    interface AppHome {
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
        "toggleForm": () => Promise<void>;
    }
    interface DisplayTodos {
        "handleDelete": Function;
        "select": Function;
        "todos": Array<any>;
    }
    interface TodoForm {
        "_id": string;
        "action": string;
        "completed": boolean;
        "handleCreate": Function;
        "handleUpdate": Function;
        "reminder": string;
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLDisplayTodosElement extends Components.DisplayTodos, HTMLStencilElement {
    }
    var HTMLDisplayTodosElement: {
        prototype: HTMLDisplayTodosElement;
        new (): HTMLDisplayTodosElement;
    };
    interface HTMLTodoFormElement extends Components.TodoForm, HTMLStencilElement {
    }
    var HTMLTodoFormElement: {
        prototype: HTMLTodoFormElement;
        new (): HTMLTodoFormElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "display-todos": HTMLDisplayTodosElement;
        "todo-form": HTMLTodoFormElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface DisplayTodos {
        "handleDelete"?: Function;
        "select"?: Function;
        "todos"?: Array<any>;
    }
    interface TodoForm {
        "_id"?: string;
        "action"?: string;
        "completed"?: boolean;
        "handleCreate"?: Function;
        "handleUpdate"?: Function;
        "reminder"?: string;
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "display-todos": DisplayTodos;
        "todo-form": TodoForm;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "display-todos": LocalJSX.DisplayTodos & JSXBase.HTMLAttributes<HTMLDisplayTodosElement>;
            "todo-form": LocalJSX.TodoForm & JSXBase.HTMLAttributes<HTMLTodoFormElement>;
        }
    }
}