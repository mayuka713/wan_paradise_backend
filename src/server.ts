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


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5003;

const allowedOrigins = [
  'http://localhost:3000',
  'https://wan-paradise-a5437997cc6f.herokuapp.com', // 本番環境のURL
];



// ミドルウェアの設定
app.use(express.json());
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(session({
  secret: process.env.SESSION_SECRET || 'mysecretkey',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, httpOnly: true },
}));

app.use(cookieParser())

// ルートの設定
app.get('/', (req, res) => {
  res.send('サーバーは正常に動作しています。');
});
app.use('/auth', authRoutes);
app.use('/stores', storesRoutes);
app.use('/prefectures', prefectureRoutes);
app.use('/tags', tagsRouter);
app.use('/tags_facility', tagsFacilityRouter);
app.use('/reviews', reviewRouter);
app.use('/favorites', favoriteRoutes);


// サーバー起動
app.listen(PORT, () => {
  console.log(`サーバーがポート${PORT}で起動しました。`);
});


