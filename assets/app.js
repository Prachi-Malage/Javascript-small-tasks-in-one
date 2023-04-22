let cl = console.log

                            // 1  hide/show button and mouse over and out

//dlclrtion

const hide = document.getElementById('hide')
const show = document.getElementById('show')
const toggle = document.getElementById('toggle')
const box = document.getElementById('box')

const ShowHide = document.getElementById('ShowHide')
const ShowHideInput = document.getElementById('ShowHideInput')


//callback function

const boxHideHandler = function (e){
    cl(e);
    cl(e.type);
    cl(e.target);
    //cl(this) cannot used this keyward in arrow funtion beacuse this event always poiner to window object
    //box.style.display = 'none'
    box.classList.add('d-none')
}

const boxShowHandler = function (e){
    cl(e)
    cl(e.type)
    cl(e.target)
    //cl(this) cannot used this keyward in arrow funtion beacuse this event always poiner to window object
    box.classList.remove('d-none')
}

const boxToggleHandler = function (e) {
    cl(e)
    cl(e.type)
    cl(e.target)
    box.classList.toggle('d-none')
}

let flag = true
const box1ShowHideHandler = function() {
    if(flag === true){
        box.classList.add('d-none')
        flag = false
        ShowHide.textContent = "Show Div"
    }else{
        box.classList.remove('d-none')
        flag = true
        ShowHide.textContent = 'Hide Div'
    }

}

let flag2 = true
const box1ShowHideInputHandler = function(e) {
    if(flag2 === true){
        box.classList.add('d-none')
        flag2 = false
        ShowHideInput.value = "Show Div"
    }else{
        box.classList.remove('d-none')
        flag2 = true
        ShowHideInput.value = 'Hide Div'
    }

}

//event binding
hide.addEventListener('click', boxHideHandler)
show.addEventListener('click', boxShowHandler)
toggle.addEventListener('click', boxToggleHandler)
ShowHide.addEventListener('click', box1ShowHideHandler)
ShowHideInput.addEventListener('click', box1ShowHideInputHandler)
box.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'blue'
})
box.addEventListener('mouseout', (e) => {
    e.target.style.backgroundColor = 'hotpink'
})



                             // 2 change color on mouse moving
const box1 = document.getElementById('box1')

box1.addEventListener('mousemove', (e) => {
    cl('Moving' , e.offsetX)
    e.target.style.backgroundColor = `rgba(255,${e.offsetX},${e.offsetY})`      
})
//client x , y >>calculate distance from screen
//offset x, y >> calsulate distance from particular cointainer or box 



                               // 3 imge change on mouse over and out

let jsImg = 'https://media.istockphoto.com/photos/javascript-code-computer-language-programming-internet-text-editor-picture-id1156837650?k=20&m=1156837650&s=612x612&w=0&h=YK8L1eAhXtYZOtnJBWdH5H4mVslt0U7HP7K4ODr6Jms='
let angularImg = 'https://media.istockphoto.com/photos/team-of-professional-developer-programmer-cooperation-meeting-and-picture-id1144131733?s=612x612'
const jsStack = document.getElementById('jsStack')



jsStack.addEventListener('mouseover', (e) => {
    e.target.setAttribute('src', angularImg)
})

jsStack.addEventListener('mouseout', (e) => {
    e.target.setAttribute('src', jsImg)
})






//>>>>>>                                           keyboard events


const input = document.getElementById ('input')
const bgColor = document.getElementById ('bgColor')
const body = document.querySelector('body')


// const keyDownHandler = (e) => {
//     cl(e.target.value)
// }
// input.addEventListener('keyup',(e) => {
//         cl(e.target.value)
//      })


//input.addEventListener('keydown', keyDownHandler)


//form event

//1 focus
input.addEventListener('focus', (e) => {
    e.target.style.backgroundColor = 'purple'
})

//2 blur
input.addEventListener('blur', (e) => {
    e.target.style.backgroundColor = 'hotpink'
})


//3 change
bgColor.addEventListener('change', (e) => {
    cl(e.target.value)
    body.style.backgroundColor = e.target.value;
})



// 4 Print name
//>>
const userNameinput = document.getElementById('userName') //input
const printName = document.getElementById('printName') // butn
const nameHolder = document.getElementById('userNameHolder') //p

//>>

function printMyText(){
    
  let result = nameHolder.innerHTML = userNameinput.value 
  if (result === (nameHolder.innerHTML = userNameinput.value)){
  
    nameHolder.classList.remove('d-none'),
    userNameinput.value = ''
  }
  cl(result)
}

//>>

printName.addEventListener('click', printMyText)


// 5 color filter task
//>>

const colorFilter = document.getElementById ('colorFilter')
const allDivs = [...document.querySelectorAll('.all')]


//>>
const onColorChange = (e) => {
    let getSelectedColor = "." + e.target.value;
    cl(getSelectedColor)
    allDivs.forEach(div => div.classList.add('d-none'))
    let getSelectedDivs = [...document.querySelectorAll(getSelectedColor )]
    getSelectedDivs.forEach(div => div.classList.remove('d-none'))
    
}


//>>
colorFilter.addEventListener('change', onColorChange)


//>> 6 things filter task



const trees = document.getElementById('animal')
const flowers = document.getElementById('animal')
const waterfall = document.getElementById('animal')
const things = document.getElementById ('things')
const allthingsDivs = [...document.querySelectorAll('.allthings')]


const onImgChange = (e) => {
    let getSelectedImg = "." + e.target.value;
    cl(getSelectedImg)
    allthingsDivs.forEach(div => div.classList.add('d-none'))
    let getSelectedDiv = [...document.querySelectorAll(getSelectedImg)]
    getSelectedDiv.forEach(div => div.classList.remove('d-none'))
    
}

things.addEventListener('change', onImgChange)