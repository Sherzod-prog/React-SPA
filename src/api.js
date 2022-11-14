import { API_URL } from "./config";

const getMealById = async (mealid) => {
  const response = await fetch(API_URL + "lookup.php?i=" + +mealid);
  return await response.json();
};

const getAllCategories = async () => {
  const response = await fetch(API_URL + "categories.php");
  return await response.json();
};

const getFilterCategory = async (categoryName) => {
  const response = await fetch(API_URL + "filter.php?c=" + categoryName);
  return await response.json();
};

export { getMealById, getAllCategories, getFilterCategory };

// www.themealdb.com/api/json/v1/1/lookup.php?i=52772
// www.themealdb.com/api/json/v1/1/categories.php;
// www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
