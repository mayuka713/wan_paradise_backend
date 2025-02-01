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
const db_1 = __importDefault(require("../db")); // データベース接続を提供するファイル (例: db.ts)
const router = (0, express_1.Router)();
// `/prefectures`エンドポイントで全ての都道府県情報を取得するルート
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query('SELECT * FROM prefectures'); // prefecturesテーブルの全データを取得
        res.json(result.rows); // 結果をJSON形式で返す
    }
    catch (error) {
        console.error('Error fetching prefectures:', error);
        res.status(500).json({ error: '都道府県情報を取得できませんでした' });
    }
}));
exports.default = router;
