import { BussinessAsset } from "./bussiness-asset";
import { Process } from "./process";

export class Report {

    reportId: number = 0;
    bussiness_name: string = '';
    auditor_name: string = '';
    bussiness_assets: BussinessAsset[] = [];
    processes: Process[] = []


}
