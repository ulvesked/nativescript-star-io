//import { CommandBuilder } from "./CommandBuilder";
import { ImageSource } from 'tns-core-modules/image-source';
import * as Common from './common';

function stringToNSData(data: string): NSData {

    let nsstring = NSString.stringWithString(data);
    return nsstring.dataUsingEncoding(NSUTF8StringEncoding);

}

export class CommandBuilder {
    private builder: ISCBBuilder;
    constructor(emulation: Common.Emulation) {
        this.builder = StarIoExt.createCommandBuilder(<number>emulation);
    }
    appendAbsolutePosition(position: number): CommandBuilder {
        this.builder.appendAbsolutePosition(position);
        return this;
    }
    appendAlignment(position: Common.AlignmentPosition): CommandBuilder {
        this.builder.appendAlignment(<number>position);
        return this;
    }

    appendBarcodeBytes(bytes: ArrayBuffer, length: number, symbology?: Common.BarcodeSymbology, width?: Common.BarcodeWidth, height?: number, hri?: boolean): CommandBuilder {
        this.builder.appendBarcodeBytesLengthSymbologyWidthHeightHri(<any>bytes, length, <number>symbology, <number>width, <number>height, hri);
        return this;
    }
    appendBarcodeBytesWithAbsolutePosition(bytes: ArrayBuffer, length: number, symbology: Common.BarcodeSymbology, width: Common.BarcodeWidth, height: number, hri: boolean, position: number): CommandBuilder {
        this.builder.appendBarcodeBytesWithAbsolutePositionLengthSymbologyWidthHeightHriPosition(<any>bytes, length, <any>symbology, <any>width, height, hri, position);
        return this;
    }
    appendBarcodeBytesWithAlignment(bytes: ArrayBuffer, length: number, symbology: Common.BarcodeSymbology, width: Common.BarcodeWidth, height: number, hri: boolean, position: Common.AlignmentPosition): CommandBuilder {
        this.builder.appendBarcodeBytesWithAlignmentLengthSymbologyWidthHeightHriPosition(<any>bytes, length, <any>symbology, <any>width, height, hri, <number>position);
        return this;
    }

    appendBarcodeData(otherData: string, symbology: Common.BarcodeSymbology, width: Common.BarcodeWidth, height: number, hri: boolean): CommandBuilder {
        this.builder.appendBarcodeDataSymbologyWidthHeightHri(stringToNSData(otherData), <any>symbology, <any>width, height, hri);
        return this;
    }
    appendBarcodeDataWithAbsolutePosition(otherData: string, symbology: Common.BarcodeSymbology, width: Common.BarcodeWidth, height: number, hri: boolean, position: number): CommandBuilder {
        this.builder.appendBarcodeDataWithAbsolutePositionSymbologyWidthHeightHriPosition(stringToNSData(otherData), <any>symbology, <any>width, height, hri, position);
        return this;
    }
    appendBarcodeDataWithAlignment(otherData: string, symbology: Common.BarcodeSymbology, width: Common.BarcodeWidth, height: number, hri: boolean, position: Common.AlignmentPosition): CommandBuilder {
        this.builder.appendBarcodeDataWithAlignmentSymbologyWidthHeightHriPosition(stringToNSData(otherData), <any>symbology, <any>width, height, hri, <any>position);
        return this;
    }

    appendBitmap(image: ImageSource, diffusion: boolean, width: number, bothScale: boolean, rotation: Common.BitmapConverterRotation): CommandBuilder { throw new Error("Not implemented"); }
    appendBitmapWithAbsolutePosition(image: ImageSource, diffusion: boolean, width: number, bothScale: boolean, rotation: Common.BitmapConverterRotation, position: number): CommandBuilder { throw new Error("Not implemented"); }
    appendBitmapWithAlignment(image: ImageSource, diffusion: boolean, width: number, bothScale: boolean, rotation: Common.BitmapConverterRotation, position: Common.AlignmentPosition): CommandBuilder { throw new Error("Not implemented"); }

