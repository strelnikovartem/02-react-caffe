import css from "./VoteOptions.module.css";
import handleVote from "./App";

export interface VoteOptionsProps {
  value: number;
}

export default function VoteOptions({ value }: VoteOptionsProps) {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType) => {
    setVotes({ ...votes, [type]: votes[type] + 1 });
  };

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
