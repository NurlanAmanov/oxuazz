let toggleOpen = document.getElementById('toggleOpen');
let toggleClose = document.getElementById('toggleClose');
let collapseMenu = document.getElementById('collapseMenu');
let sectionconten1 = document.getElementById('sectionconten1');
let scontent2 = document.getElementById('scontent2');
const title = document.getElementById('title')
const img = document.getElementById('img')
const view = document.getElementById('view')
const description = document.getElementById('description')
const catagory = document.getElementById('catagory')
const xeberlist = document.getElementById('xeberlist')
const xeberyerslesdir = document.getElementById('xeberyerslesdir')
const profil = document.getElementById('profil')
const ayarlar = document.getElementById('ayarlar')



function anasehgo() {   

  xeberlist.style.display = "block";   
  profil.style.display = "none"; 
  ayarlar.style.display = "none";  
}

function xeberyergo() {   
  xeberyerslesdir.style.display = "flex";   

  profil.style.display = "none"; 
  ayarlar.style.display = "none";  
}

function hesabgo() {   
  profil.style.display = "block";    
  xeberlist.style.display = "none";   
  xeberyerslesdir.style.display = "none"; 
  ayarlar.style.display = "none";  
}

function ayargo() {   
  ayarlar.style.display = "block";   
  profil.style.display = "none";   
  xeberlist.style.display = "none";   
  xeberyerslesdir.style.display = "none"; 
}

let XEBERIM = []

