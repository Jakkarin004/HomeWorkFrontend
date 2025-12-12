import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  @Output() selectDetail = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.monthTime();
  }

  result:any = [];
  id = 0;
  monthSelect = '';
  monthAll = '';

  monthTime() {
    const now = new Date();
    const giveMonth = Number(now.getMonth() + 1);

    this.result = this.month.filter((month:any) => month.id <= giveMonth);
  }

  month = [
    { id: 1, monthSelect: "01", monthAll: "January" },
    { id: 2, monthSelect: "02", monthAll: "February" },
    { id: 3, monthSelect: "03", monthAll: "March" },
    { id: 4, monthSelect: "04", monthAll: "April" },
    { id: 5, monthSelect: "05", monthAll: "May" },
    { id: 6, monthSelect: "06", monthAll: "June" },
    { id: 7, monthSelect: "07", monthAll: "July" },
    { id: 8, monthSelect: "08", monthAll: "August" },
    { id: 9, monthSelect: "09", monthAll: "September" },
    { id: 10, monthSelect: "10", monthAll: "October" },
    { id: 11, monthSelect: "11", monthAll: "November" },
    { id: 12, monthSelect: "12", monthAll: "December" },
  ];

  resMonth(res :string){
    const selectMonth = this.month.find(m=>m.monthSelect == res);
    
    if(selectMonth){
      this.selectDetail.emit(selectMonth.monthAll);
      console.log("ค่าที่ส่งไปคือ "+ selectMonth.monthAll);
    }
    
  }





}
