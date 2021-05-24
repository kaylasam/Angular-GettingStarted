import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //get product id from URL 
    //use snapshot since this value never changes when navigating in the product detail page
    const id = Number(this.route.snapshot.paramMap.get('id'));    // change id type from string to number 
    this.pageTitle += `: ${id}`;    //adds product id to the page title for that specific product detail page
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
