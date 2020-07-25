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
  idSearched: number;
  textSearched: string;

  ngOnInit() {
    this.createElements();
  }

  createElements() {
    for (let i = 0; i <= 4000; i++) {
      this.item.id = i;
      this.item.photo = `http://www.photo/${i}`;
      this.item.text = `random_lorem_ipsum_text${i}`
      this.items.push({ ...this.item });
    }
  }

  searchId() {
    const itemSearched = this.items.find(item => item.id == this.idSearched);
    this.items = [];
    this.items.push(itemSearched);
  }

  deleteSearch() {
    this.items = [];
    this.createElements();
    this.idSearched = null;
    this.textSearched = null;
  }

  searchText() {
    const itemSearched = this.items.find(item => item.text == this.textSearched);
    this.items = [];
    this.items.push(itemSearched);
  }

}



