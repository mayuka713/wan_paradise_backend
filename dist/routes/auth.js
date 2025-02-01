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
const express_1 = __importDefault(require("express"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = __importDefault(require("../db"));
const router = express_1.default.Router();
// ユーザー登録エンドポイント
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name, password } = req.body;
    try {
        // パスワードのハッシュ化
        const saltRounds = 10;
        const hashedPassword = yield bcrypt_1.default.hash(password, saltRounds);
        // データベースにユーザー情報を保存
        const result = yield db_1.default.query(`INSERT INTO users (name, email, password, "createdAt", "updatedAt") 
      VALUES ($1, $2, $3, NOW(), NOW()) 
      RETURNING id, name, email`, [name, email, hashedPassword]);
        res.status(201).json({
            message: 'ユーザーが登録されました。',
            redirectUrl: process.env.REDIRECT_URL,
            user: {
                id: result.rows[0].id,
                email: result.rows[0].email,
                name: result.rows[0].name,
            },
        });
    }
    catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'ユーザー登録中にエラーが発生しました。' });
    }
}));
// ユーザーログインエンドポイント
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const userResult = yield db_1.default.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userResult.rows.length === 0) {
            return res.status(401).json({ error: '無効なメールアドレスまたはパスワードです。' });
        }
        const user = userResult.rows[0];
        const passwordMatch = yield bcrypt_1.default.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: '無効なメールアドレスまたはパスワードです。' });
        }
        // クッキーに user_id を保存
        res.cookie('user_id', user.id, {
            httpOnly: false, // フロントエンドからもアクセス可能にする
            secure: process.env.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000, // 1日
        });
        // レスポンスを返す
        res.status(200).json({
            message: 'ログイン成功',
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
            },
        });
    }
    catch (error) {
        console.error('Error during user login:', error);
        res.status(500).json({ error: 'サーバーエラーが発生しました。' });
    }
}));
// 現在のログインユーザーを取得するエンドポイント
router.get('/me', (req, res) => {
    const userId = req.cookies.user_id;
    if (!userId) {
        return res.status(401).json({ error: "未ログイン" });
    }
    console.log("クッキーから取得した user_id:", userId);
    res.json({ user_id: userId });
});
// ログアウトエンドポイント
router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('ログアウトエラー:', err);
            return res.status(500).json({ error: 'ログアウトに失敗しました。' });
        }
        res.json({ message: 'ログアウト成功' });
    });
});
exports.default = router;
