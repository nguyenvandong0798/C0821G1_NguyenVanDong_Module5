import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit  {

  public students = new Array();

  ngOnInit() {
    this.students = this.getStudents();
  }

  getStudents() {
    return [
      {id: 'SV-01', name: 'dong', gender: 'nam', score: 10},
      {id: 'SV-02', name: 'lanh', gender: 'nam', score: 10},
      {id: 'SV-03', name: 'du', gender: 'nu', score: 10},
    ];
  }

}
