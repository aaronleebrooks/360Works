const url = 'http://static.360works.com/codingtest.txt';


fetch(url, {mode: 'cors'})
  .then(function(response) {
    console.log(response);
  })


function fibifyNumbers(array){
  let newArray = [];
  array.map((number) => {
    newArray.push(fib(number));
  }); 
  newArray.forEach((number) => {
  	createP(number);
  })
}

function fib(num){
  if (num <= 1) return 1;
  return fib(num - 1) + fib(num - 2);
}


function createP(number){
	var para = document.createElement("p");
	var node = document.createTextNode(number);
	para.appendChild(node);

	var element = document.getElementById("div1");
	element.appendChild(para);
}

fibifyNumbers([5,2,4,8,1,0]);


