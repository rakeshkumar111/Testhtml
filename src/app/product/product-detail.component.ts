
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-product-detail',
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent {

    @Input()
    product: any;

    @Input()
    mode:number;

    @Output()
    onAddToCart: EventEmitter<any> = new EventEmitter<any>();

    addToCart() {
        this.onAddToCart.emit(this.product);
    }

}