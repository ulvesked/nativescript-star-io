
declare class BluetoothPort extends ExternalAccessoryPort {

	static alloc(): BluetoothPort; // inherited from NSObject

	static new(): BluetoothPort; // inherited from NSObject
}

declare class ExternalAccessoryPort extends NSObject implements NSStreamDelegate {

	static alloc(): ExternalAccessoryPort; // inherited from NSObject

	static new(): ExternalAccessoryPort; // inherited from NSObject

	readonly connected: boolean;

	connectionID: number;

	dataTimeoutSeconds: number;

	readonly dipSwitchInformation: NSMutableArray<any>;

	endCheckedBlockTimeoutMillis: number;

	readonly firmwareInformation: string;

	readonly isDKAirCash: boolean;

	result71: number;

	readonly secInterval: number;

	readonly secShortInterval: number;

	serialNumber: string;

	thread71: NSThread;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	//readonly  // inherited from NSObjectProtocol

	constructor(o: { portName: string; portSettings: string; timeout: number; emulation: SMEmulation; });

	beginCheckedBlockLevel(starPrinterStatus: interop.Pointer | interop.Reference<StarPrinterStatus_2>, level: number): boolean;

	class(): typeof NSObject;

	close(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	disconnect(): boolean;

	endCheckedBlockLevel(starPrinterStatus: interop.Pointer | interop.Reference<StarPrinterStatus_2>, level: number): boolean;

	getOnlineStatus(onlineStatus: interop.Pointer | interop.Reference<boolean>): boolean;

	getParsedStatusLevel(starPrinterStatus: interop.Pointer | interop.Reference<StarPrinterStatus_2>, level: number): boolean;

	initWithPortNamePortSettingsTimeoutEmulation(portName: string, portSettings: string, timeout: number, emulation: SMEmulation): this;

	isConnected(): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	open(): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	read(bytesToRead: number): NSData;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	retrieveButtonSecurityTimeout(): number;

	retrieveDipSwitchInformation(): boolean;

	retrieveFirmwareInformation(): boolean;

	retrieveFirmwareInformation2(): boolean;

	self(): this;

	startDataCancel(): boolean;

	streamHandleEvent(aStream: NSStream, eventCode: NSStreamEvent): void;

	write(data: NSData): number;
}

declare function GetDipSwitchInformation(port: interop.Pointer | interop.Reference<any>, dsInfo: number): string;

declare function GetEndCheckedBlockTimeoutMillis(port: interop.Pointer | interop.Reference<any>): number;

declare function GetFirmwareInformation(port: interop.Pointer | interop.Reference<any>): string;

declare function IsDKAirCash(port: interop.Pointer | interop.Reference<any>): number;

declare function IsUSBSharing(port: interop.Pointer | interop.Reference<any>): number;

declare function JpStarmStarioBeginCheckedBlock(port: interop.Pointer | interop.Reference<any>, starPrinterStatus: interop.Pointer | interop.Reference<StarPrinterStatus>): number;

declare function JpStarmStarioBeginCheckedBlockEx(port: interop.Pointer | interop.Reference<any>, starPrinterStatus: interop.Pointer | interop.Reference<any>, level: number): number;

declare function JpStarmStarioClosePort(port: interop.Pointer | interop.Reference<any>): number;

declare function JpStarmStarioEndCheckedBlock(port: interop.Pointer | interop.Reference<any>, starPrinterStatus: interop.Pointer | interop.Reference<StarPrinterStatus>): number;

declare function JpStarmStarioEndCheckedBlockEx(port: interop.Pointer | interop.Reference<any>, starPrinterStatus: interop.Pointer | interop.Reference<any>, level: number): number;

declare function JpStarmStarioGetOnlineStatus(port: interop.Pointer | interop.Reference<any>, onlineStatus: interop.Pointer | interop.Reference<number>): number;

declare function JpStarmStarioGetParsedStatus(port: interop.Pointer | interop.Reference<any>, starPrinterStatus: interop.Pointer | interop.Reference<StarPrinterStatus>): number;

declare function JpStarmStarioGetParsedStatusEx(port: interop.Pointer | interop.Reference<any>, starPrinterStatus: interop.Pointer | interop.Reference<any>, level: number): number;

declare function JpStarmStarioOpenPort(portName: string, portSettings: string, ioRequestTimeoutMillis: number, emulation: SMEmulation): interop.Pointer | interop.Reference<any>;

declare function JpStarmStarioReadPort(port: interop.Pointer | interop.Reference<any>, readBuffer: string, size: number, sizeCommunicated: interop.Pointer | interop.Reference<number>): number;

declare function JpStarmStarioRetrieveDipSwitchInformation(port: interop.Pointer | interop.Reference<any>): number;

declare function JpStarmStarioRetrieveFirmwareInformation(port: interop.Pointer | interop.Reference<any>): number;

declare function JpStarmStarioWritePort(port: interop.Pointer | interop.Reference<any>, writeBuffer: string, size: number, sizeCommunicated: interop.Pointer | interop.Reference<number>): number;

declare class Lock extends NSObject {

