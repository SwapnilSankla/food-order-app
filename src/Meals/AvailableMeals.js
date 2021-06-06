import Card from "../UI/Card";
import DUMMY_MEALS from "./dummy-meals";
import MealItem from "./MealItem";
import styles from "./AvailableMeals.module.css";

const AvailableMeals = (props) => {
  return (
    <Card className={styles.meals}>
      <ul>
        {DUMMY_MEALS.map((mealItem) => (
          <li key={mealItem.id}>
            <MealItem
              name={mealItem.name}
              description={mealItem.description}
              price={mealItem.price}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default AvailableMeals;
