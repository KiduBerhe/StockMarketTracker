import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {
  
  stock: Stock = new Stock();

  constructor(
    private stockService: StockService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public onUpdateStock(stock: Stock): void {
    this.stockService.updateStock(stock).subscribe({
      next: response => {
        console.log(response);
        this.router.navigate(['/stocks']);
      },
      error: error => {
        alert(error.message);
      }
    });
  }
}
