import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']     //can add more styles here
})
export class ProductListComponent implements OnInit, OnDestroy{
    pageTitle: string = 'Product List';             // binds to the pageTitle property in the template using interpolation
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;                     //keeps track if images are shown in the UI
    errorMessage: string = ' ';
    sub: Subscription | undefined;

    // updates value in listFilter variable when user changes it
    private _listFilter: string = ' ';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        console.log('In setter: ', value);
        this.filteredProducts = this.performFilter(value);      //assigns filtered products to filteredProducts
    }

    filteredProducts: IProduct[] = [];
    products: IProduct[] = [];                             // "any" used when we dont know/care what the property type is 
    
    constructor(private productService: ProductService){}

    performFilter(filterBy: string): IProduct[] {       //function takes in filter string and returns array of products
        filterBy = filterBy.toLocaleLowerCase();        //convert filter string to lowercase for easy comparison
        return this.products.filter((product: IProduct) => 
        product.productName.toLocaleLowerCase().includes(filterBy));
    }

    toggleImage(): void {                          //sets showImage to the negation of the current showImage value
        this.showImage = !this.showImage
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe({           //subscribes to observable
            next: products => {
                this.products = products;           //handles the emitted iten
                this.filteredProducts = this.products;
            },
            error: err => this.errorMessage = err           //handles any errors
        });
    }

    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }
    
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List ' + message;
    }
}