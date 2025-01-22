import { menuData } from "../../data/menuData";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <ul className="sm:grid sm:grid-rows-3 sm:grid-cols-3 gap-4">
      {menuData.map((menu) => (
        <MenuItem menu={menu} key={menu.name} />
      ))}
    </ul>
  );
}

export default Menu;
