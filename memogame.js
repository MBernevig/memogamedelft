const cards = document.querySelectorAll('.card');

let score = 0;
let flipped=null;
let locked = null;
let first,second;


function flipCard() {
    if(locked) return;
    if(this === first) {
        score++;
        return;
    }

    this.classList.add('flip');

    if(!flipped){
        flipped = true;
        first=this;
        return;
    }

    second=this;
    checkMatch();
}

function checkMatch(){
    if(second.getAttribute('data-nr') 
        === first.getAttribute('data-nr'))
    {
        disableCards();
        playerscore++;
    }

    else 
    unflipCards();
}

function disableCards(){
    first.removeEventListener('click',flipCard);
    second.removeEventListener('click',flipCard);
    score++;

    resetBoard();
}

function unflipCards(){
    locked = true;
    setTimeout(() =>{
    first.classList.remove('flip');
    second.classList.remove('flip');

    resetBoard();
}, 1000);
}

function resetBoard(){
    flipped = false;
    locked = false;
    first = null;
    second = null;
    document.getElementsByClassName('score').innerHTML = "Score: " + score;
}

(function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });
  })();

  





    // const target= e.currentTarget;
    // const nr = target.getAttribute('data-nr');
    // console.log(target.getAttribute('data-nr') );
    // target.className = target.className.replace('hidden','').trim();




cards.forEach(card => card.addEventListener('click',flipCard))