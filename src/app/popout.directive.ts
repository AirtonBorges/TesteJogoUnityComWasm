import { Directive, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[popout]'
})
export class PopoutDirective implements OnInit{
  @Output() createdWindow = new EventEmitter<Window | null>();

  window: Window | null = null;
  element: ElementRef | null = null;

  constructor(elementRef: ElementRef) { 
    this.element = elementRef; 
  }

  ngOnInit(): void {
    this.window = window.open('', '_blank', 'popup');
    const styleSheetElement = document.createElement('link');
    document.querySelectorAll('link').forEach(htmlElement => {
      if (htmlElement.type === 'style') {
        const absoluteUrl = new URL(htmlElement.href).href;
        styleSheetElement.rel = 'stylesheet';
        styleSheetElement.href = absoluteUrl;
      }
    });
    console.log();
    
    this.window?.document.head.appendChild(styleSheetElement);
    this.window?.document.body.appendChild(this.element?.nativeElement);

    this.createdWindow.emit(this.window);
  }
}
