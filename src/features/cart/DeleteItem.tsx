import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import { AppDispatch } from "../../store";

interface DeleteItemProps {
  name: string;
}

function DeleteItem({ name }: DeleteItemProps) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <button
      onClick={() => dispatch(deleteItem(name))}
      className="rounded-full border"
    >
      <img src="assets/images/icon-remove-item.svg" alt="X" />
    </button>
  );
}

export default DeleteItem;
