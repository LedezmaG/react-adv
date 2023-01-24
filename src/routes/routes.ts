import { lazy, LazyExoticComponent} from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/pages";

type JSXComponent = () => JSX.Element

interface Route  {
    to: string;
    path: string;
    label: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const Lazy1 = lazy(() => import( /* webpackChunkName: "lazyPage1" */ './../lazyload/pages/LazyPage1') )
const Lazy2 = lazy(() => import( /* webpackChunkName: "lazyPage2" */ './../lazyload/pages/LazyPage2') )
const Lazy3 = lazy(() => import( /* webpackChunkName: "lazyPage3" */ './../lazyload/pages/LazyPage3') )

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        label: 'Lazy 1',
        Component: Lazy1
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        label: 'Lazy 2',
        Component: Lazy2
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        label: 'Lazy 3',
        Component: Lazy3
    },
]