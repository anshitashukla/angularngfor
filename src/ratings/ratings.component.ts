import { Component, Input } from '@angular/core'
@Component({
selector: 'rating',
templateUrl:'./ratings.component.html',
styles: [`
.glyphicon-star {
color: orange;
}
`]
})
export class RatingsComponent{
    @Input('rating-value') rating = 0;
    @Input() numOfReviews = 0;
    
onClick(ratingValue){
this.rating = ratingValue;
}
}
