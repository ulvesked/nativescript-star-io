import { StarIOPortInfo } from "./stario-portinfo";
import { StarIOPrinterStatus } from "./stario-printerstatus";
import { StarIOCommandBuilder } from "./common/commandbuilder";

export class StarIOPort {

    private _port: SMPort;

    static StarIOVersion(): string {
        return SMPort.StarIOVersion();
    }

    // static compressRasterData(width: number, height: number, imageData: string, portSettings: string): any {
    //     return SMPort.compressRasterData(width, height, imageData, portSettings);
    // }

    // static generateBitImageCommand(width: number, height: number, imageData: string, portSettings: string): any {
    //     return SMPort.generateBitImageCommand(width, height, imageData, portSettings);
    // }

    static getPort(portName: string, portSettings: string, ioTimeoutMillis: number): StarIOPort {
        let port = SMPort.getPort(portName, portSettings, ioTimeoutMillis);
        if (port) {
            return new StarIOPort(port);
        }
        else {
            return null;
        }
    }

    static releasePort(port: StarIOPort): void {
        port.releasePort();
    }

    releasePort() {
        SMPort.releasePort(this._port);
    }

    static searchPrinter(): StarIOPortInfo[] {
        let searchResult = SMPort.searchPrinter();
        let a = [];
        for (let i = 0, len = searchResult.count; i < len; i++) {
            a.push(searchResult.objectAtIndex(i));
        }
        return a;
    }

    private constructor(port: SMPort) {
        this._port = port;
    }

    beginCheckedBlock(level: number): StarIOPrinterStatus {
        let status: interop.Reference<StarPrinterStatus | StarPrinterStatus_1 | StarPrinterStatus_2>;
        switch (level) {
            case 0:
                status = new interop.Reference<StarPrinterStatus>();
                break;
            case 1:
                status = new interop.Reference<StarPrinterStatus_1>();
                break;
            case 2:
            default:
                status = new interop.Reference<StarPrinterStatus_2>();
                level = 2;
                break;
        }
        this._port.beginCheckedBlock(status, level);
        return status.value;
    }

    connected(): boolean {
        return this._port.connected();
    }

    disconnect(): boolean {
        return this._port.disconnect();
    }

    endCheckedBlock(level: number): StarIOPrinterStatus {
        let status: interop.Reference<StarPrinterStatus | StarPrinterStatus_1 | StarPrinterStatus_2>;
        switch (level) {
            case 0:
                status = new interop.Reference<StarPrinterStatus>();
                break;
            case 1:
                status = new interop.Reference<StarPrinterStatus_1>();
                break;
            case 2:
            default:
                status = new interop.Reference<StarPrinterStatus_2>();
                level = 2;
                break;
        }
        this._port.endCheckedBlock(status, level);
        return status.value;
    }

    getDipSwitchInformation(): any {
        return this._port.getDipSwitchInformation();
    }

    getFirmwareInformation(): any {
        this._port.getFirmwareInformation();
    }

    getOnlineStatus(): boolean {
        return this._port.getOnlineStatus();
    }

    // getOnlineStatusWithError(): number {
    //     return this._port.getOnlineStatusWithError();
    // }

    getParsedStatus(level: number): StarIOPrinterStatus {
        let status: interop.Reference<StarPrinterStatus | StarPrinterStatus_1 | StarPrinterStatus_2>;
        switch (level) {
            case 0:
                status = new interop.Reference<StarPrinterStatus>();
                break;
            case 1:
                status = new interop.Reference<StarPrinterStatus_1>();
                break;
            case 2:
            default:
                status = new interop.Reference<StarPrinterStatus_2>();
                level = 2;
                break;
        }
        this._port.getParsedStatus(status, level);
        return status.value;
    }

    getPortName(): string {
        return this._port.portName();
    }

    getPortSettings(): string {
        return this._port.portSettings();
    }

    readPort(readBuffer: string, offSet: number, size: number): number {
        return this._port.readPort(readBuffer, offSet, size);
    }

    // timeoutMillis(): number {
    //     return this._port.timeoutMillis();
    // }

    writePort(commandbuilder: StarIOCommandBuilder): number;
    writePort(buffer: ArrayBuffer): number;
    writePort(buffer: string): number;
    writePort(buffer: ArrayBuffer, offset: number, size: number): number;
    writePort(buffer: string, offset: number, size: number): number;
    writePort(buffer: string | ArrayBuffer | StarIOCommandBuilder, offset?: number, size?: number): number {
        let data: any;
        if (buffer instanceof StarIOCommandBuilder || (buffer && typeof ((<any>buffer).builder) != "undefined")) {
            data = buffer.valueOf() as NSData;
            if (typeof (size) == 'undefined') {
                size = (data as NSData).length;
            }
        }
        else if (typeof (buffer) == 'object' && typeof (buffer.byteLength) == "number") {
            data = buffer;
            if (typeof (size) == 'undefined') {
                size = buffer.byteLength;
            }
        }
        else {
            data = buffer as string;
            if (typeof (size) == 'undefined') {
                size = (buffer as string).length;
            }
        }
        return this._port.writePort(data, offset || 0, size);
    }
}