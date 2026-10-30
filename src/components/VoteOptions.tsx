import css from "./VoteOptions.module.css";
import type { VoteType } from "./types/votes";

export interface VoteOptionsProps {
  value: number;
}

export default function VoteOptions({ value }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button
        onClick={handleVote}
        className={css.button}
      >
        Good
      </button>
      <button className={css.button}>Neutral</button>
      <button className={css.button}>Bad</button>
      <button className={`${css.button} ${css.reset}`}>Reset</button>
    </div>
  );
}
