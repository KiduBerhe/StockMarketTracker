import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css'],
})
export class UpdateStockComponent implements OnInit {
  id!: number;
  stock: Stock = new Stock();

  constructor(
    private stockService: StockService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // ngOnInit(): void {
  //   this.id = this.route.snapshot.params['id'];

  //   this.stockService.getStockById(this.id).subscribe({
  //     next: (data) => {
  //       this.stock = data;
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     }
  //   });
  // }
  onsubmit() {
    this.stockService.updateStock(this.stock).subscribe({
      next: data => this.goToStockList(),
      error: (error) => console.log(error),
    });
  }

  goToStockList() {
    this.router.navigate(['/stocks']);
  }
}
