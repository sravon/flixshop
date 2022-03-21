import { useDispatch } from "react-redux";
import Axios from "../Axios/Axios";
import { initialLoad } from "../redux/feaures/cartitem";

const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return {
      Authorization: "Bearer " + token,
    }
  }else{
    return false
  };
}

export const add_to_cart = async (pid,type) => {
  const token = localStorage.getItem("token");
  if (token) {
    const headers = {
      Authorization: "Bearer " + token,
    };
    const response = await Axios.post("users/carts/add", { pid } , { headers });
    if (response.status === 200) {
      console.log(response.data);
      return false
    }else if (response.status === 201) {
      console.log(response);
      return true
    }
  }else{
    let products = JSON.parse(localStorage.getItem("cart")) || [];
    const found = products.some(
      (i) => i.id === pid
    );
    if(type === 'single' && found){
      return true;
    }else if (!found) {
      products.push({'id' : pid,'quantity': 1});
      localStorage.setItem("cart", JSON.stringify(products));
      return false;
    } 
  }
     
}

const guestQuantity = (item,qty) => {
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

export const increaseQuantity = async (item,qty) =>{
  const token = localStorage.getItem("token");
  if (token) {
    const headers = {
      Authorization: "Bearer " + token,
    };
    const items = {id: item.id,quantity: qty}
    const response = await Axios.post("users/carts/updatequantity", items , { headers });
    if (response.status === 200) {
      console.log(response.data);
      return false
    }
  }else{
    return guestQuantity(item,qty)
  }
  
}

export const loadGuestCart = async () => {
  const items = JSON.parse(localStorage.getItem("cart")) || [];
  const response = await Axios.post("guest/carts/items", { items });
  if (response.status == 200) {
    return response.data;
  }
};
export const loadUserCart = async () => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: "Bearer " + token,
  };
  const response = await Axios("/users/carts/itemlists", { headers });
  if (response.status == 200) {
    return response.data;
  }
};

export const logUserCart = async () => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: "Bearer " + token,
  };
  const items = JSON.parse(localStorage.getItem("cart")) || [];
  const response = await Axios.post("users/carts/items", { items }, { headers });
  if (response.status == 200) {
    console.log(response.data)
    localStorage.removeItem("cart")
    return response.data;
  }
};

export const removeCart = async (product_id) => {
  if(checkToken){
    const response = await Axios.post("users/carts/removecartitem", items , { headers });
    if (response.status === 200) {
      console.log(response.data);
      return false
    }
  }else{
    let existing_items = JSON.parse(localStorage.getItem("cart")) || [];
    let new_items = existing_items.filter((i) => {
      if (i.id != product_id) return i;
    });
    localStorage.setItem("cart", JSON.stringify(new_items));
    return new_items;
  }
  
}