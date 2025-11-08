// References To DOM

const preBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");
const paper7 = document.querySelector("#p7");
const paper8 = document.querySelector("#p8");
const paper9 = document.querySelector("#p9");
const paper10 = document.querySelector("#p10");
const paper11 = document.querySelector("#p11");
const paper12 = document.querySelector("#p12");
const paper13 = document.querySelector("#p13");
const paper14 = document.querySelector("#p14");
const paper15 = document.querySelector("#p15");
const paper16 = document.querySelector("#p16");


// Event listener
preBtn.addEventListener(("click"), goPrevPage);
nextBtn.addEventListener(("click"), goNextPage);


// Can co 4 function

let currentLocation = 1;
let num0Papers = 16; //So trang sach
let maxLocation = num0Papers + 1;


function openBook(){
    book.style.transform = "translateX(50%)";
    preBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning){
    if(isAtBeginning){
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }

    preBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
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
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 1;
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 1;
                break;
            case 6:
                paper6.classList.add("flipped");
                paper6.style.zIndex = 1;
                break;
            case 7:
                paper7.classList.add("flipped");
                paper7.style.zIndex = 1;
                break;
            case 8:
                paper8.classList.add("flipped");
                paper8.style.zIndex = 1;
                break;
            case 9:
                paper9.classList.add("flipped");
                paper9.style.zIndex = 1;
                break;
            case 10:
                paper10.classList.add("flipped");
                paper10.style.zIndex = 1;
                break;
            case 11:
                paper11.classList.add("flipped");
                paper11.style.zIndex = 1;
                break;
            case 12:
                paper12.classList.add("flipped");
                paper12.style.zIndex = 1;
                break;
            case 13:
                paper13.classList.add("flipped");
                paper13.style.zIndex = 1;
                break;
            case 14:
                paper14.classList.add("flipped");
                paper14.style.zIndex = 1;
                break;
            case 15:
                paper15.classList.add("flipped");
                paper15.style.zIndex = 1;
                break;
            case 16:
                paper16.classList.add("flipped");
                paper16.style.zIndex = 1;
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
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 17;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 16;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 15;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 14;
                break;
            case 6:
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 13;
                break;
            case 7:
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 12;
                break;
            case 8:
                paper7.classList.remove("flipped");
                paper7.style.zIndex = 11;
                break;
            case 9:
                paper8.classList.remove("flipped");
                paper8.style.zIndex = 10;
                break;
            case 10:
                paper9.classList.remove("flipped");
                paper9.style.zIndex = 9;
                break;
            case 11:
                paper10.classList.remove("flipped");
                paper10.style.zIndex = 8;
                break;
            case 12:
                paper11.classList.remove("flipped");
                paper11.style.zIndex = 7;
                break;
            case 13:
                paper12.classList.remove("flipped");
                paper12.style.zIndex = 6;
                break;
            case 14:
                paper13.classList.remove("flipped");
                paper13.style.zIndex = 5;
                break;
            case 15:
                paper14.classList.remove("flipped");
                paper14.style.zIndex = 4;
                break;
            case 16:
                paper15.classList.remove("flipped");
                paper15.style.zIndex = 3;
                break;
            case 17:
                openBook();
                paper16.classList.remove("flipped");
                paper16.style.zIndex = 1;
                break;
            default:
                throw new Error("unknown state");
        }

        currentLocation--;
    }
}


const editor = document.getElementById('editor');
  const toolbar = document.getElementById('toolbar');
  const toggleToolbarBtn = document.getElementById('toggle-toolbar');

  // --- HÀM THỰC THI LỆNH CHỈNH SỬA ---
  function exec(cmd, val = null){
    document.execCommand(cmd, false, val);
    editor.focus();
  }

  // --- LOGIC BẬT/MỞ TOOLBAR ---
  toggleToolbarBtn.addEventListener('click', () => {
    toolbar.classList.toggle('active');
  });

  // Đóng toolbar khi click bên ngoài (trừ khi click vào chính nút toggle)
  document.addEventListener('click', (e) => {
    if (toolbar.classList.contains('active') && 
        !toolbar.contains(e.target) && 
        e.target !== toggleToolbarBtn) {
      toolbar.classList.remove('active');
    }
  });


// --- KHAI BÁO SỰ KIỆN NÚT ---

// Định dạng chữ
document.getElementById('btn-bold').addEventListener('click', ()=> exec('bold'));
document.getElementById('btn-italic').addEventListener('click', ()=> exec('italic'));
document.getElementById('btn-underline').addEventListener('click', ()=> exec('underline'));

// Căn lề
document.getElementById('btn-left').addEventListener('click', ()=> exec('justifyLeft'));
document.getElementById('btn-center').addEventListener('click', ()=> exec('justifyCenter'));

//   Chỉnh font family
document.getElementById('font-family').addEventListener('change', (e)=>{
  exec('fontName', e.target.value);
});

// Kích thước và Màu sắc
document.getElementById('font-size').addEventListener('change', (e)=> exec('fontSize', e.target.value));
document.getElementById('color').addEventListener('input', (e)=> exec('foreColor', e.target.value));

// Liên kết
document.getElementById('btn-link').addEventListener('click', ()=>{
    const url = prompt('Nhập URL:');
    if(url) exec('createLink', url);
});

// --- LOGIC ĐÁNH DẤU NÚT ACTIVE ---
editor.addEventListener('mouseup', updateActiveStates);
editor.addEventListener('keyup', updateActiveStates);
editor.addEventListener('focus', updateActiveStates);
editor.addEventListener('click', updateActiveStates); // Thêm click cho chắc chắn

function updateActiveStates(){
    // Kiểm tra trạng thái của các lệnh định dạng
    toggleActive('btn-bold', document.queryCommandState('bold'));
    toggleActive('btn-italic', document.queryCommandState('italic'));
    toggleActive('btn-underline', document.queryCommandState('underline'));
    
    // Kiểm tra trạng thái căn lề (Cần kiểm tra từng lệnh một)
    toggleActive('btn-left', document.queryCommandState('justifyLeft'));
    toggleActive('btn-center', document.queryCommandState('justifyCenter'));
    
    // (Lưu ý: queryCommandState('createLink') có thể trả về true ngay cả khi con trỏ chỉ nằm trong thẻ <a>)
}

function toggleActive(id, on){
    const el = document.getElementById(id);
    if(el) {
    if(on) el.classList.add('active'); 
    else el.classList.remove('active');
    }
}


