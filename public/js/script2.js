var elements = document.getElementsByClassName("Addtocart");


for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', AddCart);
    elements[i].setAttribute("id", "addbutton" + [i]);

}
console.log(elements)
var orders = {};
let x=1;
function AddCart(oneclick) {
    
    spot=onclick(this)
    var referenceNode=document.getElementById(spot);
    itemname=referenceNode.nextSibling.textContent;
    categoryname=referenceNode.parentElement.parentElement.id;
 if(categoryname in orders){
     console.log("fail");
     categoryname=categoryname+x;
     orders[categoryname]=itemname;
     x=x+1;
 }
 else{
    orders[categoryname]=itemname;
    console.log("was empty")
 }
    
    console.log(orders);
}



function onclick(ele) {
    var id = ele.id;
    return id;
}