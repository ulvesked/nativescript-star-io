/// <reference path="../node_modules/tns-platform-declarations/ios.d.ts" />
declare class ISCBBuilder extends NSObject {

	static alloc(): ISCBBuilder; // inherited from NSObject

	static new(): ISCBBuilder; // inherited from NSObject

	readonly commands: NSMutableData;

	appendAbsolutePosition(position: number): void;

	appendAlignment(position: SCBAlignmentPosition): void;

	appendBarcodeBytesLengthSymbologyWidthHeightHri(bytes: interop.Pointer | interop.Reference<any>, length: number, symbology: SCBBarcodeSymbology, width: SCBBarcodeWidth, height: number, hri: boolean): void;

	appendBarcodeBytesWithAbsolutePositionLengthSymbologyWidthHeightHriPosition(bytes: interop.Pointer | interop.Reference<any>, length: number, symbology: SCBBarcodeSymbology, width: SCBBarcodeWidth, height: number, hri: boolean, position: number): void;

	appendBarcodeBytesWithAlignmentLengthSymbologyWidthHeightHriPosition(bytes: interop.Pointer | interop.Reference<any>, length: number, symbology: SCBBarcodeSymbology, width: SCBBarcodeWidth, height: number, hri: boolean, position: SCBAlignmentPosition): void;

	appendBarcodeDataSymbologyWidthHeightHri(otherData: NSData, symbology: SCBBarcodeSymbology, width: SCBBarcodeWidth, height: number, hri: boolean): void;

	appendBarcodeDataWithAbsolutePositionSymbologyWidthHeightHriPosition(otherData: NSData, symbology: SCBBarcodeSymbology, width: SCBBarcodeWidth, height: number, hri: boolean, position: number): void;

	appendBarcodeDataWithAlignmentSymbologyWidthHeightHriPosition(otherData: NSData, symbology: SCBBarcodeSymbology, width: SCBBarcodeWidth, height: number, hri: boolean, position: SCBAlignmentPosition): void;

	appendBitmapDiffusion(image: UIImage, diffusion: boolean): void;

	appendBitmapDiffusionRotation(image: UIImage, diffusion: boolean, rotation: SCBBitmapConverterRotation): void;

	appendBitmapDiffusionWidthBothScale(image: UIImage, diffusion: boolean, width: number, bothScale: boolean): void;

	appendBitmapDiffusionWidthBothScaleRotation(image: UIImage, diffusion: boolean, width: number, bothScale: boolean, rotation: SCBBitmapConverterRotation): void;

	appendBitmapWithAbsolutePositionDiffusionPosition(image: UIImage, diffusion: boolean, position: number): void;

	appendBitmapWithAbsolutePositionDiffusionRotationPosition(image: UIImage, diffusion: boolean, rotation: SCBBitmapConverterRotation, position: number): void;

	appendBitmapWithAbsolutePositionDiffusionWidthBothScalePosition(image: UIImage, diffusion: boolean, width: number, bothScale: boolean, position: number): void;

	appendBitmapWithAbsolutePositionDiffusionWidthBothScaleRotationPosition(image: UIImage, diffusion: boolean, width: number, bothScale: boolean, rotation: SCBBitmapConverterRotation, position: number): void;

	appendBitmapWithAlignmentDiffusionPosition(image: UIImage, diffusion: boolean, position: SCBAlignmentPosition): void;

	appendBitmapWithAlignmentDiffusionRotationPosition(image: UIImage, diffusion: boolean, rotation: SCBBitmapConverterRotation, position: SCBAlignmentPosition): void;

	appendBitmapWithAlignmentDiffusionWidthBothScalePosition(image: UIImage, diffusion: boolean, width: number, bothScale: boolean, position: SCBAlignmentPosition): void;

	appendBitmapWithAlignmentDiffusionWidthBothScaleRotationPosition(image: UIImage, diffusion: boolean, width: number, bothScale: boolean, rotation: SCBBitmapConverterRotation, position: SCBAlignmentPosition): void;

	appendBlackMark(type: SCBBlackMarkType): void;

	appendByte(data: number): void;