	static alloc(): Lock; // inherited from NSObject

	static new(): Lock; // inherited from NSObject

	static sharedManager(): Lock;

	lock(): void;

	unlock(): void;
}

declare class PortException extends NSException {

	static alloc(): PortException; // inherited from NSObject

	static new(): PortException; // inherited from NSObject
}

declare class PortInfo extends NSObject {

	static alloc(): PortInfo; // inherited from NSObject

	static new(): PortInfo; // inherited from NSObject

	readonly macAddress: string;

	readonly modelName: string;

	readonly portName: string;

	constructor(o: { portName: string; macAddress: string; modelName: string; });

	initWithPortNameMacAddressModelName(portName_: string, macAddress_: string, modelName_: string): this;
}

declare function ResetDevice(port: interop.Pointer | interop.Reference<any>): number;

declare class SMBluetoothManager extends NSObject {

	static alloc(): SMBluetoothManager; // inherited from NSObject

	static new(): SMBluetoothManager; // inherited from NSObject

	autoConnect: boolean;

	readonly autoConnectCapability: SMBluetoothSettingCapability;

	bluetoothDiagnosticMode: boolean;

	readonly bluetoothDiagnosticModeCapability: SMBluetoothSettingCapability;

	deviceName: string;

	readonly deviceNameCapability: SMBluetoothSettingCapability;

	readonly deviceType: SMDeviceType;

	discoveryPermission: boolean;

	readonly discoveryPermissionCapability: SMBluetoothSettingCapability;

	iOSPortName: string;

	readonly iOSPortNameCapability: SMBluetoothSettingCapability;

	readonly opened: boolean;

	pairingPermission: boolean;

	readonly pairingPermissionCapability: SMBluetoothSettingCapability;

	pinCode: string;

	readonly pinCodeCapability: SMBluetoothSettingCapability;

	readonly portName: string;

	security: SMBluetoothSecurity;

	readonly securityTypeCapability: SMBluetoothSettingCapability;

	constructor(o: { portName: string; deviceType: SMDeviceType; });

	apply(): boolean;

	close(): void;

	initWithPortNameDeviceType(portName: string, deviceType: SMDeviceType): this;

	loadSetting(): boolean;

	open(): boolean;
}

declare const enum SMBluetoothSecurity {

	Disable = 0,

	SSP = 1,

	PINcode = 2
}

declare const enum SMBluetoothSettingCapability {

	Support = 0,

	NoSupport = 1
}

declare const enum SMDeviceType {

	Unknown = 0,

	DesktopPrinter = 1,

	PortablePrinter = 2,

	DKAirCash = 3
}

declare const enum SMEmulation {

	Unknown = 0,

	StarLine = 1,

	ESCPOS = 2
}

declare class SMPort extends NSObject {

	static StarIOVersion(): string;

//	static alloc(): SMPort; // inherited from NSObject

	static compressRasterData(width: number, height: number, imageData: string, portSettings: string): NSMutableData;

	static generateBitImageCommand(width: number, height: number, imageData: string, portSettings: string): NSMutableData;

	static getPort(portName: string, portSettings: string, ioTimeoutMillis: number): SMPort;

//	static new(): SMPort; // inherited from NSObject

	static releasePort(port: SMPort): void;

