import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teste_wasm';
  ngOnInit() {
    var buildUrl = "./assets/wasm/";
    var loaderUrl = buildUrl + "Build.loader.js";
    var script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
      createUnityInstance(document.querySelector("#unity-canvas"), {
        dataUrl: "./assets/wasm/Build.data",
        frameworkUrl: "./assets/wasm/Build.framework.js",
        codeUrl: "./assets/wasm/Build.wasm",
        productName: "Teste",
      })
        .then(this.onSuccess)
        .catch(this.onError());
    };
    document.body.appendChild(script);
  }

  private onSuccess() {
    console.log('funcionou');
  }

  private onError() {
    console.log('não funcionou');
  }
}
