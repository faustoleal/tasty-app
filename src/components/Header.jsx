import Menu from "./Menu";
import FoodBankOutlinedIcon from "@mui/icons-material/FoodBankOutlined";

const Header = ({ recipes, showRecipeList }) => {
  return (
    <div className="header">
      <div className="logo">
        <FoodBankOutlinedIcon style={{ fontSize: "42px" }} />
        <h1>FoodRecipe</h1>
      </div>
      <Menu data={recipes} showRecipeList={showRecipeList} />
    </div>
  );
};

export default Header;
