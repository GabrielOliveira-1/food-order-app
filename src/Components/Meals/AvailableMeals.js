import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Supreme Sushi",
    description: "Finest nori and veggies",
    price: 20.99,
  },
  {
    id: "m2",
    name: "Beyond Schnitzel",
    description: "A next level german specialty!",
    price: 14.5,
  },
  {
    id: "m3",
    name: "Barbecue plant Burger",
    description: "American, juicy and plant-based",
    price: 10.99,
  },
  {
    id: "m4",
    name: "Garden Bowl",
    description: "Healthy and full of green",
    price: 16.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
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
