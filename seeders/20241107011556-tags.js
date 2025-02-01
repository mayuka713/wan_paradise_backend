"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tags",
      [ //1
        { name: "自然芝生", tag_type: 1, createdAt: new Date(), updatedAt: new Date() },
        //2
        { name: "人工芝生", tag_type: 1, createdAt: new Date(), updatedAt: new Date() },
        //3
        { name: "全種利用可能", tag_type: 1, createdAt: new Date(), updatedAt: new Date() },
        //4
        { name: "小型犬エリア有り", tag_type: 1, createdAt: new Date(), updatedAt: new Date(), },
        //5
        { name: "駐車場有り", tag_type: 1, createdAt: new Date(), updatedAt: new Date() },
        //6
        { name: "24時間利用可能", tag_type: 1, createdAt: new Date(), updatedAt: new Date(), },
        //7
        { name: "屋内", tag_type: 1, createdAt: new Date(), updatedAt: new Date() },
        //8
        { name: "屋外", tag_type: 1,createdAt: new Date(), updatedAt: new Date() },
        // facility
        //9
        { name: "おしっこじょうろあり", tag_type: 2, createdAt: new Date(), updatedAt: new Date() }, 
        //10
        { name: "うんち袋あり", tag_type: 2, createdAt: new Date(), updatedAt: new Date() },
        //11
        { name: "ゴミ箱あり(うんち)", tag_type: 2, createdAt: new Date(), updatedAt: new Date() },
        //12
        { name: "洗い場あり", tag_type: 2, createdAt: new Date(), updatedAt: new Date() },
        //13
        { name: "トイレあり（人間用）", tag_type: 2, createdAt: new Date(), updatedAt: new Date() },
        //14
        { name: "水飲み場あり", tag_type: 2, createdAt: new Date(), updatedAt: new Date() },
        // dog_cafe
        //15
        { name: "店内OK", tag_type: 3, createdAt: new Date(), updatedAt: new Date() },
        //16
        { name: "テラス席OK", tag_type: 3, createdAt: new Date(), updatedAt: new Date() },
        //17
        { name: "大型犬OK", tag_type: 3, createdAt: new Date(), updatedAt: new Date() },
        //18
        { name: "駐車場あり", tag_type: 3, createdAt: new Date(), updatedAt: new Date() },
        //19
        { name: "わんこメニューあり", tag_type: 3, createdAt: new Date(), updatedAt: new Date() },
        
        //petshop
        //20
        { name: "駐車場あり", tag_type: 4, createdAt: new Date(), updatedAt: new Date() },
        //21
        { name: "トリミングあり", tag_type: 4, createdAt: new Date(), updatedAt: new Date() },
        //22
        { name: "ペットホテル併設", tag_type: 4, createdAt: new Date(), updatedAt: new Date() },
  
        //hospital
        //23
        { name: "駅から近い", tag_type: 5, createdAt: new Date(), updatedAt: new Date() },
        //24
        { name: "ペットホテル併設", tag_type: 5, createdAt: new Date(), updatedAt: new Date() },
        //25
        { name: "１階に入口あり", tag_type: 5, createdAt: new Date(), updatedAt: new Date() },
        //26
        { name: "入り口自動ドアあり", tag_type: 5, createdAt: new Date(), updatedAt: new Date() },
        //27
        { name: "駐車場あり", tag_type: 5, createdAt: new Date(), updatedAt: new Date() },
        //28
        { name: "夜間・休日診察可能", tag_type: 5, createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tags", null, {});
  },
};
