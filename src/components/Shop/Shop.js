import React from 'react';
import fakeData from '../../fakeData';
//import const [state, setstate] = useState(initialState)
import {useState} from 'react';
import './Shop.css';
import Product from '../Product/Product';


const Shop = () => {
    const first10=fakeData.slice(0,10);
    const [products,setProducts]=useState(first10);
    //const first10=fake.slice(0,10);

       const handleAddProduct=(product)=>{
           console.log('Product Added',product);
       }


    return (
        <div className="shop-container">
            <div className="product-container">
            
                {
                 products.map(pd=><Product
                    handleAddProduct={handleAddProduct}
                    product={pd} ></Product>)

                }
           
            </div>

           <div className="cart-container">
             <h3>This Is Cart</h3>
           </div>
        </div>
    );
};

export default Shop;