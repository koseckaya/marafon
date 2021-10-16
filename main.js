const arenas = document.querySelector('.arenas')


let player1 = {
    name: "Soniya",
    hp: "100",
    img : "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
    weapon: ["knife", "bow"],
    attack: function() {
        console.log(player1.name + ' fight');
    }
}
let player2 = {
    name: "Scorpion",
    hp: "110",
    img : "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ["knife", "bow"],
    attack: function() {
        console.log(player1.name + ' fight');
    }
}

function createPlayer(playerClass,{name: playerName, hp: playerHp, img: playerImg}) {
    const player = document.createElement('div')
    player.classList.add(playerClass)

    const progressbar = document.createElement('div')
    progressbar.classList.add('progressbar')
    const character = document.createElement('div')
    character.classList.add('character')

    player.appendChild(progressbar)
    player.appendChild(character)

    const life =  document.createElement('div')
    life.classList.add('life')
    life.style.width = `${playerHp}%`;

    const name =  document.createElement('div')
    name.classList.add('name')
    name.innerText = playerName;

    progressbar.appendChild(life)
    progressbar.appendChild(name)

    const img = document.createElement('img')
    img.src = playerImg;

    character.appendChild(img)


    arenas.appendChild(player)
}



// createPlayer('player1', 'SCORPION', 50);
// createPlayer('player2', 'SUB-ZERO', 80);

createPlayer('player1', player1)
