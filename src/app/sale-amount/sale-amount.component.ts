import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sale-amount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.css']
})
export class SaleAmountComponent implements OnInit, OnChanges {
  @Output() selectDetail = new EventEmitter<any>();

  price = '';
  vat7 = 0;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.start();
  }

  start() {
    this.price = this.price;
  }

  focusMode() {

    let totalPrice = String(this.price);
    // console.log("รับเข้ามา totalPrice " + totalPrice + typeof totalPrice);

    const priceNum = String(totalPrice).replace(/[^0-9.-]/g, '');
    // console.log("ตัด priceNum " + priceNum + typeof priceNum);

    const priceT = Number(priceNum).toFixed(2);
    // console.log("แปลงเป็น num priceT " + priceT + typeof priceT);

    const StringNum = String(priceT);

    this.price = StringNum;
    // console.log("แปลงเป็น num this.price " + this.priceVat + typeof this.priceVat);
  }

  blurMode() {
    const priceNum = String(this.price).replace(/[^0-9.-]/g, '');
    console.log("ตัด priceNum " + priceNum + typeof priceNum);

    const priceT = Number(priceNum);
    console.log("แปลงเป็น num priceT " + priceT + typeof priceT);

    this.vat7 = +(priceT * 0.07).toFixed(3);
    // console.log("คำนวณ vat "+ this.vat7 + typeof this.vat7);
    const priceV = String(this.vat7);


    // const formatNumber = Number(priceNum);
    this.price = priceT.toLocaleString(undefined, { minimumFractionDigits: 2 });
    console.log("แปลงกลับ format " + this.price + typeof this.price);
    
    this.selectDetail.emit({ vat: priceV, saleAmount: this.price });
  }


}
