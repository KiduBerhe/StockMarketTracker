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
      console.log(data);
      this.getStocks();
    })
  }



  public onDeleteStock(id: number): void {
    this.stockService.deleteStock(id).subscribe({
      next: response => {
        console.log(response);
        this.getStocks();
      },
      error: error => {
        alert(error.message);
      }
    });
  }

  // public onOpenModal(stock: Stock, mode: string): void {
  //   const container = document.getElementById('main-container');
  //   const button = document.createElement('button');
  //   button.type = 'button';
  //   button.style.display = 'none';
  //   button.setAttribute('data-toggle', 'modal');
  //   if (mode === 'add') {
  //     button.setAttribute('data-target', '#addStockModal');
  //   }
  //   if (mode === 'edit') {
  //     this.editStock = stock;
  //     button.setAttribute('data-target', '#updateStockModal');
  //   }
  //   if (mode === 'delete') {
  //     this.deleteStock = stock;
  //     button.setAttribute('data-target', '#deleteStockModal');
  //   }
  //   container?.appendChild(button);
  //   button.click();
  // }


}
