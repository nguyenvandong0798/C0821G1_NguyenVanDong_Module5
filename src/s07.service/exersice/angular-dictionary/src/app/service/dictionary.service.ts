import { Injectable } from '@angular/core';
import {Dictionary} from "../model/dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  dictionary: Dictionary[] = [{
    id: 1,
    word: 'book',
    mean: "sach"
},{
    id: 2,
    word: "car",
    mean: "xe"
  },{
    id: 3,
    word: "computer",
    mean: "may tinh"
  }]
  constructor() {
  }
  getAll(){
    return this.dictionary;
  }
  getById(id: number){
    return this.dictionary.find(x => x.id === id)
  }

}
