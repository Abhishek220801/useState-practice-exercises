const heading1 = document.querySelector("#heading-1")
const heading2 = document.querySelector("#heading-2")
const heading3 = document.querySelector("#heading-3")
const heading4 = document.querySelector("#heading-4")
const heading5 = document.querySelector("#heading-5")
const heading6 = document.querySelector("#heading-6")
const heading7 = document.querySelector("#heading-7")
const heading8 = document.querySelector("#heading-8")
const heading9 = document.querySelector("#heading-9")
const heading10 = document.querySelector("#heading-10")

function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(element) {
                element.textContent = text
                element.style.color = color
                resolve()
            }
            else{
                reject("Element not found")
            }
        }, time)
    })
}

changeText(heading1, "one", "red", 1000)
    .then(() => changeText(heading2, "two", "purple", 1000))
    .then(() => changeText(heading3, "three", "green", 1000))
    .then(() => changeText(heading4, "four", "cyan", 1000))
    .then(() => changeText(heading5, "four", "cyan", 1000))
    .then(() => changeText(heading6, "four", "cyan", 1000))
    .then(() => changeText(heading7, "four", "cyan", 1000))
    .then(() => changeText(heading8, "four", "cyan", 1000))
    .then(() => changeText(heading9, "four", "cyan", 1000))
    .then(() => changeText(heading10, "four", "cyan", 1000))
    .catch((err) => alert(err))