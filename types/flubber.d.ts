declare module 'flubber' {
    export function interpolate(from: any, to: any, options?: any): (t: number) => string;
    export function interpolateAll(paths: any[], options?: any): ((t: number) => string)[];
}