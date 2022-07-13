// let imageVar = document.getElementById('image');
// let imageArray = ['./image/baba.png','./image/mike.png','./image/sasa.png','./image/robby.png'];

// let imageIndex = 0;

// function showSlide(){
//     imageVar.setAttribute('src',imageArray[imageIndex]);
//     imageIndex ++;
//     if(imageIndex >= imageArray.length){
//         imageIndex = 0;
//     }
// }
// setInterval(showSlide, 3000);


// ARRAYS:CHECKING ARRAY LIST CONTENT WITH THE {.include() method.}

// let gusto = prompt('Enter your name to the system');
// let guestList = ["john","mark","mercy","vitalice","tom","jose","mindy","eliza","nyash"];
// let nameExists = guestList.includes(gusto)
// if(nameExists){
//   alert(`welcome! to my graduation ceremony`);  
// }
// else{ 
//   alert(`your name is not in the list please leave this place immediately!`);
// }

//using bracket notation to access objects. [""] is applied.
// let Person = {
//     name: "john",
//     age: 21,
//     grade: "B",
//     city: "nairobi"
//   }
//   console.log(Person["age"],Person["city"]);


//  diving deep into bracket notation.
  // let airBnb = {
  //   isTrue: false,
  //   list: ['lodge',34,'visitor'],
  //   name: "hotel",
  //   code: 23,
  //    sayHello: function(blackjack){ //u can also log out a function inside 
  //     //your object as method... as showed in the codes.
  //     // methods are functions that are attached to objects.
  //     let samuel = 6 + 3;
  //     let message = "please come home john";
  //     return samuel +  message ;
  //     //  console.log("samuel");
  //    }

  // }
  // //console.log(airBnb["list"],airBnb.isTrue,airBnb);
  //  console.log(airBnb.sayHello());

// travelling ticket charges at the bus stop.APP
// let age = 21;
// let message = "";
// // using the nested if else statements..
// if(age <= 6){
//   console.log("free");
// }
// else if(age >6 && age <=17){
//   console.log("child discount");
// }
// else if(age >18 && age <=26){
//   console.log("student discount");
// }
// else if(age > 27 && age <= 66){
//   console.log("full price");

// }
// else if(age > 66){
//   console.log("senior price");
// }
// else{
//   console.log("invalid passenger age");
//}


//area of rectangle.
// function calc(){
//     let w =document.getElementById("width").value;
//     let h =document.getElementById("height").value;

//     let area = w * h;

//     document.getElementById("answer").value = area;
// }


// // calculating the body mass in weight.
// function calc(){
//   let w =document.getElementById("").value;
//   let h =document.getElementById("unit").value;

//   let area = w * h;

//   document.getElementById("answer").value = area;
// }

  let numberOfPersons = names.length;
  let personSelected =Math.floor(Math.random()*numberOfPersons);//pick the length and cuts out the dps
  let randomPerson = names[personSelected];//call the index and then replcases with the names in the array list.
  return randomPerson + " is going to buy us lunch today";
let names = ["mercy","mark","opita","don","lucy","sarah"];
console.log(whosBuying(names)); 


  