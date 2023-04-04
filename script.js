function calculateMinCost() {
  //your code here
	var inputdata= Document.querrySelector("#rope-lengths").value;
	var inputArr= inputdata.split(",");

			for (let i = 0; i < inputArr.length; i++){
				inputArr[i]= Number(inputArr[i]);
		
	}
	var cost=0;
	while (inputArr.length>1) {
		var newRope= inputArr[0] + inputArr[1];
		cost += newRope;

		//delete first 2 elements
		inputArr.splice(0,2);
		inputArr.push(newRope);
		
		
	}
  Document.querrySelector(#result).textcontent=cost;
  
  
}  
