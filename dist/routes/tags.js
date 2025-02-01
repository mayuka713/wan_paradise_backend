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
const db_1 = __importDefault(require("../db")); // データベース接続設定を提供するファイル
const router = (0, express_1.Router)();
//prefectureIdに基づいて店舗情報を取得するAPIを作る
router.get('/list/tag/:prefectureId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { prefectureId } = req.params;
    const { tagIds } = req.query;
    try {
        // `prefectureId` を条件に店舗情報を取得
        const stores = yield db_1.default.query(`SELECT id, name, description, address, store_url, store_img,prefecture_id FROM stores WHERE prefecture_id = $1`, [prefectureId]);
        if (stores.rows.length === 0) {
            return res.status(404).json({ error: '該当する店舗情報が見つかりませんでした' });
        }
        // 店舗データをJSON形式で返す
        res.json(stores.rows);
    }
    catch (error) {
        console.error('店舗データの取得に失敗しました:', error);
        res.status(500).json({ error: 'サーバーエラーが発生しました。' });
    }
}));
// `/tags` エンドポイント: 全てのタグ情報を取得
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // タグ情報を取得
        const result = yield db_1.default.query('SELECT * FROM tags ORDER BY id');
        res.json(result.rows);
        //データーベースからtags tableで取得したデータをresに代入し、json形式で整形する。
    }
    catch (error) {
        console.error('タグ情報の取得に失敗しました:', error);
        res.status(500).json({ error: 'タグ情報を取得できませんでした' });
    }
}));
exports.default = router;
