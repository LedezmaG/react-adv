import { Props as ProductCardProps} from "../components/productCard/ProductCard";
import { Props as ProductButtonsProps } from "../components/productCard/ProductButtons";
import { Props as ProductImageProps} from "../components/productCard/ProductImage";
import { Props as ProductTitleProps} from "../components/productCard/ProductTitle";

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

export interface ProductCardPrevProps {
    ({children, product}: ProductCardProps): JSX.Element;
    Title: (Props: ProductTitleProps) => JSX.Element;
    Image: (Props: ProductImageProps) => JSX.Element;
    Buttons: (Props: ProductButtonsProps) => JSX.Element;
}