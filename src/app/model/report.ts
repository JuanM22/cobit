import { Domain } from "./domain";
import { BussinessAsset } from "./bussiness-asset";

export class Report {

    reportId: number = 0;
    bussiness_name: string = '';
    auditor_name: string = '';
    bussiness_assets: BussinessAsset[] = [];
    domains: Domain[] = []


}
