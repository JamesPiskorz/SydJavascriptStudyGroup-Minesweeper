var Board = function(width, height) {

	this._width = width;
	this._height = height;
	this._cells = [];

};
 
	 Board.prototype =  {
		fill : function(){ //logic to spread the mines around. and build the cells.
			debugger;
			this._cells = [];
			for (var i = 0; i< this._height; i++ ) {
				this._cells.push([]);
				for (var j = 0; j<this._width; j++ ) {
					this._cells[i][j] = 0;  //create the cells
				}
			}	
		},
		renderBoard : function(){
			
			for (var i = 0; i< this._height; i++ ) {
				$('<div/>', {
					class: "row",
					y: i
				}).appendTo($("#Game"));
			for (var j = 0; j<this._width; j++ ) {
					$('<div/>', {
						x: j,
						y: i,
						text: "test",
						class: "col-md-1"
					}).appendTo($(".row[y="+i+"]"));
				}	
				
			}
		}
	};

//boardRenderBoard.cell = function () {
	




//	board.fill();

	// var foo = board.fill;
	// foo();

//	$('#board').on('click', board.fill.bind(board));
	

// Board.prototype = {
// 	fill : function(){
// 		this._cells = [];
// 		for (var i = 0; i< this._height; i++ ) {
// 			this._cells.push([]);
// 			for (var j = 0; j<this._width; j++ ) {
// 				this._cells[i][j] = 0;
// 			}f
// 		}	
// 	},
// 	renderBoard : function(){

// 	}
// }

// function Person(name){
// 	this.name = name;
// }

// Person.prototype = {
// 	constructor: Person,
// 	sayName : function(){
// 		console.log('hello my name is: ' + this.name);
// 	}
// };

// function Superman(){
// 	Person.call(this, 'Clark');
// }

// Superman.prototype = Object.create(Person.prototype);
// Superman.prototype.constructor = Superman;

// var clark = new Superman();


// var somePrivateFunc  = function() {

// };

// $(document).ready(function () {

// 	alert("Board Object Init");
// });



// var Car = function(color) {
// 	var car = {
// 		speed: 0,
// 		color: color
// 	};

// 	var start = function(){
//       car.speed = 10;
// 	}

// 	return car;
// }

// var c = Car("blue");
// console.log(c.speed);
// console.log(c.start());
// console.log(c.speed);