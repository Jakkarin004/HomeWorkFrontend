import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.css']
})
export class PenaltyComponent implements OnInit, OnChanges {
  @Output() selectPC = new EventEmitter<string>();
  @Input() vat!: string;

  constructor() { }

  ngOnInit(): void {
  }

  price = '';

  ngOnChanges(changes: SimpleChanges): void {
    this.onP();
  }

  onP() {

    if(!this.vat || this.vat.trim() === ''){
      this.price = '';
      return;
    }

    this.price = this.vat;
    const priceTax = Number(this.price);
    const priceResult = (priceTax).toFixed(2);
    this.price = String(priceResult);

    this.selectPC.emit(this.price);
  }

}
