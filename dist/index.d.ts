interface PoulpeOption {
    element: HTMLElement | string;
    data: Object;
}
declare class Poulpe {
    private regex;
    private element;
    private data;
    private events;
    constructor(option: PoulpeOption);
    run(): void;
    private find;
    private bind;
    private getText;
    on(event: any, listener: any): () => void;
    off(event?: any, listener?: any): void;
    emit(event: any, ...args: any): void;
    once(event: any, listener: any): () => void;
}
