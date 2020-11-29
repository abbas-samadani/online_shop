import IProduct from 'src/components/products/model/Iproduct';

export default interface IBasket {

    add(product : IProduct) : void;
    remove(product : IProduct) : void;
    items() : IProduct[];
    count() : number;
    clear() : void;
    total() : number;
    has(product : IProduct) : boolean

}