	appendBytesLength(bytes: interop.Pointer | interop.Reference<any>, length: number): void;

	appendBytesWithAbsolutePositionLengthPosition(bytes: interop.Pointer | interop.Reference<any>, length: number, position: number): void;

	appendBytesWithAlignmentLengthPosition(bytes: interop.Pointer | interop.Reference<any>, length: number, position: SCBAlignmentPosition): void;

	appendBytesWithEmphasisLength(bytes: interop.Pointer | interop.Reference<any>, length: number): void;

	appendBytesWithInvertLength(bytes: interop.Pointer | interop.Reference<any>, length: number): void;

	appendBytesWithLineFeedLength(bytes: interop.Pointer | interop.Reference<any>, length: number): void;

	appendBytesWithLineFeedLengthLine(bytes: interop.Pointer | interop.Reference<any>, length: number, line: number): void;

	appendBytesWithMultipleHeightLengthHeight(bytes: interop.Pointer | interop.Reference<any>, length: number, height: number): void;

	appendBytesWithMultipleLengthWidthHeight(bytes: interop.Pointer | interop.Reference<any>, length: number, width: number, height: number): void;

	appendBytesWithMultipleWidthLengthWidth(bytes: interop.Pointer | interop.Reference<any>, length: number, width: number): void;

	appendBytesWithUnderLineLength(bytes: interop.Pointer | interop.Reference<any>, length: number): void;

	appendBytesWithUnitFeedLengthUnit(bytes: interop.Pointer | interop.Reference<any>, length: number, unit: number): void;

	appendCharacterSpace(space: number): void;

	appendCodePage(type: SCBCodePageType): void;

	appendCutPaper(action: SCBCutPaperAction): void;

	appendData(otherData: NSData): void;

	appendDataWithAbsolutePositionPosition(otherData: NSData, position: number): void;

	appendDataWithAlignmentPosition(otherData: NSData, position: SCBAlignmentPosition): void;

	appendDataWithEmphasis(otherData: NSData): void;

	appendDataWithInvert(otherData: NSData): void;

	appendDataWithLineFeed(otherData: NSData): void;

	appendDataWithLineFeedLine(otherData: NSData, line: number): void;

	appendDataWithMultipleHeightHeight(otherData: NSData, height: number): void;

	appendDataWithMultipleWidthHeight(otherData: NSData, width: number, height: number): void;

	appendDataWithMultipleWidthWidth(otherData: NSData, width: number): void;

	appendDataWithUnderLine(otherData: NSData): void;

	appendDataWithUnitFeedUnit(otherData: NSData, unit: number): void;

	appendEmphasis(emphasis: boolean): void;

	appendFontStyle(type: SCBFontStyleType): void;

	appendHorizontalTabPosition(positions: NSArray<number>): void;

	appendInitialization(type: SCBInitializationType): void;

	appendInternational(type: SCBInternationalType): void;

	appendInvert(invert: boolean): void;

	appendLineFeed(): void;
	
	appendLineFeedLine(line: number): void;

	appendLineSpace(lineSpace: number): void;

	appendLogoNumber(size: SCBLogoSize, number: number): void;

	appendMultipleHeight(width: number, height: number): void;

	appendMultipleWidth(width: number): void;

	appendPageModeRotation(rotation: SCBBitmapConverterRotation): void;

	appendPageModeVerticalAbsolutePosition(position: number): void;

	appendPdf417BytesLengthLineColumnLevelModuleAspect(bytes: interop.Pointer | interop.Reference<any>, length: number, line: number, column: number, level: SCBPdf417Level, module: number, aspect: number): void;

	appendPdf417BytesWithAbsolutePositionLengthLineColumnLevelModuleAspectPosition(bytes: interop.Pointer | interop.Reference<any>, length: number, line: number, column: number, level: SCBPdf417Level, module: number, aspect: number, position: number): void;

	appendPdf417BytesWithAlignmentLengthLineColumnLevelModuleAspectPosition(bytes: interop.Pointer | interop.Reference<any>, length: number, line: number, column: number, level: SCBPdf417Level, module: number, aspect: number, position: SCBAlignmentPosition): void;

