import { ReactElement } from 'react';

export interface ProductProps {
    product: Product;
    children: ReactElement | ReactElement[]
}

export interface Product {
    id: string;
    title: string;
    img: string;
}

export interface ProductContexProps {
    product: Product;
    counter: number;
    increaseBy: (value: number) => void;
}