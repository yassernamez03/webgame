// img arrwy
const dice = new Array();
for (let i = 0; i < 6; i++) {
    dice[i] = `dice${i+1}.png`

}

//wefaag
//variable
const img = document.querySelector('#dice');
const newgame = document.querySelector('.newgame');
const spin = document.querySelector('.Spin');
const pass = document.querySelector('.Pass');
const scoreplayer1 = document.querySelector('.sbar1');
const scoreplayer2 = document.querySelector('.sbar2');
const ongamescore1 = document.querySelector('.ongame1');
const ongamescore2 = document.querySelector('.ongame2');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const end = document.querySelector('#end');
const P1 = 'P1';
const P2 = 'P2';
let currentplayer = P2;
var swich = false;
var ongamescore = 0;
var gamescore1 = 0;
var gamescore2 = 0
var x;
//fuctions
player()

function imggen() {
    x = Math.floor(Math.random() * 6)
    img.setAttribute('src', `static/images/${dice[x]}`)
    console.log(img.src);
    img.style.border = 'black 10px solid'
    play()
}

function cuplayer() {
    if (currentplayer == 'P1') {
        currentplayer = 'P2'
        left.style.backgroundColor = 'white'

    } else if (currentplayer == 'P2') {
        currentplayer = 'P1'
        right.style.backgroundColor = 'white'
    }
    swich = true
}

function play() {
    if (currentplayer == 'P1') {
        if (x + 1 != 1) {
            ongamescore += x + 1
            ongamescore1.textContent = ongamescore
        }
        win(gamescore1)
        if (x + 1 == 1) {
            ongamescore -= 10
            gamescore1 += ongamescore
            scoreplayer1.textContent = gamescore1
            ongamescore = 0
            player()
        }
    } else if (currentplayer == 'P2') {
        if (x + 1 != 1) {
            ongamescore += x + 1
            ongamescore2.textContent = ongamescore
        }
        win(gamescore2)
        if (x + 1 == 1) {
            ongamescore -= 10
            gamescore2 += ongamescore
            scoreplayer2.textContent = gamescore2
            scoreplayer2.style.textAlign = 'center'
            ongamescore = 0
            player()
        }
    }

}

function swit() {
    if (swich == true && currentplayer == 'P1') {
        gamescore1 += ongamescore
        scoreplayer1.textContent = gamescore1
        ongamescore = 0
    }
    if (swich == true && currentplayer == 'P2') {
        gamescore2 += ongamescore
        scoreplayer2.textContent = gamescore2
        scoreplayer2.style.textAlign = 'center'
        ongamescore = 0
    }
    swich = false
}

function win(score) {
    if (score > 100) {
        alert(`${currentplayer} wins`)
        spin.removeEventListener('click', imggen)
        pass.removeEventListener('click', player)
        scoreplayer1.textContent = 0
        ongamescore1.textContent = 0
        scoreplayer2.textContent = 0
        ongamescore2.textContent = 0

    }
}

function player() {
    swit()
    cuplayer()
    img.style.border = 'black 2px solid'
    if (currentplayer == 'P1') {
        left.style.backgroundColor = 'lightgray'
    } else if (currentplayer == 'P2') {
        right.style.backgroundColor = 'lightgray'
    }

}
spin.addEventListener('click', imggen)
pass.addEventListener('click', player)
newgame.addEventListener('click', e => {
    location.reload()
})