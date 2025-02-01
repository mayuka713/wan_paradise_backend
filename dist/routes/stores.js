"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = __importDefault(require("../db"));
const cors_1 = __importDefault(require("cors"));
const router = (0, express_1.Router)();
router.use((0, cors_1.default)());
router.get("/stores/detail/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const result = yield db_1.default.query(query, [storeId]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "店舗が見つかりませんでした。" });
        }
        res.json(result.rows[0]);
    }
    catch (error) {
        console.error("店舗情報の取得中にエラー:", error);
        res.status(500).json({ message: "店舗情報の取得に失敗しました。" });
    }
}));
// 店舗名を取得するエンドポイント
router.get("/store-name/:store_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { store_id } = req.params;
    try {
        const query = `
      SELECT name AS store_name
      FROM stores
      WHERE id = $1
    `;
        const result = yield db_1.default.query(query, [parseInt(store_id, 10)]);
        if (result.rows.length === 0) {
            return res
                .status(404)
                .json({ message: "該当する店舗が見つかりませんでした。" });
        }
        res.status(200).json({ store_name: result.rows[0].store_name });
    }
    catch (error) {
        console.error("店舗名の取得中にエラーが発生しました:", error);
        res.status(500).json({ message: "サーバーエラーが発生しました。" });
    }
}));
//店舗名と店舗の画像を取得するエンドポイント
router.get("/type/:store_type", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const result = yield db_1.default.query(query, [parseInt(store_type, 10)]);
        if (result.rows.length === 0) {
            res.status(404).json({ message: "店舗データが見つかりませんでした。" });
            return;
        }
        // store_imgをJSON形式にパース
        const stores = result.rows.map((store) => {
            if (store.store_img && typeof store.store_img === "string") {
                try {
                    store.store_img = JSON.parse(store.store_img);
                }
                catch (error) {
                    console.error("store_imgのパース中にエラーが発生しました:", error);
                    store.store_img = [];
                }
            }
            return store;
        });
        res.status(200).json(stores);
    }
    catch (error) {
        console.error("サーバーエラーが発生しました:", error);
        res.status(500).json({ message: "サーバーエラーが発生しました。" });
    }
}));
router.get("/type/random/:store_type", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const result = yield db_1.default.query(query, [parseInt(store_type, 10)]);
        if (result.rows.length === 0) {
            res.status(404).json({ message: "店舗データが見つかりませんでした。" });
            return;
        }
        // store_imgをJSON形式にパース
        const stores = result.rows.map((store) => {
            if (store.store_img && typeof store.store_img === "string") {
                try {
                    store.store_img = JSON.parse(store.store_img);
                }
                catch (error) {
                    console.error("store_imgのパース中にエラーが発生しました:", error);
                    store.store_img = [];
                }
            }
            return store;
        });
        res.status(200).json(stores);
    }
    catch (error) {
        console.error("サーバーエラーが発生しました:", error);
        res.status(500).json({ message: "サーバーエラーが発生しました。" });
    }
}));
// 都道府県ごとの店舗情報を取得
router.get("/list/:prefectureId/:storeType", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const result = yield db_1.default.query(query, [prefectureIdNum, storeTypeNum]);
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
                }
                catch (error) {
                    console.error("store_imgのパース中にエラーが発生しました:", error);
                    store.store_img = [];
                }
            }
            else {
                store.store_img = [];
            }
            return store;
        });
        res.status(200).json(stores);
    }
    catch (error) {
        console.error("/list/:prefectureId/:storeTypeエラー", error);
        res.status(500).json({ message: "サーバーエラーが発生しました。" });
    }
}));
// タグに基づく店舗情報を取得
router.get("/list/tag/:prefectureId/:store_type", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { prefectureId, store_type } = req.params;
    const { tagIds } = req.query;
    if (!tagIds) {
        return res.status(400).json({ message: "タグIDを指定してください。" });
    }
    let tagIdArray;
    try {
        tagIdArray = tagIds.split(",").map(Number);
    }
    catch (error) {
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
        const result = yield db_1.default.query(query, [
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
                }
                catch (error) {
                    console.error("store_imgのパース中にエラーが発生しました:", error);
                    store.store_img = [];
                }
            }
            return store;
        });
        res.status(200).json(stores);
    }
    catch (error) {
        console.error("タグに基づく店舗情報の取得中にエラーが発生しました:", error);
        res.status(500).json({ message: "サーバーエラーが発生しました。" });
    }
}));
// 店舗の詳細情報を取得
router.get("/detail/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const result = yield db_1.default.query(query, [parseInt(id, 10)]);
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
            }
            catch (error) {
                console.error("store_imgのパース中にエラーが発生しました:", error);
                storeData.store_img = []; // パース失敗時は空配列にする
            }
        }
        res.status(200).json(storeData);
    }
    catch (error) {
        console.error("店舗詳細情報の取得中にエラーが発生しました:", error);
        res.status(500).json({ message: "サーバーエラーが発生しました。" });
    }
}));
exports.default = router;
