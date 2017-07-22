
import { Component } from "@angular/core";

@Component({
    selector: 'app-product-listing',
    templateUrl: 'product-listing.component.html'
})
export class ProductListingComponent {

    products: any[];

    cart: any[] = [];
    item = "fsd";
    price = 10;
    constructor() {
        this.products = [
            { id: 1, name: "Shirt" },
            { id: 2, name: "Pants" },
            { id: 3, name: "Shoes" },
            { id: 4, name: "Jeans" }
        ];
    }

    pushToCart(data) {
        let matched: any[] = this.cart.filter(i => { return i.id == data.id });
        if (matched && matched.length) {
            matched[0].qty += 1;
        } else {
            // typescript copy of object
            // let cdata = {...data};

            // old javascript copy of object
            let cdata: any = { name: data.name, id: data.id };
            
            cdata.qty = 1;

            this.cart.push(cdata);
        }

    }
}