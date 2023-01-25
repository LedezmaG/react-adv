import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/productCard';
import _img from '../coffee-mug.png'

const Products = {
    id: "1",
    title: "Coffee Mug",
    img: _img
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping page</h1>
        <hr />
        <div 
            style={{
                display:'flex', 
                flexDirection: 'row', 
                flexWrap: 'wrap'
            }}
        >
            <ProductCard product={Products}>
                <ProductCard.Image />
                <ProductCard.Title />
                <ProductCard.Buttons />
            </ProductCard>
            
            <ProductCard product={Products}>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </ProductCard>
        </div>
    </div>
  )
}


export default ShoppingPage