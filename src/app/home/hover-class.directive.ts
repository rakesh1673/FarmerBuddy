import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hover-class]'
})
export class HoverClassDirective {

  constructor(public elementRef: ElementRef) { }
  @Input('hover-class') hoverClass1: any;
  @Input('hover-class') hoverClass2: any;

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.classList.add(this.hoverClass1);
    this.elementRef.nativeElement.classList.add(this.hoverClass2);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.classList.remove(this.hoverClass1);
    this.elementRef.nativeElement.classList.remove(this.hoverClass2);
  }

}
