import IBasket from '../contracts/IBasket';
import IProduct from 'src/components/products/model/Iproduct';



export default class BasketMemoryProvider implements IBasket {

    private basketItem : IProduct[] = [];

    public add(product: IProduct): void {
        this.basketItem.push(product);
    }    
    public remove(product: IProduct): void {
        if(this.has(product)) {
            this.basketItem.splice(this.basketItem.indexOf(product) , 1);
        }
    }
    public items() : IProduct[] {
        return this.basketItem
    }
    public count(): number {
        return this.basketItem.length;
    }
    public clear(): void {
        this.basketItem = [];
    }
    public total(): number {
        return this.basketItem.reduce((total , product : IProduct)=>{
            return total + product.price
        },0)
    }

    public has(product : IProduct) : boolean {
        return this.basketItem.includes(product)
    }

}