	static searchPrinter(): NSArray<any>;

	static setMACAddressSourceBlock(macAddressSourceBlock: (p1: EAAccessory) => string): void;

	connectionID: number;

	endCheckedBlockTimeoutMillis: number;

	identifier: string;

	constructor();

	beginCheckedBlock(starPrinterStatus: interop.Pointer | interop.Reference<any>, level: number): void;

	connected(): boolean;

	disconnect(): boolean;

	endCheckedBlock(starPrinterStatus: interop.Pointer | interop.Reference<any>, level: number): void;

	getDipSwitchInformation(): NSDictionary<any, any>;

	getFirmwareInformation(): NSDictionary<any, any>;

	getOnlineStatus(): boolean;

	getOnlineStatusWithError(): number;

	getParsedStatus(starPrinterStatus: interop.Pointer | interop.Reference<any>, level: number): void;

//	init(portName: string, portSettings: string, ioTimeoutMillis: number): this;

	portName(): string;

	portSettings(): string;

	readPort(readBuffer: string, offSet: number, size: number): number;

	timeoutMillis(): number;

	writePort(writeBuffer: string, offSet: number, size: number): number;
}

declare class SMProxiPRNTManager extends NSObject implements CBCentralManagerDelegate {

	static alloc(): SMProxiPRNTManager; // inherited from NSObject

	static new(): SMProxiPRNTManager; // inherited from NSObject

	static sharedManager(): SMProxiPRNTManager;

	delegate: SMProxiPRNTManagerDelegate;

	settings: NSDictionary<any, any>;

//	readonly sharedManager: ;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

//	readonly  // inherited from NSObjectProtocol

	addSettingForDKAirCashPortNamePortSettingsDongleMACAddrRSSIthreshouldNickName(portName: string, portSettings: string, MACAddr: string, Threshold: number, nickName: string): void;

	addSettingForPrinterPortNamePortSettingsWithDrawerDongleMACAddrRSSIthreshouldNickName(portName: string, portSettings: string, useDrawer: boolean, MACAddr: string, Threshold: number, nickName: string): void;

	calibrateActionArea(MACAddr: string): number;

	centralManagerDidConnectPeripheral(central: CBCentralManager, peripheral: CBPeripheral): void;

	centralManagerDidDisconnectPeripheralError(central: CBCentralManager, peripheral: CBPeripheral, error: NSError): void;

	centralManagerDidDiscoverPeripheralAdvertisementDataRSSI(central: CBCentralManager, peripheral: CBPeripheral, advertisementData: NSDictionary<string, any>, RSSI: number): void;

	centralManagerDidFailToConnectPeripheralError(central: CBCentralManager, peripheral: CBPeripheral, error: NSError): void;

	centralManagerDidUpdateState(central: CBCentralManager): void;

	centralManagerWillRestoreState(central: CBCentralManager, dict: NSDictionary<string, any>): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deserializeSettings(data: NSData): boolean;

	getRSSI(MACAddr: string): number;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeSettingWithPortName(portName: string): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	serializedSettings(): NSData;

	startScan(): boolean;

	stopScan(): void;
}

interface SMProxiPRNTManagerDelegate extends NSObjectProtocol {

	didDiscoverPortDeviceTypeMACAddrRSSI?(portName: string, deviceType: SMDeviceType, MACAddr: string, RSSI: number): void;

