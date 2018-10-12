# NativeScript StarIO

Add your plugin badges here. See [nativescript-urlhandler](https://github.com/hypery2k/nativescript-urlhandler) for example.

NativeScript plugin for StarIO-framework (also known as StarPRNT). 
Inspiration from nativescript-star-printer (https://github.com/EddyVerbruggen/nativescript-star-printer) but this plugin embeds the native StarIO-frameworks instead of wrapping them in a Cocoa Library. 

Since the native StarIO-frameworks is exposed to NativeScript it is possible to use all features of the Star SDK even if this plugin does not expose them in a cross-platform matter.


## (Optional) Prerequisites / Requirements

It is required to add iOS runtime permission but that should be taken care of automatically.

## Installation

Install it as any other nativescript plugin

```javascript
tns plugin add nativescript-star-io
```

## Usage 

Describe any usage specifics for your plugin. Give examples for Android, iOS, Angular if needed. See [nativescript-drop-down](https://www.npmjs.com/package/nativescript-drop-down) for example.
	
```javascript
Usage code snippets here
```

## API

The plugin API is modeled after the Android version of the StarIO-framework, since the method names in the Android version correspond better to Javascript/Nativescript naming conventions than the iOS version.

Refer to the StarIO SDK documentation for Android for description of what each method does. The methods are listed below.

SDK Documentation: 
https://www.starmicronics.com/support/SDKDocumentation.aspx

For Android: Expand Android -> Java for all Star Printers -> User's Manual

For iOS: Expand iOS -> Swift/Objective-C for All Star Printers -> User's Manual
    
### StarIOPort

The class used to find printers and communicate with them. Corresponds to StarIOPort on Android and SMPort on iOS. 

```javascript

    export declare class StarIOPort {
        static StarIOVersion(): string;
        static searchPrinter(): any;
        static searchPrinter(target: string): any;
        static searchPrinter(target: string, androidUsbContext: any): any;
        static getPort(portName: string, portSettings: string, ioTimeoutMillis: number): StarIOPort;
        static releasePort(port: StarIOPort): void;
        releasePort(): void;
        beginCheckedBlock(level: number): StarIOPrinterStatus;
        connected(): boolean;
        disconnect(): boolean;
        endCheckedBlock(level: number): StarIOPrinterStatus;
        getDipSwitchInformation(): any;
        getFirmwareInformation(): any;
        getOnlineStatus(): boolean;
        getPortName(): string;
        getPortSettings(): string;
        readPort(readBuffer: string, offSet: number, size: number): number;
        writePort(commandbuilder: StarIOCommandBuilder): number;
        writePort(buffer: ArrayBuffer): number;
        writePort(buffer: string): number;
        writePort(buffer: ArrayBuffer, offset: number, size: number): number;
        writePort(buffer: string, offset: number, size: number): number;
    }
```

### StarIOPortInfo

Represents found printers from StarIOPort.searchPrinter

Wraps the native PortInfo class in Android and iOS SDK.

Exposes the values both as properties (like on iOS) and get-methods (like on Android).

| Property/Method | Type | Description |
| --- | --- | --- |
| portName | string | The port name to connect to the printer |
| macAddress | string | The MAC address of the printer |
| modelName | string | The model name of the printer |
| getPortName() | string | Returns the portName property |
| getMacAddress() | string | Returns the macAddress property |
| getModelName() | string | returns the modelName property |

### StarIOPrinterStatus

An interface that represents the printer status returned from StarIOPort.beginCheckBlock/endCheckBlock.

There are three levels: 0, 1, 2. These levels represent which properties are returned in the status. Refer to the SDK documentation for properties.

## Features that are not available in this plugin

There are some classes in the StarIO-SDK that is not yet implemented in this plugin. The native API:s are still available to you.

To use API:s that are not exported by the plugin, use the typings in the "typings" directory of the plugin.

Example to use SMBluetoothManager of the iOS SDK. This is not exported by the plugin, but available directly from the framework.

```javascript
/// <reference path="nativescript-star-io/typings/StarIO.ios.d.ts" />
/// <reference path="nativescript-star-io/typings/StarIO_Extension.ios.d.ts" />

  let portName = "BT:StarMicronics"; // PortName of your printer, returned by StarIOPort.searchPrinter()

  let btmanager = SMBluetoothManagerFactory.getManagerEmulation(portName, StarIoExtEmulation.EscPosMobile);
  if (btmanager.open() == false) {
    console.log('failed to open BluetoothManager');
    return;
  }
  if (btmanager.loadSetting() == false) {
    console.log('failed to open BluetoothManager');
    btmanager.close();
    return;
  }
  btmanager.deviceName = "My Star Printer";
  if (btmanager.apply()) {
    console.log('Settings saved');
  }
  else {
    console.log('Settings failed');
  }
  btmanager.close();

```
    
## License

Apache License Version 2.0, January 2004
