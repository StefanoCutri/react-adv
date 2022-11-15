import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/index";
import '../styles/custom-styles.css';
import coffemug from '../assets/coffee-mug.png';

const product = {
    id: '1',
    title: "Coffe Card",
    img: coffemug
}

export const ShoppingPage = () => {
    return (
        <div>
        <h1>Shopping Page</h1>
        <hr/>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>

        <ProductCard
            product={product}
            className="bg-dark text-white"
         >
            <ProductCard.Image img={product.img} className='custom-img'/>
            <ProductCard.Title title="Cafe!" className="text-bold"/>
            <ProductCard.Buttons className="custom-buttons"/>
        </ProductCard>
        
        <ProductCard 
            product={product}
            className='bg-dark text-white'
        >
            <ProductImage img={product.img} className='custom-img'/>
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons"/>
        </ProductCard>

        <ProductCard 
            product={product}
            className='bg-dark text-white'
            style={{
                backgroundColor: "#61DAFB"           
             }}
        >
            <ProductImage img={product.img} className='custom-img'/>
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons"/>
        </ProductCard>
        </div>
        </div>
    )
}
