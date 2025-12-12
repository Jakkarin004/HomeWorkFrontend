import { Component, OnInit, ViewChild } from '@angular/core';
import { TaxData } from '../model/model-texdata';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @ViewChild('taxModal') taxModal!: ModalDirective;

  taxDataJson: string = '';


  taxData: TaxData = {
    filingType: '',
    month: '',
    year: '',
    saleAmount: 0,
    taxAmount: 0,
    surcharge: 0,
    penalty: 0,
    totalAmount: 0
  };

  fromParent = '';
  checkPage = 0;

  filingType = '0';
  month = '';
  year = '';
  saleAmount = '';
  taxAmount = '';
  surcharge = '';
  penalty = '';
  vat = '';
  totalAmount = '';

  sumAT = '';

  constructor() { }

  ngOnInit(): void {
  }

  pageZero() {
    this.checkPage = 0;
  }

  pageZeroList() {
    this.checkPage = 0;
  }

  check: boolean = false;

  pageOne() {

    const saleAmount = Number(this.saleAmount.replace(/,/g, ''));
    const taxAmount = Number(this.taxAmount.replace(/,/g, ''));

    if (!this.month || !this.year || !saleAmount || !taxAmount) {
      this.check = true;
      return;
    } else {
      this.check = false;
      this.checkPage = 1;
    }
  }

  filingTypeText() {
    return this.filingType === '0' ? 'Ordinary Filing' : 'Additional Filing';
  }

  //3.1.1.filingType
  responFilingType(res: string) {
    this.filingType = res;
    console.log("from child:", res);
  }

  //เดือน
  responMonth(res: string) {
    this.month = res;
    console.log("from month: ", res);
  }

  //ปี
  responYear(res: string) {
    this.year = res;
    console.log("from year: ", res);
  }

  // 3.1.4.	saleAmount
  responAmountVat(res: any) {
    const Vat = res.vat;
    const SaleAmount = res.saleAmount;

    this.vat = String(Vat);
    console.log("ตรวจสอบ this.vat  " + this.vat + typeof this.vat);
    this.saleAmount = String(SaleAmount);
    console.log("ตรวจสอบ this.saleAmount   " + this.saleAmount + typeof this.saleAmount);
    if (this.filingType === '0') {
      this.convertNum();
    }
  }

  // 3.1.5.	taxAmount
  responVat(res: string) {
    const Vat = res;

    this.taxAmount = String(Vat);
    if (this.filingType === '0') {
      this.convertNum();
    }
  }

  // 3.1.6.	surcharge
  responSurcharge(res: string) {
    this.surcharge = res;
    console.log("ตรวจสอบ priceSC " + this.surcharge + typeof this.surcharge);
  }

  // 3.1.7.	penalty
  responPenalty(res: string) {
    this.penalty = res;
    console.log("ตรวจสอบ pricePC " + this.penalty + typeof this.penalty)
  }

  responTotal(res: string) {
    this.totalAmount = res;
    console.log("ตรวจสอบ pricePC " + this.totalAmount + typeof this.totalAmount)
  }

  stringToNumber(data: string): number {
    if (!data) return 0;
    return Number(data.replace(/,/g, ''));
  }

  openTaxModal() {
    this.taxData = {
      filingType: this.filingType,
      month: this.month,
      year: this.year,
      saleAmount: this.stringToNumber(this.saleAmount),
      taxAmount: this.stringToNumber(this.taxAmount),
      surcharge: this.stringToNumber(this.surcharge),
      penalty: this.stringToNumber(this.penalty),
      totalAmount: this.stringToNumber(this.totalAmount) == 0 ? this.stringToNumber(this.sumAT) : this.stringToNumber(this.totalAmount)
    };

    this.taxDataJson = JSON.stringify(this.taxData, null, 2);

    this.taxModal.show();
  }

  closeTaxModal() {
    this.taxModal.hide();
  }

  convertNum() {
    // this.saleAmount = '';
    // this.taxAmount = '';

    const priceNumS = String(this.saleAmount).replace(/[^0-9.-]/g, '');
    const priceNumT = String(this.vat).replace(/[^0-9.-]/g, '');
    // console.log("ตัด priceNum " + priceNum + typeof priceNum);

    const priceTS = Number(priceNumS);
    const priceTT = Number(priceNumT);
    // console.log("แปลงเป็น num priceT " + priceT + typeof priceT);

    const sum = priceTS + priceTT;

    // const formatNumber = Number(priceNum);
    this.sumAT = sum.toLocaleString(undefined, { minimumFractionDigits: 2 });
    // console.log("แปลงกลับ format " + this.price + typeof this.price);
  }








}
