import MenuContent from "./MenuContent";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Menu = ({ data, showRecipeList }) => {
  const [show, setShow] = useState(true);

  function handleShow() {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  }
  return (
    <>
      <button className="menu-icon" onClick={handleShow}>
        <MenuIcon />
      </button>
      <aside className={`menu ${show ? "is-show" : "is-none"}`}>
        {data.length > 0 ? (
          data.map((el) => (
            <MenuContent
              key={el.id}
              res={el}
              showRecipeList={showRecipeList}
              setShow={setShow}
            />
          ))
        ) : (
          <div></div>
        )}
      </aside>
    </>
  );
};

export default Menu;