function handleSubmit(event) {
  event.preventDefault()
  const viewValue = view.value
  const imgValue = img.value
  const titleValue = title.value
  const descValue = description.value
  const catgValue = catagory.value

  const descriptionValue = description.value
  if (titleValue.trim().length < 5 || titleValue.trim().length > 255) return alert("Bu xananı tam doldur")
  if (descValue.trim().length < 5)  alert("Bu xananı tam doldur")

    xeberinfo.innerHTML = `
  <div id="alert-box" class="flex items-start max-sm:flex-col lg:flex-col w-[80%] bg-green-100 text-green-800 p-4 rounded-lg relative" role="alert">
          <div class="flex items-center max-sm:mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] fill-green-500 inline mr-3" viewBox="0 0 512 512">
              <ellipse cx="256" cy="256" fill="#32bea6" rx="256" ry="255.832" />
              <path fill="#fff" d="m235.472 392.08-121.04-94.296 34.416-44.168 74.328 57.904 122.672-177.016 46.032 31.888z" />
            </svg>
            <strong class="font-bold text-lg">Uğurlu oldu!</strong>
          </div>
        
          <span class="block sm:inline text-lg ml-4 mr-8 max-sm:ml-0 max-sm:mt-2">Xəbər uğurla yerləşdirildi.</span>
        </div>
`;

setTimeout(function() {
  const alertBox = document.getElementById("alert-box");
  if (alertBox) {
    alertBox.style.display = "none";
  }
}, 3000);


  const obj = {
    "title": titleValue,
    "img": imgValue,
    "view": viewValue,
    "description": descValue,
    "catagory": catgValue,

  }

  fetch('https://67057e08031fd46a83102e03.mockapi.io/api/v1/nurdata', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
XEBERIM.length = 0
formbaqla()
  cedvelyaz()
  editxeber()
  getxeber()
}


function getxeber() {
  fetch("https://67057e08031fd46a83102e03.mockapi.io/api/v1/nurdata")
    .then(res => res.json())
    .then(datam => {
      XEBERIM.push(...datam)
      cedvelyaz()
      showxeber()
    })
}
getxeber()

const xebercontainer = document.getElementById("xebercontainer")
const xebercedvel = document.getElementById("xebercedvel")
function showxeber() {
 
  xebercontainer.innerHTML = ""

  XEBERIM.map(item => {
    xebercontainer.innerHTML += `
    <div class="bg-[#FAFAF9] shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden  h-[350px] mx-4 font-[sans-serif] mt-4">
      <div>
      <a href="/page/xeberler.htm?id=${item.id}"> 
       <img src="${item.img}" class="w-full" /> 
       </a>
      </div>
      <div class="p-4">
        <span class="flex items-center justify-start gap-4 my-3"><p class="text-md"> <i class="fa-regular fa-calendar-days mx-1"></i> 04 okt, 2024 / 20:00
        </p>  <p class="text-md gap-3"><i class="fa-solid fa-eye mx-2"></i>${item.view}</p></span>
        <a href="#" class="text-gray-800 text-xl font-bold">${item.title}</a>
        <div class="flex items-center justify-between">
        <p class="mt-4 text-lg  font-semibold text-[#64B6BE] leading-relaxed uppercase">${item.catagory}
        </p>  
    <span class="flex items-center justify-center gap-4">
        <i class="fa-regular fa-thumbs-up hover:text-[#64B6BE] "></i> 31 <i class="fa-regular fa-thumbs-down mx-1 hover:text-[#ff5f2d]"></i> 31
    </span>
    </div>
        
       
    </div>
   </div>
`
  })

}


function cedvelyaz(){
  XEBERIM.map(item => {

    xebercedvel.innerHTML += `
      <tr class="border-b">
        <td class="p-4 text-xl text-gray-900 whitespace-nowrap">
          ${item.title}
        </td>
        <td class="p-4 text-xl text-gray-900 whitespace-nowrap">
          ${item.view}
        </td>
        <td class="p-4 text-xl text-gray-900 whitespace-nowrap">
          ${item.catagory}
        </td>
        <td class="p-4 text-2xl text-gray-900 whitespace-nowrap">
          <img src="${item.img}" class="w-16 h-16 object-cover" alt="${item.title}">
        </td>
        <td class="p-4 text-xl text-gray-900 whitespace-nowrap">
          <button onclick="deleteXeber(${item.id})" class="text-blue-600 hover:text-blue-800">  <img src="../img/delete.png" class="w-[35px]" alt=""></button>
          <button onclick="editxeber(${item.id})" class="text-blue-600 hover:text-blue-800">  <img src="../img/edit.png" class="w-[35px]" alt=""></button>
        </td>
      </tr>
    `;
  })}

function deleteXeber(id){
fetch(`https://67057e08031fd46a83102e03.mockapi.io/api/v1/nurdata/${id}`,{
   method: "DELETE",
} )
.then(res=>res.json())
.then(datam=>{
  console.log(datam)
  XEBERIM=XEBERIM.filter(item=item.id !=id)
 
})
}

function editxeber(id) {
  document.getElementById('xeberyerslesdir').style.display = 'flex';
  
  const { title: ad, description, img, view, catagory } = XEBERIM.find(item => item.id == id);

  document.getElementById('title').value = ad;
  document.getElementById('description').value = description;
  document.getElementById('catagory').value = catagory;
  document.getElementById('img').value = img;
  document.getElementById('view').value = view;

  const form = document.querySelector('form');
  form.onsubmit = (event) => {
    event.preventDefault(); 
    editet(id); 
  };
}

function editet(id) {
  
  const viewValue = document.getElementById('view').value;
  const imgValue = document.getElementById('img').value;
  const titleValue = document.getElementById('title').value;
  const descValue = document.getElementById('description').value;
  const catgValue = document.getElementById('catagory').value;


  const obj = {
    "title": titleValue,
    "img": imgValue,
    "view": viewValue,
    "description": descValue,
    "catagory": catgValue,
  };

  
  fetch(`https://67057e08031fd46a83102e03.mockapi.io/api/v1/nurdata/${id}`, {
    method: 'PUT',
    body: JSON.stringify(obj), 
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
  
}


function formbaqla() {
  xeberyerslesdir.style.display = 'none';
}

function preventClick(event) {
  event.stopPropagation();
}

function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);
