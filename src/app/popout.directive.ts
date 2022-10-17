import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[popout]'
})
export class PopoutDirective implements OnInit {
  minha_window: Window | null = null;
  constructor(elementRef: ElementRef) { 
    this.minha_window = window.open('', '_blank', 'popup');
    const styleSheetElement = document.createElement('link');
    document.querySelectorAll('link').forEach(htmlElement => {
      if (htmlElement.rel === 'stylesheet') {
        const absoluteUrl = new URL(htmlElement.href).href;
        styleSheetElement.rel = 'stylesheet';
        styleSheetElement.href = absoluteUrl;
      }
    });
    console.log();
    
    this.minha_window?.document.head.appendChild(styleSheetElement);
    this.minha_window?.document.body.appendChild(elementRef.nativeElement);

  }
  ngOnInit(): void {
    var buildUrl = "./assets/wasm/";
    var loaderUrl = buildUrl + "Build.loader.js";
    var script = this.minha_window?.document.createElement("script");
    script!.src = loaderUrl;
    script!.onload = () => {
      createUnityInstance(this.minha_window?.document.querySelector("#unity-canvas"), {
        dataUrl: "./assets/wasm/Build.data",
        frameworkUrl: "./assets/wasm/Build.framework.js",
        codeUrl: "./assets/wasm/Build.wasm",
        productName: "Teste",
      })
      .then(this.onSuccess)
      .catch(this.onError());
    };
    this.minha_window?.document.body.appendChild(script!);
  }

  
  private onSuccess() {
    console.log('funcionou');
  }

  private onError() {
    console.log('não funcionou');
  }
}
