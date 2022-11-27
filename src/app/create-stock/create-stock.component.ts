import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from '../stock';
import { StockDetailsComponent } from '../stock-details/stock-details.component';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
})
export class CreateStockComponent implements OnInit {
  stock: Stock = new Stock();

  constructor(private stockService: StockService, private router: Router) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  saveStock() {
    this.stockService.createStock(this.stock).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  goToStockList(){
    this.router.navigate(['/stocks']);
  }

  onSubmit(){
    console.log(this.stock);
    this.saveStock();
  }
}
