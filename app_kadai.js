"use strict";
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
let soccer = [
  { id:1, name:"上田綺世", position:"CF",team:"フェイエノールト	",backnumber:18},
  { id:2, name:"南野拓実", position:"MF",team:"モナコ",backnumber:8},
  { id:3, name:"久保建英", position:"MF",team:"レアル・ソシエダ	",backnumber:20},
  { id:4, name:"三笘薫", position:"MF",team:"ブライトン	",backnumber:22},
  { id:5, name:"堂安律", position:"MF",team:"フランクフルト	",backnumber:10},
  { id:6, name:"守田英正", position:"MF",team:"スポルティング",backnumber:3},
  { id:7, name:"遠藤航", position:"MF",team:"リバプール",backnumber:6},
  { id:8, name:"伊藤洋輝", position:"DF",team:"バイエルン",backnumber:14},
  { id:9, name:"板倉滉", position:"DF",team:"アヤックス",backnumber:4},
  { id:10, name:"瀬古歩夢", position:"DF",team:"グラスホッパー",backnumber:26},
  { id:11, name:"鈴木ザイオン", position:"GK",team:"パルマ",backnumber:1},
  ];
   app.get("/soccer2", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('soccer2', {data: soccer} );
});
app.get("/soccer2/create", (req, res) => {
  res.redirect('/public/soccer2_new.html');
});
app.get("/soccer2/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = soccer[ number ];
  res.render('soccer2_detail', {data: detail} );
});

app.get("/soccer2/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  soccer.splice( req.params.number, 1 );
  res.redirect('/soccer2' );
});

// Create
app.post("/soccer2", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = soccer.length + 1;
  const name = req.body.name;
  const position = req.body.position;
  const team = req.body.team;
  const backnumber = req.body.backnumber;
  soccer.push( { id: id, name: name, position: position, team: team,backnumber: backnumber} );
  console.log( soccer );
  res.render('soccer2', {data: soccer} );
});

// Edit
app.get("/soccer2/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = soccer[ number ];
  res.render('soccer2_edit', {id: number, data: detail} );
});

// Update
app.post("/soccer2/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  soccer[req.params.number].name = req.body.name;
  soccer[req.params.number].position = req.body.position;
  soccer[req.params.number].team = req.body.team;
  soccer[req.params.number].backnumber = req.body.backnumber;
  console.log( soccer );
  res.redirect('/soccer2' );
});    
 
let com = [
  { id:1, name:"鈴木大飛", old:27,bloodtype:"B型",tall:183},
  { id:2, name:"佐藤優太", old:26,bloodtype:"B型",tall:173},
  { id:3, name:"浦田悠馬", old:27,bloodtype:"A型",tall:180}, 
  { id:4, name:"渡辺彪雅", old:27,bloodtype:"A型",tall:182},
  { id:5, name:"田中あつき", old:26,bloodtype:"O型",tall:169},
  ];
   app.get("/com2", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
  res.render('com2', {data: com} );
});
   app.get("/com2/create", (req, res) => {
  res.redirect('/public/com2_new.html');
});
   app.get("/com2/:number", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
     const number = req.params.number;
     const detail = com[ number ];
     res.render('com2_detail', {data: detail} );
});
  
  app.get("/com2/delete/:number", (req, res) => {
    // 本来は削除の確認ページを表示する
    // 本来は削除する番号が存在するか厳重にチェックする
    // 本来ならここにDBとのやり取りが入る
    com.splice( req.params.number, 1 );
    res.redirect('/com2' );
  });
  
  // Create
  app.post("/com2", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
    const id = com.length + 1;
    const name = req.body.name;
    const old = req.body.old;
    const bloodtype = req.body.bloodtype;
    const tall = req.body.tall;
    com.push( { id: id, name: name, old: old, bloodtype: bloodtype,tall: tall} );
    console.log( com );
    res.render('com2', {data: com} );
});
  
  // Edit
  app.get("/com2/edit/:number", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
    const number = req.params.number;
    const detail = com[ number ];
    res.render('com2_edit', {id: number, data: detail} );
});
  
  // Update
  app.post("/com2/update/:number", (req, res) => {
    // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
    // 本来ならここにDBとのやり取りが入る
    com[req.params.number].name = req.body.name;
    com[req.params.number].old = req.body.old;
    com[req.params.number].bloodtype = req.body.bloodtype;
    com[req.params.number].tall = req.body.tall;
    console.log( com );
    res.redirect('/com2' );
});

let poker = [
  { id:1, name:"ハイカード", power:0,probability:50.11,noujiru:0},
  { id:2, name:"ワンペア", power:1,probability:32.43,noujiru:3},
  { id:3, name:"ツーペア", power:2,probability:4.75,noujiru:7},
  { id:4, name:"スリーカード", power:3,probability:2.11,noujiru:15},
  { id:5, name:"ストレート", power:4,probability:0.392,noujiru:30},
  { id:6, name:"フラッシュ", power:5,probability:0.198,noujiru:45},
  { id:7, name:"フルハウス", power:6,probability:0.144,noujiru:60},
  { id:8, name:"フォーカード", power:7,probability:0.024,noujiru:85},
  { id:9, name:"ストレートフラッシュ", power:8,probability:0.00139,noujiru:95},
  { id:10, name:"ロイヤルストレートフラッシュ", power:9,probability:0.000154,noujiru:100},
];
   app.get("/poker2", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('poker2', {data: poker} );
});
app.get("/poker2/create", (req, res) => {
  res.redirect('/public/poker2_new.html');
});
app.get("/poker2/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = poker[ number ];
  res.render('poker2_detail', {data: detail} );
});

app.get("/poker2/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  poker.splice( req.params.number, 1 );
  res.redirect('/poker2' );
});

// Create
app.post("/poker2", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = poker.length + 1;
  const name = req.body.name;
  const power = req.body.power;
  const probability = req.body.probability;
  const noujiru = req.body.noujiru;
  poker.push( { id: id, name: name, power: power, probability: probability,noujiru: noujiru} );
  console.log( poker );
  res.render('poker2', {data: poker} );
});

// Edit
app.get("/poker2/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = poker[ number ];
  res.render('poker2_edit', {id: number, data: detail} );
});

// Update
app.post("/poker2/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  poker[req.params.number].name = req.body.name;
  poker[req.params.number].power = req.body.power;
  poker[req.params.number].probability = req.body.probability;
  poker[req.params.number].noujiru = req.body.noujiru;
  console.log( poker );
  res.redirect('/poker2' );
});
  app.listen(8080, () => console.log("Example app listening on port 8080!")); 
 