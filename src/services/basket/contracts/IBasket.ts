import IProduct from 'src/components/products/model/Iproduct';

export default interface IBasket {

    add(product : IProduct) : void;
    remove(product : IProduct) : void;
    items() : Promise<IProduct[]>;
    count() : Promise<number>;
    clear() : void;
    total() : Promise<number>;
    has(product : IProduct) : Promise<boolean>

}