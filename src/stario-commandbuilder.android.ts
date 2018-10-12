import * as Common from './stario-common';

export class StarIOCommandBuilder {

    private _emulation: Common.Emulation;
    private _builder;

    static createCommandBuilder(emulation: Common.Emulation) {
        return new StarIOCommandBuilder(emulation);
    }

    constructor(emulation: Common.Emulation) {
        this._emulation = emulation;
        
    }

    beginDocument() {

        return this;
    }
    endDocument() {

        return this;
    }
    appendInitialization(type: Common.InitializationType) {

        return this;
    }
    append(data: string | Uint8Array);
    append(byte: number);
    append(data) {

        return this;
    }
    appendRaw(data: string | Uint8Array);
    appendRaw(byte: number);
    appendRaw(data) {

        return this;
    }
    appendFontStyle(fontStyle: Common.FontStyleType) {

        return this;
    }
    appendCodePage(codePage: Common.CodePageType) {

        return this;
    }
    appendInternational(internationalType: Common.InternationalType) {

        return this;
    }
    appendLineFeed();
    appendLineFeed(line: number);
    appendLineFeed(data: string | Uint8Array);
    appendLineFeed(data: string | Uint8Array, line: number);
    appendLineFeed(...args) {
        let line: number, data: Uint8Array | string;
        if (args.length == 1) {
            if (typeof (args[0]) == 'number') {
                line = args[0];
            }
            else {
                data = args[0];
            }
        }
        else if (args.length > 1) {
            data = args[0];
            line = args[1];
        }
        /// Do something
        return this;
    }
    appendUnitFeed(unit: number);
    appendUnitFeed(data: string | Uint8Array, unit: number);
    appendUnitFeed(...args) {
        let line: number, data: Uint8Array | string;
        if (args.length == 1) {
            if (typeof (args[0]) == 'number') {
                line = args[0];
            }
            else {
                data = args[0];
            }
        }
        else if (args.length > 1) {
            data = args[0];
            line = args[1];
        }
        /// Do something
        return this;
    }
    appendCharacterSpace(space: number) {

        return this;
    }
    appendLineSpace(lineSpace: number) {

        return this;
    }
    appendTopMargin(margin: number) {

        return this;
    }
    appendEmphasis(emphasis: boolean);
    appendEmphasis(data: string | Uint8Array);
    appendEmphasis(arg1) {
        if (typeof (arg1) === 'boolean') {

        }
        else {

        }
        return this;
    }
    appendInvert(invert: boolean);
    appendInvert(data: string | Uint8Array);
    appendInvert(arg1) {
        if (typeof (arg1) === 'boolean') {

        }
        else {

        }
        return this;
    }
    appendMultiple(width: number, height: number);
    appendMultiple(data: string | Uint8Array, width: number, height: number);
    appendMultiple(...args) {

        return this;
    }
    appendMultipleHeight(height: number);
    appendMultipleHeight(data: string | Uint8Array, height: number);
    appendMultipleHeight(...args) {

        return this;
    }
    appendMultipleWidth(width: number);
    appendMultipleWidth(data: string | Uint8Array, width: number);
    appendMultipleWidth(...args) {

        return this;
    }

    appendUnderLine(invert: boolean);
    appendUnderLine(data: string | Uint8Array);
    appendUnderLine(arg1) {
        if (typeof (arg1) === 'boolean') {

        }
        else {

        }
        return this;
    }

    appendLogo(size: Common.LogoSize, number: number) {

        return this;
    }


