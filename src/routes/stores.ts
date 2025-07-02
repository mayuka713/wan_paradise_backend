import { Router, Request, Response } from "express";
import pool from "../db";
import cors from "cors";

const router = Router();

router.use(cors());

router.get("/stores/detail/:id", async (req, res) => {
  const { id } = req.params;

  // IDを数値に変換して確認
  const storeId = parseInt(id, 10);
  if (isNaN(storeId)) {
    return res.status(400).json({ message: "不正なIDが指定されました。" });
  }

  try {
    const query = `
    SELECT 
      stores.id AS store_id, -- AS を使って store_id として取得
      stores.name AS store_name,
      stores.description,
      stores.store_img,
      stores.address,
      stores.phone_number,
      stores.opening_hours,
      stores.store_url,
      prefectures.name AS prefecture_name
    FROM stores
    JOIN prefectures
    ON stores.prefecture_id = prefectures.id
    WHERE stores.id = $1
    `;
    const result = await pool.query(query, [storeId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "店舗が見つかりませんでした。" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("店舗情報の取得中にエラー:", error);
    res.status(500).json({ message: "店舗情報の取得に失敗しました。" });
  }
});

// 店舗名を取得するエンドポイント
router.get("/store-name/:store_id", async (req, res) => {
  const { store_id } = req.params;

  try {
    const query = `
      SELECT name AS store_name
      FROM stores
      WHERE id = $1
    `;
    const result = await pool.query(query, [parseInt(store_id, 10)]);
    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ message: "該当する店舗が見つかりませんでした。" });
    }
    res.status(200).json({ store_name: result.rows[0].store_name });
  } catch (error) {
    console.error("店舗名の取得中にエラーが発生しました:", error);
    res.status(500).json({ message: "サーバーエラーが発生しました。" });
  }
});

//店舗名と店舗の画像を取得するエンドポイント
router.get("/type/:store_type", async (req, res) => {
  const { store_type } = req.params;
  try {
    const query = `
      SELECT 
        stores.id AS store_id,
        stores.name AS store_name,
        stores.description,
        stores.store_img,
        stores.address,
        stores.phone_number,
        stores.opening_hours,
        stores.store_url,
        prefectures.name AS prefecutre_name
      FROM stores
      JOIN prefectures
      ON stores.prefecture_id = prefectures.id
      WHERE store_type = $1
    `;
    const result = await pool.query(query, [parseInt(store_type, 10)]);

    if (result.rows.length === 0) {
      res.status(404).json({ message: "店舗データが見つかりませんでした。" });
      return;
    }

    // store_imgをJSON形式にパース
    const stores = result.rows.map((store) => {
      if (store.store_img && typeof store.store_img === "string") {
        try {
          store.store_img = JSON.parse(store.store_img);
        } catch (error) {
          console.error("store_imgのパース中にエラーが発生しました:", error);
          store.store_img = [];
        }
      }
      return store;
    });

    res.status(200).json(stores);
  } catch (error) {
    console.error("サーバーエラーが発生しました:", error);
    res.status(500).json({ message: "サーバーエラーが発生しました。" });
  }
});

router.get("/type/random/:store_type", async (req, res) => {
  const { store_type } = req.params;
  try {
    const query = `
      SELECT
        stores.id AS store_id,
        stores.name AS store_name,
        stores.description,
        stores.store_img,
        stores.address,
        stores.phone_number,
        stores.opening_hours,
        stores.store_url,
        prefectures.name AS prefecture_name
        FROM stores
        JOIN prefectures
        ON stores.prefecture_id = prefectures.id
        WHERE store_type = $1
        ORDER BY RANDOM()
        LIMIT 10;
        `;
    const result = await pool.query(query, [parseInt(store_type, 10)]);

    if (result.rows.length === 0) {
      res.status(404).json({ message: "店舗データが見つかりませんでした。" });
      return;
    }

    // store_imgをJSON形式にパース
    const stores = result.rows.map((store) => {
      if (store.store_img && typeof store.store_img === "string") {
        try {
          store.store_img = JSON.parse(store.store_img);
        } catch (error) {
          console.error("store_imgのパース中にエラーが発生しました:", error);
          store.store_img = [];
        }
      }
      return store;
    });

    res.status(200).json(stores);
  } catch (error) {
    console.error("サーバーエラーが発生しました:", error);
    res.status(500).json({ message: "サーバーエラーが発生しました。" });
  }
});

