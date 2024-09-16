import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { getCart, getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
import EmptyCart from "./EmptyCart";
import { useModal } from "../../context/ModalContext";

import OrderModal from "../order/OrderModal";

/* eslint-disable react/react-in-jsx-scope */
function Cart() {
  const { openModal } = useModal();

  const cart = useSelector(getCart);

  const totalCartQuantity = useSelector(getTotalCartQuantity);

  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="bg-[#ffffff] p-5 flex flex-col gap-4 rounded-lg">
      <h1 className="text-[#c44e2a] text-[2rem] font-bold">
        Your Cart <span>({totalCartQuantity})</span>
      </h1>

      <ul className="divide-y">
        {cart.map((item) => (
          <CartItem item={item} key={item.name} />
        ))}
      </ul>

      <div className="flex justify-between items-center">
        <span className="text-[#695757]">Order Total</span>
        <span className="font-bold text-[#492b1e] text-[20px]">
          {formatCurrency(totalCartPrice)}
        </span>
      </div>

      <div className="flex items-center gap-2 py-2 px-5 my-2 bg-[#FDF6F3] rounded-md justify-center">
        <i>
          <img src="assets/images/icon-carbon-neutral.svg" />
        </i>
        <p>
          This is a <span className="font-semibold">carbon-neutral</span>{" "}
          delivery
        </p>
      </div>

      <Button onClick={openModal} type="secondary">
        Confirm Order
      </Button>

      <OrderModal />
    </div>
  );
}

export default Cart;
