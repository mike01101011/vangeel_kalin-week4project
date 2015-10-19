$(function(){
	
// Primary Colours
	var redObject = {color: ["Red", " Primary", " #F80F00", " RGB(248,15,0)"], complement: "Green", analagous: ["Red-Orange", "Red-Purple"]};
	var yellowObject = {color: ["Yellow", "Primary", " #FDFF00", " RGB(253,255,0)"], complement: "Purple", analagous: ["Yellow-Orange", "Yellow-Green"]};
	var blueObject = {color: ["Blue", "Primary", " #0400FF", " RGB(4,0,255)"], complement: "Orange", analagous: ["Blue-Purple", "Blue-Green"]};
// Secondary Colours	
	var orangeObject = {color: ["Orange", " Secondary", " #FDB901", " RGB(253,185,1)"], complement: "Blue", analagous: ["Red-Orange", "Yellow-Orange"]};
	var greenObject = {color: ["Green", " Secondary", " #34C000", " RGB(52,192,0)"], complement: "Red", analagous: ["Blue-Green", "Yellow-Green"]};
	var purpleObject = {color: ["Purple", " Secondary", " #9500C0", " RGB(149,0,192)"], complement: "Yellow", analagous: ["Blue-Purple", "Red-Purple"]};
// Tertiary Colours
	var redOrangeObject = {color: ["Red-Orange", " Tertiary", " #FA7900", " RGB(250,121,0)"], complement: "Blue-Green", analagous: ["Red", "Orange"]};
	var yellowOrangeObject = {color: ["Yellow-Orange", " Tertiary", " #FEDE00", " RGB(254,222,0)"], complement: "Blue-Purple", analagous: ["Yellow", "Orange"]};
	var yellowGreenObject = {color: ["Yellow-Green", " Tertiary", " #D7FF00", " RGB(215,255,0)"], complement: "Red-Purple", analagous: ["Yellow", "Green"]};
	var blueGreenObject = {color: ["Blue-Green", " Tertiary", " #30C0A7", " RGB(48,192,167)"], complement: "Red-Orange", analagous: ["Blue", "Green"]};
	var bluePurpleObject = {color: ["Blue-Purple", " Tertiary", " #6700BF", " RGB(103,0,191)"], complement: "Yellow-Orange", analagous: ["Blue", "Purple"]};
	var redPurpleObject = {color: ["Red-Purple", " Tertiary", " #BF0099", " RGB(191,0,153)"], complement: "Yellow-Green", analagous: ["Red", "Purple"]};

	var colorArray = [ 
		redObject, yellowObject, blueObject, 
		orangeObject, greenObject, purpleObject, 
		redOrangeObject, yellowOrangeObject, 
		yellowGreenObject, blueGreenObject, 
		bluePurpleObject, 
		redPurpleObject
		];
	console.log(colorArray);
	console.info(colorArray);
	console.error(colorArray);
	console.table(colorArray);
	
	for (i = 0; i < colorArray.length; i++) {
		var listItem1 = colorArray[i].color;
		var listItem2 = colorArray[i].complement;
		var listItem3 = colorArray[i].analagous[0];
		var listItem4 = colorArray[i].analagous[1];
		$("." + colorArray[i].color[0] + " ul.colorInfoList").append("<li>" + listItem1 + "</li>");
		$("." + colorArray[i].color[0] + " ul.colorInfoList").append("<li>" + listItem2 + "</li>");
		$("." + colorArray[i].color[0] + " ul.colorInfoList").append("<li>" + listItem3 + "</li>");
		$("." + colorArray[i].color[0] + " ul.colorInfoList").append("<li>" + listItem4 + "</li>");
	}

	$('.icon svg').on('click', function() {
		var clickCounter = $(this).data('clickcount');	
		var cellColor = $(this).data('cellcolor');	
		
		if (clickCounter == 0) {
			clickCounter++;
			$(this).data('clickcount', clickCounter);
		
 			$(this).parent().parent('div.cell').css( "border", "1px solid #fff" )
 			
 			$(this).parent().css( "color", "#fff" );
 			
 			$(this).css("stroke", "#fff").css("stroke-alignment", "outer").css("stroke-width", "1");

 			$(this).siblings().css( "text-shadow", "1px 1px 1px #000" );
 			$(this).siblings().children().children().css( "text-shadow", "1px 1px 1px #000" );

			if (cellColor === "red") {
				$(this).parent().parent().css( "background-color", "#FF0000" );
				
				$(this).children('path').css( "fill", "#00FF48" );
				$(this).children('polygon').css( "fill", "#00FF48" );
				$(this).children('circle').css( "fill", "#00FF48" );
				$(this).children().children('path').css( "fill", "#00FF48" );
			} else if (cellColor === "red-orange") {
				$(this).parent().parent().css( "background-color", "#FA7900" );
				
				$(this).children('path').css( "fill", "#00C6FA" );
				$(this).children('polygon').css( "fill", "#00C6FA" );
				$(this).children('circle').css( "fill", "#00C6FA" );
				$(this).children().children('path').css( "fill", "#00C6FA" );

			} else if (cellColor === "orange") {
				$(this).parent().parent().css( "background-color", "#FDB900" );
				
				$(this).children('path').css( "fill", "#013BFD" );
				$(this).children('polygon').css( "fill", "#013BFD" );
				$(this).children('circle').css( "fill", "#013BFD" );
				$(this).children().children('path').css( "fill", "#013BFD" );
			} else if (cellColor === "yellow-orange") {
				$(this).parent().parent().css( "background-color", "#FEDE00" );
				
				$(this).children('path').css( "fill", "#2400FE" );
				$(this).children('polygon').css( "fill", "#2400FE" );
				$(this).children('circle').css( "fill", "#2400FE" );
				$(this).children().children('path').css( "fill", "#2400FE" );
			} else if (cellColor === "yellow") {
				$(this).parent().parent().css( "background-color", "#FDFF00" );
				
				$(this).children('path').css( "fill", "#8100FF" );
				$(this).children('polygon').css( "fill", "#8100FF" );
				$(this).children('circle').css( "fill", "#8100FF" );
				$(this).children().children('path').css( "fill", "#8100FF" );
			} else if (cellColor === "yellow-green") {
				$(this).parent().parent().css( "background-color", "#D7FF00" );
				
				$(this).children('path').css( "fill", "#9C00FF" );
				$(this).children('polygon').css( "fill", "#9C00FF" );
				$(this).children('circle').css( "fill", "#9C00FF" );
				$(this).children().children('path').css( "fill", "#9C00FF" );
			} else if (cellColor === "green") {
				$(this).parent().parent().css( "background-color", "#34C000" );
				
				$(this).children('path').css( "fill", "#C000AB" );
				$(this).children('polygon').css( "fill", "#C000AB" );
				$(this).children('circle').css( "fill", "#C000AB" );
				$(this).children().children('path').css( "fill", "#C000AB" );
			} else if (cellColor === "blue-green") {
				$(this).parent().parent().css( "background-color", "#30C0A7" );
				
				$(this).children('path').css( "fill", "#C05830" );
				$(this).children('polygon').css( "fill", "#C05830" );
				$(this).children('circle').css( "fill", "#C05830" );
				$(this).children().children('path').css( "fill", "#C05830" );
			} else if (cellColor === "blue") {
				$(this).parent().parent().css( "background-color", "#30C0A7" );

				$(this).children('path').css( "fill", "#FFD100" );
				$(this).children('polygon').css( "fill", "#FFD100" );
				$(this).children('circle').css( "fill", "#FFD100" );
				$(this).children().children('path').css( "fill", "#FFD100" );
			} else if (cellColor === "blue-purple") {
				$(this).parent().parent().css( "background-color", "#6700BF" );

				$(this).children('path').css( "fill", "#B3BF00" );
				$(this).children('polygon').css( "fill", "#B3BF00" );
				$(this).children('circle').css( "fill", "#B3BF00" );
				$(this).children().children('path').css( "fill", "#B3BF00" );
			} else if (cellColor === "purple") {
				$(this).parent().parent().css( "background-color", "#9500C0" );
				
				$(this).children('path').css( "fill", "#7AC000" );
				$(this).children('polygon').css( "fill", "#7AC000" );
				$(this).children('circle').css( "fill", "#7AC000" );
				$(this).children().children('path').css( "fill", "#7AC000" );
			} else if (cellColor === "red-purple") {
				$(this).parent().parent().css( "background-color", "#BF0099" );
				
				$(this).children('path').css( "fill", "#29BF00" );
				$(this).children('polygon').css( "fill", "#29BF00" );
				$(this).children('circle').css( "fill", "#29BF00" );
				$(this).children().children('path').css( "fill", "#29BF00" );
			}

		} else if (clickCounter === 1) {
			clickCounter++;
			$(this).data('clickcount', clickCounter);

			if (cellColor === "red") {
				$(this).parent().parent().css( "background-color", "#00FF48" );
				
				$(this).children('path').css( "fill", "#E82C0C" );
				$(this).children('polygon').css( "fill", "#E82C0C" );
				$(this).children('circle').css( "fill", "#E82C0C" );
				$(this).children().children('path').css( "fill", "#E82C0C" );
			} else if (cellColor === "red-orange") {
				$(this).parent().parent().css( "background-color", "#00C6FA" );
				
				$(this).children('path').css( "fill", "#E6C10B" );
				$(this).children('polygon').css( "fill", "#E6C10B" );
				$(this).children('circle').css( "fill", "#E6C10B" );
				$(this).children().children('path').css( "fill", "#E6C10B" );
			} else if (cellColor === "orange") {
				$(this).parent().parent().css( "background-color", "#013BFD" );
				
				$(this).children('path').css( "fill", "#E3540B" );
				$(this).children('polygon').css( "fill", "#E3540B" );
				$(this).children('circle').css( "fill", "#E3540B" );
				$(this).children().children('path').css( "fill", "#E3540B" );
			} else if (cellColor === "yellow-orange") {
				$(this).parent().parent().css( "background-color", "#2400FE" );
				
				$(this).children('path').css( "fill", "#E7E10C" );
				$(this).children('polygon').css( "fill", "#E7E10C" );
				$(this).children('circle').css( "fill", "#E7E10C" );
				$(this).children().children('path').css( "fill", "#E7E10C" );

			} else if (cellColor === "yellow") {
				$(this).parent().parent().css( "background-color", "#8100FF" );
				
				$(this).children('path').css( "fill", "#E8D30C" );
				$(this).children('polygon').css( "fill", "#E8D30C" );
				$(this).children('circle').css( "fill", "#E8D30C" );
				$(this).children().children('path').css( "fill", "#E8D30C" );
			} else if (cellColor === "yellow-green") {
				$(this).parent().parent().css( "background-color", "#9C00FF" );
				
				$(this).children('path').css( "fill", "#E8DC0C" );
				$(this).children('polygon').css( "fill", "#E8DC0C" );
				$(this).children('circle').css( "fill", "#E8DC0C" );
				$(this).children().children('path').css( "fill", "#E8DC0C" );
			} else if (cellColor === "green") {
				$(this).parent().parent().css( "background-color", "#C000AB" );
				
				$(this).children('path').css( "fill", "#89D70B" );
				$(this).children('polygon').css( "fill", "#89D70B" );
				$(this).children('circle').css( "fill", "#89D70B" );
				$(this).children().children('path').css( "fill", "#89D70B" );
			} else if (cellColor === "blue-green") {
				$(this).parent().parent().css( "background-color", "#C05830" );
				
				$(this).children('path').css( "fill", "#2BD789" );
				$(this).children('polygon').css( "fill", "#2BD789" );
				$(this).children('circle').css( "fill", "#2BD789" );
				$(this).children().children('path').css( "fill", "#2BD789" );
			} else if (cellColor === "blue") {
				$(this).parent().parent().css( "background-color", "#FFD100" );
				
				$(this).children('path').css( "fill", "#0C42E8" );
				$(this).children('polygon').css( "fill", "#0C42E8" );
				$(this).children('circle').css( "fill", "#0C42E8" );
				$(this).children().children('path').css( "fill", "#0C42E8" );
			} else if (cellColor === "blue-purple") {
				$(this).parent().parent().css( "background-color", "#B3BF00" );
				
				$(this).children('path').css( "fill", "#B00BD6" );
				$(this).children('polygon').css( "fill", "#B00BD6" );
				$(this).children('circle').css( "fill", "#B00BD6" );
				$(this).children().children('path').css( "fill", "#B00BD6" );
			} else if (cellColor === "purple") {
				$(this).parent().parent().css( "background-color", "#7AC000" );
				
				$(this).children('path').css( "fill", "#720BD7" );
				$(this).children('polygon').css( "fill", "#720BD7" );
				$(this).children('circle').css( "fill", "#720BD7" );
				$(this).children().children('path').css( "fill", "#720BD7" );
			} else if (cellColor === "red-purple") {
				$(this).parent().parent().css( "background-color", "#29BF00" );
				
				$(this).children('path').css( "fill", "#B40BD6" );
				$(this).children('polygon').css( "fill", "#B40BD6" );
				$(this).children('circle').css( "fill", "#B40BD6" );
				$(this).children().children('path').css( "fill", "#B40BD6" );

			}
		} else if (clickCounter === 2) {
			
			clickCounter++;
			$(this).data('clickcount', clickCounter);

			if (cellColor === "red") {
				$(this).parent().parent().css( "background-color", "#EB2C0C" );
				
				$(this).children('path').css( "fill", "#E80C7A" );
				$(this).children('polygon').css( "fill", "#E80C7A" );
				$(this).children('circle').css( "fill", "#E80C7A" );
				$(this).children().children('path').css( "fill", "#E80C7A" );
			} else if (cellColor === "red-orange") {
				$(this).parent().parent().css( "background-color", "#E6C10B" );
				
				$(this).children('path').css( "fill", "#E6950B" );
				$(this).children('polygon').css( "fill", "#E6950B" );
				$(this).children('circle').css( "fill", "#E6950B" );
				$(this).children().children('path').css( "fill", "#E6950B" );
			} else if (cellColor === "orange") {
				$(this).parent().parent().css( "background-color", "#E3540B" );
				
				$(this).children('path').css( "fill", "#E3900B" );
				$(this).children('polygon').css( "fill", "#E3900B" );
				$(this).children('circle').css( "fill", "#E3900B" );
				$(this).children().children('path').css( "fill", "#E3900B" );
			} else if (cellColor === "yellow-orange") {
				$(this).parent().parent().css( "background-color", "#E7E10C" );
				
				$(this).children('path').css( "fill", "#E7B50C" );
				$(this).children('polygon').css( "fill", "#E7B50C" );
				$(this).children('circle').css( "fill", "#E7B50C" );
				$(this).children().children('path').css( "fill", "#E7B50C" );
			} else if (cellColor === "yellow") {
				$(this).parent().parent().css( "background-color", "#E8D30C" );
				
				$(this).children('path').css( "fill", "#97E80C" );
				$(this).children('polygon').css( "fill", "#97E80C" );
				$(this).children('circle').css( "fill", "#97E80C" );
				$(this).children().children('path').css( "fill", "#97E80C" );
			} else if (cellColor === "yellow-green") {
				$(this).parent().parent().css( "background-color", "#E8DC0C" );
				
				$(this).children('path').css( "fill", "#79E80C" );
				$(this).children('polygon').css( "fill", "#79E80C" );
				$(this).children('circle').css( "fill", "#79E80C" );
				$(this).children().children('path').css( "fill", "#79E80C" );
			} else if (cellColor === "green") {
				$(this).parent().parent().css( "background-color", "#89D70B" );
				
				$(this).children('path').css( "fill", "#0BD718" );
				$(this).children('polygon').css( "fill", "#0BD718" );
				$(this).children('circle').css( "fill", "#0BD718" );
				$(this).children().children('path').css( "fill", "#0BD718" );
			} else if (cellColor === "blue-green") {
				$(this).parent().parent().css( "background-color", "#2BD789" );
				
				$(this).children('path').css( "fill", "#2BC5D7" );
				$(this).children('polygon').css( "fill", "#2BC5D7" );
				$(this).children('circle').css( "fill", "#2BC5D7" );
				$(this).children().children('path').css( "fill", "#2BC5D7" );
			} else if (cellColor === "blue") {
				$(this).parent().parent().css( "background-color", "#0C42E8" );
				
				$(this).children('path').css( "fill", "#4B0CE8" );
				$(this).children('polygon').css( "fill", "#4B0CE8" );
				$(this).children('circle').css( "fill", "#4B0CE8" );
				$(this).children().children('path').css( "fill", "#4B0CE8" );
			} else if (cellColor === "blue-purple") {
				$(this).parent().parent().css( "background-color", "#B00BD6" );
				
				$(this).children('path').css( "fill", "#410BD6" );
				$(this).children('polygon').css( "fill", "#410BD6" );
				$(this).children('circle').css( "fill", "#410BD6" );
				$(this).children().children('path').css( "fill", "#410BD6" );
			} else if (cellColor === "purple") {
				$(this).parent().parent().css( "background-color", "#720BD7" );
				
				$(this).children('path').css( "fill", "#D70BC5" );
				$(this).children('polygon').css( "fill", "#D70BC5" );
				$(this).children('circle').css( "fill", "#D70BC5" );
				$(this).children().children('path').css( "fill", "#D70BC5" );
			} else if (cellColor === "red-purple") {
				$(this).parent().parent().css( "background-color", "#B40BD6" );
				
				$(this).children('path').css( "fill", "#D60B4A" );
				$(this).children('polygon').css( "fill", "#D60B4A" );
				$(this).children('circle').css( "fill", "#D60B4A" );
				$(this).children().children('path').css( "fill", "#D60B4A" );
			}
		} else if (clickCounter === 3) {
		
			clickCounter++;
			$(this).data('clickcount', clickCounter);

			if (cellColor === "red") {
				$(this).parent().parent().css( "background-color", "#E80C7A" );
				
				$(this).children('path').css( "fill", "#66746A" );
				$(this).children('polygon').css( "fill", "#66746A" );
				$(this).children('circle').css( "fill", "#66746A" );
				$(this).children().children('path').css( "fill", "#66746A" );
			} else if (cellColor === "red-orange") {
				$(this).parent().parent().css( "background-color", "#E6950B" );
				
				$(this).children('path').css( "fill", "#66746A" );
				$(this).children('polygon').css( "fill", "#66746A" );
				$(this).children('circle').css( "fill", "#66746A" );
				$(this).children().children('path').css( "fill", "#66746A" );
			} else if (cellColor === "orange") {
				$(this).parent().parent().css( "background-color", "#E3900B" );
				
				$(this).children('path').css( "fill", "#66746A" );
				$(this).children('polygon').css( "fill", "#66746A" );
				$(this).children('circle').css( "fill", "#66746A" );
				$(this).children().children('path').css( "fill", "#66746A" );
			} else if (cellColor === "yellow-orange") {
				$(this).parent().parent().css( "background-color", "#E7B50C" );
				
				$(this).children('path').css( "fill", "#66746A" );
				$(this).children('polygon').css( "fill", "#66746A" );
				$(this).children('circle').css( "fill", "#66746A" );
				$(this).children().children('path').css( "fill", "#66746A" );
			} else if (cellColor === "yellow") {
				$(this).parent().parent().css( "background-color", "#97E80C" );
				
				$(this).children('path').css( "fill", "#66746A" );
				$(this).children('polygon').css( "fill", "#66746A" );
				$(this).children('circle').css( "fill", "#66746A" );
				$(this).children().children('path').css( "fill", "#66746A" );
			} else if (cellColor === "yellow-green") {
				$(this).parent().parent().css( "background-color", "#79E80C" );
				
				$(this).children('path').css( "fill", "#66746A" );
				$(this).children('polygon').css( "fill", "#66746A" );
				$(this).children('circle').css( "fill", "#66746A" );
				$(this).children().children('path').css( "fill", "#66746A" );

			} else if (cellColor === "green") {
				$(this).parent().parent().css( "background-color", "#0BD718" );
				
				$(this).children('path').css( "fill", "#66746A" );
				$(this).children('polygon').css( "fill", "#66746A" );
				$(this).children('circle').css( "fill", "#66746A" );
				$(this).children().children('path').css( "fill", "#66746A" );
			} else if (cellColor === "blue-green") {
				$(this).parent().parent().css( "background-color", "#2BC5D7" );
				
				$(this).children('path').css( "fill", "#66746A" );
				$(this).children('polygon').css( "fill", "#66746A" );
				$(this).children('circle').css( "fill", "#66746A" );
				$(this).children().children('path').css( "fill", "#66746A" );
			} else if (cellColor === "blue") {
				$(this).parent().parent().css( "background-color", "#4B0CE8" );
				
				$(this).children('path').css( "fill", "#66746A" );
				$(this).children('polygon').css( "fill", "#66746A" );
				$(this).children('circle').css( "fill", "#66746A" );
				$(this).children().children('path').css( "fill", "#66746A" );
			} else if (cellColor === "blue-purple") {
				$(this).parent().parent().css( "background-color", "#410BD6" );

				$(this).children('path').css( "fill", "#66746A" );
				$(this).children('polygon').css( "fill", "#66746A" );
				$(this).children('circle').css( "fill", "#66746A" );
				$(this).children().children('path').css( "fill", "#66746A" );
			} else if (cellColor === "purple") {
				$(this).parent().parent().css( "background-color", "#D70BC5" );
				
				$(this).children('path').css( "fill", "#66746A" );
				$(this).children('polygon').css( "fill", "#66746A" );
				$(this).children('circle').css( "fill", "#66746A" );
				$(this).children().children('path').css( "fill", "#66746A" );
			} else if (cellColor === "red-purple") {
				$(this).parent().parent().css( "background-color", "#D60B4A" );
				
				$(this).children('path').css( "fill", "#66746A" );
				$(this).children('polygon').css( "fill", "#66746A" );
				$(this).children('circle').css( "fill", "#66746A" );
				$(this).children().children('path').css( "fill", "#66746A" );
			}
		} else if (clickCounter === 4) {
		
			clickCounter++;
			$(this).data('clickcount', clickCounter);

			if (cellColor === "red") {
				$(this).children('path').css( "fill", "#FFF" );
				$(this).children('polygon').css( "fill", "#FFF" );
				$(this).children('circle').css( "fill", "#FFF" );
				$(this).children().children('path').css( "fill", "#FFF" );
			} else if (cellColor === "red-orange") {
				$(this).children('path').css( "fill", "#FFF" );
				$(this).children('polygon').css( "fill", "#FFF" );
				$(this).children('circle').css( "fill", "#FFF" );
				$(this).children().children('path').css( "fill", "#FFF" );
			} else if (cellColor === "orange") {
				$(this).children('path').css( "fill", "#FFF" );
				$(this).children('polygon').css( "fill", "#FFF" );
				$(this).children('circle').css( "fill", "#FFF" );
				$(this).children().children('path').css( "fill", "#FFF" );
			} else if (cellColor === "yellow-orange") {
				$(this).children('path').css( "fill", "#FFF" );
				$(this).children('polygon').css( "fill", "#FFF" );
				$(this).children('circle').css( "fill", "#FFF" );
				$(this).children().children('path').css( "fill", "#FFF" );
			} else if (cellColor === "yellow") {
				$(this).children('path').css( "fill", "#FFF" );
				$(this).children('polygon').css( "fill", "#FFF" );
				$(this).children('circle').css( "fill", "#FFF" );
				$(this).children().children('path').css( "fill", "#FFF" );
			} else if (cellColor === "yellow-green") {
				$(this).children('path').css( "fill", "#FFF" );
				$(this).children('polygon').css( "fill", "#FFF" );
				$(this).children('circle').css( "fill", "#FFF" );
				$(this).children().children('path').css( "fill", "#FFF" );
			} else if (cellColor === "green") {
				$(this).children('path').css( "fill", "#FFF" );
				$(this).children('polygon').css( "fill", "#FFF" );
				$(this).children('circle').css( "fill", "#FFF" );
				$(this).children().children('path').css( "fill", "#FFF" );
			} else if (cellColor === "blue-green") {
				$(this).children('path').css( "fill", "#FFF" );
				$(this).children('polygon').css( "fill", "#FFF" );
				$(this).children('circle').css( "fill", "#FFF" );
				$(this).children().children('path').css( "fill", "#FFF" );
			} else if (cellColor === "blue") {
				$(this).children('path').css( "fill", "#FFF" );
				$(this).children('polygon').css( "fill", "#FFF" );
				$(this).children('circle').css( "fill", "#FFF" );
				$(this).children().children('path').css( "fill", "#FFF" );

			} else if (cellColor === "blue-purple") {
				$(this).children('path').css( "fill", "#FFF" );
				$(this).children('polygon').css( "fill", "#FFF" );
				$(this).children('circle').css( "fill", "#FFF" );
				$(this).children().children('path').css( "fill", "#FFF" );
			} else if (cellColor === "purple") {
				$(this).children('path').css( "fill", "#FFF" );
				$(this).children('polygon').css( "fill", "#FFF" );
				$(this).children('circle').css( "fill", "#FFF" );
				$(this).children().children('path').css( "fill", "#FFF" );
			} else if (cellColor === "red-purple") {
				$(this).children('path').css( "fill", "#FFF" );
				$(this).children('polygon').css( "fill", "#FFF" );
				$(this).children('circle').css( "fill", "#FFF" );
				$(this).children().children('path').css( "fill", "#FFF" );
			}
			
			$(this).parent().parent().css( "background-color", "#66746a" );
				
			$(this).css("stroke-width", "1").css("stroke", "#000");

		} else if (clickCounter === 5) {
			clickCounter = 0;
			$(this).data('clickcount', clickCounter);

			if (cellColor === "red") {
				$(this).children('path').css( "fill", "#FF0000" );
				$(this).children('polygon').css( "fill", "#FF0000" );
				$(this).children('circle').css( "fill", "#FF0000" );
				$(this).children().children('path').css( "fill", "#FF0000" );
			} else if (cellColor === "red-orange") {
				$(this).children('path').css( "fill", "#FDB901" );
				$(this).children('polygon').css( "fill", "#FDB901" );
				$(this).children('circle').css( "fill", "#FDB901" );
				$(this).children().children('path').css( "fill", "#FDB901" );
			} else if (cellColor === "orange") {
				$(this).children('path').css( "fill", "#FA7900" );
				$(this).children('polygon').css( "fill", "#FA7900" );
				$(this).children('circle').css( "fill", "#FA7900" );
				$(this).children().children('path').css( "fill", "#FA7900" );
			} else if (cellColor === "yellow-orange") {
				$(this).children('path').css( "fill", "#FEDE00" );
				$(this).children('polygon').css( "fill", "#FEDE00" );
				$(this).children('circle').css( "fill", "#FEDE00" );
				$(this).children().children('path').css( "fill", "#FEDE00" );
			} else if (cellColor === "yellow") {
				$(this).children('path').css( "fill", "#FDFF00" );
				$(this).children('polygon').css( "fill", "#FDFF00" );
				$(this).children('circle').css( "fill", "#FDFF00" );
				$(this).children().children('path').css( "fill", "#FDFF00" );
			} else if (cellColor === "yellow-green") {
				$(this).children('path').css( "fill", "#D7FF00" );
				$(this).children('polygon').css( "fill", "#D7FF00" );
				$(this).children('circle').css( "fill", "#D7FF00" );
				$(this).children().children('path').css( "fill", "#D7FF00" );
			} else if (cellColor === "green") {
				$(this).children('path').css( "fill", "#34C000" );
				$(this).children('polygon').css( "fill", "#34C000" );
				$(this).children('circle').css( "fill", "#34C000" );
				$(this).children().children('path').css( "fill", "#34C000" );
			} else if (cellColor === "blue-green") {
				$(this).children('path').css( "fill", "#30C0A7" );
				$(this).children('polygon').css( "fill", "#30C0A7" );
				$(this).children('circle').css( "fill", "#30C0A7" );
				$(this).children().children('path').css( "fill", "#30C0A7" );
			} else if (cellColor === "blue") {
				$(this).children('path').css( "fill", "#0400FF" );
				$(this).children('polygon').css( "fill", "#0400FF" );
				$(this).children('circle').css( "fill", "#0400FF" );
				$(this).children().children('path').css( "fill", "#0400FF" );
			} else if (cellColor === "blue-purple") {
				$(this).children('path').css( "fill", "#6700BF" );
				$(this).children('polygon').css( "fill", "#6700BF" );
				$(this).children('circle').css( "fill", "#6700BF" );
				$(this).children().children('path').css( "fill", "#6700BF" );
			} else if (cellColor === "purple") {
				$(this).children('path').css( "fill", "#9500C0" );
				$(this).children('polygon').css( "fill", "#9500C0" );
				$(this).children('circle').css( "fill", "#9500C0" );
				$(this).children().children('path').css( "fill", "#9500C0" );
			} else if (cellColor === "red-purple") {
				$(this).children('path').css( "fill", "#BF0099" );
				$(this).children('polygon').css( "fill", "#BF0099" );
				$(this).children('circle').css( "fill", "#BF0099" );
				$(this).children().children('path').css( "fill", "#BF0099" );
			}
			$(this).parent().parent().css( "background-color", "#FFF" );

 			$(this).parent().parent('div.cell').css( "border", "1px solid #000" );

 			$(this).parent('div.icon').css( "color", "#000" );

 			$(this).siblings().css( "text-shadow", "1px 1px 1px #fff" );
 			$(this).siblings().children().children().css( "text-shadow", "1px 1px 1px #fff" );
		}
	});
});