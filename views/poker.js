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
  res.redirect('/public/soccer2_new.html');
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
  res.render('soccer2_edit', {id: number, data: detail} );
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