import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    data: Product[] = [];

    constructor() {}

    loadProduct(): Observable<Product[]> {
        return timer(500)
        .pipe(
            map(() => {
                if (this.data.length === 0) {
                    this.data = [
                        {title: 'Chivas 12', price: 25000, cantidad: 0, impuesto: 0, subtotal: 0,
                        img: 'http://www.tuckshop.sg/wp-content/uploads/2015/12/Chivas-12-300x300.jpg'},
                        {title: 'Poker Lata', price: 2500, cantidad: 0, impuesto: 0, subtotal: 0,
                        img: 'https://i1.wp.com/supertiendaslidl.com/wp-content/uploads/2017/11/0000111_cerveza-poker-lata-330-cc_550.png?fit=300%2C300&ssl=1'},
                        {title: 'Ron viejo de Caldas', price: 32000, cantidad: 0, impuesto: 0, subtotal: 0,
                        img: 'https://media-verticommnetwork1.netdna-ssl.com/wines/ron-viejo-de-caldas-3-anos-new-1238411-s209_p.jpg'},
                        {title: 'Papas Margarita', price: 2000, cantidad: 0, impuesto: 0, subtotal: 0,
                        img: 'http://www.tumercado.co/1268/papas-margarita-pollo-110gr.jpg'},
                        {title: 'Hersheys', price: 5000, cantidad: 0, impuesto: 0, subtotal: 0,
                        img: 'http://www.cvs.com/bizcontent/merchandising/productimages/large/3400017013.jpg'}
                    ];
                }
                return this.data
            })
        );
    }
}

export class Product {
    constructor(
        public img: String,
        public title: String,
        public price: any,
        public cantidad: any,
        public impuesto: any,
        public subtotal: any
    ) {}
}
