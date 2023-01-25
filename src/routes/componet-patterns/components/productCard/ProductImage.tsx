import { useContext } from "react";
import { ProductContext } from './ProductCard';
import _noImage from '../../assets/no-image.jpg';
import styles from '../../styles/styles.module.css'

export const ProductImage = ({ img = "" }) => {

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
        <img src={imgToShow} className={styles.productImg} alt="Porduct img" />
    )
}