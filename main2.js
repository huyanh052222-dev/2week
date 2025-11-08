// References To DOM

const preBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

// Event listener
preBtn.addEventListener(("click"), goPrevPage);
nextBtn.addEventListener(("click"), goNextPage);


// Can co 4 function

let currentLocation = 1;
let num0Papers = 3; //So trang sach
let maxLocation = num0Papers + 1;


function openBook(){
    book.style.transform = "translateX(50%)";
    preBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(){

}

function goNextPage(){
    if(currentLocation < maxLocation){
        switch(currentLocation){
            case 1: 
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 1;
                break;
            case 3: 
                paper3.classList.add("flipped");
                paper3.style.zIndex = 1;
                closeBook();
                break;
            default:
                throw new Error("unknow state");
        }
        currentLocation++;
    } 
}

function goPrevPage(){
    if(currentLocation > 1){
        switch(currentLocation){
            case 2:
                closeBook();
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error("unknown state");
        }

        currentLocation--;
    }
}