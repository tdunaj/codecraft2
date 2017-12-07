import { Directive, ElementRef, Renderer, Input, 
  HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {
  @HostBinding('class.border-primary') private isHovering: boolean;

  @Input('appCardHover') config: {
    querySelector: '.card-text'   
  };

  constructor(private el: ElementRef, private renderer: Renderer) {
    //renderer.setElementStyle(el.nativeElement, 'background-color', 'gray');
   }

  @HostListener('mouseover') onMouseOver(){
    //let part = this.el.nativeElement.querySelector('.card-text');
    let part = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(part, 'display', 'block');
    this.isHovering = true;
  }

  @HostListener('mouseout') onMouseOut(){
    //let part = this.el.nativeElement.querySelector('.card-text');
    let part = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(part, 'display', 'none');
    this.isHovering = false;
  }  
}
