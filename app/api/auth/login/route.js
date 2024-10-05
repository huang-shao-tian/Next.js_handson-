// app/api/auth/login/route.js

import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../../../../lib/prisma'; // prisma クライアントをインポート

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // ユーザー情報の検証（データベースから取得）
    const user = await getUserByEmail(email);

    if (user && bcrypt.compareSync(password, user.password)) {
      // トークンの発行
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      const response = NextResponse.json({ message: 'ログイン成功' });
      response.cookies.set('token', token, { httpOnly: true, maxAge: 3600, path: '/' });
      return response;
    } else {
      return NextResponse.json({ message: '認証に失敗しました' }, { status: 401 });
    }
  } catch (error) {
    console.error('ログインエラー:', error);
    return NextResponse.json({ message: 'サーバーエラーが発生しました' }, { status: 500 });
  }
}

// getUserByEmail 関数を定義
async function getUserByEmail(email) {
  return await prisma.user.findUnique({
    where: { email },
  });
}
