import { useEffect, useState } from "react";

import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Supreme Sushi",
//     description: "Finest nori and veggies",
//     price: 20.99,
//   },
//   {
//     id: "m2",
//     name: "Beyond Schnitzel",
//     description: "A next level german specialty!",
//     price: 14.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Plant Burger",
//     description: "Juicy and plant-based",
//     price: 10.99,
//   },
//   {
//     id: "m4",
//     name: "Garden Bowl",
//     description: "The best selected fresh veggies",
//     price: 16.99,
//   },
// ];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-c9aa4-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
    };

    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
