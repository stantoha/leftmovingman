let hand = document.querySelectorAll('.hand__container'),
    leg = document.querySelectorAll('.leg__container'),
    buttonMove = document.querySelector('.butt');



let addHandMove=function(){

    hand.forEach(item => {
        if (item.classList.contains('right')) {
            item.classList.add('right__hand__move');
        } else if (item.classList.contains('left')) {
            item.classList.add('left__hand__move');
        }
    });
}

let addLegMove=function(){

    leg.forEach(item => {
        if (item.classList.contains('right')) {
            item.classList.add('left__leg__move');
        } else if (item.classList.contains('left')) {
            item.classList.add('right__leg__move');
        }
    });
}

let addMove=function(){
    addHandMove();
    addLegMove();
};

buttonMove.addEventListener(('click'),()=>{
    addMove()} );