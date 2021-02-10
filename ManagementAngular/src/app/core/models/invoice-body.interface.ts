export interface Invoice{
    id?: number;
    item: number;
    quantity: number;
    percDiscount : number;
    totDiscount : number;
    netPrice : number; 
}