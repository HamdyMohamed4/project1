let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let maountains_3 = document.getElementById('maountains_3');
let maountains_2 = document.getElementById('maountains_2');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let nouvil = document.querySelector('.nouvil');

window.onscroll =function(){
    let value = scrollY;
    stars.style.left=value +"px";
    moon.style.top = value * 3 +"px" ;
    maountains_3.style.top =value * 1.5 + 'px';
    maountains_2.style.top =value * 1 + 'px';
    river.style.top =value  + 'px';
    boat.style.top =value  + 'px';
    boat.style.left =value*2  + 'px';
    nouvil.style.fontSize =value  + 'px';


    if(scrollY >= 72){
        nouvil.style.fontSize =72  + 'px';

        if(scrollY >=441){
            nouvil.style.display = 'none';
        }
        else{
            nouvil.style.display ='block';

        }
    }
    else{
        nouvil.style.fontSize =value  + 'px';
    }
    
}