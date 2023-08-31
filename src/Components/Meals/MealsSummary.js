import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Healthy Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available vegan
        meals and enjoy them at home.
      </p>
      <p>
        Our meals are cooked with high-quality ingredients, fresh and made by
        experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
