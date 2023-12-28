import Header from "./Header";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Footer from "./Footer";

const Content = ({ recipeInfo, showRecipeList, content, recipes, loading }) => {
  return (
    <>
      <Header recipes={recipes} showRecipeList={showRecipeList} />
      <div className="recipe-container">
        <h1>{content.name}</h1>
        <section className="container">
          {loading === true ? (
            <Loader />
          ) : (
            recipeInfo.results.map((el) => (
              <Link to={`/tasty-app/recipe/${el.id}`} key={el.id}>
                <RecipeCard key={el.id} data={el} />
              </Link>
            ))
          )}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Content;
