import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  }

  public onAddStock(addForm: NgForm): void {
    this.stockService.addStock(addForm.value)
      .subscribe({
        next: response => {
          console.log(response);
          this.router.navigate(['/stocks']);
          addForm.reset();
        },
        error: error => {
          alert(error.message);
          addForm.reset();
        }
      });
  }

}
