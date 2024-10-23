import {useDispatch, useSelector} from "react-redux";
import {clearCart} from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart=()=> {      // remember initialize the function with starting with capital letters not like "cart" it would be "Cart" ,i tell you because you have already wested 1 hour in this
    //  const store=useSelector((store)=>store);   //we can also write like this but this codeis less efficient 
    //  const cartItems=store.cart.items;
     // better to write below code
     const cartItems=useSelector((store)=>store.cart.items); // useSelector means you are subscribing to the specific portion of the store
     console.log(cartItems);

     const dispatch=useDispatch(); 

     const handleClearCart=()=>{
         dispatch(clearCart());
     };
    
    return (
      <div className="text-center m-4 p-4">
        
          <div className="w-6/12 m-auto">
           <button className="p-2 m-2 bg-black text-white rounded-lg"
           onClick={handleClearCart}>Clear Cart</button>
           {cartItems.length==0&&<h1>Cart is empty add Items to cart!</h1>}
            <ItemList items={cartItems}/>
            </div>
          
          </div>
    );
  };
  
  export default Cart;