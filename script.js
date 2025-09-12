const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// プレイヤー情報
let player = {
  x: 50,   // X座標
  y: 50,   // Y座標
  size: 32, // キャラの大きさ
  color: "red" // 仮の色
};


function draw() {
  // 画面クリア
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // プレイヤー描画
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.size, player.size);

  requestAnimationFrame(draw);
}
draw();
