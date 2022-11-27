import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {

  id!: number;
  stock: Stock | undefined;
  
  constructor(private route: ActivatedRoute, private stockService: StockService){}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.stock = new Stock();
    this.stockService.getStockById(this.id).subscribe(data => this.stock = data);
  }
}
