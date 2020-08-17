const leftButton = document.getElementsByClassName("banner__arrow--left");
const rightButton = document.getElementsByClassName("banner__arrow--right");

leftButton[0].addEventListener("click", previmage);
rightButton[0].addEventListener("click", nextimage);

function previmage() {

    const imagePosition = getImagesPosition()
    imagePosition.active[0].classList.remove("active")
    imagePosition.prev.classList.add("active")
    getImagesPosition()
}

function nextimage() {

    const imagePosition = getImagesPosition()
    imagePosition.active[0].classList.remove("active")
    imagePosition.next.classList.add("active");
    getImagesPosition()
}

function getImagesPosition() {

    const imageActive = document.getElementsByClassName("rotate active")
    const nextImage = imageActive[0].parentNode.nextElementSibling.children[3]

    const previousElement = imageActive[0].parentNode.previousElementSibling
    const previousImage = previousElement ? previousElement.children[3] : null;

    const valueReturn = {
        prev: previousImage,
        active: imageActive,
        next: nextImage
    }

    enableDisableNavigation(valueReturn)

    return valueReturn;
}

function enableDisableNavigation(imagePosition) {

    if (imagePosition.next == undefined || imagePosition.next == null) {
        rightButton[0].disabled = true;
    } else {
        rightButton[0].disabled = false;
    }

    if (imagePosition.prev == undefined || imagePosition.prev == null) {
        leftButton[0].disabled = true;
    } else {
        leftButton[0].disabled = false;
    }
}

getImagesPosition()