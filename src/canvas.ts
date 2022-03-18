const canvas: HTMLCanvasElement = document.getElementById("board") as HTMLCanvasElement;
const context: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;
const canvasWidth: number = canvas.clientWidth;
const canvasHeight: number = canvas.clientHeight;

const I_COLOER: number[] = [0x7f, 0xff, 0xd4, 0xff];
const O_COLOR  = [0xff, 0xff, 0x00, 0xff];
const T_COLOR  = [0x99, 0x32, 0xcc, 0xff];
const J_COLOR  = [0x00, 0x00, 0xcd, 0xff];
const L_COLOR  = [0xff, 0x8c, 0x00, 0xff];
const S_COLOR  = [0x00, 0xff, 0x7f, 0xff];
const Z_COLOR  = [0xff, 0x63, 0x47, 0xff];


function sample() {
}

export function draw_pixcels(array: Uint8Array[][], x_start: number, y_start: number) {
    const imageData: ImageData = context.getImageData(0, 0, canvasWidth, canvasHeight);
    const pixels: Uint8ClampedArray = imageData.data;
    
    // assert(false);
}

export function hello() {
    alert("Hello form canvas.ts");
}

function assert(exp: boolean) {
    if (!exp) {
        throw new Error("assertion failed");
    }
}