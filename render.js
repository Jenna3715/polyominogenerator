(function() {
	//set the width and height
	var width = window.innerWidth,
	  height = 3000;

	//selection for adding the svg
	var chart = d3.select("#vis")
	.attr("width", width)
	.attr("height", height);

	//console.log(generatePolyominos(1));

	//console.log(generatePolyominos(1)[0].x);

	var polyOminos = generatePolyominos(6);
  	console.log(polyOminos);

  	renderAllPieces(polyOminos, 30, 100, 20, 20);

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

  function renderAllPieces(polyOminos, startX, startY, height, width) {

    var n = polyOminos[0].pointArray.length;

    var piecesPerRow = Math.floor(window.innerWidth / (n * width));

    for(var i = 0; i < polyOminos.length; i++) {
      renderPiece(polyOminos[i], startX + (i % piecesPerRow) * n * width, startY + Math.floor(((i) / piecesPerRow)) * n * height, height, width);
    }

  }

}());
