 declare namespace ngEvents {

  function on(eventName: string, callback: (...args: any[]) => void): void;

         function off(eventName: string, callback?: (...args: any[]) => void): void;

         function trigger(eventName: string, ...args: any[]): void;

    }
