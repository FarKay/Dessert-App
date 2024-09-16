/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
function IncrementButton({ onClick }) {
  return (
    <button onClick={onClick} className="border py-1 px-1 rounded-full">
      <img src="assets/images/icon-increment-quantity.svg" alt="+" />
    </button>
  );
}

export default IncrementButton;
