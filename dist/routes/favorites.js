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
const router = (0, express_1.Router)();
// お気に入り追加エンドポイント (POST)
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("受信したデータ:", req.body); // 受信データを確認
        const { user_id, store_id } = req.body;
        if (!user_id || !store_id) {
            return res
                .status(400)
                .json({ error: "ユーザーIDまたはストアIDが不足しています。" });
        }
        const result = yield db_1.default.query("INSERT INTO favorites (user_id, store_id, created_at) VALUES ($1, $2, NOW()) RETURNING *", [user_id, store_id]);
        //1,正常にデータが追加されたとき
        res.status(201).json({
            message: "お気に入りが正常に追加されました。",
            data: result.rows[0],
        });
    }
    catch (error) {
        console.error("お気に入り追加中にエラー:", error);
        res.status(500).json({ error: "サーバーエラーが発生しました。" });
    }
}));
// お気に入り削除エンドポイント (DELETE)
router.delete("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const result = yield db_1.default.query("DELETE FROM favorites WHERE user_id = $1 AND store_id = $2", [parsedUserId, parsedStoreId]);
        if (result.rowCount === 0) {
            return res
                .status(404)
                .json({ error: "お気に入りが見つかりませんでした。" });
        }
        console.log("受信したデータ:", req.body); // リクエストの内容を出力
        res.status(200).json({ message: "お気に入りが正常に削除されました。" });
    }
    catch (error) {
        console.error("お気に入り削除中にエラー:", error);
        res.status(500).json({ error: "サーバーエラーが発生しました。" });
    }
}));
// お気に入りリスト取得 (GET)
router.get("/:user_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id } = req.params;
    try {
        const result = yield db_1.default.query(
            `SELECT f.store_id AS store_id, s.name AS store_name, 
            s.address AS store_address, s.store_img, s.store_type
            FROM favorites f
            JOIN stores s ON f.store_id = s.id
            WHERE f.user_id = $1`, [user_id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "お気に入りデータが見つかりません。" });
        }
        res.json(result.rows);
    }
    catch (error) {
        res.status(500).json({ error: "お気に入りリストの取得に失敗しました。" });
    }
}));
exports.default = router;
