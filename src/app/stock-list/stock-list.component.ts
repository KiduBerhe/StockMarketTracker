import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { StockService } from '../stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
})
export class StockListComponent implements OnInit {

  public stocks: Stock[] = [];
  public stock: Stock = new Stock;

  constructor(private stockService: StockService, private router: Router) {}

  ngOnInit(): void {
    this.getStocks();
  }

  getStocks() {
    this.stockService.getStockList().subscribe(data => {
      this.stocks = data;
    });
  }

  stockDetails(id: number){
    this.router.navigate(['stock-details', id]);
  }

  updateStock(id: number){
    this.router.navigate(['update-stock', id]);
  }

  deleteStock(id: number){
    this.stockService.deleteStock(id).subscribe(data =>{
      this.getStocks();
    })
  }

}

