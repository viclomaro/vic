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
  error: string = '';

  ngOnInit() {
    this.createElements();
  }

  createElements() {
    for (let i = 0; i <= 4000; i++) {
      this.item.id = i;
      this.item.photo = `https://picsum.photos/${i}`;
      //this.item.photo = `https://www.photos/${i}`;
      this.item.text = `random_lorem_ipsum_text${i}`
      this.items.push({ ...this.item });
    }
  }

  searchId() {
    const itemSearched = this.items.find(item => item.id == this.idSearched);
    if (itemSearched != undefined) {
      this.items = [];
      this.items.push(itemSearched);
    } else {
      this.error = 'No hay resultados para la búsqueda'
    }
  }

  deleteSearch() {
    this.items = [];
    this.createElements();
    this.idSearched = null;
    this.textSearched = null;
    this.error = '';
  }

  searchText() {
    const itemSearched = this.items.find(item => item.text == this.textSearched);
    if (itemSearched != undefined) {
      this.items = [];
      this.items.push(itemSearched);
    } else {
      this.error = 'No hay resultados para la búsqueda'
    }

  }

}



