import React, { Fragment } from "react";
import MealsSummary from "../MealsSummary/MealsSummary";
import AvailableMeals from "../AvailableMeals/AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary></MealsSummary>
      <AvailableMeals></AvailableMeals>
    </Fragment>
  );
};

export default Meals;
