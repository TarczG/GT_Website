let cardExterior = document.getElementById('exteriorFilter');
let cardInterior = document.getElementById('interiorFilter');
let cardOther = document.getElementById('otherFilter');
let itemExterior = document.getElementsByClassName("exterior");
let itemInterior = document.getElementsByClassName("interior");
let itemOther = document.getElementsByClassName("other");
let clickedE =false;
let clickedI =false;
let clickedO =false;

const changeButtonStyle = (button,firstLook) =>{
    if(firstLook){
        button.style.backgroundColor = " #fff";
        button.style.color = "#000";
    }else{
        button.style.backgroundColor = " rgb(80,80,80)  ";
        button.style.color = "#fff";
    }
}
cardExterior.onclick = () =>{
    if(!clickedE){
        for(let i =0 ; i<itemExterior.length;i++){
            itemExterior[i].style.display="none";
        }
        clickedE=true;
        changeButtonStyle(cardExterior,false);
    }else{
        for(let i =0 ; i<itemExterior.length;i++){
            itemExterior[i].style.display="block";
        }
        clickedE=false;
        changeButtonStyle(cardExterior,true);
    }
}
cardInterior.onclick = () =>{
    if(!clickedI){
        for(let i =0 ; i<itemInterior.length;i++){
            itemInterior[i].style.display="none";
        }
        clickedI=true;
        changeButtonStyle(cardInterior,false);
    }else{
        for(let i =0 ; i<itemInterior.length;i++){
            itemInterior[i].style.display="block";
        }
        clickedI=false;
        changeButtonStyle(cardInterior,true);
    }
}
cardOther.onclick = () =>{
    if(!clickedO){
        for(let i =0 ; i<itemOther.length;i++){
            itemOther[i].style.display="none";
        }
        clickedO=true;
        changeButtonStyle(cardOther,false);
    }else{
        for(let i =0 ; i<itemOther.length;i++){
            itemOther[i].style.display="block";
        }
        clickedO=false;
        changeButtonStyle(cardOther,true);
    }
}


