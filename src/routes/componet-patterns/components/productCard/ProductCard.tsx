import { createContext, ReactElement } from 'react';

import { Product, ProductContexProps } from '../../interfaces/interfaces';
import { useProduct } from '../../hooks/useProduct';

import styles from '../../styles/styles.module.css'

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
}

export const ProductContext = createContext({} as ProductContexProps)

const { Provider } = ProductContext

export const ProductCard = ( {product, children, className} : Props ) => {

    const { counter, increaseBy } = useProduct()

    return (
        <Provider 
            value={{
                product,
                counter, 
                increaseBy
            }} 
        >
            <div className={`${styles.productCard} ${className}`} >
                {children}
            </div>
        </Provider>
    ) 
}