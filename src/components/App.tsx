import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "./CafeInfo";
import VoteOptions from "./VoteOptions";
import type { VoteType, Votes } from "./types/votes";
import VoteStats from "./VoteStats";

export default function App() {
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });

  const handleVote = (type: VoteType) => {
    setVotes({ ...votes, [type]: votes[type] + 1 });
  };
  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions />
        <VoteStats />
      </div>
    </>
  );
}