	appendPdf417DataLineColumnLevelModuleAspect(otherData: NSData, line: number, column: number, level: SCBPdf417Level, module: number, aspect: number): void;

	appendPdf417DataWithAbsolutePositionLineColumnLevelModuleAspectPosition(otherData: NSData, line: number, column: number, level: SCBPdf417Level, module: number, aspect: number, position: number): void;

	appendPdf417DataWithAlignmentLineColumnLevelModuleAspectPosition(otherData: NSData, line: number, column: number, level: SCBPdf417Level, module: number, aspect: number, position: SCBAlignmentPosition): void;

	appendPeripheral(channel: SCBPeripheralChannel): void;

	appendPeripheralTime(channel: SCBPeripheralChannel, time: number): void;

	appendPrintableArea(type: SCBPrintableAreaType): void;

	appendQrCodeBytesLengthModelLevelCell(bytes: interop.Pointer | interop.Reference<any>, length: number, model: SCBQrCodeModel, level: SCBQrCodeLevel, cell: number): void;

	appendQrCodeBytesWithAbsolutePositionLengthModelLevelCellPosition(bytes: interop.Pointer | interop.Reference<any>, length: number, model: SCBQrCodeModel, level: SCBQrCodeLevel, cell: number, position: number): void;

	appendQrCodeBytesWithAlignmentLengthModelLevelCellPosition(bytes: interop.Pointer | interop.Reference<any>, length: number, model: SCBQrCodeModel, level: SCBQrCodeLevel, cell: number, position: SCBAlignmentPosition): void;

	appendQrCodeDataModelLevelCell(otherData: NSData, model: SCBQrCodeModel, level: SCBQrCodeLevel, cell: number): void;

	appendQrCodeDataWithAbsolutePositionModelLevelCellPosition(otherData: NSData, model: SCBQrCodeModel, level: SCBQrCodeLevel, cell: number, position: number): void;

	appendQrCodeDataWithAlignmentModelLevelCellPosition(otherData: NSData, model: SCBQrCodeModel, level: SCBQrCodeLevel, cell: number, position: SCBAlignmentPosition): void;

	appendRawByte(data: number): void;

	appendRawBytesLength(bytes: interop.Pointer | interop.Reference<any>, length: number): void;

	appendRawData(otherData: NSData): void;

	appendSound(channel: SCBSoundChannel): void;

	appendSoundRepeat(channel: SCBSoundChannel, repeat: number): void;

	appendSoundRepeatDriveTimeDelayTime(channel: SCBSoundChannel, repeat: number, driveTime: number, delayTime: number): void;

	appendTopMargin(topMargin: number): void;

	appendUnderLine(underLine: boolean): void;

	appendUnitFeed(unit: number): void;

	beginDocument(): void;

	beginPageModeRotation(rect: CGRect, rotation: SCBBitmapConverterRotation): void;

	endDocument(): void;

	endPageMode(): void;
}

declare class ISCPConnectParser extends ISCPParser {

	static alloc(): ISCPConnectParser; // inherited from NSObject

	static new(): ISCPConnectParser; // inherited from NSObject

	connect(): boolean;
}

declare class ISCPParser extends NSObject {

	static alloc(): ISCPParser; // inherited from NSObject

	static new(): ISCPParser; // inherited from NSObject

	completionHandler: (p1: string, p2: interop.Pointer | interop.Reference<number>) => StarIoExtParserCompletionResult;

	createSendCommands(): NSData;
}

declare class ISDCBBuilder extends NSObject {

	static alloc(): ISDCBBuilder; // inherited from NSObject

	static new(): ISDCBBuilder; // inherited from NSObject

	readonly commands: NSMutableData;

	readonly passThroughCommands: NSMutableData;

	appendBackSpace(): void;

	appendBitmapDiffusion(image: UIImage, diffusion: boolean): void;

	appendByte(data: number): void;

	appendBytesLength(bytes: interop.Pointer | interop.Reference<any>, length: number): void;

	appendCarriageReturn(): void;

	appendClearScreen(): void;

	appendCodePage(type: SDCBCodePageType): void;

	appendContrastMode(contrastMode: SDCBContrastMode): void;

