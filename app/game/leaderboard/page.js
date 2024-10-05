// app/(game)/leaderboard/page.js

'use client';

import { useEffect, useState } from 'react';

export default function LeaderboardPage() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      const res = await fetch('/api/leaderboard');
      const data = await res.json();
      setScores(data);
    };
    fetchScores();
  }, []);

  return (
    <div>
      <h1>リーダーボード</h1>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>
            {score.user}: {score.wins} 勝
          </li>
        ))}
      </ul>
    </div>
  );
}
