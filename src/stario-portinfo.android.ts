export class StarIOPortInfo {
    constructor(portInfo: any) {
        this._portInfo = portInfo;
    }
    private _portInfo: any;
    get portName(): string {
        return this._portInfo.getPortName();
    }
    get macAddress(): string {
        return this._portInfo.getMacAddress();
    }
    get modelName(): string {
        return this._portInfo.getModelName();
    } 
    getPortName() {
        return this._portInfo.getPortName();
    }
    getMacAddress() {
        return this._portInfo.getMacAddress();
    }
    getModelName() {
        return this._portInfo.getModelName();
    }
}
