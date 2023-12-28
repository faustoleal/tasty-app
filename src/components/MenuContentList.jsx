const MenuContentList = ({ data, showRecipeList, setShow, setOpen }) => {
  function handleBtn() {
    showRecipeList(data);
    setOpen(false);
    setShow(true);
  }

  return <li onClick={handleBtn}>{data.name}</li>;
};

export default MenuContentList;
