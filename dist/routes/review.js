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
const db_1 = __importDefault(require("../db")); // データベース接続を提供するファイル
const router = (0, express_1.Router)();
// **全てのレビューを取得（店舗名を含む）**
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query(`SELECT reviews.*, stores.name AS store_name 
        FROM reviews 
        JOIN stores ON reviews.store_id = stores.id 
        ORDER BY reviews."createdAt" DESC;`);
        res.json(result.rows); // JSON形式で全レビューを返す
    }
    catch (error) {
        console.error("レビューの取得中にエラーが発生しました:", error);
        res.status(500).json({ error: "レビューの取得に失敗しました。" });
    }
}));
// **特定の店舗のレビューを取得（店舗名を含む）**
router.get("/:store_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { store_id } = req.params;
    try {
        const result = yield db_1.default.query(`SELECT reviews.*, stores.name AS store_name, 
              AVG(reviews.rating) OVER() AS average_rating
        FROM reviews 
        JOIN stores ON reviews.store_id = stores.id
        WHERE reviews.store_id = $1 
        ORDER BY reviews."createdAt" DESC;`, [parseInt(store_id, 10)] // store_id を数値に変換
        );
        if (result.rows.length === 0) {
            return res
                .status(404)
                .json({ error: "該当する店舗のレビューが見つかりませんでした。" });
        }
        res.json(result.rows); // レビューと店舗名を含むデータを返す
    }
    catch (error) {
        console.error("特定店舗のレビューの取得中にエラーが発生しました:", error);
        res.status(500).json({ error: "特定店舗のレビューの取得に失敗しました。" });
    }
}));
// **新規レビュー投稿**
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { store_id, rating, comment } = req.body;
    console.log("受信データ:", req.body);
    if (!store_id || !rating || !comment) {
        return res.status(400).json({ error: "必須フィールドが不足しています" });
    }
    try {
        // データベースへの挿入処理
        const result = yield db_1.default.query(`INSERT INTO reviews ("store_id", "rating", "comment", "createdAt", "updatedAt") 
        VALUES ($1, $2, $3, now(), now()) 
        RETURNING *`, [store_id, rating, comment]);
        // 投稿したレビューに `store_name` を追加して返す
        const reviewWithStoreName = yield db_1.default.query(`SELECT reviews.*, stores.name AS store_name 
      FROM reviews 
      JOIN stores ON reviews.store_id = stores.id 
      WHERE reviews.id = $1;`, [result.rows[0].id]);
        res.status(201).json(reviewWithStoreName.rows[0]);
    }
    catch (error) {
        console.error("データベースエラー:", error);
        res.status(500).json({ error: "サーバーエラーが発生しました" });
    }
}));
exports.default = router;
