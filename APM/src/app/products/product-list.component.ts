import { Component } from "@angular/core";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    pageTitle: string = 'Product List';             //binds to the pageTitle property in the template using interpolation

}