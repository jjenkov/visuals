visuals = {};

visuals.diagram = function() {
	var diagramObj = {};
	
	diagramObj.style = function() {
		
	}
	
	diagramObj.data = function() {
		
	}
	
	diagramObj.canvas = function() {
		
	}
	
	diagramObj.draw = function() {
		
	}
	
	diagramObj.pos = function() {
		
	}
	
	diagramObj.scale = function() {
		
	}
	
	return diagramObj;
}

visuals.canvas = function(canvasElId) {
	var canvasObj = {};
	
	canvasObj.el = document.getElementById(canvasElId);
	canvasObj.context = canvas.el.getContext("2d");
	
	
	canvasObj.width = function() {
		return canvas.el.width;
	}
	
	canvasObj.height = function() {
		return canvas.el.height;
	}
	
	canvasObj.clear = function() {
		canvasObj.context.clearRect(0,0, canvasObj.width(), canvasObj.heigth());
	}
	
	return canvasObj;
}

