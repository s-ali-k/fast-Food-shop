export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    };
    
    export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    };
    
    export interface User{
    id:number;
    name:string;
    lastName:string;
    email:string;
    phone:number;
    address:string
    }
    export interface IProps {
        imageUrl: string;
        name: string;
        price: number;
        description: string;
        id: number;
      }