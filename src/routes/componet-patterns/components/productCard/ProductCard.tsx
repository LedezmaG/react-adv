import { createContext } from 'react';

import { ProductContexProps, ProductProps } from '../../interfaces/interfaces';
import { useProduct } from '../../hooks/useProduct';

import styles from '../../styles/styles.module.css'


export const ProductContext = createContext({} as ProductContexProps)

const { Provider } = ProductContext

export const ProductCard = ( {product, children} : ProductProps ) => {

    const { counter, increaseBy } = useProduct()

    return (
        <Provider 
            value={{
                product,
                counter, 
                increaseBy
            }} 
        >
            <div className={styles.productCard} >
                {children}
            </div>
        </Provider>
    ) 
}