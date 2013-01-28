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
    constructor(array: any[]);

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
    constructor(opts: PlistOptions);
}

declare var util: {
    beget(o: any): void;

    callback(target: any, method: any): void;

    copy(o: any): any;

    domReady(): void;

    each(arr: any[], f:any => any);

    extend(target: any, ext: any): void;

    isArray(arr: any): bool;

    isDate(d: any): bool;

    isRegExp(r: any): bool;

    map(arr: any[], f:any => any): any[];

    merge(first: any, ...other: any[]): any;

    populateIndex(parent: any, modules: string): any;

    ready(f: Function): void;
}

module cocos {

    export class Texture2D extends BObject {
	public contentSize: geometry.Size;
	public data: string;

	constructor(data: { file?: string; data: Texture2D; });
	constructor(data: { file?: string; data: HTMLImageElement; });

	dataDidLoad(data: any): void;
	drawAtPoint(ctx: any, point: geometry.Point): void;
	drawInRect(ctx: any, point: geometry.Rect): void;

	get_pixelsHigh: number;
	get_pixelsWide: number;
    }

    export class Timer extends BObject {
	constructor(o: { callback: Function; interval: float; });
    }
}

module cocos.actions {
    
    export class Action extends BObject {
	public isDone: any;
	public tag: any;
	public target: cocos.nodes.Node;

	constructor();
	
	reverse(): Action;
	
	startWithTarget(target: cocos.nodes.Node): void;
	
	step(dt: number): void;
	
	stop(): void;
	
	update(time: number): void;
    }

}

module cocos.nodes {
    export class Node extends BObject {
	public anchorPoint: geometry.Point;
	public anchorPointInPixels: geometry.Point;
	public boundingBox: geometry.Rect;
	public children: Node[];
	public contentSize: geometry.Size;
	public opactity: number;
	public parent: Node;
	public position: geometry.Point;
	public rotation: number;
	public scale: number;
	public scaleX: number;
	public scaleY: number;
	public tag: any;
	public visible: bool;
	public visibleRect: geometry.Rect;
	public worldBoundingBox: geometry.Rect;
	public zOrder: number;

	constructor();
	
	addChild(child: { child: Node; z?: number; tag?: string; }): Node;
	
	cleanup(): void;

	convertToNodeSpace(worldPoint: geometry.Point): void;

	detatchChild(opts: any): void;

	draw(context: CanvasRenderingContext2D, rect: geometry.Rect): void;
	draw(context: WebGLRenderingContext, rect: geometry.Rect): void;
	
	getAction(opts: any): cocos.actions.Action;

	getChild(opts: any): Node;

	nodeToParentTransform(): void;
	nodeToWorldTransform(): void;
	parentToNodeTransform(): void;
	
	pauseSchedulerAndActions(): void;

	removeChild(opts: any): void;
	removeChildren(opts: any): void;
	reorderChild(opts: any): void;
	resumeSchedulerAndActions(): void;
	runAction(action: cocos.actions.Action): void;

	schedule(method: {method: string; interval?: number;}): void;
	schedule(method: {method: Function; interval?: number;}): void;

	scheduleUpdate(opts: any): void;
	stopAllActions(): void;
	transform(context: any): void;
	
	unschedule(method: string): void;
	unschedule(method: Function): void;
	unscheduleAllSelectors(): void;

	unscheduleSelector(selector: any): void;
	visit(context: any, rect: any): void;
	worldToNodeTransform(): void;
    }
}

module geometry {
    export class Point {
	public x: number;
	public y: number;

	constructor(x: number, y: number);
    }

    export class Rect {
	public origin: Point;
	public size: Size;

	constructor(x: number, y: number, w: number, h: number);
    }

    export class Size {
	public height: number;
	public weight: number;

	constructor(w: number, h: number);
    }
}