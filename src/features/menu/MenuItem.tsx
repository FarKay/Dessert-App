import { useSelector } from "react-redux";
import { Menu } from "../../types/menuData";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantity } from "../cart/cartSlice";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";

interface MenuItemProps {
  menu: Menu;
}

type NewItem = {
  name: string;
  price: number;
  totalPrice: number;
  image: string;
};

function MenuItem({ menu }: MenuItemProps) {
  const dispatch = useDispatch<AppDispatch>();

  const { name, category, price, image } = menu;

  const currentQuantity = useSelector(getCurrentQuantity(name));

  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem: NewItem = {
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
        src={image}
        alt={name}
        className={`h-[300px] w-[300px] rounded-lg ${
          isInCart ? "border-[#c44e2a] border" : ""
        }`}
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
