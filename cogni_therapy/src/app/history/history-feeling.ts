import { FeelingDetail } from '../feeling-detail/feeling-detail';
import { Injectable } from "@angular/core";

@Injectable()
export class HistoryFeeling {

	period: any;
    feelings: Array<FeelingDetail>;

	constructor() {
        this.feelings = [];
    }
}