import { Injectable } from "@angular/core";

@Injectable()
export class FeelingDetail {

	date: any;
    feeling: any;
    situation: String;
    thought: String;
    action: String;
    expanded: boolean;

	constructor() {
        this.expanded = false;
    }
}