// nested component 
import { Component, Input, OnChanges } from "@angular/core";

@Component ({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating: number = 0;        // add Input decorator to any property we want passed in 
    cropWidth: number = 75;

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }

    onClick(): void {                   // called when user clicks on the stars
        console.log(`The rating ${this.rating} was clicked!`)       // ` for template literal use
    }
}
