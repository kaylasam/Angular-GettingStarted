// nested component 
import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component ({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating: number = 0;        // add Input decorator to any property we want passed in 
    cropWidth: number = 75;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();     //@Output requires event

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }

    onClick(): void {                   // called when user clicks on the stars
        // use event property (ratingClicked) and emit method (specific to EventEmitter) to pass the string
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`)       // ` for template literal use
    }
}
