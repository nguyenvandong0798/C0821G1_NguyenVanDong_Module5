import { Component, OnInit } from '@angular/core';
import {Dictionary} from "../../model/dictionary";
import {DictionaryService} from "../../service/dictionary.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  dictionary: Dictionary[]=[];

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit() {
    this.getAll();
  }

  private getAll() {
    this.dictionary = this.dictionaryService.getAll();
  }
}
