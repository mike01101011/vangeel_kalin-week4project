// color objects
var redObject = {
	color: [color: "Red", type: "primary", code: "HEX #FF0000", value: "RGB(255,0,0)"],
	complementary: [color: "Green", type: "complementary", code: "HEX #00ff48", value: "RGB(0,225,72)"],
	analogousOne: [color: "", type: "analogous", code: "HEX #E82C0C", value: "RGB(232,44,12)"],
	analogousTwo: [color: "", type: "analogous", code: "HEX #E80C7A", value: "RGB(232,12,122)"]
}

var redOrangeObject = {
	color: [color: "Red-Orange", type: "tertiary", code: "HEX #FA7900", value: "RGB(250,121,0)"],
	complementary: [color: "", type: "complementary", code: "HEX #00C6FA", value: "RGB(0,198,250)"],
	analogousOne:[color: "", type: "analogous", code: "HEX #E3540B", value: "RGB(227,84,11)"],
	analogousTwo: [color: "", type:"analogous", code: "HEX #E3900B", value: "RGB(227,144,11)"]
}

var OrangeObject = {
	color: [color: "Orange", type: "secondary", code: "HEX #FDB901", value: "RGB(253,185,1)"],
	complementary: [color: "", type: "complementary", code: "HEX #013BFD", value: "RGB(1,59,253)"],
	analogousOne: [color: "", type: "analogous", code: "HEX #E6C10B", value: "(230,193,11)"],
	analogousTwo: [color: "", type: "analogous", code: "HEX #E6950B", value: "RGB(230,149,11)"]
}

var yellowOrangeObject = {
	color: [color: "Yellow-Orange", type: "tertiary", code: "HEX #FEDE00", value: "RGB(254,222,0)"],
	complementary: [color: "", type: "complementary", code: "HEX #2400FE", value: "RGB(36,0,254)"],
	analogousOne: [color: "", type: "analogous", code: "HEX #E7E10C", value: "RGB(231,225,12)"],
	analogousTwo: [color: "", type: "analogous", code: "HEX #E7B50C", value: "RGB(231,181,12)"]
}

var yellowObject = {
	color: [color: "Yellow", type: "primary", code: "HEX #FDFF00", value: "RGB(253,255,0)"],
	complementary: [color: "", type: "complementary", code: "HEX #8100FF", value: "RGB(129,0,255)"],
	analogousOne: [color: "", type: "analogous", code: "HEX #E8D30C", value: "RGB(232,211,12)"],
	analogousTwo: [color: "", type: "analogous", code: "HEX #97E80C", value: "RGB(151,232,12)"]
}

var yellowGreenObject = {
	color: [color: "Yellow-Green", type: "tertiary", code: "HEX #D7FF00", value: "RGB(215,255,0)"],
	complementary: [color: "", type: "complementary", code: "HEX #8100FF", value: "RGB(156,0,255)"],
	analogousOne: [color: "", type: "analogous", code: "HEX #E8DC0C", value: "RGB(232,220,12)"],
	analogousTwo: [color: "", type: "analogous", code: "HEX #79E80C", value: "RGB(121,232,12)"]
}

var greenObject = {
	color: [color: "Green", type: "secondary", code: "HEX #34C000", value: "RGB(52,192,0)"],
	complementary: [color: "", type: "complementary", code: "HEX #C000AB", value: "RGB(192,0,171)"],
	analogousOne: [color: "", type: "analogous", code: "HEX #89D70B", value: "RGB(137,215,11)"],
	analogousTwo: [color: "", type: "analogous", code: "HEX #0BD718", value: "RGB(11,215,24)"]
}

var blueGreenObject = {
	color: [color: "Blue-Green", type: "tertiary", code: "HEX #30C0A7", value: "RGB(48,192,167)"],
	complementary: [color: "", type: "complementary", code: "HEX #C05830", value: "RGB(192,88,48)"],
	analogousOne: [color: "", type: "analogous", code: "HEX #2BD789", value: "RGB(43,215,137)"],
	analogousTwo: [color: "", type: "analogous", code: "HEX #2BC5D7", value: "RGB(43,197,215)"]
}

var blueObject = {
	color: [color: "Blue", type: "primary", code: "HEX #0400FF", value: "RGB(4,0,255)"],
	complementary: [color: "", type: "complementary", code: "HEX #FFD100", value: "RGB(255,209,0)"],
	analogousOne: [color: "", type: "analogous", code: "HEX #0C42E8", value: "RGB(12,66,232)"],
	analogousTwo: [color: "", type: "analogous", code: "HEX #4B0CE8", value: "RGB(75,12,232)"]
}

var bluePurpleObject = {
	color: [color: "Blue-Purple", type: "tertiary", code: "HEX #6700BF", value: "RGB(103,0,191)"],
	complementary: [color: "", type: "complementary", code: "HEX #B3BF00", value: "RGB(179,191,0)"],
	analogousOne: [color: "", type: "analogous", code: "HEX #B00BD6", value: "RGB(176,11,214)"],
	analogousTwo: [color: "", type: "analogous", code: "HEX #410BD6", value: "RGB(65,11,214)"]
}


var purpleObject = {
	color: [color: "Purple", type: "secondary", code: "HEX #9500C0", value: "RGB(149,0,192)"],
	complementary: [color: "", type: "complementary", code: "HEX #7AC000", value: "RGB(122,192,0)"],
	analogousOne: [color: "", type: "analogous", code: "HEX #720BD7", value: "RGB(114,11,215)"],
	analogousTwo: [color: "", type: "analogous", code: "HEX #D70BC5", value: "RGB(215,11,197)"]
}

var redPurpleObject = {
	color: [color: "Red-Purple", type: "tertiary", code: "HEX #BF0099", value: "RGB(191,0,153)"],
	complementary: [color: "", type: "complementary", code: "HEX #29BF00", value: "RGB(41,191,0)"],
	analogousOne: [color: "", type: "analogous", code: "HEX #B40BD6", value: "RGB(180,11,214)"],
	analogousTwo: [color: "", type: "analogous", code: "HEX #D60B4A", value: "RGB(214,11,74)"]
}

// array containing all color objects
var colorArray = [ 
	redObject, 
	redOrangeObject, 
	OrangeObject, 
	yellowOrangeObject, 
	yellowObject, 
	yellowGreenObject, 
	greenObject, 
	blueGreenObject, 
	blueObject, 
	bluePurpleObject, 
	purpleObject, 
	redPurpleObject ];

// #F80F00	248,15,0 
// #0400FF	4,0,255
// #FDFF00	253,255,0
// ^Primary Colours

// #9500C0	149,0,192
// #34C000	52,192,0
// #FDB901	253,185,1
// ^Secondary Colours

// #FA7900	250,121,0
// #BF0099	191,0,153
// #6700BF	103,0,191
// #30C0A7	48,192,167
// #D7FF00	215,255,0
// #FEDE00	254,222,0
// ^Tertiary Colours