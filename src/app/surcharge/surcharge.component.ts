import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-surcharge',
  templateUrl: './surcharge.component.html',
  styleUrls: ['./surcharge.component.css']
})
export class SurchargeComponent implements OnInit {
  @Output() selectSC = new EventEmitter<string>();
  @Input() vat!: string;


  constructor() { }

  ngOnInit(): void {
  }

  price = '';

  ngOnChanges(changes: SimpleChanges): void {
    this.onP();
  }

  onP() {

    if (!this.vat || this.vat.trim() === '') {
      this.price = '';
      return;
    }

    this.price = this.vat;
    const priceTax = Number(this.price);
    const priceResult = (priceTax * 0.01).toFixed(3);
    this.price = String(priceResult);

    this.selectSC.emit(this.price);
  }

}
