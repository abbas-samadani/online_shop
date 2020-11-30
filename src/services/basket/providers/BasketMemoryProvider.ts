import IBasket from '../contracts/IBasket';
import IProduct from 'src/components/products/model/Iproduct';
import { Promise } from 'mongoose';



export default class BasketMemoryProvider implements IBasket {

    private basketItem: IProduct[] = [];

    public add(product: IProduct): void {
        this.basketItem.push(product);
    }
    public remove(product: IProduct): void {
        if (this.has(product)) {
            this.basketItem.splice(this.basketItem.indexOf(product), 1);
        }
    }
    public items(): Promise<IProduct[]> {
        return Promise.resolve(this.basketItem);
    }
    public count(): Promise<number> {
        return Promise.resolve(this.basketItem.length);
    }
    public clear(): void {
        this.basketItem = [];
    }
    public total(): Promise<number> {
        return Promise.resolve(this.basketItem.reduce((total, product: IProduct) => {
            return total + product.price
        }, 0))
    }

    public has(product: IProduct): Promise<boolean> {
        return Promise.resolve(this.basketItem.includes(product))
    }

}