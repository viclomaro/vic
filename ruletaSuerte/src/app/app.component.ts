import { Component } from '@angular/core';
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  num: number;

  aleatorio(minimo, maximo) {
    this.num = Math.round(Math.random() * (maximo - minimo) + minimo);
    return this.num;
  }

  rotate() {
    this.aleatorio(360, 1920);
    console.log(this.num);
    document.getElementById('image').style.transform = "rotate(" + this.num + "deg)";
  }

}
