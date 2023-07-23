// Função para pausar o jogo
let paused = false;
function togglePause() {
    paused = !paused;
    const restartBtn = document.getElementById('restartBtn');
    restartBtn.disabled = !paused; // Habilita o botão "Restart" quando o jogo está pausado
}

// Função para reiniciar o jogo após o "Game Over"
function restartGame() {
    if (!paused) return; // Verifica se o jogo está pausado
    paused = false; // Despausa o jogo
    const stage = document.getElementById('stage');
    const ctx = stage.getContext("2d");
    ctx.clearRect(0, 0, stage.width, stage.height); // Limpa o canvas
    document.getElementById("score").innerText = ""; // Limpa a mensagem de "Game Over"
    startGame(); // Inicia o jogo novamente
}

let vx, vy, px, py, tam, qt, ax, ay, score, trail, tail, ctx, vel;

function startGame() {
    const stage = document.getElementById('stage');
    ctx = stage.getContext("2d"); 
    stage.addEventListener("click", togglePause);
    
    vel = 1; // velocidade
    vx = vy = 0; 
    px = 10;
    py = 15;
    tam = 20; 
    qt = 20; 
    ax = ay = 15; // apple

    score = 0;
    trail = [];
    tail = 1;
}

function gameOver() {
    vx = vy = 0;
    document.getElementById("score").innerText = "Game Over";
}

window.onload = function() {
    startGame(); // Inicia o jogo

    const pauseBtn = document.getElementById('pauseBtn');
    const restartBtn = document.getElementById('restartBtn');
    pauseBtn.addEventListener('click', togglePause);
    restartBtn.addEventListener('click', restartGame);
    document.addEventListener("keydown", keyPush);
    setInterval(game, 100);
}

function game() {
    if (paused) return;
    px += vx;
    py += vy;

    // Verificar colisão com as bordas do tabuleiro
    if (px < 0 || px >= qt || py < 0 || py >= qt) {
        gameOver();
        return;
    }

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, stage.width, stage.height);
    
    ctx.fillStyle = "red";
    ctx.fillRect(ax * tam, ay * tam, tam, tam);

    ctx.fillStyle = "green";
    for (let i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * tam, trail[i].y * tam, tam, tam);

        if (trail[i].x === px && trail[i].y === py) {
            gameOver();
            return;
        }
    }

    trail.push({x: px, y: py});
    while (trail.length > tail) {
        trail.shift();
    }

    if (ax === px && ay === py) {
        tail++;
        document.getElementById('score').innerText = "SCORE: " + score++;
        ax = Math.floor(Math.random() * qt);
        ay = Math.floor(Math.random() * qt);
    }
}

function keyPush(event) {
    if (paused) return;

    // Impede o comportamento padrão do navegador ao pressionar as teclas de seta
    event.preventDefault();
    event.stopPropagation();

    switch (event.keyCode) {
        case 37: // left
            if (vx === 0) { // Impede que a cobra se mova para a esquerda se já estiver indo para a direita
                vx = -vel;
                vy = 0;
            }
            break;
        case 38: // up
            if (vy === 0) { // Impede que a cobra se mova para cima se já estiver indo para baixo
                vx = 0;
                vy = -vel;
            }
            break;
        case 39: // right
            if (vx === 0) { // Impede que a cobra se mova para a direita se já estiver indo para a esquerda
                vx = vel;
                vy = 0;
            }
            break;
        case 40: // down
            if (vy === 0) { // Impede que a cobra se mova para baixo se já estiver indo para cima
                vx = 0;
                vy = vel;
            }
            break;
        default:
            break;
    }
}
