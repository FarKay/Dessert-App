/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
function DecrementButton({ onClick }) {
  return (
    <button onClick={onClick} className="border py-2 px-1 rounded-full">
      <img src="assets/images/icon-decrement-quantity.svg" alt="-" />
    </button>
  );
}

export default DecrementButton;
