
// const dynamicKey1='location';
// const dynamicValue1='melbourne';

// const dynamicKey2='Phone';
// const dynamicValue2=12232;

// function sayHello(){
//     console.log("Hello");
//     return "hi";
// }
// const user={
//     name:"jack",
//     age:25,
//     gender:'male',
//     [dynamicKey1]:dynamicValue1,
//     [dynamicKey2]:dynamicValue2,
//   sentence:sayHello
//     };

// user.sentence()
// console.log(user.sentence());
// console.log(user[dynamicKey1]);
// console.log(user[dynamicKey2]);
// alert(user.name);
// delete user.gender;
// console.log(user);
// for(let prop in user){
//     console.log(prop);
//     console.log(user[prop]);
    
//     }
const placeHolders=[
    
    
   
    {
        id: 1,
        name: "Leanne Graham",
        username: "Samantha",
        email: "Sincere@april.biz",
        
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        
      },
      {
        id: 2,
        name: "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        
      },
      {
        "id": 3,
        name: "Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        
      },
      {
        "id": 4,
        name: "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        
      },
  ]

 
 

  const result=placeHolders.filter(word=>word.username==="Samantha" )
  console.log(result);


 placeHolders.forEach((e)=>{
console.log(`${e.id},${e.name},${e.username},,${e.email},${e.phone}`);

  })
  
//  .keys(placeHolders).forEach(function(key){
//     console.log(key+''+placeHolders[key])
//  })
let array=["cakes", "muffins","pastries","chocolate"]
let array2=[230,440,330,70,150]
 
let mapping= array2.map(amount)

function amount(num){
  return num*10;
}
console.log(mapping)

let menu=array.map(items)

function items(dish){

  return ("items-"+dish)

}
console.log(menu)

for(let x in array){
  console.log(x+"-"+array[x]);

}

array2.sort(sorting)
function sorting(a,b){
  return a-b;
}
console.log(array2)



function handleSubmit(){
var cols=document.getElementById("column1").value;
var rows=document.getElementById("row1").value;
var table=document.getElementById("table1");
table.innerHTML =''

// vertical.remove();
// horiz.remove();
for(var i=0;i<rows;i++){
    var newRow=document.createElement("tr");
    for(var j=0;j<cols;j++){
      var newColumn=document.createElement("td");
      newRow.appendChild(newColumn);
    }
    table.appendChild(newRow);
}

}

// let value=prompt("Enter the age");
// switch (value){
//   case '10':
//     alert('You are a kid ');
//     break;
//     case '13':
//       alert('Welcome to teenage');
//       break;
//     case '18':
//     alert('You are an adult');
//     break;
    
//     case '27':
//     alert('Be ready to get married!');
//     break;
    
    
//     default :
//       alert('An unknown value');
// }

// function pow(x,n){
//   if(n==1){
//     return x;
//   }
//   else{
//     return x*pow(x,n-1);
//   }
// }
// alert(pow(2,3));

const paragraph=document.getElementsByClassName("para color");
paragraph[1].style.backgroundColor="crimson";
paragraph[0].style.backgroundColor="grey";
paragraph[1].style.padding='10px';
paragraph[0].style.padding='10px';
paragraph[0].style.color="white";
paragraph[1].style.color="white";