	appendCursorMode(cursorMode: SDCBCursorMode): void;

	appendData(otherData: NSData): void;

	appendDeleteToEndOfLine(): void;

	appendHomePosition(): void;

	appendHorizontalTab(): void;

	appendInternational(type: SDCBInternationalType): void;

	appendLineFeed(): void;

	appendSpecifiedPositionY(x: number, y: number): void;

	appendTurnOn(turnOn: boolean): void;

	appendUserDefinedCharacterCodeFont(index: number, code: number, font: string): void;

	appendUserDefinedDbcsCharacterCodeFont(index: number, code: number, font: string): void;
}

declare const enum SCBAlignmentPosition {

	Left = 0,

	Center = 1,

	Right = 2
}

declare const enum SCBBarcodeSymbology {

	UPCE = 0,

	UPCA = 1,

	JAN8 = 2,

	JAN13 = 3,

	Code39 = 4,

	ITF = 5,

	Code128 = 6,

	Code93 = 7,

	NW7 = 8
}

declare const enum SCBBarcodeWidth {

	Mode1 = 0,

	Mode2 = 1,

	Mode3 = 2,

	Mode4 = 3,

	Mode5 = 4,

	Mode6 = 5,

	Mode7 = 6,

	Mode8 = 7,

	Mode9 = 8
}

declare const enum SCBBitmapConverterRotation {

	Normal = 0,

	Right90 = 1,

	Left90 = 2,

	Rotate180 = 3
}

declare const enum SCBBlackMarkType {

	Invalid = 0,

	Valid = 1,

	ValidWithDetection = 2
}

declare const enum SCBCodePageType {

	CP437 = 0,

	CP737 = 1,

	CP772 = 2,

	CP774 = 3,

	CP851 = 4,

	CP852 = 5,

	CP855 = 6,

	CP857 = 7,

	CP858 = 8,

	CP860 = 9,

	CP861 = 10,

	CP862 = 11,

	CP863 = 12,

	CP864 = 13,

	CP865 = 14,

	CP866 = 15,

	CP869 = 16,

	CP874 = 17,

	CP928 = 18,

	CP932 = 19,

	CP998 = 20,

	CP999 = 21,

	CP1001 = 22,

	CP1250 = 23,

	CP1251 = 24,

	CP1252 = 25,

	CP2001 = 26,

	CP3001 = 27,

	CP3002 = 28,

	CP3011 = 29,

	CP3012 = 30,

	CP3021 = 31,

	CP3041 = 32,

	CP3840 = 33,

	CP3841 = 34,

	CP3843 = 35,

	CP3844 = 36,

	CP3845 = 37,

	CP3846 = 38,

	CP3847 = 39,

	CP3848 = 40,

	UTF8 = 41,

	Blank = 42
}

declare const enum SCBCutPaperAction {

	FullCut = 0,

	PartialCut = 1,

	FullCutWithFeed = 2,

	PartialCutWithFeed = 3
}

declare const enum SCBFontStyleType {

	A = 0,

	B = 1
}

declare const enum SCBInitializationType {

	Command = 0
}

declare const enum SCBInternationalType {

	USA = 0,

	France = 1,

	Germany = 2,

	UK = 3,

	Denmark = 4,

	Sweden = 5,

	Italy = 6,

	Spain = 7,

	Japan = 8,

	Norway = 9,

	Denmark2 = 10,

	Spain2 = 11,

	LatinAmerica = 12,

	Korea = 13,

	Ireland = 14,

	Legal = 15
}

declare const enum SCBLogoSize {

	Normal = 0,

	DoubleWidth = 1,

	DoubleHeight = 2,

	DoubleWidthDoubleHeight = 3
}

declare const enum SCBPdf417Level {

	ECC0 = 0,

	ECC1 = 1,

	ECC2 = 2,

	ECC3 = 3,

	ECC4 = 4,

	ECC5 = 5,

	ECC6 = 6,

	ECC7 = 7,

	ECC8 = 8
}

declare const enum SCBPeripheralChannel {

	No1 = 0,

	No2 = 1
}

declare const enum SCBPrintableAreaType {

	Standard = 0,

	Type1 = 1,

	Type2 = 2,

	Type3 = 3,

	Type4 = 4
}

