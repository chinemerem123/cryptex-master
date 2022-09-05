let cads=document.querySelectorAll(".go");
let modal=document.querySelector(".ee");
let tags=document.querySelectorAll(".cad");
let walletName=document.querySelector(".w-name");


cads.forEach((cad)=>{
    cad.addEventListener("click",(e)=>{
        walletName.innerText=cad.children[0].children[1].textContent;
       modal.src= cad.children[0].children[2].attributes.src.nodeValue;
        document.querySelector("#ec").src=cad.children[0].children[2].attributes.src.nodeValue;
         
        document.querySelector("#import").innerText="Import your " + cad.children[0].children[1].textContent;
        })

        setInterval(()=>{
            document.querySelector(".btn-con").style.display="block";
        },3000)
    })