    appendBlackMark(type: Common.BlackMarkType): CommandBuilder { 
        this.builder.appendBlackMark(<number>type);
        return this;
     }
    appendByte(data: number): CommandBuilder { 
        this.builder.appendByte(data);
        return this;
     }
    appendBytes(bytes: ArrayBuffer, length: number): CommandBuilder { 
        this.builder.appendBytesLength(<any>bytes, length);
        return this;
     }
    appendBytesWithAbsolutePosition(bytes: ArrayBuffer, length: number, position: number): CommandBuilder {
        this.builder.appendBytesWithAbsolutePositionLengthPosition(<any>bytes, length, position);
        return this;
     }
    appendBytesWithAlignment(bytes: ArrayBuffer, length: number, position: Common.AlignmentPosition): CommandBuilder { 
        this.builder.appendBytesWithAlignmentLengthPosition(<any>bytes, length, <any>position);
        return this;
    }
    appendBytesWithEmphasis(bytes: ArrayBuffer, length: number): CommandBuilder { 
        this.builder.appendBytesWithEmphasisLength(<any>bytes, length);
        return this;
     }
    appendBytesWithInvert(bytes: ArrayBuffer, length: number): CommandBuilder { 
        this.builder.appendBytesWithInvertLength(<any>bytes, length);
        return this;
     }
    appendBytesWithLineFeed(bytes: ArrayBuffer, length: number, line?: number): CommandBuilder { 
        if (typeof(line) === "undefined") {
            this.builder.appendBytesWithLineFeedLength(<any>bytes, length);
        }
        else {
            this.builder.appendBytesWithLineFeedLengthLine(<any>bytes, length, line);
        }
        return this;
     }
    appendBytesWithMultiple(bytes: ArrayBuffer, length: number, width: number, height: number): CommandBuilder { throw new Error("Not implemented"); }
    appendBytesWithMultipleHeight(bytes: ArrayBuffer, length: number, height: number): CommandBuilder { throw new Error("Not implemented"); }
    appendBytesWithMultipleWidth(bytes: ArrayBuffer, length: number, width: number): CommandBuilder { throw new Error("Not implemented"); }
    appendBytesWithUnderLine(bytes: ArrayBuffer, length: number): CommandBuilder { throw new Error("Not implemented"); }
    appendBytesWithUnitFeed(bytes: ArrayBuffer, length: number, unit: number): CommandBuilder { throw new Error("Not implemented"); }
    appendCharacterSpace(space: number): CommandBuilder { throw new Error("Not implemented"); }
    appendCodePage(type: Common.SCBCodePageType): CommandBuilder { throw new Error("Not implemented"); }
    appendCutPaper(action: Common.CutPaperAction): CommandBuilder { 
        this.builder.appendCutPaper(<any>action);
        return this;
     }
    appendData(otherData: string): CommandBuilder { 
        this.builder.appendData(stringToNSData(otherData));
        return this;
     }
    appendDataWithAbsolutePosition(otherData: string, position: number): CommandBuilder { 
        this.builder.appendDataWithAbsolutePositionPosition(stringToNSData(otherData), position);
        return this;
     }
    appendDataWithAlignment(otherData: string, position: Common.AlignmentPosition): CommandBuilder { 
        this.builder.appendDataWithAlignmentPosition(stringToNSData(otherData), <any>position);  
        return this;      
     }
    appendDataWithEmphasis(otherData: string): CommandBuilder { throw new Error("Not implemented"); }
    appendDataWithInvert(otherData: string): CommandBuilder { throw new Error("Not implemented"); }
    appendDataWithLineFeed(otherData: string, line?: number): CommandBuilder { throw new Error("Not implemented"); }
    appendDataWithMultiple(otherData: string, width: number, height: number): CommandBuilder { throw new Error("Not implemented"); }
    appendDataWithMultipleHeight(otherData: string, height: number): CommandBuilder { throw new Error("Not implemented"); }
    appendDataWithMultipleWidth(otherData: string, width: number): CommandBuilder { throw new Error("Not implemented"); }
    appendDataWithUnderLine(otherData: string): CommandBuilder { throw new Error("Not implemented"); }
    appendDataWithUnitFeed(otherData: string, unit: number): CommandBuilder { throw new Error("Not implemented"); }
    appendEmphasis(emphasis: boolean): CommandBuilder { throw new Error("Not implemented"); }
    appendFontStyle(type: Common.FontStyleType): CommandBuilder { throw new Error("Not implemented"); }
    appendHorizontalTabPosition(positions: number[]): CommandBuilder { throw new Error("Not implemented"); }
    appendInitialization(type: Common.InitializationType): CommandBuilder { 
        this.builder.appendInitialization(<any>type);
        return this;
     }
    appendInternational(type: Common.InternationalType): CommandBuilder { throw new Error("Not implemented"); }
    appendInvert(invert: boolean): CommandBuilder { throw new Error("Not implemented"); }
    appendLineFeed(): CommandBuilder { 
        // if (typeof (line) === 'undefined') {
        //     this.builder.appendLineFeed();
        // }
        this.builder.appendLineFeed();
        return this;
    }
    appendLineSpace(lineSpace: number): CommandBuilder { throw new Error("Not implemented"); }
    appendLogo(size: Common.LogoSize, number: number): CommandBuilder { throw new Error("Not implemented"); }
    appendMultiple(width: number, height: number): CommandBuilder { throw new Error("Not implemented"); }
    appendPageModeRotation(rotation: Common.BitmapConverterRotation): CommandBuilder { 
        this.builder.appendPageModeRotation(<any>rotation);
        return this;
     }
    appendPageModeVerticalAbsolutePosition(position: number): CommandBuilder { 
        this.builder.appendPageModeVerticalAbsolutePosition(position);
        return this;
     }
    appendPdf417Bytes(bytes: ArrayBuffer, length: number, line: number, column: number, level: Common.Pdf417Level, module: number, aspect: number): CommandBuilder { throw new Error("Not implemented"); }
    appendPdf417BytesWithAbsolutePosition(bytes: ArrayBuffer, length: number, line: number, column: number, level: Common.Pdf417Level, module: number, aspect: number, position: number): CommandBuilder { throw new Error("Not implemented"); }
    appendPdf417BytesWithAlignment(bytes: ArrayBuffer, length: number, line: number, column: number, level: Common.Pdf417Level, module: number, aspect: number, position: Common.AlignmentPosition): CommandBuilder { throw new Error("Not implemented"); }
    appendPdf417Data(otherData: string, line: number, column: number, level: Common.Pdf417Level, module: number, aspect: number): CommandBuilder { throw new Error("Not implemented"); }
    appendPdf417DataWithAbsolutePosition(otherData: string, line: number, column: number, level: Common.Pdf417Level, module: number, aspect: number, position: number): CommandBuilder { throw new Error("Not implemented"); }
    appendPdf417DataWithAlignment(otherData: string, line: number, column: number, level: Common.Pdf417Level, module: number, aspect: number, position: Common.AlignmentPosition): CommandBuilder { throw new Error("Not implemented"); }
    appendPeripheral(channel: Common.PeripheralChannel, time?: number): CommandBuilder { throw new Error("Not implemented"); }
    appendPrintableArea(type: Common.PrintableAreaType): CommandBuilder { throw new Error("Not implemented"); }
    appendQrCodeBytes(bytes: ArrayBuffer, length: number, model: Common.QrCodeModel, level: Common.QrCodeLevel, cell: number): CommandBuilder { throw new Error("Not implemented"); }
    appendQrCodeBytesWithAbsolutePosition(bytes: ArrayBuffer, length: number, model: Common.QrCodeModel, level: Common.QrCodeLevel, cell: number, position: number): CommandBuilder { throw new Error("Not implemented"); }
    appendQrCodeBytesWithAlignment(bytes: ArrayBuffer, length: number, model: Common.QrCodeModel, level: Common.QrCodeLevel, cell: number, position: Common.AlignmentPosition): CommandBuilder { throw new Error("Not implemented"); }
    appendQrCodeData(otherData: string, model: Common.QrCodeModel, level: Common.QrCodeLevel, cell: number): CommandBuilder { throw new Error("Not implemented"); }
    appendQrCodeDataWithAbsolutePosition(otherData: string, model: Common.QrCodeModel, level: Common.QrCodeLevel, cell: number, position: number): CommandBuilder { throw new Error("Not implemented"); }
    appendQrCodeDataWithAlignment(otherData: string, model: Common.QrCodeModel, level: Common.QrCodeLevel, cell: number, position: Common.AlignmentPosition): CommandBuilder { throw new Error("Not implemented"); }
    appendRawByte(data: number): CommandBuilder { throw new Error("Not implemented"); }
    appendRawBytes(bytes: ArrayBuffer, length: number): CommandBuilder { throw new Error("Not implemented"); }
    appendRawData(otherData: string): CommandBuilder { throw new Error("Not implemented"); }
    appendSound(channel: Common.SoundChannel): CommandBuilder { throw new Error("Not implemented"); }
    appendSoundRepeat(channel: Common.SoundChannel, repeat?: number, driveTime?: number, delayTime?: number): CommandBuilder { throw new Error("Not implemented"); }
    appendTopMargin(topMargin: number): CommandBuilder { throw new Error("Not implemented"); }
    appendUnderLine(underLine: boolean): CommandBuilder { throw new Error("Not implemented"); }
    appendUnitFeed(unit: number): CommandBuilder { throw new Error("Not implemented"); }
    beginDocument(): CommandBuilder { 
        this.builder.beginDocument();
        return this;
     }
    beginPageMode(rect: CGRect, rotation: Common.BitmapConverterRotation): CommandBuilder { 
        this.builder.beginPageModeRotation(rect, <any>rotation);
        return this;
     }
    endDocument(): CommandBuilder { 
        this.builder.endDocument();    
        return this;
    }
    endPageMode(): CommandBuilder { 
        this.builder.endPageMode();
        return this;
     }

     getCommands(): any {
         return this.builder.commands.copy();
     }
}