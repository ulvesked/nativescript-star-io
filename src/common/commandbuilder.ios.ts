import * as Common from './common';

export class StarIOCommandBuilder {

    private emulation: Common.Emulation;
    private builder: ISCBBuilder;

    private stringToNSData(data: string): NSData {

        let nsstring = NSString.stringWithString(data);
        return nsstring.dataUsingEncoding(NSUTF8StringEncoding);

    }

    private nsdataToString(data: NSData) {
        let nsstring = NSString.alloc().initWithDataEncoding(data, NSUTF8StringEncoding);
        return nsstring.UTF8String.replace(/[\0]+$/, '');
    }

    static createCommandBuilder(emulation: Common.Emulation) {
        return new StarIOCommandBuilder(emulation);
    }

    constructor(emulation: Common.Emulation) {
        this.emulation = emulation;
        this.builder = StarIoExt.createCommandBuilder(<number>emulation);
    }

    beginDocument() {
        this.builder.beginDocument();
        return this;
    }
    endDocument() {
        this.builder.endDocument();
        return this;
    }
    appendInitialization(type: Common.InitializationType) {
        this.builder.appendInitialization(<number>type);
        return this;
    }
    append(data: string | ArrayBuffer);
    append(byte: number);
    append(data) {
        switch (typeof (data)) {
            case 'number':
                this.builder.appendByte(data);
                break;
            case "string":
                this.builder.appendData(this.stringToNSData(data));
                break;
            default:
                this.builder.appendBytesLength(data, data.length);
                break;
        }
        return this;
    }
    appendRaw(data: string | ArrayBuffer);
    appendRaw(byte: number);
    appendRaw(data) {
        switch (typeof (data)) {
            case 'number':
                this.builder.appendRawByte(data);
                break;
            case "string":
                this.builder.appendRawData(this.stringToNSData(data));
                break;
            default:
                this.builder.appendRawBytesLength(data, data.length);
                break;
        }
        return this;
    }
    appendFontStyle(fontStyle: Common.FontStyleType) {
        this.builder.appendFontStyle(<number>fontStyle);
        return this;
    }
    appendCodePage(codePage: Common.CodePageType) {
        this.builder.appendCodePage(<number>codePage);
        return this;
    }
    appendInternational(type: Common.InternationalType) {
        this.builder.appendInternational(<number>type);
        return this;
    }
    appendLineFeed();
    appendLineFeed(line: number);
    appendLineFeed(data: string | ArrayBuffer);
    appendLineFeed(data: string | ArrayBuffer, line: number);
    appendLineFeed(...args) {
        let line: number, data: ArrayBuffer | string;
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
        if (typeof (data) == "undefined") {
            if (line > 0) {
                // this is not detected by NS
                // this.builder.appendLineFeed(line);

                // Workaround, call it multiple times
                for (let i = 0; i < line; i++) {
                    this.builder.appendLineFeed();
                }
            }
            else {
                this.builder.appendLineFeed();
            }
        } else if (typeof (data) == "string") {
            if (line) {
                this.builder.appendDataWithLineFeedLine(this.stringToNSData(data), line);
            }
            else {
                this.builder.appendDataWithLineFeed(this.stringToNSData(data));
            }
        }
        else {
            if (line) {
                this.builder.appendBytesWithLineFeedLengthLine(<any>data, data.byteLength, line);
            }
            else {
                this.builder.appendBytesWithLineFeedLength(<any>data, data.byteLength);
            }
        }
        return this;
    }
    appendUnitFeed(unit: number);
    appendUnitFeed(data: string | ArrayBuffer, unit: number);
    appendUnitFeed(...args) {
        let unit: number, data: ArrayBuffer | string;
        if (args.length == 1) {
            if (typeof (args[0]) == 'number') {
                unit = args[0];
            }
            else {
                data = args[0];
            }
        }
        else if (args.length > 1) {
            data = args[0];
            unit = args[1];
        }
        if (typeof (data) == "undefined") {
            this.builder.appendUnitFeed(unit);
        }
        else if (typeof (data) == "string") {
            this.builder.appendDataWithUnitFeedUnit(this.stringToNSData(data), unit);
        }
        else {
            this.builder.appendBytesWithUnitFeedLengthUnit(<any>data, data.byteLength, unit);
        }
        return this;
    }
    appendCharacterSpace(space: number) {
        this.builder.appendCharacterSpace(space);
        return this;
    }
    appendLineSpace(lineSpace: number) {
        this.builder.appendLineSpace(lineSpace);
        return this;
    }
    appendTopMargin(margin: number) {

        this.builder.appendTopMargin(margin);
        return this;
    }
    appendEmphasis(emphasis: boolean);
    appendEmphasis(data: string | ArrayBuffer);
    appendEmphasis(arg) {
        if (typeof (arg) === 'boolean') {
            this.builder.appendEmphasis(arg);
        }
        else if (typeof (arg) == "string") {
            this.builder.appendDataWithEmphasis(this.stringToNSData(arg));
        }
        else {
            this.builder.appendBytesWithEmphasisLength(arg, arg.byteLength);
        }
        return this;
    }
    appendInvert(invert: boolean);
    appendInvert(data: string | ArrayBuffer);
    appendInvert(arg1) {
        if (typeof (arg1) === 'boolean') {
            this.builder.appendInvert(arg1);
        }
        else if (typeof (arg1) == "string") {
            this.builder.appendDataWithInvert(this.stringToNSData(arg1));
        }
        else {
            this.builder.appendBytesWithInvertLength(<any>arg1, arg1.length);
        }
        return this;
    }
    appendMultiple(width: number, height: number);
    appendMultiple(data: string | ArrayBuffer, width: number, height: number);
    appendMultiple(...args) {
        if (args.length == 2) {
            this.builder.appendMultipleHeight(args[0], args[1])
        }
        else if (typeof (args[0]) == "string") {
            this.builder.appendDataWithMultipleWidthHeight(this.stringToNSData(args[0]), args[1], args[2]);
        }
        else {
            this.builder.appendBytesWithMultipleLengthWidthHeight(args[0], args[0].length, args[1], args[2]);
        }
        return this;
    }
    appendMultipleHeight(height: number);
    appendMultipleHeight(data: string | ArrayBuffer, height: number);
    appendMultipleHeight(...args) {
        if (args.length == 1) {
            // Method appendMultipleHeight is not detected correctly by NS

            // Workaround
            this.builder.appendBytesWithMultipleHeightLengthHeight(<any>new ArrayBuffer(0), 0, args[0]);
        }
        else if (typeof (args[0]) == "string") {
            this.builder.appendDataWithMultipleHeightHeight(this.stringToNSData(args[0]), args[1]);
        }
        else {
            this.builder.appendBytesWithMultipleHeightLengthHeight(args[0], args[0].length, args[1]);
        }
        return this;
    }
    appendMultipleWidth(width: number);
    appendMultipleWidth(data: string | ArrayBuffer, width: number);
    appendMultipleWidth(...args) {
        if (args.length == 1) {
            this.builder.appendMultipleWidth(args[0]);
        }
        else if (typeof (args[0]) == "string") {
            this.builder.appendDataWithMultipleWidthWidth(this.stringToNSData(args[0]), args[1]);
        }
        else {
            this.builder.appendBytesWithMultipleWidthLengthWidth(args[0], args[0].length, args[1]);
        }
        return this;
    }

