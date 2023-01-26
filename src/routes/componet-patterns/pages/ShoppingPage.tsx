import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/productCard';
import _img from '../coffee-mug.png'

import '../styles/custom-styles.css'

const Products = {
    id: "1",
    title: "Coffee Mug",
    img: _img
}

export const ShoppingPage = () => {
  return (
    <div >
        <h1>Shopping page</h1>
        <hr />
        <div 
            style={{
                display:'flex', 
                flexDirection: 'row', 
                flexWrap: 'wrap'
            }}
        >
            <ProductCard product={Products} className='bg-dark'>
                <ProductCard.Image className='img-custom' />
                <ProductCard.Title className='txt-white' />
                <ProductCard.Buttons className='btn-custom' />
            </ProductCard>
            
            <ProductCard 
                product={Products}
                className='bg-dark'
            >
                <ProductImage className='img-custom'/>
                <ProductTitle className='txt-white'/>
                <ProductButtons className='btn-custom'/>
            </ProductCard>
            
            <ProductCard 
                product={Products}
            >
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </ProductCard>
        </div>
    </div>
  )
}


export default ShoppingPage