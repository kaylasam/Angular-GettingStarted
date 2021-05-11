import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']     //can add more styles here
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';             // binds to the pageTitle property in the template using interpolation
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;                     //keeps track if images are shown in the UI
    
    // updates value in listFilter variable when user changes it
    private _listFilter: string = ' ';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        console.log('In setter: ', value);
    }

    products: IProduct[] = [                             // "any" used when we dont know/care what the property type is
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2021",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "assets/images/leaf_rake.png"
      },
      {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
      }
    ];  
    
    toggleImage(): void {                          //sets showImage to the negation of the current showImage value
        this.showImage = !this.showImage
    }

    ngOnInit(): void {
        this.listFilter = 'cart';                   //sets default value for listFilter
    }
}