    appendUnderLine(invert: boolean);
    appendUnderLine(data: string | ArrayBuffer);
    appendUnderLine(arg) {
        if (typeof (arg) === 'boolean') {
            this.builder.appendUnderLine(arg);
        }
        else if (typeof (arg) == 'string') {
            this.builder.appendDataWithUnderLine(this.stringToNSData(arg));
        }
        else {
            this.builder.appendBytesWithUnderLineLength(<any>arg, arg.length);
        }
        return this;
    }

    appendLogo(size: Common.LogoSize, number: number) {
        this.builder.appendLogoNumber(<number>size, number);
        return this;
    }


    appendAbsolutePosition(position: number);
    appendAbsolutePosition(data: string | ArrayBuffer, position: number);
    appendAbsolutePosition(...args) {
        if (args.length == 2) {
            let data = args[0], position = args[1];
            if (typeof (data) == 'string') {
                this.builder.appendDataWithAbsolutePositionPosition(this.stringToNSData(data), position);
            }
            else {
                this.builder.appendBytesWithAbsolutePositionLengthPosition(data, data.length, position);
            }
        }
        else {
            this.builder.appendAbsolutePosition(args[0]);
        }
        return this;
    }
    appendAlignment(alignment: Common.AlignmentPosition);
    appendAlignment(data: string | ArrayBuffer, alignment: Common.AlignmentPosition);
    appendAlignment(...args) {
        if (args.length == 2) {
            let [data, alignment] = args;
            if (typeof (data) == 'string') {
                this.builder.appendDataWithAlignmentPosition(this.stringToNSData(data), alignment);
            }
            else {
                this.builder.appendBytesWithAlignmentLengthPosition(data, data.length, alignment);
            }
        }
        else {
            this.builder.appendAlignment(args[0]);
        }
        return this;
    }
    appendHorizontalTabPosition(positions: number[]) {
        this.builder.appendHorizontalTabPosition(<any>positions);
        return this;
    }
    appendCutPaper(action: Common.CutPaperAction) {
        this.builder.appendCutPaper(<number>action);
        return this;
    }
    appendPeripheral(channel: Common.PeripheralChannel);
    appendPeripheral(channel: Common.PeripheralChannel, time: number);
    appendPeripheral(channel: Common.PeripheralChannel, time?: number) {
        if (typeof(time) == 'undefined') {
            this.builder.appendPeripheral(<number>channel);
        }
        else {
            this.builder.appendPeripheralTime(<number>channel, time);
        }
        return this;
    }
    appendSound(channel: Common.SoundChannel);
    appendSound(channel: Common.SoundChannel, repeat: number);
    appendSound(channel: Common.SoundChannel, repeat: number, driveTime: number, delayTime: number);
    appendSound(channel: Common.SoundChannel, repeat?: number, driveTime?: number, delayTime?: number) {
        if (typeof(driveTime) != "undefined") {
            this.builder.appendSoundRepeatDriveTimeDelayTime(<number>channel, repeat, driveTime, delayTime);
        }
        else if (typeof(repeat) != 'undefined') {
            this.builder.appendSoundRepeat(<number>channel, repeat);
        }
        else {
            this.builder.appendSound(<number>channel);
        }
        return this;
    }
    appendBarcode(data: string | ArrayBuffer, symbology: Common.BarcodeSymbology, width: Common.BarcodeWidth, height: number, hri: boolean) {
        if (typeof(data) == 'string') {
            this.builder.appendBarcodeDataSymbologyWidthHeightHri(this.stringToNSData(data), <number>symbology, <number>width, height, hri);
        }
        else {
            this.builder.appendBarcodeBytesLengthSymbologyWidthHeightHri(<any>data, data.byteLength, <number>symbology, <number>width, height, hri);
        }
        return this;
    }
    appendBarcodeWithAbsolutePosition(data: string | ArrayBuffer, symbology: Common.BarcodeSymbology, width: Common.BarcodeWidth, height: number, hri: boolean, position: number) {
        if (typeof(data) == 'string') {
            this.builder.appendBarcodeDataWithAbsolutePositionSymbologyWidthHeightHriPosition(this.stringToNSData(data), <number>symbology, <number>width, height, hri, position);
        }
        else {
            this.builder.appendBarcodeBytesWithAbsolutePositionLengthSymbologyWidthHeightHriPosition(<any>data, data.byteLength, <number>symbology, <number>width, height, hri, position);
        }
        return this;
    }
    appendBarcodeWithAlignment(data: string | ArrayBuffer, symbology: Common.BarcodeSymbology, width: Common.BarcodeWidth, height: number, hri: boolean, alignment: Common.AlignmentPosition) {
        if (typeof(data) == 'string') {
            this.builder.appendBarcodeDataWithAlignmentSymbologyWidthHeightHriPosition(this.stringToNSData(data), <number>symbology, <number>width, height, hri, <number>alignment);
        }
        else {
            this.builder.appendBarcodeBytesWithAlignmentLengthSymbologyWidthHeightHriPosition(<any>data, data.byteLength, <number>symbology, <number>width, height, hri, <number>alignment);
        }
        return this;
    }
    appendPdf417(data: string | ArrayBuffer, line: number, column: number, level: Common.Pdf417Level, module: number, aspect: number) {
        if (typeof(data) == 'string') {
            this.builder.appendPdf417DataLineColumnLevelModuleAspect(this.stringToNSData(data), line, column, <number>level, module, aspect);
        }
        else {
            this.builder.appendPdf417BytesLengthLineColumnLevelModuleAspect(<any>data, data.byteLength, line, column, <number>level, module, aspect);
        }
        return this;
    }
    appendPdf417WithAbsolutePosition(data: string | ArrayBuffer, line: number, column: number, level: Common.Pdf417Level, module: number, aspect: number, position: number) {
        if (typeof(data) == 'string') {
            this.builder.appendPdf417DataWithAbsolutePositionLineColumnLevelModuleAspectPosition(this.stringToNSData(data), line, column, <number>level, module, aspect, position);
        }
        else {
            this.builder.appendPdf417BytesWithAbsolutePositionLengthLineColumnLevelModuleAspectPosition(<any>data, data.byteLength, line, column, <number>level, module, aspect, position);
        }
        return this;

    }
    appendPdf417WithAlignment(data: string | ArrayBuffer, line: number, column: number, level: Common.Pdf417Level, module: number, aspect: number, alignment: Common.AlignmentPosition) {
        if (typeof(data) == 'string') {
            this.builder.appendPdf417DataWithAlignmentLineColumnLevelModuleAspectPosition(this.stringToNSData(data), line, column, <number>level, module, aspect, <number>alignment);
        }
        else {
            this.builder.appendPdf417BytesWithAlignmentLengthLineColumnLevelModuleAspectPosition(<any>data, data.byteLength, line, column, <number>level, module, aspect, <number>alignment);
        }
        return this;

    }
    // appendQrCode(byte[] data, QrCodeModel model, QrCodeLevel level, int cell);
    appendQrCode(data: string | ArrayBuffer, model: Common.QrCodeModel, level: Common.QrCodeLevel, cell: number) {
        if (typeof(data) == 'string') {
            this.builder.appendQrCodeDataModelLevelCell(this.stringToNSData(data), <number>model, <number>level, cell);
        }
        else {
            this.builder.appendQrCodeBytesLengthModelLevelCell(<any>data, data.byteLength, <number>model, <number>level, cell);
        }
        return this;
    }
    appendQrCodeWithAbsolutePosition(data: string | ArrayBuffer, model: Common.QrCodeModel, level: Common.QrCodeLevel, cell: number, position: number) {
        if (typeof(data) == 'string') {
            this.builder.appendQrCodeDataWithAbsolutePositionModelLevelCellPosition(this.stringToNSData(data), <number>model, <number>level, cell, position);
        }
        else {
            this.builder.appendQrCodeBytesWithAbsolutePositionLengthModelLevelCellPosition(<any>data, data.byteLength, <number>model, <number>level, cell, position);
        }
        return this;
    }
    appendQrCodeWithAlignment(data: string | ArrayBuffer, model: Common.QrCodeModel, level: Common.QrCodeLevel, cell: number, alignment: Common.AlignmentPosition) {
        if (typeof(data) == 'string') {
            this.builder.appendQrCodeDataWithAbsolutePositionModelLevelCellPosition(this.stringToNSData(data), <number>model, <number>level, cell, <number>alignment);
        }
        else {
            this.builder.appendQrCodeBytesWithAlignmentLengthModelLevelCellPosition(<any>data, data.byteLength, <number>model, <number>level, cell, <number>alignment);
        }
        return this;
    }
    private convertImageToBitmap(image: any): UIImage {
        return image;
    }
    appendBitmap(bitmap, diffusion: boolean, width: number, bothScale: boolean, rotation: Common.BitmapConverterRotation);
    appendBitmap(bitmap, diffusion: boolean, rotation: Common.BitmapConverterRotation);
    appendBitmap(bitmap, diffusion: boolean, width: number, bothScale: boolean);
    appendBitmap(bitmap, diffusion: boolean);
    appendBitmap(bitmap, diffusion: boolean, ...args) {
        let bmp = this.convertImageToBitmap(bitmap);
        switch (args.length) {
            case 0: 
                this.builder.appendBitmapDiffusion(bmp, diffusion);
                break;
            case 1:
                this.builder.appendBitmapDiffusionRotation(bmp, diffusion, args[0]);
                break;
            case 2:
                this.builder.appendBitmapDiffusionWidthBothScale(bmp, diffusion, args[0], args[1]);
                break;
            case 3:
                this.builder.appendBitmapDiffusionWidthBothScaleRotation(bmp, diffusion, args[0], args[1], args[2]);
                break;
        }
        return this;
    }
    appendBitmapWithAbsolutePosition(bitmap, diffusion: boolean, width: number, bothScale: boolean, rotation: Common.BitmapConverterRotation, position: number);
    appendBitmapWithAbsolutePosition(bitmap, diffusion: boolean, rotation: Common.BitmapConverterRotation, position: number);
    appendBitmapWithAbsolutePosition(bitmap, diffusion: boolean, width: number, bothScale: boolean, position: number);
    appendBitmapWithAbsolutePosition(bitmap, diffusion: boolean, position: number);
    appendBitmapWithAbsolutePosition(bitmap, diffusion: boolean, ...args) {
        let position: number = args.pop();
        let bmp = this.convertImageToBitmap(bitmap);
        switch (args.length) {
            case 0: 
                this.builder.appendBitmapWithAbsolutePositionDiffusionPosition(bmp, diffusion, position);
                break;
            case 1:
                this.builder.appendBitmapWithAbsolutePositionDiffusionRotationPosition(bmp, diffusion, args[0], position);
                break;
            case 2:
                this.builder.appendBitmapWithAbsolutePositionDiffusionWidthBothScalePosition(bmp, diffusion, args[0], args[1], position);
                break;
            case 3:
                this.builder.appendBitmapWithAbsolutePositionDiffusionWidthBothScaleRotationPosition(bmp, diffusion, args[0], args[1], args[2], position);
                break;
        }
        return this;
    }
    appendBitmapWithAlignment(bitmap, diffusion: boolean, width: number, bothScale: boolean, rotation: Common.BitmapConverterRotation, alignment: Common.AlignmentPosition);
    appendBitmapWithAlignment(bitmap, diffusion: boolean, rotation: Common.BitmapConverterRotation, alignment: Common.AlignmentPosition);
    appendBitmapWithAlignment(bitmap, diffusion: boolean, width: number, bothScale: boolean, alignment: Common.AlignmentPosition);
    appendBitmapWithAlignment(bitmap, diffusion: boolean, alignment: Common.AlignmentPosition);
    appendBitmapWithAlignment(bitmap, diffusion: boolean, ...args) {
        let alignment: number = args.pop();
        let bmp = this.convertImageToBitmap(bitmap);
        switch (args.length) {
            case 0: 
                this.builder.appendBitmapWithAlignmentDiffusionPosition(bmp, diffusion, alignment);
                break;
            case 1:
                this.builder.appendBitmapWithAlignmentDiffusionRotationPosition(bmp, diffusion, args[0], alignment);
                break;
            case 2:
                this.builder.appendBitmapWithAlignmentDiffusionWidthBothScalePosition(bmp, diffusion, args[0], args[1], alignment);
                break;
            case 3:
                this.builder.appendBitmapWithAlignmentDiffusionWidthBothScaleRotationPosition(bmp, diffusion, args[0], args[1], args[2], alignment);
                break;
        }
        return this;
    }

    appendBlackMark(type: Common.BlackMarkType) {
        this.builder.appendBlackMark(<number>type);
        return this;
    }
    private createRect(rect: Common.Rect): CGRect {
        return CGRectMake(rect.x, rect.y, rect.width, rect.height);
    }
    beginPageMode(rect: Common.Rect, rotation: Common.BitmapConverterRotation) {
        this.builder.beginPageModeRotation(this.createRect(rect), <number>rotation);
        return this;
    }
    endPageMode() {
        this.builder.endPageMode();
        return this;
    }
    appendPageModeVerticalAbsolutePosition(position: number) {
        this.builder.appendPageModeVerticalAbsolutePosition(position);
        return this;
    }
    appendPageModeRotation(rotation: Common.BitmapConverterRotation) {
        this.builder.appendPageModeRotation(<number>rotation);
        return this;
    }
    appendPrintableArea(type: Common.PrintableAreaType) {
        this.builder.appendPrintableArea(<number>type);
        return this;
    }
    getCommands(): string | ArrayBuffer {
        return this.nsdataToString(this.builder.commands);
    }
    valueOf(): any {
        return this.builder.commands;
    }
}