export class StarIOPortInfo {
    constructor(portInfo: any) {
        this._portInfo = portInfo;
    }
    private _portInfo: any;
    get portName(): string {
        return this._portInfo.portName;
    }
    get macAddress(): string {
        return this._portInfo.macAddress;
    }
    get modelName() : string {
        return this._portInfo.modelName;
    }
    getPortName() {
        return this._portInfo.portName;
    }
    getMacAddress() {
        return this._portInfo.macAddress;
    }
    getModelName() {
        return this._portInfo.modelName;
    }
}