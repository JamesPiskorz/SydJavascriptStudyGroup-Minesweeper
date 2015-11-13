var state;

$(document).ready(function () {
	var myBoard = new Board(10,10);
	myBoard.fill();
	myBoard.renderBoard();
});