declare const enum SCBQrCodeLevel {

	L = 0,

	M = 1,

	Q = 2,

	H = 3
}

declare const enum SCBQrCodeModel {

	No1 = 0,

	No2 = 1
}

declare const enum SCBSoundChannel {

	No1 = 0,

	No2 = 1
}

declare const enum SDCBCodePageType {

	CP437 = 0,

	Katakana = 1,

	CP850 = 2,

	CP860 = 3,

	CP863 = 4,

	CP865 = 5,

	CP1252 = 6,

	CP866 = 7,

	CP852 = 8,

	CP858 = 9,

	Japanese = 10,

	SimplifiedChinese = 11,

	TraditionalChinese = 12,

	Hangul = 13
}

declare const enum SDCBContrastMode {

	Minus3 = 0,

	Minus2 = 1,

	Minus1 = 2,

	Default = 3,

	Plus1 = 4,

	Plus2 = 5,

	Plus3 = 6
}

declare const enum SDCBCursorMode {

	Off = 0,

	Blink = 1,

	On = 2
}

declare const enum SDCBInternationalType {

	USA = 0,

	France = 1,

	Germany = 2,

	UK = 3,

	Denmark = 4,

	Sweden = 5,

	Italy = 6,

	Spain = 7,

	Japan = 8,

	Norway = 9,

	Denmark2 = 10,

	Spain2 = 11,

	LatinAmerica = 12,

	Korea = 13
}

declare class SMBluetoothManagerFactory extends NSObject {

	static alloc(): SMBluetoothManagerFactory; // inherited from NSObject

	static getManagerEmulation(portName: string, emulation: StarIoExtEmulation): SMBluetoothManager;

	static new(): SMBluetoothManagerFactory; // inherited from NSObject
}

declare var StarIO_ExtensionVersionNumber: number;

declare var StarIO_ExtensionVersionString: interop.Reference<number>;

declare class StarIoExt extends NSObject {

	static alloc(): StarIoExt; // inherited from NSObject

	static createBcrConnectParser(model: StarIoExtBcrModel): ISCPConnectParser;

	static createCommandBuilder(emulation: StarIoExtEmulation): ISCBBuilder;

	static createDisplayCommandBuilder(model: StarIoExtDisplayModel): ISDCBBuilder;

	static createDisplayConnectParser(model: StarIoExtDisplayModel): ISCPConnectParser;

	static new(): StarIoExt; // inherited from NSObject
}

declare const enum StarIoExtBcrModel {

	None = 0,

	POP1 = 1
}

declare const enum StarIoExtCharacterCode {

	None = 0,

	Standard = 1,

	Japanese = 2,

	SimplifiedChinese = 3,

	TraditionalChinese = 4
}

declare const enum StarIoExtDisplayModel {

	None = 0,

	SCD222 = 1
}

declare const enum StarIoExtEmulation {

	None = 0,

	StarPRNT = 1,

	StarLine = 2,

	StarGraphic = 3,

	EscPos = 4,

	EscPosMobile = 5,

	StarDotImpact = 6,

	StarPRNTL = 7
}

declare class StarIoExtManager extends NSObject {

	static alloc(): StarIoExtManager; // inherited from NSObject

	static new(): StarIoExtManager; // inherited from NSObject

	readonly barcodeReaderStatus: StarIoExtManagerBarcodeReaderStatus;

	cashDrawerOpenActiveHigh: boolean;

	readonly cashDrawerStatus: StarIoExtManagerCashDrawerStatus;

	delegate: StarIoExtManagerDelegate;

	readonly lock: NSRecursiveLock;

	readonly port: SMPort;

	readonly printerCoverStatus: StarIoExtManagerPrinterCoverStatus;

	readonly printerPaperStatus: StarIoExtManagerPrinterPaperStatus;

	readonly printerStatus: StarIoExtManagerPrinterStatus;

	constructor(o: { type: StarIoExtManagerType; portName: string; portSettings: string; ioTimeoutMillis: number; });

	connect(): boolean;

	disconnect(): boolean;

