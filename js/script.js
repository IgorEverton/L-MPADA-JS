const elementoLigar=document.querySelector("#ligarId")
const elementoDesLigar=document.querySelector("desligarId")

elementoLigar.addEventListener("click", ()=>{
    document.querySelector("#imgLamOffId").src="./img/lam_on.png"
})

elementoDesLigar.addEventListener("click", ()=>{
    document.querySelector("#imgLamOffId").src="./img/lam_off.png"
})
