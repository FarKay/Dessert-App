import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { decreaseQuantity, increaseQuantity } from "./cartSlice";
import Button from "../../ui/Button";
import DecrementButton from "../../ui/DecrementButton";
import IncrementButton from "../../ui/IncrementButton";

interface UpdateItemQuantityProps {
  name: string;
  currentQuantity: number;
}

function UpdateItemQuantity({
  name,
  currentQuantity,
}: UpdateItemQuantityProps) {
  const dispatch: AppDispatch = useDispatch();

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
