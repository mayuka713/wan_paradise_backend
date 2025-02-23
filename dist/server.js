"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_1 = __importDefault(require("./routes/auth"));
const stores_1 = __importDefault(require("./routes/stores"));
const prefectures_1 = __importDefault(require("./routes/prefectures"));
const tags_1 = __importDefault(require("./routes/tags"));
const tags_facility_1 = __importDefault(require("./routes/tags_facility"));
const review_1 = __importDefault(require("./routes/review"));
const favorites_1 = __importDefault(require("./routes/favorites"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5003;
// CORS 設定（フロントエンドのURLを環境変数から取得）
const allowedOrigins = [
    "http://localhost:3000",
    process.env.FRONTEND_URL || "https://wan-paradise-a5437997cc6f.herokuapp.com",
    "https://wan.mayuka.site" // 環境変数から取得
];
app.use(express_1.default.json());
// **CORS 設定をプリフライトリクエストの前に設定**
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000", "https://wan.mayuka.site"], // 許可するオリジン
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true, // クッキーを含める場合は true
}));
// **すべてのプリフライトリクエスト (OPTIONS) を許可**
app.options("*", (0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
// **セッションの設定**
app.use((0, express_session_1.default)({
    secret: process.env.SESSION_SECRET || 'mysecretkey',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === "production", // ✅ 本番環境のみ `true`
        httpOnly: true,
        sameSite: "none", // ✅ ローカルでは `lax`
    },
}));
// **CORS ヘッダーを明示的に設定**
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", allowedOrigins.includes(req.headers.origin || "") ? req.headers.origin : "");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});
// ルートの設定
app.get("/", (req, res) => {
    res.send("サーバーは正常に動作しています。");
});
app.use("/auth", auth_1.default);
app.use("/stores", stores_1.default);
app.use("/prefectures", prefectures_1.default);
app.use("/tags", tags_1.default);
app.use("/tags_facility", tags_facility_1.default);
app.use("/reviews", review_1.default);
app.use("/favorites", favorites_1.default);
// サーバー起動
app.listen(PORT, () => {
    console.log(`サーバーがポート${PORT}で起動しました。`);
});
