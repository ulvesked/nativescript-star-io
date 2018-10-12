export interface StarIOPrinterStatus {

    // LEVEL 2
	coverOpen?: number;
	offline?: number;
	compulsionSwitch?: number;
	overTemp?: number;
	unrecoverableError?: number;
	cutterError?: number;
	mechError?: number;
	headThermistorError?: number;
	receiveBufferOverflow?: number;
	pageModeCmdError?: number;
	blackMarkError?: number;
	presenterPaperJamError?: number;
	headUpError?: number;
	voltageError?: number;
	receiptBlackMarkDetection?: number;
	receiptPaperEmpty?: number;
	receiptPaperNearEmptyInner?: number;
	receiptPaperNearEmptyOuter?: number;
	presenterPaperPresent?: number;
	peelerPaperPresent?: number;
	stackerFull?: number;
	slipTOF?: number;
	slipCOF?: number;
	slipBOF?: number;
	validationPaperPresent?: number;
	slipPaperPresent?: number;
	etbAvailable?: number;
	etbCounter?: number;
	presenterState?: number;
    connectedInterface?: number;

    // LEVEL 1
    // coverOpen?: number;
	// offline?: number;
	// compulsionSwitch?: number;
	// overTemp?: number;
	// unrecoverableError?: number;
	// cutterError?: number;
	// mechError?: number;
	// receiveBufferOverflow?: number;
	// pageModeCmdError?: number;
	// blackMarkError?: number;
	// presenterPaperJamError?: number;
	// headUpError?: number;
	// receiptBlackMarkDetection?: number;
	// receiptPaperEmpty?: number;
	// receiptPaperNearEmptyInner?: number;
	// receiptPaperNearEmptyOuter?: number;
	// presenterPaperPresent?: number;
	// peelerPaperPresent?: number;
	// stackerFull?: number;
	// slipTOF?: number;
	// slipCOF?: number;
	// slipBOF?: number;
	// validationPaperPresent?: number;
	// slipPaperPresent?: number;
	// etbAvailable?: number;
	// etbCounter?: number;
	// presenterState?: number;
    
    // LEVEL 0
	// coverOpen?: number;
	// offline?: number;
	// compulsionSwitch?: number;
	// overTemp?: number;
	// unrecoverableError?: number;
	// cutterError?: number;
	// mechError?: number;
	// pageModeCmdError?: number;
	paperSizeError?: number;
	// presenterPaperJamError?: number;
	// headUpError?: number;
	blackMarkDetectStatus?: number;
	paperEmpty?: number;
	paperNearEmptyInner?: number;
	paperNearEmptyOuter?: number;
	// stackerFull?: number;
	// etbAvailable?: number;
	// etbCounter?: number;
    // presenterState?: number;
    
    // RAW
	rawLength?: number;
	raw?: any;
}
