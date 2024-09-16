import menuData from "../../data";
import MenuItem from "./MenuItem";

/* eslint-disable react/react-in-jsx-scope */
function Menu() {
  return (
    <ul className="sm:grid sm:grid-rows-3 sm:grid-cols-3 gap-4">
      {menuData.map((menu) => (
        <MenuItem key={menu.name} menu={menu} />
      ))}
    </ul>
  );
}

export default Menu;
