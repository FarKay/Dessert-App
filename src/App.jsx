import { ModalProvider } from "./context/ModalContext";
import Cart from "./features/cart/Cart";
import Menu from "./features/menu/Menu";
// import Order from "./features/order/Order";

/* eslint-disable react/react-in-jsx-scope */
function App() {
  return (
    <ModalProvider>
      <div className="flex flex-col mx-auto items-center my-5 bg-[#FDF6F3] justify-center gap-5 scroll-auto sm:h-screen sm:flex sm:flex-row sm:items-start">
        <div className="">
          <div className="font-bold text-[2rem] text-[#492b1e] mb-3">
            Desserts
          </div>
          <Menu />
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </ModalProvider>
  );
}

export default App;
