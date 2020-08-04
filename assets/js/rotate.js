const imagesTag = document.getElementsByClassName("rotate");
const imageActive = document.getElementsByClassName("rotate active")
const itensTag = document.getElementsByClassName("selector__item");
const leftButton = document.getElementsByClassName("banner__arrow--left");
const rightButton = document.getElementsByClassName("banner__arrow--right");

leftButton[0].addEventListener("click", previmage);
rightButton[0].addEventListener("click", nextimage);

function previmage() {
    console.log("back");
}

function nextimage() {

    const nextParent = imageActive[0].parentNode.nextElementSibling;
    // imageActive[0].classList.remove("active");
    // next.classList.add("active");
    console.log(nextParent.children[3])

    nextElement = nextParent.children[3].classList.add("active");
    imageActive[0].classList.remove("active")





}

// for (let i = 0; i < imagesTag.length; i++) {
//     if (i !== 1) {
//         imagesTag[i].classList.add("imagenone");

//     }

// }

console.log(document.getElementById("slide"))