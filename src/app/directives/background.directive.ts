import {
    Directive,
    ElementRef,
    OnInit,
    Renderer2,
    HostListener,
    HostBinding,
    Input
} from '@angular/core';

@Directive({
    selector: '[appBackround]'
})
export class BackgroundDirective implements OnInit {
    @Input('appBackround') hoverColor: string = 'green';
    @Input() defaultColor: string = 'transparent';
    @HostBinding('style.backgroundColor') backgraund: string;
    constructor(private element: ElementRef, private renderer: Renderer2) {}
    ngOnInit() {
        this.defaultColor = this.defaultColor;
    }
    @HostListener('mouseenter') mouseEnter() {
        this.backgraund = this.hoverColor;
    }
    @HostListener('mouseleave') mouseLeave() {
        this.backgraund = this.defaultColor;
    }
}
