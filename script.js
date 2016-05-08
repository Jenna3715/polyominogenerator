/** This is the main function that is called
at the highest level. It calls several of the helper
functions in the program in order to generate the desired
array of Hexominos.
*/
var returnPolyOminos = function (n) {

	var numPolyomino = 0;
	while(numPolyomino < n) {

	}

}

/** Object constructor that creates a point and returns it.
*/
var Point = function(x, y) {
	
	this.x = x;
	this.y = y;
	return this;

}

/** Takes a list of points that represent a polyomino and 
returns the array after performing a matrix rotation on the 
set of points that are passed in. 
*/
var rotatePointsClockWise = function(pointArray) {

	var i;

	for(i = 0; i < pointArray.length; i++) {
		pointArray[i] = Point(pointArray[i].y, -pointArray[i].x);
	}

	return pointArray;

}

/** Takes a list of points that represent a polyomino. Performs
the matrix vertical flip operation on each one of the points and 
returns an array of points. 
*/
var flipPointsVertically = function(pointArray) {
	
	var i;

	for(i = 0; i < pointArray.length; i++) {
		pointArray[i] = Point(-pointArray[i].x, pointArray[i].y);
	}

	return pointArray;

}

/** Takes a list of points that represent a polyomino. Performs
the matrix horizontal flip operation on each one of the poitns and
returns an array of points. 
*/
var flipPointsHorizontally = function(pointArray) {

	var i;

	for(i = 0; i < pointArray.length; i++) {
		pointArray[i] = Point(pointArray[i].x, -pointArray[i].y);
	}

	return pointArray;

}