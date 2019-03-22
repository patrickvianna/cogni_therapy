import { FeelingDetail } from './../../feeling-detail/feeling-detail';
import { Component, OnInit, Input, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html'
})
export class AccordionComponent implements OnInit {

  expanded = false;
  @ViewChild("cc", { read: ElementRef }) cardContent: any;
  // @Input('title') title: string;
  // @ViewChild('expandWrapper', { read: ElementRef }) expandWrapper;
  // @Input('expandHeight') expandHeight
  // @Input('expanded') expanded

  icon: string = "arrow-forward";

  constructor(public renderer: Renderer) {

  }

  ngOnInit() {
    // console.log(this.cardContent.nativeElement);
    this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
  }

  toggleAccordion() {
    if (this.expanded) {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");

    } else {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "500px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");

    }

    this.expanded = !this.expanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }

  ngAfterViewInit() {
    // debugger;
    // this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');

  }

}