// 都道府県ごとの店舗情報を取得
router.get("/list/:prefectureId/:storeType", async (req, res) => {
  const { prefectureId, storeType } = req.params;

  const prefectureIdNum = parseInt(prefectureId, 10);
  const storeTypeNum = parseInt(storeType, 10);

  if (isNaN(prefectureIdNum) || isNaN(storeTypeNum)) {
    return res
      .status(400)
      .json({ message: "無効な都道府県IDまたは店舗タイプが指定されました。" });
  }

  try {
    const query = `
      SELECT 
        stores.id AS store_id, 
        stores.name AS store_name, 
        stores.description AS store_description, 
        stores.address AS store_address, 
        stores.phone_number AS store_phone_number, 
        stores.store_url, 
        stores.store_img, 
        stores.opening_hours AS store_opening_hours,
        COALESCE(json_agg(reviews.*) FILTER (WHERE reviews.id IS NOT NULL), '[]'::json) AS reviews
      FROM stores
      LEFT JOIN reviews ON stores.id = reviews.store_id
      WHERE stores.prefecture_id = $1 
        AND stores.store_type = $2
      GROUP BY stores.id;
    `;
    const result = await pool.query(query, [prefectureIdNum, storeTypeNum]);

    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ message: "該当する店舗が見つかりませんでした。" });
    }

    // store_img を JSON パース
    const stores = result.rows.map((store) => {
      if (store.store_img && typeof store.store_img === "string") {
        try {
          store.store_img = JSON.parse(store.store_img);
        } catch (error) {
          console.error("store_imgのパース中にエラーが発生しました:", error);
          store.store_img = [];
        }
      } else {
        store.store_img = [];
      }
      return store;
    });

    res.status(200).json(stores);
  } catch (error) {
    console.error("/list/:prefectureId/:storeTypeエラー", error);
    res.status(500).json({ message: "サーバーエラーが発生しました。" });
  }
});

// タグに基づく店舗情報を取得
router.get("/list/tag/:prefectureId/:store_type", async (req, res) => {
  const { prefectureId, store_type } = req.params;
  const { tagIds } = req.query;

  if (!tagIds) {
    return res.status(400).json({ message: "タグIDを指定してください。" });
  }

  let tagIdArray: number[];
  try {
    tagIdArray = (tagIds as string).split(",").map(Number);
  } catch (error) {
    console.error("タグIDのパース中にエラーが発生しました:", error);
    return res.status(400).json({ message: "無効なタグIDが指定されました。" });
  }

  try {
    const query = `
        SELECT 
        stores.id AS store_id, 
        stores.name AS store_name, 
        stores.description AS store_description,
        stores.address AS store_address, 
        stores.phone_number AS store_phone_number,
        stores.store_url, 
        stores.store_img, 
        stores.opening_hours AS store_opening_hours,
        COALESCE(json_agg(reviews.*) FILTER (WHERE reviews.id IS NOT NULL), '[]') AS reviews
      FROM stores
      LEFT JOIN stores_tags ON stores.id = stores_tags.store_id
      LEFT JOIN reviews ON stores.id = reviews.store_id
      WHERE stores.prefecture_id = $1
        AND stores.store_type = $2
        AND stores_tags.tag_id = ANY($3::int[])
      GROUP BY 
        stores.id, 
        stores.name, 
        stores.description,
        stores.address, 
        stores.phone_number,
        stores.store_url, 
        stores.store_img, 
        stores.opening_hours
      HAVING COUNT(stores_tags.tag_id) = $4;
    `;
    const result = await pool.query(query, [
      parseInt(prefectureId, 10),
      parseInt(store_type, 10),
      tagIdArray,
      tagIdArray.length, // HAVING句でタグの数を指定
    ]);

    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ message: "該当する店舗情報が見つかりませんでした。" });
    }

    // store_img を JSON パース
    const stores = result.rows.map((store) => {
      if (typeof store.store_img === "string") {
        try {
          store.store_img = JSON.parse(store.store_img); // JSON パース
        } catch (error) {
          console.error("store_imgのパース中にエラーが発生しました:", error);
          store.store_img = [];
        }
      }
      return store;
    });

    res.status(200).json(stores);
  } catch (error) {
    console.error("タグに基づく店舗情報の取得中にエラーが発生しました:", error);
    res.status(500).json({ message: "サーバーエラーが発生しました。" });
  }
});

// 店舗の詳細情報を取得
router.get("/detail/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const query = `
      SELECT 
        stores.id AS store_id,
        stores.name AS store_name,
        stores.description AS store_description,
        stores.address AS store_address,
        stores.phone_number AS store_phone_number,
        stores.store_url,
        stores.store_img,
        stores.opening_hours AS store_opening_hours,
        ARRAY_AGG(tags.name) AS tags
      FROM stores
      LEFT JOIN stores_tags ON stores.id = stores_tags.store_id
      LEFT JOIN tags ON stores_tags.tag_id = tags.id
      WHERE stores.id = $1
      GROUP BY stores.id
    `;
    const result = await pool.query(query, [parseInt(id, 10)]);

    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ message: "該当する店舗情報が見つかりませんでした。" });
    }
    const storeData = result.rows[0];
    // store_img を JSON パース
    if (typeof storeData.store_img === "string") {
      try {
        storeData.store_img = JSON.parse(storeData.store_img); // JSON パース
      } catch (error) {
        console.error("store_imgのパース中にエラーが発生しました:", error);
        storeData.store_img = []; // パース失敗時は空配列にする
      }
    }

    res.status(200).json(storeData);
  } catch (error) {
    console.error("店舗詳細情報の取得中にエラーが発生しました:", error);
    res.status(500).json({ message: "サーバーエラーが発生しました。" });
  }
});

export default router;
