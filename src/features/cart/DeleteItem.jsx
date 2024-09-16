/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

/* eslint-disable react/react-in-jsx-scope */
function DeleteItem({ name }) {
  const dispatch = useDispatch();

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
