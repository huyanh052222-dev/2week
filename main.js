const book=document.getElementById('book');
const toolbar=document.getElementById('toolbar');
const toggleToolbar=document.getElementById('toggle-toolbar');
const musicToggle=document.getElementById('music-toggle');
const addPageBtn=document.getElementById('addPageBtn');
const prevBtn=document.getElementById('prev-btn');
const nextBtn=document.getElementById('next-btn');
const bgMusic=document.getElementById('bgMusic');

let pages=[],currentPage=0;

// Bìa đầu
function createCover(text){
  const page=document.createElement('div');
  page.className='paper';
  page.innerHTML=`<div class="front book-cover">${text}</div><div class="back"></div>`;
  page.style.zIndex=100;
  book.appendChild(page);
  pages.push(page);
}

// Tạo trang mới
function createPage(frontContent='',backContent=''){
  const page=document.createElement('div');
  page.className='paper';
  page.innerHTML=`<div class="front content" contenteditable="true">${frontContent}</div>
                  <div class="back content" contenteditable="true">${backContent}</div>`;
  page.style.zIndex=100-pages.length;
  book.appendChild(page);
  pages.push(page);
  enableDragDrop(page);
  loadContent(page);
  updatePages();
}

// Kéo thả ảnh
function enableDragDrop(page){
  page.querySelectorAll('.content').forEach(div=>{
    div.addEventListener('dragover',e=>e.preventDefault());
    div.addEventListener('drop',e=>{
      e.preventDefault();
      const files=e.dataTransfer.files;
      for(let file of files){
        if(file.type.startsWith('image/')){
          const reader=new FileReader();
          reader.onload=function(ev){
            const img=document.createElement('img');
            img.src=ev.target.result;
            const sel=window.getSelection();
            if(sel.rangeCount){sel.getRangeAt(0).insertNode(img); sel.collapseToEnd();}
            else div.appendChild(img);
          }
          reader.readAsDataURL(file);
        }
      }
      saveContent();
    });
    div.addEventListener('input',saveContent);
  });
}

// Lưu & load nội dung
function saveContent(){
  const data=pages.map(p=>{
    const f=p.querySelector('.front').innerHTML;
    const b=p.querySelector('.back').innerHTML;
    return {f,b};
  });
  localStorage.setItem('flipbookData',JSON.stringify(data));
}
function loadContent(page){
  const data=JSON.parse(localStorage.getItem('flipbookData')||'[]');
  const i=pages.indexOf(page);
  if(data[i]){
    page.querySelector('.front').innerHTML=data[i].f;
    page.querySelector('.back').innerHTML=data[i].b;
  }
}

// Cập nhật z-index & flipped
function updatePages(){
  pages.forEach((p,i)=>{
    if(i<currentPage){p.classList.add('flipped'); p.style.zIndex=i;}
    else{p.classList.remove('flipped'); p.style.zIndex=pages.length-i;}
  });
  saveContent();
}

// Toolbar
toolbar.querySelectorAll('button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const cmd=btn.dataset.cmd;
    if(cmd==='createLink'){
      const url=prompt("Nhập URL:");
      if(url) document.execCommand(cmd,false,url);
    } else if(cmd==='insertImage'){
      const url=prompt("Nhập URL ảnh:");
      if(url) document.execCommand(cmd,false,url);
    } else document.execCommand(cmd,false,null);
  });
});
document.getElementById('font-family').addEventListener('change',e=>document.execCommand('fontName',false,e.target.value));
document.getElementById('font-size').addEventListener('change',e=>{
  const size=e.target.value;
  document.execCommand('fontSize',false,'7');
  const sel=window.getSelection();
  if(sel.rangeCount){
    const node=sel.anchorNode.parentNode;
    if(node.tagName==='FONT'){node.removeAttribute('size'); node.style.fontSize=size;}
  }
});
document.getElementById('color').addEventListener('change',e=>document.execCommand('foreColor',false,e.target.value));



// Toggle toolbar
toggleToolbar.addEventListener('click',()=>toolbar.classList.toggle('show'));

// Toggle music icon + audio
musicToggle.addEventListener('click',()=>{
  if(bgMusic.paused){bgMusic.play(); musicToggle.textContent='🔊';}
  else{bgMusic.pause(); musicToggle.textContent='🔇';}
});

// Prev/Next
prevBtn.addEventListener('click',()=>{if(currentPage>0) currentPage--; updatePages();});
nextBtn.addEventListener('click',()=>{if(currentPage<pages.length-1) currentPage++; updatePages();});

// Thêm trang
addPageBtn.addEventListener('click',()=>createPage());

// Khởi tạo
createCover("💌 NoteCloud - Lưu bút thanh xuân 💌");
for(let i=0;i<5;i++) createPage();
updatePages();
