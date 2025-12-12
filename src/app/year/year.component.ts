import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {
  @Output() selectDetail = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    this.yearTime();
  }

  result:any = [];
  year = '';

  yearTime() {
    const now = new Date();
    const giveYear = (now.getFullYear()).toString();
    const numYear = Number(giveYear);
    
    for(let i = 2020;i <= numYear; i++){
      const numI = String(i);
      this.result = [...this.result,numI];
      // console.log(this.result);
    }
  }

  resYear(res :string){
    const yearSelect = res;
    this.selectDetail.emit(yearSelect);
  }

}
