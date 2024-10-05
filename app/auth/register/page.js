// app/auth/register/page.js

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ユーザー登録 API を呼び出す
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { // 添加 Content-Type 头部
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      router.push('/auth/login');
    } else {
      // エラーハンドリング
      alert(data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>新規登録</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="メールアドレス" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="パスワード" required />
      <button type="submit">登録</button>
    </form>
  );
}
