var setattr = function(o,n,v){
	var a=document.createAttribute(n);
	a.value=v;
	o.attributes.setNamedItem(a)
	return o.attributes.getNamedItem(a)!=null;
}
/**
This is the master function that you can call by passing in a d3 selected
svg element on the HTML site. 
It looks a little weird at the moment but I'm waiting for expert opinion
on how something like this would typically be done. However, we know that it
works now. Should be pretty straightforward to extend in the future. I admit,
this "library" can be improved drastically.
*/
renderPolyomino = function(chart) {
	var obj_g = document.createElementNS("http://www.w3.org/2000/svg","g");
	var obj_rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
	obj_rect.style=("fill: white; stroke: black; stroke-width: 2px");
	obj_rect.innerHTML="X";
	/**
	* This is the function responsible for rendering a piece.
	* Its parameters are:
	*   Piece: The piece to be rendered.
	*   startX: The top left X position to render the anchor (0, 0)
	*   startY: The top left Y position to render the anchor (0, 0)
	*   height: The height of each square to be rendered.
	*   width: The width of each square to be rendered.
	*/
	function renderPiece(Piece, startX, startY, squareSizePx) {
		var group = obj_g.cloneNode(true);
		chart.appendChild(group);
		for(var pts of Piece.pointArray){
			var rct = obj_rect.cloneNode(true);
			setattr(rct, "x", (startX + (pts.x * squareSizePx)));
			setattr(rct, "y", (startY + (pts.y * squareSizePx)));
			group.appendChild(rct);
		}
	}
	//loops through all pieces and prints each polyomino
	this.renderAllPieces = function(polyOminos, startX, startY, squareSizePx) {
		setattr(obj_rect, "height", squareSizePx);
		setattr(obj_rect, "width", squareSizePx);
		var n = polyOminos[0].pointArray.length;
		var piecesPerRow = Math.floor(window.innerWidth / (n * squareSizePx));
		//set the width and height
		setattr(chart, "width", window.innerWidth);
		setattr(chart, "height", (polyOminos.length/piecesPerRow + 2) * squareSizePx * n + 200);
		setattr(chart,"viewBox","0 0");
		for(var i = 0; i < polyOminos.length; i++) {
			var polyominoStartX = startX + (i % piecesPerRow) * n * squareSizePx,
			polyominoStartY = startY + Math.floor(i / piecesPerRow) * n * squareSizePx;
			renderPiece(polyOminos[i], polyominoStartX, polyominoStartY, squareSizePx);
		}
	}
	return this;
};
