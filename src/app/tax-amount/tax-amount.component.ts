import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tax-amount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.css']
})
export class TaxAmountComponent implements OnInit , OnChanges {
  // @Input() selectDetail = new EventEmitter<number>();
  @Output() selectDetail = new EventEmitter<string>();
  @Input() vat!: string;

  constructor() { }

  ngOnInit(): void {
  }

  price = '';
  vat7 = 0;
  check:boolean = false;
  checkEdit:boolean = false;
  

  ngOnChanges(changes: SimpleChanges): void {
    this.onP();
  }

  onP(){

    if(this.check){
      return;
    }

      if(!this.vat || this.vat.trim() === ''){
          this.price = '';
          return;
      }

      this.price = this.vat;
      console.log("ตรวจสอบ p " + this.price);
      const priceNum = String(this.price).replace(/[^0-9.-]/g, '');

      const x = Number(priceNum).toFixed(2);
      const xCheck = Number(x);

      const check = xCheck.toLocaleString(undefined, {minimumFractionDigits: 2});
      // const check = parseFloat(priceNum.replace(",", "")).toFixed(2);
      console.log("ตรวจสอบ " + check);

      this.price = check;
      console.log("ตรวจสอบ price " + this.price);

      this.selectDetail.emit(this.price);
  }


  focusUse() {

    if(this.check){
      return;
    }

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

    const x = Number(this.price);
    console.log("x "+x);
    const y = Number(this.vat);
    console.log("y "+y);
    const z = Number(y) + 20;
    const zD = Number(y) - 20;
    console.log("z "+z);

    if(x > z || x < zD){
      console.log("ค่ามากกว่า หรือ น้อยกว่า");
      this.check=true;

      this.price = this.vat;
      const priceNum = String(this.price).replace(/[^0-9.-]/g, '');
      const priceT = Number(priceNum);
      this.price = priceT.toLocaleString(undefined, {minimumFractionDigits: 2});
      this.selectDetail.emit(this.price);
      return; 
    }

    const priceNum = String(this.price).replace(/[^0-9.-]/g, '');
    console.log("ตัด priceNum " + priceNum + typeof priceNum);

    const priceT = Number(priceNum);
    console.log("แปลงเป็น num priceT " + priceT + typeof priceT);

    // const formatNumber = Number(priceNum);
    this.price = priceT.toLocaleString(undefined, {minimumFractionDigits: 2});
    console.log("แปลงกลับ format " + this.price + typeof this.price);

    this.check = false;
    this.selectDetail.emit(this.price);
  }


}
