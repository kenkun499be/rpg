
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// プレイヤー情報
let player = {
  x: 50,
  y: 50,
  size: 32,
  color: "red",
  speed: 3
};

// 押されているキーを記録するオブジェクト
let keys = {};

// キーが押されたら true
document.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});

// キーが離されたら false
document.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

function update() {
  // 押されているキーに応じて移動
  if (keys["ArrowUp"] || keys["w"])    player.y -= player.speed;
  if (keys["ArrowDown"] || keys["s"])  player.y += player.speed;
  if (keys["ArrowLeft"] || keys["a"])  player.x -= player.speed;
  if (keys["ArrowRight"] || keys["d"]) player.x += player.speed;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // プレイヤーを描画
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.size, player.size);

  update(); // 入力を反映

  requestAnimationFrame(draw);
}
draw();

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
