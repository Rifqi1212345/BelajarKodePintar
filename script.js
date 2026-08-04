const cardstart = document.querySelector(".card-start");
const landing2= document.getElementById("landing2");

cardstart.onclick = () => {
  landing2.scrollIntoView({
    behavior: "smooth"
  });
};



const belajarsekarang = document.querySelector(".belajar-sekarang");
const materi1 = document.getElementById("materi1");

belajarsekarang.onclick = () => {
  materi1.scrollIntoView({
    behavior: "smooth"
  });
};


const btnMulai = document.getElementById("btnmulai");
const pengenalan = document.getElementById("Pengenalan");

let scrollDibuka = false;

window.addEventListener("touchmove", function(e) {
    if (!scrollDibuka) {
        e.preventDefault();
    }
}, { passive: false });

btnMulai.addEventListener("click", function() {

    

    pengenalan.scrollIntoView({
        behavior: "smooth"
    });

});

const btnbelajar = document.getElementById("btnbelajar");
const materi = document.getElementById("materi");

btnbelajar.addEventListener("click", function() {

    scrollDibuka = true;
    
    materi.scrollIntoView({
        behavior: "smooth"
    });

});




