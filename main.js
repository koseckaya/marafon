const arenas = document.querySelector('.arenas')
const randomBtn = document.querySelector('.button')


let player1 = {
    playerNo:1,
    name: "Soniya",
    hp: "100",
    img : "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
    weapon: ["knife", "bow"],
    attack: function() {
        console.log(player1.name + ' fight');
    }
}
let player2 = {
    playerNo:2,
    name: "Scorpion",
    hp: "100",
    img : "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ["knife", "bow"],
    attack: function() {
        console.log(player1.name + ' fight');
    }
}

function createElement(tag, className) {
    const tagEl = document.createElement(tag)
    if(className){
        tagEl.classList.add(className)
    }
    return tagEl
}

function createPlayer({name: playerName, hp: playerHp, img: playerImg, playerNo}) {
    const player = createElement('div', 'player'+ playerNo)
    const progressbar = createElement('div', 'progressbar')
    const character = createElement('div', 'character')
  
    player.appendChild(progressbar)
    player.appendChild(character)

    const life =  createElement('div', 'life')
    life.style.width = `${playerHp}%`;

    const name =  document.createElement('div', 'name')
    name.innerText = playerName;

    progressbar.appendChild(life)
    progressbar.appendChild(name)

    const img = createElement('img')
    img.src = playerImg;

    character.appendChild(img)
    return player
}

function changeHP(player) {
    const playerLife = document.querySelector('.player'+player.playerNo + ' .life');
    player.hp -= randomDamage ();
    playerLife.style.width = player.hp + '%';
    console.log(player.hp);
    if(player.hp <= 0) {
        player.hp = 0
        randomBtn.disabled = true
        arenas.appendChild(playerWin(player.name))
    }
}

function playerLose(name) {
    const loseTitle = createElement('div', 'loseTitle')
    loseTitle.innerText = name + ' lose';
    return loseTitle
}
function playerWin(name) {
    const winTitle = createElement('div', 'loseTitle')
    winTitle.innerText = name + ' win';
    return winTitle
}

function randomDamage () {
    return Math.floor(Math.random() * 20)
}

randomBtn.addEventListener('click', () => {
    changeHP(player1)
    changeHP(player2)
} )

  arenas.appendChild(createPlayer(player1))
  arenas.appendChild(createPlayer(player2))


