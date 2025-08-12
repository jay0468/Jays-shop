function addToCart(productName) {
  alert(productName + ' added to cart!');
  // You can use localStorage to store items
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(productName);
  localStorage.setItem("cart", JSON.stringify(cart));
}

let input=document.getElementById('inputbox');
let buttons= document.querySelectorAll("button");

let string="";
let arr=Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string=eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML =='AC'){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1)
            input.value=string;

        }
        else{
            string +=e.target.innerHTML;
            input.value=string;
        }
    })
})
