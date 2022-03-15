import { useDispatch } from "react-redux";
import Axios from "../Axios/Axios";
import { initialLoad } from "../redux/feaures/cartitem";

export const add_to_cart = (pid,type) => {
    let products = JSON.parse(localStorage.getItem("cart")) || [];
    
    const found = products.some(
      (i) => i.id === pid
    );
    if(type === 'single' && found){
      return false;
    }else if (!found) {
      products.push({'id' : pid,'quantity': 1});
      localStorage.setItem("cart", JSON.stringify(products));
      return true;
    }  
}

export const increaseQuantity = (item,qty) =>{
  let existing_items = JSON.parse(localStorage.getItem("cart")) || [];
  existing_items = existing_items.filter((i) => {
    if (i.id == item.id) {
      if (qty > 1) {
        i.quantity = qty;
      }else{
        return i.quantity = 1
      }
    }

    return i
    
  });
  localStorage.setItem("cart", JSON.stringify(existing_items));
  
}

export const loadGuestCart = async () => {
  const items = JSON.parse(localStorage.getItem("cart")) || [];
  const response = await Axios.post("guest/carts/items", { items });
  if (response.status == 200) {
    return response.data;
  }
};

export const removeCart = (product_id) => {
  let existing_items = JSON.parse(localStorage.getItem("cart")) || [];
  let new_items = existing_items.filter((i) => {
    if (i.id != product_id) return i;
  });
  localStorage.setItem("cart", JSON.stringify(new_items));
  return new_items;
}