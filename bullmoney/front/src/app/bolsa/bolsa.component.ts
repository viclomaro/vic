import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bolsa',
  templateUrl: './bolsa.component.html',
  styleUrls: ['./bolsa.component.css']
})
export class BolsaComponent implements OnInit {

  valores: any;

  constructor() {
    this.valores = JSON.parse(localStorage.getItem("valores"));
    console.log(this.valores);
  }

  ngOnInit(): void {
  }

}
