import { Component, OnInit } from '@angular/core';
import { Element } from '../models/element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'iteriam';

  item = new Element;
  items = [];

  ngOnInit() {
    this.createElements();
  }

  createElements() {
    for (let i = 0; i <= 4000; i++) {
      this.item.id = i;
      this.item.photo = `http://www.photo/${i}`;
      this.item.text = 'lorem'
      this.items.push({ ...this.item });
    }
  }

}



