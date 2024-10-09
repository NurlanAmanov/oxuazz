const  xeberinfocontent =document.getElementById('xeberinfocontent')
const id = location.search.split("=")[1];
const XEBEERR=[]
fetch( `https://67057e08031fd46a83102e03.mockapi.io/api/v1/nurdata/${id}`)
.then((res) => res.json())
.then((xeb)=>{
    XEBEERR.push(xeb)
    xebergetd()
})


function xebergetd(){
    XEBEERR.map(item=>{
        xeberinfocontent.innerHTML+=` 
        <div class="xeber-info p-2 mx-3 w-[95%] lg:w-full">
                <div class="xeber-blok1 lg:items-start lg:justify-start lg:w-[80%] mb-4 lg:flex">
                    <img src="${item.img}" class="lg:w-[90%] mx-auto object-contain" alt="">
                </div>
                <div class="blok1-mains flex items-start py-2 justify-start w-full mt-4 flex-col lg:flex-row">
                    <div class="tarix-page flex items-start justify-start  ">

                        <a href="#" class="lg:hidden">${item.catagory}</a>
                    </div>
                    <ul class="lg:flex items-center justify-center space-x-4 hidden font-[sans-serif]">
                        <li class="text-gray-500 text-base cursor-pointer">
                          Ana səhifə
                        </li>
                        <li class="text-gray-500 text-lg">/</li>
                        <li class="text-gray-500 text-base cursor-pointer">
                          kriminal
                        </li>

                      </ul>
                    <div class="tarix flex items-end justify-end flex-row font-semibold text-[#AEAEAE]">
                        <p class="text-md"> <i class="fa-regular fa-calendar-days mx-1 text-[#AEAEAE]"></i> 04 okt, 2024 / 20:00
                        </p>
                        <p class="text-md gap-3"><i class="fa-solid fa-eye mx-2"></i>${item.view}</p>
                    </div>
                </div>

                <div class="content-xeber">
                    <h2 class="text-2xl font-semibold text-[#051D39]">${item.title}</h2>
                </div>
                <span class="flex items-center justify-start gap-4 my-6 text-2xl">
                    <i class="fa-regular fa-thumbs-up hover:text-[#64B6BE]"></i>235<i class="fa-regular fa-thumbs-down mx-1 hover:text-[#ff5f2d]"></i>12
                </span>
                <div class="xeber-content2 my-12">
                    
                    <p class="text-lg ">${item.description}</p>
                </div>
            </div>`
    })
}

