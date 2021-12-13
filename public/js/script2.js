var elements = document.getElementsByClassName("Addtocart");


for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', AddCart);
    elements[i].setAttribute("id", "addbutton" + [i]);

}

var orders = {};
let x = 1;
function AddCart(oneclick) {

    spot = onclick(this)
    var referenceNode = document.getElementById(spot);
    itemname = referenceNode.nextSibling.textContent;
    categoryname = referenceNode.parentElement.parentElement.id;
    if (categoryname in orders) {
        categoryname = categoryname + x;
        orders[categoryname] = itemname;
        document.
            x = x + 1;
        addtoDOM(categoryname, itemname);
    }
    else {
        orders[categoryname] = itemname;

        addtoDOM(categoryname, itemname);

    }



}
tocart.addEventListener('click', addtoDOM);
function addtoDOM(categoryname, itemname) {
    this.categoryname = categoryname
    this.itemname = itemname
    switch (categoryname) {
        case "breakfastitems":
            cost = 11;
            break;
        case "lunchitems":
            cost = 14
            break;
        case "dinneritems":
            cost = 16;
            break;
    }
    var referenceNode = document.querySelector("#menuheadings");
    var item = document.createElement("p");
    item.setAttribute("id", "ordereditems");
    item.setAttribute("class", "ordereditems");
    item.textContent = ("$" + cost + " " + itemname);
    referenceNode.parentNode.insertBefore(item, referenceNode.nextSibling);
    //delete button
    
    var referenceNode = document.querySelector("#ordereditems");
    delbut = document.createElement("button");
    delbut.addEventListener('click', deletebutton);
    delbut.setAttribute("class","delbuts");
    delbut.textContent=("Delete")
    referenceNode.parentNode.insertBefore(delbut, referenceNode);


}
function deletebutton(){
    
    delbut.remove();
    var referenceNode = document.querySelector("#ordereditems");
    referenceNode.remove();
    referenceNode.parentNode.remove();
}



function secret() {
    let y = 0
    var referenceNode = document.querySelector("#menuheadings");

    var secretp = document.createElement("p");
    secretp.setAttribute("id", "secretp");
    secretp.Content = orders;
    secretp.setAttribute = ("display", "none");
    referenceNode.parentNode.insertBefore(secretp, referenceNode.nextSibling);
    console.log(secretp.Content)
    y = y + 1;
}
function onclick(ele) {
    var id = ele.id;
    return id;
}