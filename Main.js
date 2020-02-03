var reset = document.querySelector('#game');

var squares = document.querySelectorAll('td');

function clearBoard(){
    for(var i =0;i<squares.length;i++){
        squares[i].textContent='';
    }
}


function PlayerMove(){
    if(this.textContent===''){this.textContent='X';}
    else if(this.textContent==='X'){this.textContent='O';}
    else{this.textContent='';}

}


for (var i =0;i<squares.length;i++){
squares[i].addEventListener('click',PlayerMove);
}
reset.addEventListener('click',clearBoard);
