import { Injectable } from "@angular/core";

@Injectable()
export class FeelingDetail {

	date: any;
    feeling: Array<any>;
    situation: String;
    thought: String;
    action: String;
    expanded: boolean;

	constructor() {
        this.expanded = false;
        this.feeling = [];
        this.feeling.push("Feliz");
        this.feeling.push("Triste");
        this.feeling.push("Marrom");
    }
}