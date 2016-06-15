renderPolyomino = function(chart) {

  /**
  * This is the function responsible for rendering a piece.
  * Its parameters are:
  *   Piece: The piece to be rendered.
  *   startX: The top left X position to render the anchor (0, 0)
  *   startY: The top left Y position to render the anchor (0, 0)
  *   height: The height of each square to be rendered.
  *   width: The width of each square to be rendered.
  */
  function renderPiece(Piece, startX, startY, height, width) {

    var group = chart.append("g");

  	var pieceView = group.selectAll("rect")
      .data(Piece.pointArray)
      .enter()
      .append("rect")
  		.attr("fill", "white")
  		.attr("stroke", "black")
  		.attr("x", function(d) {
  			return startX + (d.x * width);
  		})
  		.attr("y", function(d) {
  			return startY + (d.y * height);
  		})
  		.attr("height", height)
  		.attr("width", width);

  }

  //loops through all pieces and prints each polyomino
  this.renderAllPieces = function(polyOminos, startX, startY, squareHeight, squareWidth) {

    var n = polyOminos[0].pointArray.length;

    var piecesPerRow = Math.floor(window.innerWidth / (n * squareWidth));

        //set the width and height
	chart.attr("width", window.innerWidth)
	.attr("height", (polyOminos.length/piecesPerRow + 2) * squareHeight * n);

    for(var i = 0; i < polyOminos.length; i++) {

	var polyominoStartX = startX + (i % piecesPerRow) * n * squareWidth,
	polyominoStartY = startY + Math.floor(i / piecesPerRow) * n * squareHeight;
	renderPiece(polyOminos[i], polyominoStartX, polyominoStartY, squareHeight, squareWidth);

    }

  }

  return this;
};
