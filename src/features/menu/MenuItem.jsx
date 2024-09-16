/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantity } from "../cart/cartSlice";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

/* eslint-disable react/react-in-jsx-scope */
function MenuItem({ menu }) {
  const dispatch = useDispatch();

  const { name, category, price, image } = menu;

  const currentQuantity = useSelector(getCurrentQuantity(name));

  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      name,
      price,
      totalPrice: price,
      image,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li>
      <img
        src={image.desktop}
        alt={name}
        className="h-[300px] w-[300px] rounded-lg"
      />

      {!isInCart ? (
        <div className="flex justify-center items-center relative -top-5">
          <Button onClick={handleAddToCart} type="primary">
            <i>
              <img src="assets/images/icon-add-to-cart.svg" alt="icon" />
            </i>
            Add to Cart
          </Button>
        </div>
      ) : (
        <UpdateItemQuantity currentQuantity={currentQuantity} name={name} />
      )}

      <h3>{category}</h3>
      <p>{name}</p>
      <span>{formatCurrency(price)}</span>
    </li>
  );
}

export default MenuItem;
