export declare const enum Emulation {
    None = 0,
    StarPRNT = 1,
    StarPRNTL = 2,
    StarLine = 3,
    StarGraphic = 4,
    EscPos = 5,
    EscPosMobile = 6,
    StarDotImpact = 7,
}
export interface Rect {
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare const enum CharacterCode {
    None = 0,
    Standard = 1,
    Japanese = 2,
    SimplifiedChinese = 3,
    TraditionalChinese = 4,
}
export declare const enum BcrModel {
    None = 0,
    POP1 = 1,
}
export declare const enum DisplayModel {
    None = 0,
    SCD222 = 1,
}
export declare const enum AlignmentPosition {
    Left = 0,
    Center = 1,
    Right = 2,
}
export declare const enum BarcodeSymbology {
    UPCE = 0,
    UPCA = 1,
    JAN8 = 2,
    JAN13 = 3,
    Code39 = 4,
    ITF = 5,
    Code128 = 6,
    Code93 = 7,
    NW7 = 8,
}
export declare const enum BarcodeWidth {
    Mode1 = 0,
    Mode2 = 1,
    Mode3 = 2,
    Mode4 = 3,
    Mode5 = 4,
    Mode6 = 5,
    Mode7 = 6,
    Mode8 = 7,
    Mode9 = 8,
}
export declare const enum BitmapConverterRotation {
    Normal = 0,
    Right90 = 1,
    Left90 = 2,
    Rotate180 = 3,
}
export declare const enum BlackMarkType {
    Invalid = 0,
    Valid = 1,
    ValidWithDetection = 2,
}
export declare const enum SCBCodePageType {
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
    Blank = 42,
}
export declare const enum CutPaperAction {
    FullCut = 0,
    PartialCut = 1,
    FullCutWithFeed = 2,
    PartialCutWithFeed = 3,
}
export declare const enum FontStyleType {
    A = 0,
    B = 1,
}
export declare const enum InitializationType {
    Command = 0,
}
export declare const enum InternationalType {
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
    Legal = 15,
}
export declare const enum LogoSize {
    Normal = 0,
    DoubleWidth = 1,
    DoubleHeight = 2,
    DoubleWidthDoubleHeight = 3,
}
export declare const enum Pdf417Level {
    ECC0 = 0,
    ECC1 = 1,
    ECC2 = 2,
    ECC3 = 3,
    ECC4 = 4,
    ECC5 = 5,
    ECC6 = 6,
    ECC7 = 7,
    ECC8 = 8,
}
export declare const enum PeripheralChannel {
    No1 = 0,
    No2 = 1,
}
export declare const enum PrintableAreaType {
    Standard = 0,
    Type1 = 1,
    Type2 = 2,
    Type3 = 3,
    Type4 = 4,
}
export declare const enum QrCodeLevel {
    L = 0,
    M = 1,
    Q = 2,
    H = 3,
}
export declare const enum QrCodeModel {
    No1 = 0,
    No2 = 1,
}
export declare const enum SoundChannel {
    No1 = 0,
    No2 = 1,
}
export declare const enum CodePageType {
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
    Hangul = 13,
}
export declare const enum ContrastMode {
    Minus3 = 0,
    Minus2 = 1,
    Minus1 = 2,
    Default = 3,
    Plus1 = 4,
    Plus2 = 5,
    Plus3 = 6,
}
export declare const enum CursorMode {
    Off = 0,
    Blink = 1,
    On = 2,
}
