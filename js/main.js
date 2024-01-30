//alert("hello ali")

console.log("hello again");
console.warn('warning');
console.error("this an error");

document.getElementById('content').innerHTML="welcome";
document.write("this a test ");

let fname = 'ali';
fname = "reza";
console.log(fname);


const name = "alireza";
console.log(typeof name);

const age = 31;
console.log(typeof age);


const c = undefined
console.log(c);



let x = age * 2;
console.log(x);
console.log(++x);



let fullName = 'hello ' + name + ' ' + fname;
console.log(fullName)

fullName =`hello ${name} - ${fname}`
console.log(fullName)

console.log(fullName.length)
console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())
console.log(fullName.substring(2,4))

console.log(fullName.split(''))

//variable
//datatype
//array , object, function


let className = new Array('c++' , 'c#' , 'python' , 'javascript');
let className2 = ['html' , 'java',' css']


console.log(className[1],className2[2]);


className[4] = "next.js" //add item by number of array index
className.push('django') //add item to the last of arry
className.unshift('assembly') // add item to the first of arry
className.pop(); //delete last item
console.log(className)

console.log(className.indexOf('c#')) //number of index in array


///objects:

const student={
    id:'1',
    name:'ali',
    famil:'reza',
    courses:['c++' , 'html' , 'css' , 'python' , 'react'],
    address :{
        country :'usa' , city:'LA'
    }
}

console.log(student)

console.log(student.address.country)
console.log(student.courses[2]);


let key = 'name';
console.log(student[key]);

student.email = "ali@ali.com";
console.log(student)



//function 


function log(name){
    console.log('hello ' + name)
}

log('ali');
log('reza');


const log2 = () =>{
    console.log('bye')
}

log2(); 



function math (x ,y){
    return x + y
}

let result = math(100,2)

console.log(result)

console.log(math(2,3))



const strrrr = (name,lname) => {
    return name.toUpperCase() + ' ' + Math.round(lname) ;
}

console.log(strrrr('ali',2.1231231231231312313))



////part 2


const courses = [
    {
        id:1,
        name:'html',
        time:10,
        isCompleted : true,
    },
    {
        id:2,
        name:'css',
        time:14,
        isCompleted : false,
    }
]

console.log(courses[0].time)
//convert to json
const resualt = JSON.stringify(courses)
console.log(resualt)

//for

for (let i=0 ;i<10;i++){
    console.log("ali")
}



//while
let j=1;
while(j<10){
    console.log(`reza ${j}`)
    j+=1;
}


for(let i=0 ; i<courses.length ; i++){
    console.log(courses[i].name)
}


for(let c of courses){
    console.log(c)
}


//loop
//forech , map , filter

courses.forEach(function(c){
console.log(c)
})


//createing new aryy form the current arry
//map

const newCourses = courses.map(function(cc){
    return {name : cc.name , id: cc.id , time:cc.time}
})
console.log(newCourses)

console.log("filter")

//filter
const newCourse2 = courses.filter(function(cc){
    return cc.isCompleted === true
}).map(function(c){
    return c.name
})
console.log(newCourse2)



