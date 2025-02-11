import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import cookieParser from "cookie-parser";
import authRoutes from './routes/auth';
import storesRoutes from './routes/stores';
import prefectureRoutes from './routes/prefectures';
import tagsRouter from './routes/tags';
import tagsFacilityRouter from './routes/tags_facility';
import reviewRouter from './routes/review';
import favoriteRoutes from './routes/favorites';
import path from 'path'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5003;

// CORS 設定（フロントエンドのURLを環境変数から取得）
const allowedOrigins = [
  "http://localhost:3000",
  process.env.FRONTEND_URL || "https://wan-paradise-a5437997cc6f.herokuapp.com", // 環境変数から取得
];

app.use(express.json());

// **CORS 設定をプリフライトリクエストの前に設定**
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// **すべてのプリフライトリクエスト (OPTIONS) を許可**
app.options("*", cors());
app.use(cookieParser());

// **セッションの設定**
app.use(session({
  secret: process.env.SESSION_SECRET || 'mysecretkey',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === "production", // ✅ 本番環境のみ `true`
    httpOnly: true,
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // ✅ ローカルでは `lax`
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

app.use("/auth", authRoutes);
app.use("/stores", storesRoutes);
app.use("/prefectures", prefectureRoutes);
app.use("/tags", tagsRouter);
app.use("/tags_facility", tagsFacilityRouter);
app.use("/reviews", reviewRouter);
app.use("/favorites", favoriteRoutes);

// サーバー起動
app.listen(PORT, () => {
  console.log(`サーバーがポート${PORT}で起動しました。`);
});
