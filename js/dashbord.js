let toggleOpen = document.getElementById('toggleOpen');
let toggleClose = document.getElementById('toggleClose');
let collapseMenu = document.getElementById('collapseMenu');
let sectionconten1 = document.getElementById('sectionconten1');
let scontent2 = document.getElementById('scontent2');

function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);



function panelgo(){
   if(sectionconten1.style.display==="block"){
    sectionconten1.style.display="none"
    scontent2.style.display="block"
   }
}
function sehifego(){
   if(scontent2.style.display==="block"){
    sectionconten1.style.display="block"
    scontent2.style.display="none"
   }
}