import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import { getCart, getTotalCartPrice } from "../cart/cartSlice";
import OrderItem from "./OrderItem";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useModal } from "../../context/ModalContext";
import { formatCurrency } from "../../utils/helpers";
import { CartItemType } from "../../types/cartItemType";

function OrderModal() {
  const { isOpen, setIsOpen, closeModal } = useModal();
  const cart = useSelector(getCart) as CartItemType[];

  const totalCartPrice = useSelector(getTotalCartPrice);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 w-full h-screen bg-[var(--backdrop-color)] backdrop-blur-sm z-[1000] transition-all duration-500">
        <DialogPanel className="w-full max-w-md rounded-md bg-white p-5 my-10 flex flex-col gap-4 mx-auto">
          <div>
            <img src="assets/images/icon-order-confirmed.svg" alt="icon" />
          </div>
          <div className="space-y-2">
            <h1 className="font-bold text-3xl">Order Confirmed</h1>
            <p className="font-normal text-xs text-[#927a7a]">
              We hope you enjoy your food!
            </p>
          </div>

          <ul className="bg-[#FDF6F3] divide-y p-4 rounded-md">
            {cart.map((order) => (
              <OrderItem order={order} key={order.name} />
            ))}

            <div className="flex justify-between items-center pt-4">
              <p className="font-medium text-sm text-[#927a7a]">Order Total</p>
              <span className="font-bold text-lg">
                {formatCurrency(totalCartPrice)}
              </span>
            </div>
          </ul>

          <Button onClick={closeModal} type="secondary">
            Start New Order
          </Button>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default OrderModal;
