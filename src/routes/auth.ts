import express, { Request, Response } from 'express';
import session from 'express-session';
import bcrypt from 'bcrypt';
import pool from '../db';

const router = express.Router();

// ユーザー登録エンドポイント
router.post('/register', async (req: Request, res: Response) => {
  const { email, name, password } = req.body;

  try {
    // パスワードのハッシュ化
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // データベースにユーザー情報を保存
    const result = await pool.query(
      `INSERT INTO users (name, email, password, "createdAt", "updatedAt") 
      VALUES ($1, $2, $3, NOW(), NOW()) 
      RETURNING id, name, email`,
      [name, email, hashedPassword]
    );

    res.status(201).json({
      message: 'ユーザーが登録されました。',
      redirectUrl: process.env.REDIRECT_URL, 
      user: {
        id: result.rows[0].id,
        email: result.rows[0].email,
        name: result.rows[0].name,
      },
    });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'ユーザー登録中にエラーが発生しました。' });
  }
});

// ユーザーログインエンドポイント
router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const userResult = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userResult.rows.length === 0) {
      return res.status(401).json({ error: '無効なメールアドレスまたはパスワードです。' });
    }

    const user = userResult.rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: '無効なメールアドレスまたはパスワードです。' });
    }

    // クッキーに user_id を保存
    res.cookie('user_id', user.id, {
      httpOnly: true,
      secure: true,  // HTTPS 必須
      sameSite: "None",  // クロスサイトリクエスト対応
      path: "/", // ルートパスに適用
      maxAge: 24 * 60 * 60 * 1000, // 1日
    });

    console.log("Set-Cookie sent:", res.getHeaders()["set-cookie"]); // ここでログ出力

    // レスポンスを返す
    res.status(200).json({
      message: 'ログイン成功',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    console.error('Error during user login:', error);
    res.status(500).json({ error: 'サーバーエラーが発生しました。' });
  }
});


// 現在のログインユーザーを取得するエンドポイント
router.get('/me', (req: Request, res: Response) => {
  const userId = req.cookies.user_id;
  console.log("リクエストヘッダー:", req.headers);
  console.log("クッキー:", req.cookies);

  if (!userId) {
    return res.status(401).json({ error: "未ログイン" });
  }

  console.log("クッキーから取得した user_id:", userId);
  res.json({ user_id: userId });
});


// ログアウトエンドポイント
router.post('/logout', (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('ログアウトエラー:', err);
      return res.status(500).json({ error: 'ログアウトに失敗しました。' });
    }
    res.json({ message: 'ログアウト成功' });
  });
});

export default router;
