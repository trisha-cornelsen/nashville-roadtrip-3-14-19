//store data
var myList = (JSON.parse(localStorage.getItem("myData")) || [] )

//create items
function createItem() {
	var newItem = {text:window.prompt("What sounds fun?"), style:"none"}
	myList.push(newItem)
	localStorage.setItem("myData", JSON.stringify(myList))
	printItem(newItem)
}

//print items to the visual website
function printItem(item) {
	var p = document.createElement("p")
	p.innerHTML = item.text
	p.className = item.style
	p.onclick = function(){
		this.className = item.style = (this.className =="none") ? "strike" : "invisible"
		localStorage.setItem("myData", JSON.stringify(myList))
	}
	document.getElementById("myDiv").appendChild(p)
}

//loop and print list
for (x=0: x < myList.Length; x++) {printItem(myList[x])}