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
app.listen(8080, () => console.log("Example app listening on port 8080!"));   
   
   
   
   
  
    
  
  