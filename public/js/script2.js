var elements = document.getElementsByClassName("Addtocart");


for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', AddCart);
    elements[i].setAttribute("id", "addbutton" + [i]);

}

var orders = {};
let x=1;
function AddCart(oneclick) {
    
    spot=onclick(this)
    var referenceNode=document.getElementById(spot);
    itemname=referenceNode.nextSibling.textContent;
    categoryname=referenceNode.parentElement.parentElement.id;
 if(categoryname in orders){
     
     categoryname=categoryname+x;
     orders[categoryname]=itemname;
     x=x+1;
 }
 else{
    orders[categoryname]=itemname;
    
 }
 console.log(orders);
 
    secret()
}

function secret(){
    var referenceNode=document.querySelector("#menuheadings");
    var secretp = document.createElement("p");
    secretp.setAttribute("id", "secretp");
    secretp.Content=orders;
   secretp.setAttribute=("display","none");
    referenceNode.parentNode.insertBefore(secretp, referenceNode.nextSibling);
    console.log(secretp.Content)
}
function onclick(ele) {
    var id = ele.id;
    return id;
}