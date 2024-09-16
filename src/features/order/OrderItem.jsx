/* eslint-disable react/prop-types */

import { formatCurrency } from "../../utils/helpers";

/* eslint-disable react/react-in-jsx-scope */
function OrderItem({ order }) {
  const { name, image, quantity, price, totalPrice } = order;

  console.log(order);

  return (
    <li className="flex justify-between flex-row items-center py-3">
      <div className="flex gap-2 items-center">
        <img src={image.desktop} alt={name} className="h-10 w-10" />
        <div>
          <span className="font-bold text-[11px] text-[#695757]">{name}</span>
          <div className="flex gap-3">
            <span className="text-[#994040] font-bold text-sm">
              {quantity}&times;
            </span>
            <span className="font-normal text-sm text-[#927a7a]">
              @ {formatCurrency(price)}
            </span>
          </div>
        </div>
      </div>
      <span className="font-medium  text-[#463636]">
        {formatCurrency(totalPrice)}
      </span>
    </li>
  );
}

export default OrderItem;
