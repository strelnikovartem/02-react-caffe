import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "./CafeInfo";

export default function App() {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = () => {
    setClicks(clicks + 1);
    console.log(clicks);
  };

  return <button onClick={handleClick}>Current: {clicks}</button>;

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
      </div>
    </>
  );
}
