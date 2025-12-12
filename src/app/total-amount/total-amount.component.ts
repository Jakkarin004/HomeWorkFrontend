import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.css']
})
export class TotalAmountComponent implements OnInit, OnChanges {
  @Output() selectDetail = new EventEmitter<string>();
  @Input() vat!: string;
  @Input() surcharge!: string;
  @Input() penalty!: string;

  constructor() { }

  ngOnInit(): void {
  }

  totalAmount = '';

  ngOnChanges(changes: SimpleChanges): void {
    this.onP();
  }

  onP() {
    this.totalAmount = this.vat;
    this.blurPoint();
  }

  blurPoint() {

    if (this.totalAmount == '' || this.vat == ' ') {
      this.totalAmount = '';
      return;
    }

    const x = Number(this.vat);
    const y = Number(this.surcharge);
    const z = Number(this.penalty);
    const sum = Number(x + y + z)
    // const text = String(sum)

    const priceNum = String(sum).replace(/[^0-9.-]/g, '');
    console.log("ตัด priceNum " + priceNum + typeof priceNum);

    const priceT = Number(priceNum);
    console.log("แปลงเป็น num priceT " + priceT + typeof priceT);

    // const formatNumber = Number(priceNum);
    this.totalAmount = priceT.toLocaleString(undefined, { minimumFractionDigits: 2 });
    console.log("แปลงกลับ format " + this.totalAmount + typeof this.totalAmount);
    this.selectDetail.emit(this.totalAmount);
  }

}
