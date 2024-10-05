// app/api/auth/register/route.js

import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // パスワードのハッシュ化
    const hashedPassword = bcrypt.hashSync(password, 10);

    // ユーザーの作成（データベースに保存）
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: 'ユーザー登録成功', user });
  } catch (error) {
    console.error('ユーザー登録エラー:', error);

    // 重複したメールアドレスの場合のエラーハンドリング
    if (error.code === 'P2002') {
      return NextResponse.json({ message: 'このメールアドレスは既に登録されています。' }, { status: 400 });
    }

    return NextResponse.json({ message: 'ユーザー登録に失敗しました' }, { status: 500 });
  }
}
