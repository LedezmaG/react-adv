import { CSSProperties, useContext } from "react";
import { ProductContext } from './ProductCard';
import _noImage from '../../assets/no-image.jpg';
import style from '../../styles/styles.module.css'

export interface Props {
    img?: string;
    className?: string;
    styles?: CSSProperties;
}

export const ProductImage = ({ img, className, styles }: Props) => {

    const { product } = useContext(ProductContext)
    let imgToShow: string = "";

    if (img) {
        imgToShow = product.img;
    } else if (product.img) {
        imgToShow = product.img;
    } else {
        imgToShow = _noImage;
    }

    return(
        <img 
            src={imgToShow} 
            className={`${style.productImg} ${className}`} 
            style={styles}
            alt="Porduct img" 
        />
    )
}