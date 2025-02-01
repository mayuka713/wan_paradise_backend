import { Router, Request, Response } from "express";
import pool from "../db";
import { OneToMany } from "typeorm";
import favoritesRoutes from "../routes/favorites";

const router = Router();

// お気に入り追加エンドポイント (POST)
router.post("/", async (req: Request, res: Response) => {
  try {
    console.log("受信したデータ:", req.body); // 受信データを確認
    const { user_id, store_id } = req.body;

    if (!user_id || !store_id) {
      return res
        .status(400)
        .json({ error: "ユーザーIDまたはストアIDが不足しています。" });
    }

    const result = await pool.query(
      "INSERT INTO favorites (user_id, store_id, created_at) VALUES ($1, $2, NOW()) RETURNING *",
      [user_id, store_id]
    );
    //1,正常にデータが追加されたとき
    res.status(201).json({
      message: "お気に入りが正常に追加されました。",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("お気に入り追加中にエラー:", error);
    res.status(500).json({ error: "サーバーエラーが発生しました。" });
  }
});

// お気に入り削除エンドポイント (DELETE)
router.delete("/", async (req: Request, res: Response) => {
  // クライアントから送られたuser_idとstore_idを使って、DBのfavoritesテーブルから該当するお気に入りデータを消す
  const { user_id, store_id } = req.body;
  // 数値として使うなら parseInt() しておく
  const parsedUserId = parseInt(user_id, 10);
  const parsedStoreId = parseInt(store_id, 10);

  if (isNaN(parsedUserId) || isNaN(parsedStoreId)) {
    return res
      .status(400)
      .json({ error: "ユーザーIDまたはストアIDが不足しています。" });
  }

  try {
    const result = await pool.query(
      "DELETE FROM favorites WHERE user_id = $1 AND store_id = $2",
      [parsedUserId, parsedStoreId]
    );

    if (result.rowCount === 0) {
      return res
        .status(404)
        .json({ error: "お気に入りが見つかりませんでした。" });
    }
    console.log("受信したデータ:", req.body); // リクエストの内容を出力
    res.status(200).json({ message: "お気に入りが正常に削除されました。" });
  } catch (error) {
    console.error("お気に入り削除中にエラー:", error);
    res.status(500).json({ error: "サーバーエラーが発生しました。" });
  }
});

// お気に入りリスト取得 (GET)
router.get("/:user_id", async (req: Request, res: Response) => {

    const { user_id } = req.params;
  try {
    const result = await pool.query(
      `SELECT f.store_id AS store_id, s.name AS store_name, 
      s.address AS store_address, s.store_img, s.store_type
      FROM favorites f
      JOIN stores s ON f.store_id = s.id
      WHERE f.user_id = $1`,
      [ user_id ]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "お気に入りデータが見つかりません。" });
    }
    
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "お気に入りリストの取得に失敗しました。" });
  }
});

export default router;
