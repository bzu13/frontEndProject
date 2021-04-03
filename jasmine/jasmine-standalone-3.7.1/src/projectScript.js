function addMaterial(materialId, costId){
		 		var x = document.getElementById(materialId).insertRow(0);
		 		var w = document.getElementById(costId).insertRow(0);
		 		var y = x.insertCell(0);
		 		var z = w.insertCell(0);
		 		y.innerHTML = getName() + " " + getColor() + "<br>" + getVolume() + "m3";
		 		z.innerHTML = "$" + getCost() + ".00";
		 		
		 	} //function to add Material to list
function removeMaterial(materialId, costId){
		 		document.getElementById(materialId).deleteRow(0);
		 		document.getElementById(costId).deleteRow(0);
		 	} //function to remove Material to list
function getName() {
				  var x = document.getElementById("Name").value;
				  return x;
			} //function to display name of Material
function getColor() {
				  var x = document.getElementById("Color").value;
				  return x;
			} //function to display color of Material
function getVolume() {
				  var x = document.getElementById("Volume").value;
				  return x;
			} //function to display volume of Material
function getCost() {
				  var x = document.getElementById("Cost").value;
				  var y = document.getElementById("Volume").value;
				  return calculateCost(x,y);
			} //function to diplay cost of material
function convertCost(costId, position){
		 		var x = document.getElementById(costId);
				var str = x.rows.item(position).innerHTML;;
				var res = str.substring(5);;
				var sum = parseInt(res);
		 		return sum;
		 	}//function to convert table element to number
function calculateCost(cost, volume){
				return cost * volume;
			} //function to calculate cost for requested volume 
function calculateTotal(costId){
		 		var currentLength = document.getElementById(costId).rows.length;
		 		var i;
		 		var sum = 0;
		 		for(i = 0; i < currentLength; i ++){
		 			sum = sum + convertCost(costId, i);
		 		}
		 		
		 		document.getElementById("total").innerHTML = "Total Cost: $" + sum;
		 	}//function to display total cost