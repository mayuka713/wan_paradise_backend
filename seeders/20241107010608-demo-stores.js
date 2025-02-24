"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "stores",
      [
        //北海道 ドッグラン 1
        {
          name: "わんぱーく西野",
          description:
            "自然に囲まれた2000坪のドッグランで、大型犬でも楽しめます。",
          store_type: 1,
          prefecture_id: 1,
          opening_hours: "9:30〜20:00 (定休日)元旦のみ休業",
          address: "北海道札幌市西区小別沢13",
          phone_number: "011-667-0418",
          store_url: "http://wanpark.la.coocan.jp/",
          store_img: JSON.stringify([
            "https://bit.ly/40dyWTn",
            "https://bit.ly/3DxK3xn",
            "https://bit.ly/40dresf",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //2
          name: "バーナードスクエア",
          description:
            "ドッグカフェに併設されたドッグランで、広々とした敷地が特徴です。",
          store_type: 1,
          prefecture_id: 1, // 北海道
          opening_hours: "11:00〜20:00 （ラストオーダー 19:30）(定休日) 木曜日",
          address: "北海道札幌市南区中ノ沢1-11-17",
          phone_number: "011-578-5576",
          store_url: "http://www.bsq.jp/top.html",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737419435/wan_paradise/dogrun.hokkaido/barnerd/barnerd.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737419626/wan_paradise/dogrun.hokkaido/barnerd/2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        //3
        {
          name: "ドッグラン＆カフェ プロムナード",
          description:
            "飼い主さんはもちろんワンちゃん用のメニューも充実しているドッグラン＆ドッグカフェです。",
          store_type: 1,
          prefecture_id: 1,
          opening_hours:
            "夏季（4月〜8月）: 11:00～18:00 冬季（9月〜3月）: 11:00～17:00 (定休日) 木曜日",
          address: "北海道千歳市みどり台北1丁目8-1",
          phone_number: "0123-22-0086",
          store_url: "https://c-promenade.com/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1732681763/wan_paradise/DogRun/Promnard.dogrun-Hokkaido.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737419437/wan_paradise/dogrun.hokkaido/promnard/2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //4
          name: "SUNNYSPOT",
          description:
            "ドッグカフェに併設されたドッグランで、田園風景に囲まれたのどかな空間です。",
          store_type: 1,
          prefecture_id: 1,
          opening_hours:
            "10月～4月 10:30 ～ 18:00、5月～9月 10:30 ～ 18:30  (定休日)月曜日、火曜日、水曜日（祝日の場合は営業）",
          address: "北海道上川郡東川町西11号北24番地",
          phone_number: "0166-82-4004",
          store_url: "https://sunnyspot.pupu.jp/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1732681766/wan_paradise/DogRun/Sunnyspot.dogrun-Hokkaido.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737419436/wan_paradise/dogrun.hokkaido/sunnyspot/2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //5
          name: "鹿公園ドッグラン",
          description:
            "飼い主さんはもちろんワンちゃん用のメニューも充実しているドッグラン＆ドッグカフェです。",
          store_type: 1,
          prefecture_id: 1,
          opening_hours: "24時間営業",
          address: "北海道勇払郡安平町追分白樺2丁目1",
          phone_number: "0145-25-2496",
          store_url: "https://dogrun-uzuz.com/dogruns/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1734957620/wan_paradise/DogRun/dearpark.hokkaido.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737419436/wan_paradise/dogrun.hokkaido/shikapark/2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //6
          name: "ノーザンホースパーク",
          description:
            "新千歳空港より車で15分。旅の途中に気軽に立ち寄れる馬と自然のテーマパークです。",
          store_type: 1,
          prefecture_id: 1,
          opening_hours:
            "夏季（4月15日～11月5日）:9:00～17:00 冬季（11月6日～4月9日）: 休園日:10:00～16:00 4月10日～4月14日",
          address: "北海道苫小牧市美沢114-7",
          phone_number: "0144-58-2216",
          store_url: "https://www.northern-horsepark.jp/price/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1734957548/wan_paradise/DogRun/nothernpark.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        //東京ドッグランここから
        {
          //7
          name: "城南島海浜公園つばさドッグラン",
          description: "海辺に位置し、開放的な雰囲気が魅力のドッグランです。。",
          store_type: 1,
          prefecture_id: 13, // 東京都
          opening_hours: "7:00 - 21:00",
          address: "東京都大田区城南島4-2-2",
          phone_number: "03-3799-6402",
          store_url: "https://seaside-park.jp/park_jonan/tsubasadogrun/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737381611/wan_paradise/dogrun.tokyo/tsubasapark/tsubasa.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737381611/wan_paradise/dogrun.tokyo/tsubasapark/tsubasa.png",
          ]),

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //8
          name: "イーノの森 Dog Garden",
          description: "事前予約制のドッグラン。マナーレッスンを受講可能。",
          store_type: 1,
          prefecture_id: 13, // 東京都
          opening_hours: "土日祝:10:00 - 19:00 ",
          address: "東京都江東区夢の島3丁目2-1 東京夢の島マリーナ内",
          phone_number: "080-8358-0907",
          store_url: "https://seaside-park.jp",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737381613/wan_paradise/dogrun.tokyo/inos%20forest/ino2.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737436934/wan_paradise/dogrun.tokyo/inos%20forest/inoforest2.png"
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //9
          name: "駒沢オリンピックドックラン",
          description: "緑の広がる景色が特徴",
          store_type: 1,
          prefecture_id: 13, // 東京都
          opening_hours: "常時開放",
          address: "東京都世田谷区駒沢公園1-1",
          phone_number: "03-3421-6431",
          store_url: "https://www.tokyo-park.or.jp/park/komazawa-olympic/#park",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737438026/wan_paradise/dogrun.tokyo/komazawadogrun/komazawa1.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737438078/wan_paradise/dogrun.tokyo/komazawadogrun/komazawa2.png"
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
        {
          //10
          name: "芝浦中央公園 ドッグラン",
          description: "小型犬・一般ゾーンに分かれているから遊ばせやすい",
          store_type: 1,
          prefecture_id: 13, // 東京都
          opening_hours: "10月～4月:7:00/5月～9月:6:00",
          address: "東京都港区港南1丁目2番28号",
          phone_number: "03-6433-2562",
          store_url: "https://seaside-park.jp",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1735006547/wan_paradise/DogRun/shibaura.dogrun.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          //11
          name: "木場公園ドッグラン",
          description: "約2,000平方メートルの広さを持つ中規模なドッグラン。",
          store_type: 1,
          prefecture_id: 13,
          opening_hours: "24時間利用可能 (定休日）年中無休",
          address: " 東京都江東区木場5丁目8-8",
          phone_number: "03-5245-1770",
          store_url: "https://sunnyspot.pupu.jp/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1734955625/wan_paradise/DogRun/kibapark.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737381613/wan_paradise/dogrun.tokyo/kibapark/a8owrc8wwgkhhie9wvyb.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          //12
          name: "代々木公園ドッグラン",
          description:
            "ドッグカフェに併設されたドッグランで、田園風景に囲まれたのどかな空間です。",
          store_type: 1,
          prefecture_id: 13,
          opening_hours: "24時間利用可能 (定休日）年中無休",
          address: "東京都渋谷区代々木神園町2-1",
          phone_number: "03-3469-6081",
          store_url: "https://sunnyspot.pupu.jp/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737381613/wan_paradise/dogrun.tokyo/yoyogipark/vfleymvq9ktvpadauj2h.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737381613/wan_paradise/dogrun.tokyo/yoyogipark/1.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //東京ドッグランここまで

        //大阪ドッグラン
        {
          //13
          name: "Green Field TENNOJI",
          description:
            "Green Field TENNOJIは、“最高のコミュニケーションフィールド”を提供します",
          store_type: 1,
          prefecture_id: 27,
          opening_hours: "9:00〜19:00 (最終受付 18:00)年中無休",
          address:
            "大阪府大阪市天王寺区堂ヶ芝一丁目11番3 DSt桃谷ビルディング B1F",
          phone_number: "06-6775-2228",
          store_url:
            "https://greenfield.dyplus-pet.com/?utm_source=map&utm_medium=google&utm_campaign=website",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1735006758/wan_paradise/DogRun/greeenfield.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737420222/wan_paradise/dogrun.osaka/greenfied/2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //14
          name: "SKドッグランヒル",
          description: "関西エリア最大級！",
          store_type: 1,
          prefecture_id: 27,
          opening_hours:
            "[平日] 10:30～16:30 [土日祝] 10:30～17:00 定休日 月曜日（※ 月曜日が祝日の場合は翌営業日）",
          address: "大阪府柏原市太平寺７２９−１",
          phone_number: "072-979-0990",
          store_url: "https://sk-dogrunhill.com/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1735003714/wan_paradise/DogRun/skdogrun.osaka.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737420222/wan_paradise/dogrun.osaka/SKdogrun/2.png",
          ]),

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //15
          name: "花園中央公園ドッグラン",
          description: "小型犬用と、中型・大型犬フリーの2エリアがあります。",
          store_type: 1,
          prefecture_id: 27,
          opening_hours: "24時間利用可能 [定休日]年中無休",
          address: "大阪府東大阪市松原南２丁目２",
          phone_number: "03-3469-6081",
          store_url: "https://hanazono-centralparks-hos.com/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1735003974/wan_paradise/DogRun/hanzonopark.dogrun.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737420221/wan_paradise/dogrun.osaka/hanazonopark/2.png",
          ]),

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //16
          name: "Dogcafe Run Douxgarden",
          description:
            "大阪狭山市のシーズーとボーダーコリーが看板犬のドッグカフェ&1450㎡ドッグラン 店内ワンコOK!",
          store_type: 1,
          prefecture_id: 27,
          opening_hours: "10時〜18時 [定休日] 第1,3水曜・毎木曜",
          address: "大阪府大阪狭山市山本東407-1",
          phone_number: "080-7499-33581",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1735003914/wan_paradise/DogRun/douxgarden.dogrun.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //17
          name: "Dyplus OSAKA KITA",
          description: "ペットの”上質な時間と最高の体験”をお約束する特別な空間",
          store_type: 1,
          prefecture_id: 27,
          opening_hours: " 9:00 - 20:00",
          address: "大阪府大阪市北区天満橋3丁目4番25号",
          phone_number: "03-3469-6081",
          store_url: "https://osakakita.dyplus-pet.com/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1735006859/wan_paradise/DogRun/Dyplus.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737420223/wan_paradise/dogrun.osaka/dyplus/2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //18
          name: "DOG CLUB K-ONE",
          description: "愛犬と家族に寄り添い、一緒に「考える」犬舎です。",
          store_type: 1,
          prefecture_id: 27,
          opening_hours: "10:00～19:00 [定休日]年中無休",
          address: "大阪府東大阪市稲田三島町２−６０",
          phone_number: "06-6746-4676",
          store_url: "https://k-one-osaka.com/index.html/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1735003637/wan_paradise/DogRun/k-one.dogrun.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737420221/wan_paradise/dogrun.osaka/DogclubK-one/2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //大阪ドッグランここまで

        // 北海道ドックカフェ
        {
          //19
          name: "バーナード・スクエア",
          description:
            "超大型犬もゆったり過ごせる広々とした店内と、天然芝と人工芝を組み合わせたドッグランが特徴のカフェです。",
          store_type: 2,
          prefecture_id: 1,
          opening_hours: "10:00〜19:00",
          address: "北海道札幌市南区中ノ1丁目11-17",
          phone_number: "011-578-5576",
          store_url: "http://www.bsq.jp/top.html",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1736154449/wan_paradise/DogCafe/barnerd1.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1736154471/wan_paradise/DogCafe/barnerd2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //20
          name: "CAFE BOTAN",
          description:
            "超大型犬もゆったり過ごせる広々とした店内と、天然芝と人工芝を組み合わせたドッグランが特徴のカフェです。",
          store_type: 2,
          prefecture_id: 1,
          opening_hours: "10:00〜19:00",
          address: "北海道札幌市南区中ノ1丁目11-17",
          phone_number: "011-578-5576",
          store_url: "http://www.bsq.jp/top.html",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1736154493/wan_paradise/DogCafe/cafebotan1.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1736154512/wan_paradise/DogCafe/cafebotan2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //21
          name: "ハーベスター八雲",
          description:
            "超大型犬もゆったり過ごせる広々とした店内と、天然芝と人工芝を組み合わせたドッグランが特徴のカフェです。",
          store_type: 2,
          prefecture_id: 1,
          opening_hours: "10:00〜19:00",
          address: "北海道札幌市南区中ノ1丁目11-17",
          phone_number: "011-578-5576",
          store_url: "http://www.bsq.jp/top.html",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1736154530/wan_paradise/DogCafe/yagumo1.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1736154553/wan_paradise/DogCafe/yagumo2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //22
          name: "北菓楼ドッグガーデンカフェ",
          description:
            "超大型犬もゆったり過ごせる広々とした店内と、天然芝と人工芝を組み合わせたドッグランが特徴のカフェです。",
          store_type: 2,
          prefecture_id: 1,
          opening_hours: "9:00〜19:00 無休（年末年始は休み）",
          address: "北海道札幌市南区中ノ1丁目11-17",
          phone_number: "011-578-5576",
          store_url: "https://www.kitakaro.com/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1736154572/wan_paradise/DogCafe/kitakaro.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //23
          name: "小さなログカフェ ふらわ",
          description:
            "超大型犬もゆったり過ごせる広々とした店内と、天然芝と人工芝を組み合わせたドッグランが特徴のカフェです。",
          store_type: 2,
          prefecture_id: 1,
          opening_hours: "10:00〜19:00",
          address: "北海道札幌市南区中ノ1丁目11-17",
          phone_number: "011-578-5576",
          store_url: "https://berryfurawa.wixsite.com/furano",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1736154592/wan_paradise/DogCafe/logcafe1.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1736154613/wan_paradise/DogCafe/logcafe2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //24
          name: "ドックラン＆ドッグカフェプロムナード",
          description:
            "わんこメニューが充実しており、ワンちゃんも一緒に楽しめます。",
          store_type: 2,
          prefecture_id: 1,
          opening_hours: "10:00〜19:00",
          address: "北海道二海郡八雲町浜松町",
          phone_number: "0137-64-1111",
          store_url: "https://c-promenade.com/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1736154636/wan_paradise/DogCafe/promnard1.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1736154659/wan_paradise/DogCafe/promnard2.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1736154679/wan_paradise/DogCafe/promnard3.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //東京ドッグカフェ
        {
          //25
          name: "GreenWood",
          description: "オープンカフェとミニドッグランが併設されているカフェ。",
          store_type: 2,
          prefecture_id: 13,
          opening_hours: "10:00〜19:00",
          address: "東京都世田谷区深沢2-1-107",
          phone_number: "011-578-5576",
          store_url: "https://mimi-greenwood.com/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737379726/wan_paradise/dogcafe.tokyo/greenwood/greendog2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //26
          name: "Andy Cafe",
          description:
            "超大型犬もゆったり過ごせる広々とした店内と、天然芝と人工芝を組み合わせたドッグランが特徴のカフェです。",
          store_type: 2,
          prefecture_id: 13,
          opening_hours: "10:00〜19:00",
          address: "東京都世田谷区池尻3-30-1",
          phone_number: "011-578-5576",
          store_url: "https://andycafe.com/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737379725/wan_paradise/dogcafe.tokyo/Andy%20cafe/andycafe.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //27
          name: "Les deux Bleue（レドゥブルー）豊洲",
          description: "美しい夜景が楽しめる。ちょっと贅沢な犬用メニューも",
          store_type: 2,
          prefecture_id: 13,
          opening_hours: "11:00～22:00 (日曜営業)",
          address: "東京都江東区豊洲2-4-9 アーバンドック ららぽーと豊洲 1F",
          phone_number: "050-5600-7429",
          store_url: " http://www.ccinc-love.com/lesdeuxbleue/index.html",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737429343/wan_paradise/dogcafe.tokyo/Les%20deux%20Bleue/1.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737429343/wan_paradise/dogcafe.tokyo/Les%20deux%20Bleue/2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //28
          name: "DOG DEPT + CAFE Odaiba",
          description:
            "超大型犬もゆったり過ごせる広々とした店内と、天然芝と人工芝を組み合わせたドッグランが特徴のカフェです。",
          store_type: 2,
          prefecture_id: 13,
          opening_hours: "10:00〜19:00",
          address: "東京都港区台場1-6-1 デックス東京ビーチ",
          phone_number: "011-578-5576",
          store_url: "https://www.dogdept.com/shoplist/area03_3.html",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737429950/wan_paradise/dogcafe.tokyo/Dog%20Dept%20cafe%20Odaiba/1.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737429950/wan_paradise/dogcafe.tokyo/Dog%20Dept%20cafe%20Odaiba/2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //29
          name: "Decos Dog Cafe",
          description:
            "超大型犬もゆったり過ごせる広々とした店内と、天然芝と人工芝を組み合わせたドッグランが特徴のカフェです。",
          store_type: 2,
          prefecture_id: 13,
          opening_hours: "10:00〜19:00",
          address: "東京都渋谷区桜丘町11-5",
          phone_number: "011-578-5576",
          store_url: "https://hot-dog.co.jp/cafe/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737379726/wan_paradise/dogcafe.tokyo/Decos%20Dog%20cafe/decosdogcafe.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737379725/wan_paradise/dogcafe.tokyo/Decos%20Dog%20cafe/decosdogcafe2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //30
          name: "Puppys Dining",
          description:
            "超大型犬もゆったり過ごせる広々とした店内と、天然芝と人工芝を組み合わせたドッグランが特徴のカフェです。",
          store_type: 2,
          prefecture_id: 13,
          opening_hours: "10:00〜19:00",
          address: "東京都港区白金台5-18-1",
          phone_number: "011-578-5576",
          store_url: "https://www.instagram.com/puppys.cafe/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737379727/wan_paradise/dogcafe.tokyo/%E8%82%89%E7%90%83%E3%82%AB%E3%83%95%E3%82%A7/puppysdining.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737379726/wan_paradise/dogcafe.tokyo/%E8%82%89%E7%90%83%E3%82%AB%E3%83%95%E3%82%A7/puppysdining2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //大阪ドッグカフェ
        {
          //31
          name: "わん子ん家 ひまカフェ",
          description:
            "都島にあるドッグカフェ「わん子ん家 ひまカフェ」。犬の幼稚園で、カフェやトリミング、動物病院などが併設されています",
          store_type: 2,
          prefecture_id: 27,
          opening_hours: "10:00〜20:00 定休日：木曜日",
          address: "大阪府大阪市都島区都島北通3-28-7 わん子ん家1階",
          phone_number: "050-5571-1426",
          store_url: "https://wankonchi.com/?mode=f41",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737380821/wan_paradise/dogcafe.osaka/wanko%20himacafe/himacafe.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737380821/wan_paradise/dogcafe.osaka/wanko%20himacafe/himacafe2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //32
          name: "オッターテイル",
          description:
            "長居公園のすぐそばにある「オッターテイル」。トーストメニューが美味しくおすすめ",
          store_type: 2,
          prefecture_id: 27,
          opening_hours: "11:00〜19:00（ラストオーダー18:00）定休日:不定休",
          address: "大阪府大阪市東住吉区山坂５丁目１６−２０",
          phone_number: "06-6696-8878",
          store_url: "https://ottertail.jp/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737380821/wan_paradise/dogcafe.osaka/ottar%20tail/ottertail.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737380821/wan_paradise/dogcafe.osaka/ottar%20tail/ottertail2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //33
          name: "cafe Mi-Can",
          description:
            "鶴見緑地にある「cafe Mi-Can」。店内全席、愛犬との同伴が可能なカフェです。",
          store_type: 2,
          prefecture_id: 27,
          opening_hours:
            "ランチ:11:00～17:00(L.O)、ディナー17:00〜21:00(L.O) 定休日：不定休",
          address: "大阪府大阪市城東区今福東２丁目９−８",
          phone_number: "06-7492-3816",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737380821/wan_paradise/dogcafe.osaka/cafe%20mi-chan/mi-chan.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737380820/wan_paradise/dogcafe.osaka/cafe%20mi-chan/mi-chan2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //34
          name: "ファームカフェ マザーズ 堀江店",
          description:
            "超大型犬もゆったり過ごせる広々とした店内と、天然芝と人工芝を組み合わせたドッグランが特徴のカフェです。",
          store_type: 2,
          prefecture_id: 27,
          opening_hours: "9:00～16:00（15:00LO）",
          address: " 大阪市西区北堀江2-17-7",
          phone_number: "011-578-5576",
          store_url: "https://farmcafe-mothers.jimdosite.com/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737380822/wan_paradise/dogcafe.osaka/farmcafe%20mothers/farmcafemothers.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737380822/wan_paradise/dogcafe.osaka/farmcafe%20mothers/farmcafemothers2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //35
          name: "ドッグカフェこふみ",
          description:
            "可愛いフォトブースで記念撮影！ランチからデザートまで楽しめるアットホームなドッグカフェ",
          store_type: 2,
          prefecture_id: 27,
          opening_hours: "11:30～16:00 【定休日】水・土曜日、第2第3火曜日",
          address: "大阪府大阪市生野区巽中3-14-7",
          phone_number: "011-578-5576",
          store_url: "http://www.pro-ms.bb4u.ne.jp/~kofumi/index.htmll",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737380822/wan_paradise/dogcafe.osaka/kofumi/kofumi.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737380821/wan_paradise/dogcafe.osaka/kofumi/kofumi2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //36
          name: "ドッグカフェ＆トリミング isora",
          description:
            "ガラス張りの明るい雰囲気の店内でボリューム満点ランチが楽しめる",
          store_type: 2,
          prefecture_id: 27,
          opening_hours:
            "10:30 ~ 19:00 (L.O18:00) 【定休日】水曜日（その他不定休あり）",
          address: "大阪府大阪市浪速区幸町2-2-1ドエル堀江南1F",
          phone_number: "011-578-5576",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737381331/wan_paradise/dogcafe.osaka/isora.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737381330/wan_paradise/dogcafe.osaka/isora2.png",
          ]),

          createdAt: new Date(),
          updatedAt: new Date(),
        },

        //北海道ペットショップ
        {
          //37
          name: "ペットランド中央店",
          description:
            "札幌を中心に北海道内で店舗を展開する 道内最大のペットショップ",
          store_type: 3,
          prefecture_id: 1,
          opening_hours: "9:30～19:00",
          address: "北海道札幌市中央区南11条西14丁目",
          phone_number: "011-532-5331",
          store_url: "https://www.petland.co.jp/shop/chuo.html",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1733273150/wan_paradise/PetShop/petland.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1740364461/wan_paradise/PetShop/petland.chuo.png"// ,
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //38
          name: "ペットタウンテン・テン アリオ店",
          description:
            "何よりも「心」を大切にするそんなペットショップを目指して",
          store_type: 3,
          prefecture_id: 1,
          opening_hours: "10:00～21:00",
          address: "北海道札幌市東区北７条東９丁目２－２０",
          phone_number: "011-733-1212",
          store_url: "https://www.dog-tenten.co.jp/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737422929/wan_paradise/petshop.hokkaido/pettown%20ario/tenten1.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737422928/wan_paradise/petshop.hokkaido/pettown%20ario/tenten2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //39
          name: "Pet Shop DOG dog",
          description:
            "DOG・dogでは、はじめて彼らを家族にお迎えする方。生涯を見送り、また新たな家族をお迎えする方。大切な家族として伴侶動物と暮らす方。そんなご家族、そして動物たちのパートナーとして、皆様の生活をサポート致します。",
          store_type: 3,
          prefecture_id: 1,
          opening_hours: "11:00～20:00(平日) 10:00～20:00(土・日・祝)",
          address: "北海道札幌市白石区東札幌4条1丁目1-1 ラソラ札幌Bタウン1F",
          phone_number: "011-867-0566",
          store_url: "https://petshop-dogdog.com/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1740364166/wan_paradise/PetShop/petshopdogdog.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //40
          name: "ペットショップCoo&RIKU 旭川店",
          description:
            "札幌市に次ぐ北海道第2位の人口を有する道北の経済・産業・文化の中心地「旭川」!「観光やお買い物のひとやすみに、ゆっくり滞在してわんちゃんねこちゃんに癒しを満喫ください。",
          store_type: 3,
          prefecture_id: 1,
          opening_hours: "11:00～20:00(平日) 10:00～20:00(土・日・祝)",
          address: " 北海道旭川市永山11条4丁目121-15",
          phone_number: "0166-73-9440",
          store_url: "https://www.pet-coo.com/shop/shop-detail/?sid=184",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737422928/wan_paradise/petshop.hokkaido/coo%20and%20riku/2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          //41
          name: "ペットショップCoo&RIKU 函館店",
          description:
            "地域密着型のサービスで、トリミングやしつけ教室を提供。。",
          store_type: 3,
          prefecture_id: 1,
          opening_hours:
            "11:00～20:00(平日) 10:00～20:00(土・日・祝) 定休日 年中無休",
          address:
            "北海道函館市港町1丁目2番1号ポールスターショッピングセンターC棟",
          phone_number: "0155-66-7692",
          store_url: "https://www.pet-coo.com/shop/shop-detail/?sid=1102",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737422928/wan_paradise/petshop.hokkaido/wankomart/2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        //東京ペットショップ
        {
          //42
          name: "ペットエコ 多摩 本店",
          description:
            "売場面積1500m²を超える国内最大級のペットショップで、豊富な品揃えが魅力です。",
          store_type: 3,
          prefecture_id: 13,
          opening_hours: "当面の間 10:00～19:00 短縮営業",
          address: "東京都八王子市別所2丁目37-1",
          phone_number: "042-670-2233",
          store_url: "https://www.peteco.jp/shop/tama-honten.html",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737426184/wan_paradise/petshop.tokyo/peteco/1.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737426184/wan_paradise/petshop.tokyo/peteco/2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //43
          name: "ジョイフル本田 瑞穂店",
          description:
            "多摩地区の総合ペットショップで、ペット用品から生体販売まで幅広く取り扱っています。",
          store_type: 3,
          prefecture_id: 13,
          opening_hours: "9:00~20:00",
          address: "東京都西多摩郡瑞穂町殿ケ谷442",
          phone_number: "042-568-2311",
          store_url:
            "https://midori-no-mori.jp/sapporo/?utm_source=google&utm_medium=map_meo&utm_campaign=web_sapporo",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737422883/wan_paradise/petshop.tokyo/joyful%20honda/1.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1740364648/wan_paradise/PetShop/joyful.honda.png"
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //44
          name: "ペットのコジマ アリオ北砂店",
          description:
            "ペット用品や生体販売に加え、トリミングやペットホテルなどのサービスも充実しています。",
          store_type: 3,
          prefecture_id: 13,
          opening_hours: "9:00~20:00",
          address: "東京都江東区北砂２丁目１７−１ アリオ北砂内 1F",
          phone_number: "03-5653-6311",
          store_url:
            "https://pets-kojima.com/shop/0082/?utm_source=google&utm_medium=maps",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737422884/wan_paradise/petshop.tokyo/kojima/1.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //45
          name: "JOKER 六本木ヒルズ店",
          description:
            "高級志向のペットショップで、厳選されたペット用品やサービスを提供しています。",
          store_type: 3,
          prefecture_id: 13,
          opening_hours: "11:00~20:00",
          address: "東京都港区六本木６丁目１０−１ 六本木ヒルズ ヒルサイド B1",
          phone_number: "03-5786-7711",
          store_url: "https://www.joker.co.jp/roppongi/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737422883/wan_paradise/petshop.tokyo/joker/2.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737422883/wan_paradise/petshop.tokyo/joker/1.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //46
          name: "Ps-first 原宿店",
          description:
            "おしゃれな街・原宿に位置し、健康管理が徹底された子犬・子猫を取り扱っています。",
          store_type: 3,
          prefecture_id: 13,
          opening_hours: "11:00~20:00 (定休日)年中無休",
          address: "東京都渋谷区神宮前１丁目８−５",
          phone_number: "03-6434-7530",
          store_url:
            "https://www.pfirst.jp/storedetails?storeId=776&utm_source=google&utm_medium=maps&utm_campaign=info",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737422885/wan_paradise/petshop.tokyo/Ps-first/1.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1740364750/wan_paradise/PetShop/ps-first.png"
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //大阪ペットショップ
        {
          //47
          name: "ひごペットフレンドリー千里丘店",
          description:
            "全国展開しているペットショップ「コジマ」の吹田店。ペット用品やトリミングサービスが充実しています。",
          store_type: 3,
          prefecture_id: 27,
          opening_hours: "9:00~20:00",
          address:
            "〒565-0823 大阪府吹田市山田南１丁目１−１ イズミヤショッピングセンター千里丘 別館 1階",
          phone_number: "06-6384-0015",
          store_url:
            "https://www.higopet.com/sp/shop/s_senrioka.php?utm_source=google&utm_medium=mybusiness_17_senrioka&utm_campaign=profile",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737423824/wan_paradise/petshop.osaka/Higopet/1.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737423824/wan_paradise/petshop.osaka/Higopet/2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //48
          name: "ペットワールド アミーゴ 箕面店",
          description:
            "ペットホテルやトリミング施設が完備され、広い店内でペット用品を豊富に取り揃えています。",
          store_type: 3,
          prefecture_id: 27,
          opening_hours:
            "10:00~20:00 年末年始など大型連休は変更の可能性有、なお1月1日は店休日。",
          address: "大阪府箕面市粟生新家３丁目５−２２",
          phone_number: "072-749-3550",
          store_url: "https://amigo-pet.co.jp/archives/shop/1299221517",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737423824/wan_paradise/petshop.osaka/amigo/1.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737423824/wan_paradise/petshop.osaka/amigo/2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //49
          name: "Ps-first 大阪心斎橋店",
          description:
            "高品質なペットと用品を取り扱うショップ。アクセスが良く、心斎橋でペット用品を探すのに最適です。",
          store_type: 3,
          prefecture_id: 27,
          opening_hours: "11:00~20:00",
          phone_number: "06-6224-0031",
          address: "大阪府大阪市中央区西心斎橋１丁目１−１ 新日本心斎橋ビル",
          store_url:
            "https://www.pfirst.jp/storedetails?storeId=798&utm_source=google&utm_medium=maps&utm_campaign=info",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737423825/wan_paradise/petshop.osaka/Ps-first/1.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737423825/wan_paradise/petshop.osaka/Ps-first/2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //50
          name: "ペットランドピースワン 東住吉店",
          description:
            "犬、猫、小動物、観賞魚の生体と用品が揃うペットショップで、動物病院やトリミング、ペットホテルなどのサービスも提供しています。",
          store_type: 3,
          prefecture_id: 27,
          opening_hours: "9:00~20:00",
          phone_number: "050-5445-0843",
          address: "大阪府大阪市東住吉区公園南矢田３丁目２４−６",
          store_url:
            "https://peace-one.jp/shopoosaka/81/?utm_source=google&utm_medium=maps",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737423825/wan_paradise/petshop.osaka/petlandpeaceone/1.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737423825/wan_paradise/petshop.osaka/petlandpeaceone/2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //51
          name: "ひごペットフレンドリー",
          description:
            "ららぽーとEXPOCITY内に位置し、ペット用品や生体販売、トリミングサービスなどが充実しています。",
          store_type: 3,
          prefecture_id: 27,
          opening_hours: "【平日】10:00～20:00 【土日祝】10:00～21:00",
          address: "大阪府吹田市千里万博公園２−１ EXPOCITY1階 ららぽーと",
          phone_number: "06-4864-8081",
          store_url:
            "https://www.higopet.com/sp/shop/s_expocity.php?utm_source=google&utm_medium=mybusiness_50_expocity&utm_campaign=profile",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737423824/wan_paradise/petshop.osaka/higopet%20senrichuo/1.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737423825/wan_paradise/petshop.osaka/higopet%20senrichuo/2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        //北海道動物病院----------------------
        {
          //52
          name: "緑の森どうぶつ病院 さっぽろ病院",
          description:
            "犬専用フロア・ 猫専用フロアと分かれた、ストレスフリーな病院",
          store_type: 4,
          prefecture_id: 1,
          opening_hours:
            "午前 9:00~12:00 午後 15:00 - 18:00 夜間 18:00 - 20:00 休診日 GW/お盆/年末年始",
          address: "旭川市旭神3条2丁目1-8",
          phone_number: "050-5445-0843",
          store_url:
            "https://midori-no-mori.jp/sapporo/?utm_source=google&utm_medium=map_meo&utm_campaign=web_sapporo",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1735011103/wan_paradise/DogRun/midorinomori.sapporo.hospital.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1740365349/wan_paradise/PetShop/midorinomori.png"
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //53
          name: "緑の森どうぶつ病院 大町病院",
          description:
            "伴侶動物全般の診療を、各分野の専門医療を含め行っております。",
          store_type: 4,
          prefecture_id: 1,
          opening_hours:
            "【午前】 午前 9:00-12:00【午後】 15:00-18:00 [休診日] GW/お盆/年末年始",
          address: "旭川市大町2条7丁目77-10",
          phone_number: "011-563-9976",
          store_url: "https://midori-no-mori.jp/oomachi",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737424559/wan_paradise/hospital.hokkaido/omachi/2.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737424559/wan_paradise/hospital.hokkaido/omachi/2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //54
          name: "いなふね動物病院",
          store_type: 4,
          prefecture_id: 1,
          opening_hours:
            "【午前】9:00-12:00【午後】15:00-18:00 [休診日] 日曜、祝日",
          address: "北海道函館市高松町１９４",
          phone_number: "0138-57-1122",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1735011727/wan_paradise/Hospital/inahune.hospital.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //55
          name: "あつき動物病院",
          description:
            "私たちは飼い主様に対する十分な説明、動物達へ愛情を持った丁寧な診療を心がけています。",
          store_type: 4,
          prefecture_id: 1,
          opening_hours:
            "【午前】 9:00-11:45 【午後】 16:00-18:45 休診日 火曜日、日曜午後、祝日",
          address: "札幌市東区北21条東10丁目2-8",
          phone_number: "011-299-7422",
          store_url: "https://atsuki-ac.com/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1735010881/wan_paradise/DogRun/atsuki.hokkaido.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1740365031/wan_paradise/PetShop/akatsu.png"
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //56
          name: "札幌夜間動物病院",
          description: "北海道唯一の夜間専門動物病院",
          store_type: 4,
          prefecture_id: 1,
          opening_hours:
            "【平日】19:00 ～ 翌6:00 【日・祝】14:00 ～ 翌6:00 休診日 年中無休",
          address: "北海道札幌市西区二十四軒4条5丁目9-3の北海道獣医師会館1階",
          phone_number: "011-688-9960",
          store_url: "https://sapporo1299.net/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737424864/wan_paradise/hospital.hokkaido/sapporoyakan/sapporoyakan2.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1735011393/wan_paradise/Hospital/sapporoyakan.hospital.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //57
          name: "ペテモどうぶつ医療センター",
          description:
            "札幌を中心に北海道内で店舗を展開する 道内最大のペットショップ",
          store_type: 4,
          prefecture_id: 1,
          opening_hours: "9:30～19:00",
          address: "北海道札幌市中央区南11条西14丁目",
          phone_number: "011-532-5331",
          store_url: "https://mc.aeonpet.com/sapporotsukisamu/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1735011425/wan_paradise/Hospital/petemo.hokkaido.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          //58
          name: "ポックル動物病院",
          description:
            "犬専用フロア・ 猫専用フロアと分かれた、ストレスフリーな病院",
          store_type: 4,
          prefecture_id: 1,
          opening_hours:
            "(完全予約制) 午前9:00~午後18:00 （日曜祝日は12:00まで）",
          address: "北海道札幌市手稲区前田6条6丁目1-3",
          phone_number: "011-590-1830",
          store_url: "https://pokkur-ah.com/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1735011475/wan_paradise/Hospital/pokkuru.hospital.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737424560/wan_paradise/hospital.hokkaido/pokkle/2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // 東京病院
        {
          //59
          name: "木場きたむら動物病院",
          description:
            "江東区、葛西橋通り、木場公園近くの動物病院です。早朝より診察をしています",
          store_type: 4,
          prefecture_id: 13,
          opening_hours:
            "午前08:00〜12:00 午後16:00〜18:00 夜間18:00〜19:00 (休診日)火曜日",
          address: "東京都江東区冬木１７−７ カスタムビル1階",
          phone_number: "03-6458-8316",
          store_url: "https://kkd-ah.com/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737026881/wan_paradise/hospital.tokyo/tokyo/kibakitamura/1.jpg",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737026881/wan_paradise/hospital.tokyo/tokyo/kibakitamura/2.jpg",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //60
          name: "蒲田どうぶつ医療センター",
          description:
            "矢口渡駅から徒歩４分の『蒲田どうぶつ医療センター』、犬・猫・うさぎ等に対応。",
          store_type: 4,
          prefecture_id: 13,
          opening_hours: "午前9:30~12:00 午後16:00~19:00",
          address: "東京都大田区東矢口２丁目１８−６",
          phone_number: "03-6715-2597",
          store_url: "https://www.ayabe-ah.jp/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737026881/wan_paradise/hospital.tokyo/tokyo/kamada/1.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737026882/wan_paradise/hospital.tokyo/tokyo/kamada/2.jpg",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //61
          name: "荻窪桃井どうぶつ病院",
          description:
            "当院は、病気の早期発見や健康管理をサポートする “生涯のかかりつけ医”をめざしています。同時に、各診療科を越えた複雑な病態にも柔軟に対応いたします。",
          store_type: 4,
          prefecture_id: 13,
          opening_hours: "午前9:30~12:00 午後16:00~19:00",
          address: "東京都杉並区桃井２丁目２−３",
          phone_number: "03-6454-7416",
          store_url:
            "https://midori-no-mori.jp/sapporo/?utm_source=google&utm_medium=map_meo&utm_campaign=web_sapporo",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737026882/wan_paradise/hospital.tokyo/tokyo/ogitsubo/1.jpg",
            "",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //62
          name: "大師前どうぶつ病院",
          description:
            "飼い主やペットが安心して通える親しみやすい病院を目指し、病気の早期発見・早期治療に努めています。",
          store_type: 4,
          prefecture_id: 13,
          opening_hours: "9:00~19:00 (休診日）水曜と日祝の午後",
          address: "東京都足立区西新井１丁目３８−１１ オリエント第６ビル 1F",
          phone_number: "03-6803-1581",
          store_url: "https://www.daishimae-ah.jp/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737436631/wan_paradise/hospital.tokyo/tokyo/oshimae/oshimae1.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737436631/wan_paradise/hospital.tokyo/tokyo/oshimae/2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          //63
          name: "ハートワン動物病院総合診療ケアセンター",
          description:
            "年中無休・夜間対応・急患随時受付・専門医療対応の総合ケアを行っており、トリミングルームやペットホテルも完備しています。",
          store_type: 4,
          prefecture_id: 13,
          opening_hours: "9:00~20:00",
          address: "東京都豊島区上池袋４丁目１０−８",
          phone_number: "03-3918-1122",
          store_url: "http://www.heart-one.net/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737026883/wan_paradise/hospital.tokyo/tokyo/goenmae/1.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737026883/wan_paradise/hospital.tokyo/tokyo/heartone/2.jpg",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //64
          name: "新宿御苑前どうぶつ病院",
          description:
            "全国に展開するアニコムグループの一員で、猫専用の診察スペースを設けるなど、猫に優しい病院としてゴールド認定を受けています",
          store_type: 4,
          prefecture_id: 13,
          opening_hours: "午前9:30~12:30 午後16:00~19:00",
          address: "東京都豊島区上池袋４丁目１０−８",
          phone_number: "050-5445-0843",
          store_url:
            "https://midori-no-mori.jp/sapporo/?utm_source=google&utm_medium=map_meo&utm_campaign=web_sapporo",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737026882/wan_paradise/hospital.tokyo/tokyo/goenmae/2.jpg",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // 大阪病院
        {
          //65
          name: "かわかみ動物病院",
          description:
            "ネット予約が可能で、待ち時間を短縮できます。毎週水曜日には予約往診も実施しています。",
          store_type: 4,
          prefecture_id: 27,
          opening_hours: "(午前）9:00~12:00 (午後)16:30~19:30 (休診日)木曜日",
          address: "大阪府大阪市中央区上本町西５丁目２−４ 協和ビル",
          phone_number: "06-6764-6068",
          store_url: "http://www.kawakami-animal.com/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737425630/wan_paradise/hospital.osaka/%E3%81%8B%E3%82%8F%E3%81%8B%E3%81%BF/1.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //66
          name: "アポロきしのさとどうぶつ病院",
          description:
            "犬、猫、ウサギ、ハムスターなどの小動物に対応し、一般診療から予防医療、外科手術まで幅広く対応しています。",
          store_type: 4,
          prefecture_id: 27,
          opening_hours: "9:00~20:00",
          address: "大阪府大阪市西成区潮路１丁目９−２８ マンションむさし",
          phone_number: "06-6659-1191",
          store_url:
            "https://midori-no-mori.jp/sapporo/?utm_source=google&utm_medium=map_meo&utm_campaign=web_sapporo",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737425630/wan_paradise/hospital.osaka/%E3%82%A2%E3%83%9B%E3%82%9A%E3%83%AD/1.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //67
          name: "アフロ動物病院",
          description:
            "アフロ動物病院では、子犬子猫外来が用意されているため、新しくペットを迎えた方にはおすすめの動物病院です。",
          store_type: 4,
          prefecture_id: 27,
          opening_hours:
            "午前 10:00~13:00 午後 16:00~19:00 (​休診日)月曜日 木曜日の午後",
          address: "大阪市中央区上町１－６－１１ 1F",
          phone_number: "050-5445-0843",
          store_url: "https://www.aflo-animal.com/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737425629/wan_paradise/hospital.osaka/%E3%82%A2%E3%83%95%E3%83%AD/1.png",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737425630/wan_paradise/hospital.osaka/%E3%82%A2%E3%83%95%E3%83%AD/2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //68
          name: "大阪どうぶつ夜間救急センター",
          description:
            "大阪どうぶつ夜間急病センターは、大阪市獣医師会有志が中心となって作った夜間救急病院です。21時〜翌朝5時まで年中無休で診療いたします。",
          store_type: 4,
          prefecture_id: 27,
          opening_hours: "21:00~5:00",
          address: "大阪府大阪市東成区中道3丁目8-11",
          phone_number: "06-6536-1771",
          store_url: "https://doubutsuyakan.jp/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737425914/wan_paradise/hospital.osaka/%E5%A4%9C%E9%96%93%E6%95%91%E6%80%A5/1.jpg",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737425631/wan_paradise/hospital.osaka/%E5%A4%9C%E9%96%93%E6%95%91%E6%80%A5/2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //69
          name: "ひがしなり動物病院",
          description:
            "犬、猫を中心に診療を行い、予防医療や内科、外科手術に対応しています。",
          store_type: 4,
          prefecture_id: 27,
          opening_hours:
            "午前10:00～13:00 午後17:00～20:00 (休診日)日曜・祝日 ※土曜日午後は休診させていただきます。  ",
          address: "大阪府大阪市東成区大今里３丁目２６−３２ サンハイツ今里 1F",
          phone_number: "06-6971-3770",
          store_url: "https://aozoravmc.jp/",
          store_img: JSON.stringify([
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737425631/wan_paradise/hospital.osaka/%E3%81%B2%E3%81%8B%E3%82%99%E3%81%97%E3%81%AA%E3%82%8A/1.jpg",
            "https://res.cloudinary.com/do4lxnof9/image/upload/v1737425631/wan_paradise/hospital.osaka/%E3%81%B2%E3%81%8B%E3%82%99%E3%81%97%E3%81%AA%E3%82%8A/2.png",
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("stores", null, {});
  },
};
