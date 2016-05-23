/**----------------------------------------------------------
				MODEL ELEMENT CONSTRUCTORS
------------------------------------------------------------*/
/** Object factory that creates a point and returns it.
*/
var Point = function(x, y) {
	return {
		x: x,
		y: y
	};
}

/** Object factory that creates a list of points that when
together represent a piece. It returns a point array which is 
an array of points. 
*/
var Piece = function() {

	var i;

	//a piece has an array of points.
	var pointArray = [];

	for(i = 0; i < arguments.length; i += 2) {
		pointArray[i/2] = Point(arguments[i], arguments[i+1]); 
	}

	return {
		pointArray: pointArray
	};
}

/*------------------------------------------------------------
					ALGORITHMIC OPERATIONS
------------------------------------------------------------*/
/** This is the main function that is called
at the highest level. It calls several of the helper
functions in the program in order to generate the desired
array of Hexominos.
*/
var returnPolyominos = function (num) {

	if(typeof num != "number") {
		console.log("For some reason what you entered is not a number.");
		return;
	}

	return generatePolyominos(num);
}

/** This is the actual function that calls around everything. 
It is the "powerhouse of the cell" lol.
It returns an array of pieces. 
*/
var generatePolyominos = function(num) {

	if(num === 0) {

		var pieceArray = [];
		pieceArray[0] = Piece(0, 0);
		return pieceArray; 
	}

	var i,
		j,
		piece,
		newPolyominos = [];
		prevPolyominos = generatePolyominos(num - 1); //recursive call here!!

	if(num === 1) {
		newPolyominos = prevPolyominos;
	}
	// for(i = 0; i < prevPolyominos.length; i++) {
	// 	//what to do for each piece in the pieceArray?
	// 	piece = prevPolyominos[i];
	// 	for(j = 0; j < piece.pointArray.length; j++) {
	// 		//what to do for each square for each piece?

			
	// 		For each point in the piece, add a new point to the left and bottom
	// 		For each newly created piece check if the newPolyominos array already contains it
	// 		If not then append it

	// 		Then flip it horizontally and repeat the same procedure

	// 		Then flip it vertically and repeat the same procedure
			
	// 		pointArray[j]
	// 	}
	// }
	return newPolyominos;
}

/*------------------------------------------------------
                   PIECE MUTATORS
--------------------------------------------------------
*/
/** Takes a list of points that represent a polyomino and 
returns the array after performing a matrix rotation on the 
set of points that are passed in. 
*/
var rotatePointsClockWise = function(piece) {

	var i;

	for(i = 0; i < piece.pointArray.length; i++) {
		piece.pointArray[i] = Point(piece.pointArray[i].y, -piece.pointArray[i].x);
	}

	return piece;
}

/** Takes a list of points that represent a polyomino. Performs
the matrix vertical flip operation on each one of the points and 
returns an array of points. 
*/
var flipPointsVertically = function(piece) {
	
	var i;

	for(i = 0; i < piece.pointArray.length; i++) {
		piece.pointArray[i] = Point(-piece.pointArray[i].x, piece.pointArray[i].y);
	}

	return piece;
}

/** Takes a list of points that represent a polyomino. Performs
the matrix horizontal flip operation on each one of the poitns and
returns an array of points. 
*/
var flipPointsHorizontally = function(piece) {

	var i;

	for(i = 0; i < piece.pointArray.length; i++) {
		piece.pointArray[i] = Point(piece.pointArray[i].x, -piece.pointArray[i].y);
	}

	return piece;
}

/** 
Returns a boolean indicating whether two pieces are equal.
At this point (! lol, I'm hilarious), it only checks if both 
the arrays contain the same set of points. IE, both pieces' 
point sets must have the same elements.
*/
var pieceEquals = function(pieceA, pieceB) {

	var pointArrayA = pieceA.pointArray,
	pointArrayB = pieceB.pointArray;

	//they can't be equal if they are different sizes!
	if (pointArrayA.length !== pointArrayB.length) {
		return false;
	}

	for(var i = 0; i < pointArrayA.length; i++) {
		if(!pointArrayContains(pointArrayA[i], pointArrayB)) {
			return false;
		}
	}

	return true;

}

//determines if a point array contains the point.
var pointArrayContains = function (point, pointArray) {
	for(var i = 0; i < pointArray.length; i++) {
		if(pointsEqual(point, pointArray[i])) {
			return true;
		}
	}

	return false;
}

//determines if two points are equal.
var pointsEqual = function(pointA, pointB) {
	return pointA.x === pointB.x && pointA.y === pointB.y;
}