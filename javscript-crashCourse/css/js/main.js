//workigng with DOM

//console.log(window)
/*
const form = document.getElementById("my-form");

console.log(form);

//document.getElementByNlassName('class_name');

const con = document.querySelector('.container')
console.log(con)
// */


// const ul = document.querySelector('.items');
// ul.lastElementChild.innerText ="Last Item";
// ul.children[1].innerHTML = "<h2>item</h2>";

// const btn = document.querySelector('.btn');
// btn.style.background="black";
// console.log(ul)

//event
// const btn = document.querySelector('.btn');
// btn.addEventListener("click" , (e) =>{
//     e.preventDefault(); //does not allow to refresh page (stopping the defualt acction of object)
//     //console.log(e.target.className)
//     //e.target.className="error"
//     //document.querySelector("#my-form").style.background="yellow"
//     //document.querySelector("body").classList.add('bg-dark')
//    // document.querySelector('.items').lastElementChild.innerHTML="<h2> click </h2>"

// })

//btn.addEventListener("mouseout", (e)=>{
//    console.log("mouseout")})



const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const users = document.querySelector("#users");


myForm.addEventListener("submit" , onSubmit)

function onSubmit(e){
    e.preventDefault();
    console.log(nameInput.value);
    if(nameInput.value === '' || emailInput.value === ''){
        msg.innerHTML="<h5> Please enter all fields </h5>"
        msg.classList.add('error')
        setTimeout(()=>{
            msg.innerHTML= '';
            msg.classList.remove("error");
        },2000)
    }else{
        const li=document.createElement("li");
        li.appendChild(document.createTextNode(nameInput.value + " : " + emailInput.value))
        users.appendChild(li)
        nameInput.value = '';
        emailInput.value = '';
    }
}



