/* eslint-disable react/react-in-jsx-scope */
function EmptyCart() {
  return (
    <div className="bg-[#ffffff] p-5  flex flex-col gap-5 rounded-md">
      <h1>
        Your Cart <span>(0)</span>
      </h1>
      <div className="flex flex-col justify-center items-center gap-3">
        <img src="assets/images/illustration-empty-cart.svg" alt="empty-cart" />
        <p>Your added items will appear here</p>
      </div>
    </div>
  );
}

export default EmptyCart;
