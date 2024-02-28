import { HashRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Content from "./components/Content";
import RecipeDetails from "./components/RecipeDetails";
import "./App.css";
import useFetch from "./hooks/useFetch";

const recipes = [
  {
    id: 100,
    name: "Meals",
    type: [
      {
        id: 1,
        tag: "breakfast",
        name: "Breakfast",
      },
      {
        id: 2,
        tag: "lunch",
        name: "Lunch",
      },
      {
        id: 3,
        tag: "dinner",
        name: "Dinner",
      },
      {
        id: 4,
        tag: "dessert",
        name: "Desserts",
      },
    ],
  },
  {
    id: 101,
    name: "Diet",
    type: [
      {
        id: 5,
        tag: "vegetarian",
        name: "Vegetarian",
      },
      {
        id: 6,
        tag: "vegan",
        name: "Vegan",
      },
      {
        id: 7,
        tag: "low_carb",
        name: "Low-carb",
      },
      {
        id: 8,
        tag: "healty",
        name: "Healty",
      },
      {
        id: 9,
        tag: "gluten_free",
        name: "Gluten-Free",
      },
      {
        id: 10,
        tag: "dairy_free",
        name: "Dairy-Free",
      },
    ],
  },
  {
    id: 102,
    name: "Ingredients",
    type: [
      {
        id: 11,
        tag: "meal",
        name: "Meal",
      },
      {
        id: 12,
        tag: "chicken",
        name: "Chicken",
      },
      {
        id: 13,
        tag: "fish",
        name: "Fish",
      },
      {
        id: 14,
        tag: "pasta",
        name: "Pasta",
      },
      {
        id: 15,
        tag: "potato",
        name: "Potato",
      },
    ],
  },
  {
    id: 103,
    name: "Others",
    type: [
      {
        id: 16,
        tag: "pizza",
        name: "Pizza",
      },
      {
        id: 17,
        tag: "hamburgers",
        name: "Hamburgers",
      },
      {
        id: 18,
        tag: "drinks",
        name: "Drinks",
      },
      {
        id: 19,
        tag: "italian",
        name: "Italian",
      },
      {
        id: 20,
        tag: "american",
        name: "American",
      },
    ],
  },
  {
    id: 104,
    name: "Difficulty",
    type: [
      {
        id: 21,
        tag: "under_30_minutes",
        name: "Under 30 Minutes",
      },
      {
        id: 22,
        tag: "easy",
        name: "Easy",
      },
      {
        id: 23,
        tag: "5_ingredients_or_less",
        name: "5 Ingredients or Less",
      },
    ],
  },
];

function App() {
  const [recipe, setRecipe] = useState(recipes);
  const [content, setContent] = useState({
    id: 1,
    tag: "breakfast",
    name: "Breakfast",
  });

  function showRecipeList(res) {
    setContent(res);
  }
  let url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=${content.tag}`;

  const { data, loading } = useFetch(url, content);

  /* console.log(error); */

  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Content
                recipes={recipe}
                recipeInfo={data}
                loading={loading}
                showRecipeList={showRecipeList}
                content={content}
              />
            }
          />
          <Route
            path="/tasty-app/recipelist/:id"
            element={
              <Content
                recipes={recipe}
                recipeInfo={data}
                loading={loading}
                showRecipeList={showRecipeList}
                content={content}
              />
            }
          />
          <Route
            path="/tasty-app/recipe/:id"
            element={
              <RecipeDetails
                recipes={recipe}
                showRecipeList={showRecipeList}
                data={data}
              />
            }
          />
          <Route
            path="/tasty-app/recipelist/:id/recipe/:id"
            element={
              <RecipeDetails
                recipes={recipe}
                showRecipeList={showRecipeList}
                data={data}
              />
            }
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
