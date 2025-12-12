import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.css']
})
export class FilingTypeComponent implements OnInit {
  @Output() selectDetail = new EventEmitter<string>();
  // onRespon = Output<string>();

  constructor() { }

  ngOnInit(): void {
  }

  checkFilingType = '0';

  responCheck(res : string){
    this.checkFilingType = res;
    this.selectDetail.emit(res);
  }




}