    appendAbsolutePosition(position: number);
    appendAbsolutePosition(data: string | Uint8Array, position: number);
    appendAbsolutePosition(...args) {
        if (args.length == 2) {

        }
        else {

        }
        return this;
    }
    appendAlignment(alignment: Common.AlignmentPosition);
    appendAlignment(data: string | Uint8Array, alignment: Common.AlignmentPosition);
    appendAlignment(...args) {
        if (args.length == 2) {

        }
        else {

        }
        return this;
    }
    appendHorizontalTabPosition(positions: number[]) {

        return this;
    }
    appendCutPaper(action: Common.CutPaperAction) {

        return this;
    }
    appendPeripheral(channel: Common.PeripheralChannel);
    appendPeripheral(channel: Common.PeripheralChannel, time: number);
    appendPeripheral(channel: Common.PeripheralChannel, time?: number) {

        return this;
    }
    appendSound(channel: Common.SoundChannel);
    appendSound(channel: Common.SoundChannel, repeat: number);
    appendSound(channel: Common.SoundChannel, repeat: number, driveTime: number, delayTime: number);
    appendSound(channel: Common.SoundChannel, repeat?: number, driveTime?: number, delayTime?: number) {

        return this;
    }
    appendBarcode(data: string | Uint8Array, symbology: Common.BarcodeSymbology, width: Common.BarcodeWidth, height: number, hri: boolean) {

        return this;
    }
    appendBarcodeWithAbsolutePosition(data: string | Uint8Array, symbology: Common.BarcodeSymbology, width: Common.BarcodeWidth, height: number, hri: boolean, position: number) {

        return this;
    }
    appendBarcodeWithAlignment(data: string | Uint8Array, symbology: Common.BarcodeSymbology, width: Common.BarcodeWidth, height: number, hri: boolean, alignment: Common.AlignmentPosition) {

        return this;
    }
    appendPdf417(data: string | Uint8Array, line: number, column: number, level: Common.Pdf417Level, module: number, aspect: number) {

        return this;
    }
    appendPdf417WithAbsolutePosition(data: string | Uint8Array, line: number, column: number, level: Common.Pdf417Level, module: number, aspect: number, position: number) {

        return this;

    }
    appendPdf417WithAlignment(data: string | Uint8Array, line: number, column: number, level: Common.Pdf417Level, module: number, aspect: number, alignment: Common.AlignmentPosition) {

        return this;

    }
    // appendQrCode(byte[] data, QrCodeModel model, QrCodeLevel level, int cell);
    appendQrCode(data: string | Uint8Array, model: Common.QrCodeModel, level: Common.QrCodeLevel, cell: number) {

        return this;
    }
    appendQrCodeWithAbsolutePosition(data: string | Uint8Array, model: Common.QrCodeModel, level: Common.QrCodeLevel, cell: number, position: number) {

        return this;
    }
    appendQrCodeWithAlignment(data: string | Uint8Array, model: Common.QrCodeModel, level: Common.QrCodeLevel, cell: number, alignment: Common.AlignmentPosition) {

        return this;
    }
    appendBitmap(bitmap, diffusion: boolean, width: number, bothScale: boolean, rotation: Common.BitmapConverterRotation);
    appendBitmap(bitmap, diffusion: boolean, rotation: Common.BitmapConverterRotation);
    appendBitmap(bitmap, diffusion: boolean, width: number, bothScale: boolean);
    appendBitmap(bitmap, diffusion: boolean);
    appendBitmap(bitmap, diffusion: boolean, ...args) {
        let width: number, bothScale: boolean, rotation: Common.BitmapConverterRotation;
        switch (args.length) {
            case 1:
                rotation = args[0];
                break;
            case 2:
                width = args[0];
                bothScale = args[1];
                break;
            case 3:
                width = args[0];
                bothScale = args[1];
                rotation = args[2];
                break;
        }
        return this;
    }
    appendBitmapWithAbsolutePosition(bitmap, diffusion: boolean, width: number, bothScale: boolean, rotation: Common.BitmapConverterRotation, position: number);
    appendBitmapWithAbsolutePosition(bitmap, diffusion: boolean, rotation: Common.BitmapConverterRotation, position: number);
    appendBitmapWithAbsolutePosition(bitmap, diffusion: boolean, width: number, bothScale: boolean, position: number);
    appendBitmapWithAbsolutePosition(bitmap, diffusion: boolean, position: number);
    appendBitmapWithAbsolutePosition(bitmap, diffusion: boolean, ...args) {
        let width: number, bothScale: boolean, rotation: Common.BitmapConverterRotation;
        let position: number = args.pop();
        switch (args.length) {
            case 1:
                rotation = args[0];
                break;
            case 2:
                width = args[0];
                bothScale = args[1];
                break;
            case 3:
                width = args[0];
                bothScale = args[1];
                rotation = args[2];
                break;
        }
        return this;
    }
    appendBitmapWithAlignment(bitmap, diffusion: boolean, width: number, bothScale: boolean, rotation: Common.BitmapConverterRotation, alignment: Common.AlignmentPosition);
    appendBitmapWithAlignment(bitmap, diffusion: boolean, rotation: Common.BitmapConverterRotation, alignment: Common.AlignmentPosition);
    appendBitmapWithAlignment(bitmap, diffusion: boolean, width: number, bothScale: boolean, alignment: Common.AlignmentPosition);
    appendBitmapWithAlignment(bitmap, diffusion: boolean, alignment: Common.AlignmentPosition);
    appendBitmapWithAlignment(bitmap, diffusion: boolean, ...args) {
        let width: number, bothScale: boolean, rotation: Common.BitmapConverterRotation;
        let alignment: Common.AlignmentPosition = args.pop();
        switch (args.length) {
            case 1:
                rotation = args[0];
                break;
            case 2:
                width = args[0];
                bothScale = args[1];
                break;
            case 3:
                width = args[0];
                bothScale = args[1];
                rotation = args[2];
                break;
        }
        return this;
    }

    appendBlackMark(type: Common.BlackMarkType) {

        return this;
    }
	beginPageMode(rect: any, rotation: Common.BitmapConverterRotation) {

        return this;
    }
    endPageMode() {

        return this;
    }
    appendPageModeVerticalAbsolutePosition(position: number) {

        return this;
    }
    appendPageModeRotation(rotation: Common.BitmapConverterRotation) {

        return this;
    }
    appendPrintableArea(type: Common.PrintableAreaType) {

        return this;
    }
    getCommands(): string | Uint8Array {
        return null;
    }
}