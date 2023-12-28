import { useState } from "react";
import MenuContentList from "./MenuContentList";
import { Link } from "react-router-dom";

const MenuContent = ({ res, showRecipeList, setShow }) => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  return (
    <div className="menu-container" onClick={handleClick}>
      <h3 className="menu-title">{res.name}</h3>
      <ul className={`menu-content ${open ? "is-active" : "is-hidden"}`}>
        {res.type.length > 0 ? (
          res.type.map((el) => (
            <Link to={`/recipelist/${el.id}`} key={el.id}>
              <MenuContentList
                key={el.id}
                data={el}
                showRecipeList={showRecipeList}
                setOpen={setOpen}
                setShow={setShow}
              />
            </Link>
          ))
        ) : (
          <div></div>
        )}
      </ul>
    </div>
  );
};

export default MenuContent;
