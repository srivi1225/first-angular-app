import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAppBold]'
})
export class AppBoldDirective {
@Input()bgcolor:string
  constructor(private elementRef: ElementRef) { }
  @HostListener('mouseenter')onmouseenter(){
    this.elementRef.nativeElement.style.fontWeight = 'bold'
    this.elementRef.nativeElement.backgroundColor = this.bgcolor
  }

  @HostListener('mouseleave')onmouseleave(){
    this.elementRef.nativeElement.style.fontWeight = 'bold'
    this.elementRef.nativeElement.backgroundColor = 'grey'
  }
}
