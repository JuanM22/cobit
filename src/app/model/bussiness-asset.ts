export class BussinessAsset {

    private assetName : string;
    private assetType: string;

    constructor(assetName: string, assetType: string) {
        this.assetName = assetName;
        this.assetType = assetType;
    }

    getAssetName = (): string => this.assetName;
    getAssetType = (): string => this.assetType;



}
