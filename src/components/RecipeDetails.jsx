import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

const RecipeDetails = ({ recipes, showRecipeList, data }) => {
  const { id } = useParams();
  /* console.log(useParams()); */
  let results = data.results;
  /* console.log(results); */

  const recipe = results.find((el) => el.id.toString() === id);

  let prueba = recipe.sections.map((el) => el.components).flat();
  /* console.log(prueba); */

  const navigate = useNavigate();

  function handkeBack() {
    navigate(-1);
  }

  return (
    <>
      <Header recipes={recipes} showRecipeList={showRecipeList} />
      <section className="recipe-data">
        <h1 className="title">{recipe.name}</h1>
        <div className="img-recipe-box">
          <img src={recipe.thumbnail_url} alt="img" className="img-recipe" />
        </div>
        <h4 className="recipe-description">{recipe.description}</h4>
        <div className="ingredients-box">
          <h2 className="subtitle">Ingredients</h2>
          <ul className="ingredients">
            {prueba.map((el) => (
              <li className="ingredient" key={el.id}>
                {el.raw_text}
              </li>
            ))}
          </ul>
        </div>
        <div className="preparation-box">
          <h2 className="subtitle">Preparation</h2>
          <ol className="instructions">
            {recipe.instructions.length > 0 ? (
              recipe.instructions.map((el) => (
                <li className="instruction" key={el.id}>
                  {el.display_text}
                </li>
              ))
            ) : (
              <div></div>
            )}
          </ol>
        </div>
        <button className="back" onClick={handkeBack}>
          <KeyboardBackspaceOutlinedIcon />
          <p>Go Back</p>
        </button>
        <br />
      </section>
      <Footer />
    </>
  );
};

export default RecipeDetails;
