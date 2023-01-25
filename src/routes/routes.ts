import { lazy, LazyExoticComponent} from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/pages";

type JSXComponent = () => JSX.Element

interface Route  {
    to: string;
    path: string;
    label: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const Shopping = lazy(() => import( /* webpackChunkName: "Shopping" */ './componet-patterns/pages/ShoppingPage') )

export const routes: Route[] = [
    {
        to: '/shopping',
        path: 'shopping',
        label: 'Shopping',
        Component: Shopping
    }
]