	didUpdateStateMACAddr?(portName: string, MACAddr: string): void;
}
declare var SMProxiPRNTManagerDelegate: {

	prototype: SMProxiPRNTManagerDelegate;
};

declare function SetEndCheckedBlockTimeoutMillis(port: interop.Pointer | interop.Reference<any>, timeoutMillis: number): void;

declare var StarIOVersionNumber: number;

declare var StarIOVersionString: interop.Reference<number>;

interface StarPrinterStatus {
	coverOpen: number;
	offline: number;
	compulsionSwitch: number;
	overTemp: number;
	unrecoverableError: number;
	cutterError: number;
	mechError: number;
	pageModeCmdError: number;
	paperSizeError: number;
	presenterPaperJamError: number;
	headUpError: number;
	blackMarkDetectStatus: number;
	paperEmpty: number;
	paperNearEmptyInner: number;
	paperNearEmptyOuter: number;
	stackerFull: number;
	etbAvailable: number;
	etbCounter: number;
	presenterState: number;
	rawLength: number;
	raw: interop.Reference<number>;
}
declare var StarPrinterStatus: interop.StructType<StarPrinterStatus>;

interface StarPrinterStatus_1 {
	coverOpen: number;
	offline: number;
	compulsionSwitch: number;
	overTemp: number;
	unrecoverableError: number;
	cutterError: number;
	mechError: number;
	receiveBufferOverflow: number;
	pageModeCmdError: number;
	blackMarkError: number;
	presenterPaperJamError: number;
	headUpError: number;
	receiptBlackMarkDetection: number;
	receiptPaperEmpty: number;
	receiptPaperNearEmptyInner: number;
	receiptPaperNearEmptyOuter: number;
	presenterPaperPresent: number;
	peelerPaperPresent: number;
	stackerFull: number;
	slipTOF: number;
	slipCOF: number;
	slipBOF: number;
	validationPaperPresent: number;
	slipPaperPresent: number;
	etbAvailable: number;
	etbCounter: number;
	presenterState: number;
	rawLength: number;
	raw: interop.Reference<number>;
}
declare var StarPrinterStatus_1: interop.StructType<StarPrinterStatus_1>;

interface StarPrinterStatus_2 {
	coverOpen: number;
	offline: number;
	compulsionSwitch: number;
	overTemp: number;
	unrecoverableError: number;
	cutterError: number;
	mechError: number;
	headThermistorError: number;
	receiveBufferOverflow: number;
	pageModeCmdError: number;
	blackMarkError: number;
	presenterPaperJamError: number;
	headUpError: number;
	voltageError: number;
	receiptBlackMarkDetection: number;
	receiptPaperEmpty: number;
	receiptPaperNearEmptyInner: number;
	receiptPaperNearEmptyOuter: number;
	presenterPaperPresent: number;
	peelerPaperPresent: number;
	stackerFull: number;
	slipTOF: number;
	slipCOF: number;
	slipBOF: number;
	validationPaperPresent: number;
	slipPaperPresent: number;
	etbAvailable: number;
	etbCounter: number;
	presenterState: number;
	connectedInterface: number;
	rawLength: number;
	raw: interop.Reference<number>;
}
declare var StarPrinterStatus_2: interop.StructType<StarPrinterStatus_2>;

declare class USBPort extends ExternalAccessoryPort {

	static alloc(): USBPort; // inherited from NSObject

	static new(): USBPort; // inherited from NSObject
}

declare class WBluetoothPort extends NSObject implements NSStreamDelegate {

	static alloc(): WBluetoothPort; // inherited from NSObject

	static new(): WBluetoothPort; // inherited from NSObject

	readonly connected: boolean;

	endCheckedBlockTimeoutMillis: number;

	readonly firmwareInformation: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

//	readonly  // inherited from NSObjectProtocol

	constructor(o: { portName: string; portSettings: string; timeout: number; });

	beginCheckedBlock(): boolean;

	class(): typeof NSObject;

	close(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	endCheckedBlock(): boolean;

	getOnlineStatus(onlineStatus: interop.Pointer | interop.Reference<boolean>): boolean;

	getParsedStatusLevel(starPrinterStatus: interop.Pointer | interop.Reference<StarPrinterStatus_2>, level: number): boolean;

	getParsedStatusLevelTimeoutSec(starPrinterStatus: interop.Pointer | interop.Reference<StarPrinterStatus_2>, level: number, timeoutSec: number): boolean;

	initWithPortNamePortSettingsTimeout(portName: string, portSettings: string, timeout: number): this;

	isConnected(): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	open(): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	read(bytesToRead: number): NSData;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	retrieveDipSwitchInformation(): boolean;

	retrieveFirmwareInformation(): boolean;

	self(): this;

	streamHandleEvent(aStream: NSStream, eventCode: NSStreamEvent): void;

	write(data: NSData): number;
}

declare function retrieveButtonSecurityTimeout(port: interop.Pointer | interop.Reference<any>): number;
