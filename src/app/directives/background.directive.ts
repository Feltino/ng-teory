import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appBackround]'
})
export class BackgroundDirective implements OnInit {
    constructor(private element: ElementRef, private renderer: Renderer2) {}
    ngOnInit() {
        const {nativeElement} = this.element;
        this.renderer.setStyle(nativeElement, 'background-color', 'orange');
        this.renderer.addClass(nativeElement, 'white-text');
    }
}
