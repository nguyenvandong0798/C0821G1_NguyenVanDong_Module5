import { Component, OnInit } from '@angular/core';
import {Dictionary} from "../../model/dictionary";
import {DictionaryService} from "../../service/dictionary.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  dictionary: Dictionary;

  constructor(private dictionaryService: DictionaryService,
              private activeRoute: ActivatedRoute) {
    const DetailId = this.activeRoute.snapshot.params.id;
    this.dictionary = this.dictionaryService.getById(Number(DetailId))
}
  ngOnInit(): void{

  }

}
