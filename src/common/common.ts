/*
StarPRNT StarPRNT emulation.
StarPRNTL StarPRNTL emulation.
StarLine STAR Line Mode emulation.
StarGraphic STAR Graphic Mode emulation.
EscPos ESC/POS emulation.
EscPosMobile ESC/POS Mobile emulation.
StarDotImpact STAR Dot Impact emulation.
*/
export const enum Emulation {
    None,
    StarPRNT,
    StarPRNTL,
    StarLine,
    StarGraphic,
    EscPos,
    EscPosMobile,
    StarDotImpact
} 
export interface Rect {
    x: number;
    y: number;
    width: number;
    height: number;
}
/*
Standard Standard character code.
Japanese Japanese character code.
SimplifiedChinese Simplified chinese character code.
TraditionalChinese Traditional chinese character code.
*/
export const enum CharacterCode {
    None,
    Standard,
    Japanese,
    SimplifiedChinese,
    TraditionalChinese
}
/* 
POP1 Barcode reader : BCR-POP1
*/
export const enum BcrModel{
    None,
    POP1,
}

/*
SCD222 Customer display: SCD222U
*/
export const enum DisplayModel {
    None,
    SCD222
}


export const enum AlignmentPosition {

	Left = 0,

	Center = 1,

	Right = 2
}

export const enum BarcodeSymbology {

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

export const enum BarcodeWidth {

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

export const enum BitmapConverterRotation {

	Normal = 0,

	Right90 = 1,

	Left90 = 2,

	Rotate180 = 3
}

export const enum BlackMarkType {

	Invalid = 0,

	Valid = 1,

	ValidWithDetection = 2
}

export const enum SCBCodePageType {

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

export const enum CutPaperAction {

	FullCut = 0,

	PartialCut = 1,

	FullCutWithFeed = 2,

	PartialCutWithFeed = 3
}

export const enum FontStyleType {

	A = 0,

	B = 1
}

export const enum InitializationType {

	Command = 0
}

export const enum InternationalType {

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

export const enum LogoSize {

	Normal = 0,

	DoubleWidth = 1,

	DoubleHeight = 2,

	DoubleWidthDoubleHeight = 3
}

export const enum Pdf417Level {

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

export const enum PeripheralChannel {

	No1 = 0,

	No2 = 1
}

export const enum PrintableAreaType {

	Standard = 0,

	Type1 = 1,

	Type2 = 2,

	Type3 = 3,

	Type4 = 4
}

export const enum QrCodeLevel {

	L = 0,

	M = 1,

	Q = 2,

	H = 3
}

export const enum QrCodeModel {

	No1 = 0,

	No2 = 1
}

export const enum SoundChannel {

	No1 = 0,

	No2 = 1
}

export const enum CodePageType {

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

export const enum ContrastMode {

	Minus3 = 0,

	Minus2 = 1,

	Minus1 = 2,

	Default = 3,

	Plus1 = 4,

	Plus2 = 5,

	Plus3 = 6
}

export const enum CursorMode {

	Off = 0,

	Blink = 1,

	On = 2
}
