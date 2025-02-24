import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import pool from '../db';
import { log } from 'node:console';

const router = express.Router();

// **クッキー設定**
const COOKIE_NAME = "user_id"; // `user_id` のみをクッキーに保存
const COOKIE_OPTIONS = {
  httpOnly: true, // JavaScript からのアクセスを禁止（セキュリティ対策）
  secure: process.env.NODE_ENV === "production", // 本番環境では HTTPS のみ
  sameSite: process.env.NODE_ENV === "production" ? "none" as const : "lax" as const, // ✅ クロスオリジン対応
  maxAge: 24 * 60 * 60 * 1000, //1日
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

    console.log("クッキーに `user_id` を保存:", user.id);

    return res.status(200).json({
      message: "ログイン成功",
      user_id: user.id, // クライアントに `user_id` を返す
    });
  } catch (error) {
    console.error("ログイン中にエラー:", error);
    res.status(500).json({ error: "サーバーエラーが発生しました。" });
  }
});

router.get("/me", async (req: Request, res: Response) => {
  console.log("[auth/me] クッキー一覧:", req.cookies);

  const userId = req.cookies.user_id; //クッキーから `user_id` を取得

  if (!userId) {
    console.log("[auth/me] 未ログインのため 401 を返します");
    return res.status(401).json({ error: "未ログイン" });
  }

  try {
    //`users` テーブルから `id, email, name` を取得
    const userResult = await pool.query("SELECT id, email, name FROM users WHERE id = $1", [userId]);

    if (userResult.rows.length === 0) {
      console.log("⚠️ [auth/me] ユーザーが見つかりません");
      return res.status(401).json({ error: "未ログイン" });
    }

    const user = userResult.rows[0];
    console.log("[auth/me] ログイン済みユーザー:", user);

    // `user` オブジェクトを含めてレスポンスを返す
    res.json({ user });
  } catch (error) {
    console.error("クッキー解析エラー:", error);
    res.status(500).json({ error: "サーバーエラーが発生しました。" });
  }
});

router.post("/update", async (req: Request, res: Response) => {
  const userId = req.cookies.user_id; // クッキーから user_id を取得
  if (!userId) {
    return res.status(401).json({ error: "未ログインです" });
  }

  const { name, email, password } = req.body;

  console.log("更新リクエスト受信:", { userId, name, email, password });

  if (!name || !email) {
    return res.status(400).json({ error: "名前とメールアドレスは必須です" });
  }

  try {
    let query = "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING id, name, email";
    let values = [name, email, userId];

    if (password && password.trim() !== "") { // 空のパスワードをハッシュ化しない
      const hashedPassword = await bcrypt.hash(password, 10);
      query = "UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING id, name, email";
      values = [name, email, hashedPassword, userId];
    }

    console.log("実行するSQL:", query, values);
    const result = await pool.query(query, values);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "ユーザーが見つかりません" });
    }

    console.log("[update] プロフィール更新成功:", result.rows[0]);
    res.json({ message: "プロフィールが更新されました", user: result.rows[0] });

  } catch (error) {
    console.error("プロフィール更新エラー:", error);
    res.status(500).json({ error: "サーバーエラーが発生しました。" });
  }
});


// **ログアウト**
router.post('/logout', (req: Request, res: Response) => {
  res.clearCookie(COOKIE_NAME, COOKIE_OPTIONS); // クッキー削除
  console.log("`user_id` クッキーを削除");
  res.json({ message: 'ログアウト成功' });
});

router.post('/register', async (req: Request, res: Response) => {
  console.log("/auth/register にリクエストが届きました"); // デバッグ用
  const { email, name, password } = req.body;

  try {
    // DB にユーザー情報を保存
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      `INSERT INTO users (name, email, password, "createdAt", "updatedAt") 
      VALUES ($1, $2, $3, NOW(), NOW()) RETURNING id, name, email`,
      [name, email, hashedPassword]
    );

    res.status(201).json({ message: "ユーザーが登録されました", user: result.rows[0] });
  } catch (error) {
    console.error("ユーザー登録エラー:", error);
    res.status(500).json({ error: "ユーザー登録に失敗しました" });
  }
});


export default router;
