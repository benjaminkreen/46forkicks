$(document).ready(function(){
	var yPos = [];
	for(var i = 1; i < 9; i++){
		yPos.push(i*10);
	}
	
	for(var j = 11; j < 17; j++){
		yPos.push(j*10)
	}
	
	var xPos = [200, 240]
	
	
	var colors = ["red", "blue", "green", "yellow"]
	
	var svg = d3.select('#ep-svg');
	for(var k = 0; k < yPos.length; k++){
		for(var l = 0; l < xPos.length; l++){
			svg.append('rect')
				.attr("class", "seg")
				.attr("x", xPos[l])
				.attr("y", yPos[k])
				.attr("width", 30)
				.attr("height", 10)
				.attr("rx", 5)
				.attr("ry", 5)
				.style("fill", d3.shuffle(colors)[0])
		};
	};
	
		
	var counter = 2;
	var yLength = yPos.length
	
	var EPxPos = [100, 200, 300, 400]
	
	// Making the arrays for y position of each column of the Electrophoresis
	var EPyPos = function(){
		var a = [10]
		for(var i = 0; i < (yLength * 2); i++){
			var num = a[i] + Math.floor((Math.random() * 20) + 15);
			a.push(num);
		}
		return a;
	}
	setInterval(function(){
		console.log("Interval!")
		if(counter % 2 === 0){
			var EPy = EPyPos();
			svg.selectAll('rect.seg')
			.transition()
			.attr("x", function(d, i){ return EPxPos[i % 4]; })
			.attr("y", function(d, i){ return (EPy[i] % 180) + 10; })
			counter++
		} else {
			svg.selectAll('rect.seg')
			.transition()
			.attr("x", function(d, i){ return xPos[i%2]; })
			.attr("y", function(d, i){ if(i < yLength){ return yPos[i % yLength]; } else { return yPos[(i+1) % yLength]; }; })
			counter++
		}
	}, 3000);
})