	initWithTypePortNamePortSettingsIoTimeoutMillis(type: StarIoExtManagerType, portName: string, portSettings: string, ioTimeoutMillis: number): this;
}

declare const enum StarIoExtManagerBarcodeReaderStatus {

	Invalid = 0,

	Impossible = 1,

	Connect = 2,

	Disconnect = 3
}

declare const enum StarIoExtManagerCashDrawerStatus {

	Invalid = 0,

	Impossible = 1,

	Open = 2,

	Close = 3
}

interface StarIoExtManagerDelegate extends NSObjectProtocol {

	didAccessoryConnectFailure?(manager: StarIoExtManager): void;

	didAccessoryConnectFailure?(): void;

	didAccessoryConnectSuccess?(manager: StarIoExtManager): void;

	didAccessoryConnectSuccess?(): void;

	didAccessoryDisconnect?(manager: StarIoExtManager): void;

	didAccessoryDisconnect?(): void;

	didBarcodeDataReceive?(data: NSData): void;

	didBarcodeDataReceiveData?(manager: StarIoExtManager, data: NSData): void;

	didBarcodeReaderConnect?(manager: StarIoExtManager): void;

	didBarcodeReaderConnect?(): void;

	didBarcodeReaderDisconnect?(manager: StarIoExtManager): void;

	didBarcodeReaderDisconnect?(): void;

	didBarcodeReaderImpossible?(): void;

	didBarcodeReaderImpossible?(manager: StarIoExtManager): void;

	didCashDrawerClose?(): void;

	didCashDrawerClose?(manager: StarIoExtManager): void;

	didCashDrawerOpen?(): void;

	didCashDrawerOpen?(manager: StarIoExtManager): void;

	didPrinterCoverClose?(): void;

	didPrinterCoverClose?(manager: StarIoExtManager): void;

	didPrinterCoverOpen?(): void;

	didPrinterCoverOpen?(manager: StarIoExtManager): void;

	didPrinterImpossible?(): void;

	didPrinterImpossible?(manager: StarIoExtManager): void;

	didPrinterOffline?(manager: StarIoExtManager): void;

	didPrinterOffline?(): void;

	didPrinterOnline?(manager: StarIoExtManager): void;

	didPrinterOnline?(): void;

	didPrinterPaperEmpty?(manager: StarIoExtManager): void;

	didPrinterPaperEmpty?(): void;

	didPrinterPaperNearEmpty?(manager: StarIoExtManager): void;

	didPrinterPaperNearEmpty?(): void;

	didPrinterPaperReady?(manager: StarIoExtManager): void;

	didPrinterPaperReady?(): void;

	didStatusUpdate?(status: string): void;

	didStatusUpdateStatus?(manager: StarIoExtManager, status: string): void;
}
declare var StarIoExtManagerDelegate: {

	prototype: StarIoExtManagerDelegate;
};

declare const enum StarIoExtManagerPrinterCoverStatus {

	Invalid = 0,

	Impossible = 1,

	Open = 2,

	Close = 3
}

declare const enum StarIoExtManagerPrinterPaperStatus {

	Invalid = 0,

	Impossible = 1,

	Ready = 2,

	NearEmpty = 3,

	Empty = 4
}

declare const enum StarIoExtManagerPrinterStatus {

	Invalid = 0,

	Impossible = 1,

	Online = 2,

	Offline = 3
}

declare const enum StarIoExtManagerStatus {

	Invalid = 0,

	Impossible = 1,

	PrinterOnline = 2,

	PrinterOffline = 3,

	PrinterPaperReady = 4,

	PrinterPaperNearEmpty = 5,

	PrinterPaperEmpty = 6,

	PrinterCoverOpen = 7,

	PrinterCoverClose = 8,

	CashDrawerOpen = 9,

	CashDrawerClose = 10,

	BarcodeReaderConnect = 11,

	BarcodeReaderDisconnect = 12
}

declare const enum StarIoExtManagerType {

	Standard = 0,

	WithBarcodeReader = 1,

	OnlyBarcodeReader = 2
}

declare const enum StarIoExtParserCompletionResult {

	Invalid = 0,

	Success = 1,

	Failure = 2
}
