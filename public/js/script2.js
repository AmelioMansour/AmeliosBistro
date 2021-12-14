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
    itemname = referenceNode.textContent;
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
    delbut.setAttribute("class", "delbuts");
    delbut.setAttribute("id", "delbut");
    delbut.textContent = ("Delete")
    referenceNode.parentNode.insertBefore(delbut, referenceNode);


}
function deletebutton() {

    var referenceNode = document.querySelector("#delbut");
    referenceNode.remove();
    var referenceNode = document.querySelector("#ordereditems");
    console.log();
    referenceNode.remove();

}
function onclick(ele) {
    var id = ele.id;
    return id;
}