let inputWidth = document.querySelector(".input__width")
let inputHeight = document.querySelector(".input__height")
let inputColor = document.querySelector(".input__color")
let inputRadius = document.querySelector(".checkbox")
let container = document.querySelector(".element__area")
let btnCreate = document.querySelector(".create")
let btnClear = document.querySelector(".clear")
let btnTop = document.querySelector(".top")
let btnBottom = document.querySelector(".bot")
let btnLeft = document.querySelector(".left")
let btnRight = document.querySelector(".right")
let newDiv;
let mTop = 0;
let mLeft = 0;
let iwValue;
let ihValue;
let icValue;
let isRadius;
let isDiv = false;
const clearDiv = () =>{
    container.firstChild.remove()
    isDiv = false
}
const createDiv = () =>{
    if (!isDiv) {
        iwValue = inputWidth.value
        ihValue = inputHeight.value
        icValue = inputColor.value
        isRadius = inputRadius.checked

        if (iwValue >= 50 && ihValue >= 50 && iwValue <= 500 && ihValue <= 500) {
            newDiv = document.createElement('div')
            newDiv.style.width = iwValue+'px'
            newDiv.style.height = ihValue+'px'
            newDiv.style.backgroundColor = icValue

            if (isRadius) {
                newDiv.style.borderRadius = iwValue/2 + 'px'
            }

            document.querySelector(".element__area").prepend(newDiv)
            

            isDiv = true
        }
    }
}


btnClear.addEventListener('click', clearDiv)
btnCreate.addEventListener('click', createDiv)

const blockUp = () =>{
    if (mTop - 10 >= 0 ) {
        mTop -= 10
        newDiv.style.marginTop = mTop + 'px'
    }   
}
const blockBottom = () =>{
    if ( 500 - (mTop*1+ihValue*1+10)>=0) {
        mTop += 10
        newDiv.style.marginTop = mTop + 'px'
    }
}
const blockLeft = () =>{
    if (mLeft - 10 >= 0) {
        mLeft -= 10
        newDiv.style.marginLeft = mLeft + 'px'
    }
}
const blockRight = () =>{
    if (500 - (mLeft*1+iwValue*1+10)>=0) {
        mLeft += 10
        newDiv.style.marginLeft = mLeft + 'px'
    }
}

btnTop.addEventListener('click', blockUp)

btnBottom.addEventListener('click', blockBottom)

btnLeft.addEventListener('click', blockLeft)

btnRight.addEventListener('click', blockRight)
