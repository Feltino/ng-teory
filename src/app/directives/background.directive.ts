import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appBackround]'
})
export class BackgroundDirective implements OnInit {
    @HostBinding('style.backgroundColor') backgraund: string;
    constructor(private element: ElementRef, private renderer: Renderer2) {}
    ngOnInit() {}
    @HostListener('mouseenter') mouseEnter() {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');
        this.backgraund = 'red';
    }
    @HostListener('mouseleave') mouseLeave() {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
        this.backgraund = 'transparent';
    }
}
