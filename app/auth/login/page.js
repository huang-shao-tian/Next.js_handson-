// app/(auth)/login/page.js

'use client';
import prisma from '../../../lib/prisma'; // prisma クライアントのパスを適宜調整してください
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 認証 API を呼び出す
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push('/game/tic-tac-toe');
    } else {
      // エラーハンドリング
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>ログイン</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="メールアドレス" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="パスワード" required />
      <button type="submit">ログイン</button>
    </form>
  );
}
