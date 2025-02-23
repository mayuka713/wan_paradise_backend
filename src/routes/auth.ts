import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import pool from '../db';

const router = express.Router();

// **クッキー設定**
const COOKIE_NAME = "user_id"; // ✅ `user_id` のみをクッキーに保存
const COOKIE_OPTIONS = {
  httpOnly: true, // ✅ JavaScript からのアクセスを禁止（セキュリティ対策）
  secure: process.env.NODE_ENV === "production", // ✅ 本番環境では HTTPS のみ
  sameSite: process.env.NODE_ENV === "production" ? "none" as const : "lax" as const, // ✅ クロスオリジン対応
  maxAge: 24 * 60 * 60 * 1000, // ✅ 1日
};

// **ログイン**
router.post("/login", async (req: Request, res: Response) => {
  console.log("ログインリクエストのボディ:", req.body); 
  const { email, password } = req.body;

  try {
    const userResult = await pool.query("SELECT id, password FROM users WHERE email = $1", [email]);

    if (userResult.rows.length === 0) {
      return res.status(401).json({ error: "無効なメールアドレスまたはパスワードです。" });
    }

    const user = userResult.rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "無効なメールアドレスまたはパスワードです。" });
    }

    // **クッキーに `user_id` のみ保存**
    res.cookie(COOKIE_NAME, user.id.toString(), COOKIE_OPTIONS);

    console.log("✅ クッキーに `user_id` を保存:", user.id);

    return res.status(200).json({
      message: "ログイン成功",
      user_id: user.id, // クライアントに `user_id` を返す
    });
  } catch (error) {
    console.error("ログイン中にエラー:", error);
    res.status(500).json({ error: "サーバーエラーが発生しました。" });
  }
});

// **現在のログインユーザーの取得**
router.get("/me", async (req: Request, res: Response) => {
  const userId = req.cookies[COOKIE_NAME]; // ✅ クッキーから `user_id` を取得

  if (!userId) {
    console.log("⚠️ [auth/me] 未ログインのため 401 を返します");
    return res.status(401).json({ error: "未ログイン" });
  }

  console.log("✅ [auth/me] クッキーから取得した `user_id`:", userId);
  res.json({ user_id: Number(userId) });
});

// **ログアウト**
router.post('/logout', (req: Request, res: Response) => {
  res.clearCookie(COOKIE_NAME, COOKIE_OPTIONS); // ✅ クッキー削除
  console.log("✅ `user_id` クッキーを削除");
  res.json({ message: 'ログアウト成功' });
});

export default router;
