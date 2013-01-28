declare class BObject {
    public id: string;

    bindTo(key: string, target: BObject, targetKey?: string, noNotify?: bool): void;
    
    changed(key: any): void;
    
    create(): BObject;
    
    extend(properties: {}): any;
    extend(paerent: any, properties: {}): any;
    
    get(key: string): any;
    static get(key: string): any;
    
    set(key: string, value: any): void;
    static set(key: string, value: any): void;

    setValues(values: { [key: string]: any; }): void;

    unbind(key: string): void;

    unbindAll(): void;
}

declare class BArray extends BObject {
    new (array: any[]): BArray;

    getArray(): any[];
    
    getAt(i: number): any;

    insertAt(i: number, value: any): void;

    pop(): any;

    push(value: any): number;

    removeAt(i: number): any;

    setAt(i: number, value: any): void;
}

declare var base64: {
    decode(input: string): string;

    decodeAsArray(input: string, bytes: any): number[];

    encode(input: string): string;
};

declare var gzip: {
    unzip(input: number[]): string;

    unzipAsArray(input: number[], bytes: number): number[];

    unzipBase64(input: string): string;

    unzipBase64AsArray(input: string, bytes: number): number[];
}

interface PlistOptions {
    file?: string;
    data?: string;
}

declare class Plist extends BObject {
    new (opts: PlistOptions): Plist;
}