export interface Invoice{
    id?: number;
    itemsValue : number;
    serviceValue : number;
    discount : number;
    tailDiscount : number;
    tailDiscountValue : number;
    totDiscount : number;
    taxable : number;
    totTax : number;
    netPay : number;
}