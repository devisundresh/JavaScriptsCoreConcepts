// Strings are more used datatypes -> ecart->title,paragraph,productname,addcart....

let username1 ='pooja';
let username2 = 'pooja';

username1+username2;// -> this ready for garbage collector
console.log(username1);

for (let i=0;i<=1000;i++){
  username1+'devi'; //1000 times not going to create
}

