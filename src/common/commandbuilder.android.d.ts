import * as Common from './common';
export declare class StarIOCommandBuilder {
    private _emulation;
    private _builder;
    static createCommandBuilder(emulation: Common.Emulation): StarIOCommandBuilder;
    constructor(emulation: Common.Emulation);
    beginDocument(): this;
    endDocument(): this;
    appendInitialization(type: Common.InitializationType): this;
    append(data: string | Uint8Array): any;
    append(byte: number): any;
    appendRaw(data: string | Uint8Array): any;
    appendRaw(byte: number): any;
    appendFontStyle(fontStyle: Common.FontStyleType): this;
    appendCodePage(codePage: Common.CodePageType): this;
    appendInternational(internationalType: Common.InternationalType): this;
    appendLineFeed(): any;
    appendLineFeed(line: number): any;
    appendLineFeed(data: string | Uint8Array): any;
    appendLineFeed(data: string | Uint8Array, line: number): any;
    appendUnitFeed(unit: number): any;
    appendUnitFeed(data: string | Uint8Array, unit: number): any;
    appendCharacterSpace(space: number): this;
    appendLineSpace(lineSpace: number): this;
    appendTopMargin(margin: number): this;
    appendEmphasis(emphasis: boolean): any;
    appendEmphasis(data: string | Uint8Array): any;
    appendInvert(invert: boolean): any;
    appendInvert(data: string | Uint8Array): any;
    appendMultiple(width: number, height: number): any;
    appendMultiple(data: string | Uint8Array, width: number, height: number): any;
    appendMultipleHeight(height: number): any;
    appendMultipleHeight(data: string | Uint8Array, height: number): any;
    appendMultipleWidth(width: number): any;
    appendMultipleWidth(data: string | Uint8Array, width: number): any;
    appendUnderLine(invert: boolean): any;
    appendUnderLine(data: string | Uint8Array): any;
    appendLogo(size: Common.LogoSize, number: number): this;
    appendAbsolutePosition(position: number): any;
    appendAbsolutePosition(data: string | Uint8Array, position: number): any;
    appendAlignment(alignment: Common.AlignmentPosition): any;
    appendAlignment(data: string | Uint8Array, alignment: Common.AlignmentPosition): any;
    appendHorizontalTabPosition(positions: number[]): this;
    appendCutPaper(action: Common.CutPaperAction): this;
    appendPeripheral(channel: Common.PeripheralChannel): any;
    appendPeripheral(channel: Common.PeripheralChannel, time: number): any;
    appendSound(channel: Common.SoundChannel): any;
    appendSound(channel: Common.SoundChannel, repeat: number): any;
    appendSound(channel: Common.SoundChannel, repeat: number, driveTime: number, delayTime: number): any;
    appendBarcode(data: string | Uint8Array, symbology: Common.BarcodeSymbology, width: Common.BarcodeWidth, height: number, hri: boolean): this;
    appendBarcodeWithAbsolutePosition(data: string | Uint8Array, symbology: Common.BarcodeSymbology, width: Common.BarcodeWidth, height: number, hri: boolean, position: number): this;
    appendBarcodeWithAlignment(data: string | Uint8Array, symbology: Common.BarcodeSymbology, width: Common.BarcodeWidth, height: number, hri: boolean, alignment: Common.AlignmentPosition): this;
    appendPdf417(data: string | Uint8Array, line: number, column: number, level: Common.Pdf417Level, module: number, aspect: number): this;
    appendPdf417WithAbsolutePosition(data: string | Uint8Array, line: number, column: number, level: Common.Pdf417Level, module: number, aspect: number, position: number): this;
    appendPdf417WithAlignment(data: string | Uint8Array, line: number, column: number, level: Common.Pdf417Level, module: number, aspect: number, alignment: Common.AlignmentPosition): this;
    appendQrCode(data: string | Uint8Array, model: Common.QrCodeModel, level: Common.QrCodeLevel, cell: number): this;
    appendQrCodeWithAbsolutePosition(data: string | Uint8Array, model: Common.QrCodeModel, level: Common.QrCodeLevel, cell: number, position: number): this;
    appendQrCodeWithAlignment(data: string | Uint8Array, model: Common.QrCodeModel, level: Common.QrCodeLevel, cell: number, alignment: Common.AlignmentPosition): this;
    appendBitmap(bitmap: any, diffusion: boolean, width: number, bothScale: boolean, rotation: Common.BitmapConverterRotation): any;
    appendBitmap(bitmap: any, diffusion: boolean, rotation: Common.BitmapConverterRotation): any;
    appendBitmap(bitmap: any, diffusion: boolean, width: number, bothScale: boolean): any;
    appendBitmap(bitmap: any, diffusion: boolean): any;
    appendBitmapWithAbsolutePosition(bitmap: any, diffusion: boolean, width: number, bothScale: boolean, rotation: Common.BitmapConverterRotation, position: number): any;
    appendBitmapWithAbsolutePosition(bitmap: any, diffusion: boolean, rotation: Common.BitmapConverterRotation, position: number): any;
    appendBitmapWithAbsolutePosition(bitmap: any, diffusion: boolean, width: number, bothScale: boolean, position: number): any;
    appendBitmapWithAbsolutePosition(bitmap: any, diffusion: boolean, position: number): any;
    appendBitmapWithAlignment(bitmap: any, diffusion: boolean, width: number, bothScale: boolean, rotation: Common.BitmapConverterRotation, alignment: Common.AlignmentPosition): any;
    appendBitmapWithAlignment(bitmap: any, diffusion: boolean, rotation: Common.BitmapConverterRotation, alignment: Common.AlignmentPosition): any;
    appendBitmapWithAlignment(bitmap: any, diffusion: boolean, width: number, bothScale: boolean, alignment: Common.AlignmentPosition): any;
    appendBitmapWithAlignment(bitmap: any, diffusion: boolean, alignment: Common.AlignmentPosition): any;
    appendBlackMark(type: Common.BlackMarkType): this;
    beginPageMode(rect: any, rotation: Common.BitmapConverterRotation): this;
    endPageMode(): this;
    appendPageModeVerticalAbsolutePosition(position: number): this;
    appendPageModeRotation(rotation: Common.BitmapConverterRotation): this;
    appendPrintableArea(type: Common.PrintableAreaType): this;
    getCommands(): string | Uint8Array;
}