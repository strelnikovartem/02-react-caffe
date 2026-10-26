import css from "./Alert.module.css";
import Button from "./button";
import UserMenu from "./UserMenu";

export default function App() {
  return (
    <>
      <p className={css.error}>golf</p>
      <Button
        variant="primary"
        text="Login"
      />
      <Button
        variant="secondary"
        text="Follow"
      />
    </>
  );
}
