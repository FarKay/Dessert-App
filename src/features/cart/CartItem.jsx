/* eslint-disable react/prop-types */

import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";

/* eslint-disable react/react-in-jsx-scope */
function CartItem({ item }) {
  const { name, quantity, totalPrice, price } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between">
        <div>
          <span className="font-bold text-[14px] text-[#695757]">{name}</span>
          <div className="flex flex-row space-x-4">
            <span className="text-[#994040] font-semibold text-[16px]">
              {quantity}&times;
            </span>
            <div className="flex flex-row gap-3">
              <span className="text-[#927a7a]">@{formatCurrency(price)}</span>
              <span className="text-[#927a7a] font-semibold">
                {formatCurrency(totalPrice)}
              </span>
            </div>
          </div>
        </div>
        <div>
          <DeleteItem name={name} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
