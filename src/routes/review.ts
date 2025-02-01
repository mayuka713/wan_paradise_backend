import { Router, Request, Response } from "express";
import pool from "../db"; // データベース接続を提供するファイル

const router = Router();

// 型定義
interface Review {
  id: number;
  store_id: number;
  store_name: string; // 追加
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

// **全てのレビューを取得（店舗名を含む）**
router.get("/", async (req: Request, res: Response) => {
  try {
    const result = await pool.query<Review>(
        `SELECT reviews.*, stores.name AS store_name 
        FROM reviews 
        JOIN stores ON reviews.store_id = stores.id 
        ORDER BY reviews."createdAt" DESC;`
    );
    res.json(result.rows); // JSON形式で全レビューを返す
  } catch (error) {
    console.error("レビューの取得中にエラーが発生しました:", error);
    res.status(500).json({ error: "レビューの取得に失敗しました。" });
  }
});

// **特定の店舗のレビューを取得（店舗名を含む）**
router.get("/:store_id", async (req: Request, res: Response) => {
  const { store_id } = req.params;

  try {
    const result = await pool.query<Review>(
        `SELECT reviews.*, stores.name AS store_name, 
              AVG(reviews.rating) OVER() AS average_rating
        FROM reviews 
        JOIN stores ON reviews.store_id = stores.id
        WHERE reviews.store_id = $1 
        ORDER BY reviews."createdAt" DESC;`,
      [parseInt(store_id, 10)] // store_id を数値に変換
    );

    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ error: "該当する店舗のレビューが見つかりませんでした。" });
    }

    res.json(result.rows); // レビューと店舗名を含むデータを返す
  } catch (error) {
    console.error("特定店舗のレビューの取得中にエラーが発生しました:", error);
    res.status(500).json({ error: "特定店舗のレビューの取得に失敗しました。" });
  }
});

// **新規レビュー投稿**
router.post("/", async (req, res) => {
  const { store_id, rating, comment } = req.body;

  console.log("受信データ:", req.body);

  if (!store_id || !rating || !comment) {
    return res.status(400).json({ error: "必須フィールドが不足しています" });
  }
  try {
    // データベースへの挿入処理
    const result = await pool.query(
        `INSERT INTO reviews ("store_id", "rating", "comment", "createdAt", "updatedAt") 
        VALUES ($1, $2, $3, now(), now()) 
        RETURNING *`,
      [store_id, rating, comment]
    );

    // 投稿したレビューに `store_name` を追加して返す
    const reviewWithStoreName = await pool.query(
      `SELECT reviews.*, stores.name AS store_name 
      FROM reviews 
      JOIN stores ON reviews.store_id = stores.id 
      WHERE reviews.id = $1;`,
      [result.rows[0].id]
    );

    res.status(201).json(reviewWithStoreName.rows[0]);
  } catch (error) {
    console.error("データベースエラー:", error);
    res.status(500).json({ error: "サーバーエラーが発生しました" });
  }
});

export default router;
