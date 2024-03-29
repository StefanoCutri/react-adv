import { ReactElement } from "react";

export interface ProductCardProps {
    product: Product;
    children: ReactElement|ReactElement[]
  }
  
  export interface Product {
    id: string;
    title: string;
    img?: string;
  }
  
  export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
  }

  export interface ProductButtonsProps {
    increaseBy: (value: number) => void;
    counter: number
   }

   export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Title: ({ title }: {title?: string | undefined;}) => JSX.Element;
    Image: ({ img }: {
        img?: string | undefined;
    }) => JSX.Element;
    Buttons: ({ img }: {
        img?: string | undefined;
    }) => JSX.Element;
   }