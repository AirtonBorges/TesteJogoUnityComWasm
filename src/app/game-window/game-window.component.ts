import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.scss']
})
export class GameWindowComponent implements AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {

  }

  createGame(window: any) {
    var my_window = window as Window;
    var buildUrl = "./assets/wasm/";
    var loaderUrl = buildUrl + "Build.loader.js";
    var script = my_window?.document.createElement("script");
    script!.src = loaderUrl;
    script.parentElement?.onload{
      createUnityInstance(my_window?.document.querySelector("#unity-canvas"), {
        dataUrl: "./assets/wasm/Build.data",
        frameworkUrl: "./assets/wasm/Build.framework.js",
        codeUrl: "./assets/wasm/Build.wasm",
        productName: "Teste",
      })
      .then(this.onSuccess)
      .catch(this.onError);
    }
  
    my_window?.document.body.appendChild(script!);
  }

  private onSuccess() {
    console.log('funcionou');
  }

  private onError() {
    console.log('não funcionou');
  }
}
