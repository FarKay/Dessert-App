/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseQuantity, increaseQuantity } from "./cartSlice";
import DecrementButton from "../../ui/DecrementButton";
import IncrementButton from "../../ui/IncrementButton";

/* eslint-disable react/react-in-jsx-scope */
function UpdateItemQuantity({ name, currentQuantity }) {
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increaseQuantity(name));
  }

  function handleDecrement() {
    dispatch(decreaseQuantity(name));
  }

  return (
    <div className="flex justify-center items-center relative -top-5">
      <Button type="selected">
        <DecrementButton onClick={handleDecrement} />
        <span>{currentQuantity}</span>
        <IncrementButton onClick={handleIncrement} />
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
