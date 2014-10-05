/*jshint white: false*/
// Vertex buffer parameters for crate
var Cube = (function() {
	function Cube() {
		this.vertexBufferParameters = {
			numVertices : 24,
			attributes : [ 'FLOAT3', 'SHORT2' ],
			dynamic : false,
			data : [ -0.5, -0.5, 0.5, 0, 0, 0.5, -0.5, 0.5, 1, 0, 0.5, 0.5,
					0.5, 1, 1, -0.5, 0.5, 0.5, 0, 1, -0.5, 0.5, 0.5, 0, 0, 0.5,
					0.5, 0.5, 1, 0, 0.5, 0.5, -0.5, 1, 1, -0.5, 0.5, -0.5, 0,
					1, -0.5, 0.5, -0.5, 1, 1, 0.5, 0.5, -0.5, 0, 1, 0.5, -0.5,
					-0.5, 0, 0, -0.5, -0.5, -0.5, 1, 0, -0.5, -0.5, -0.5, 0, 0,
					0.5, -0.5, -0.5, 1, 0, 0.5, -0.5, 0.5, 1, 1, -0.5, -0.5,
					0.5, 0, 1, 0.5, -0.5, 0.5, 0, 0, 0.5, -0.5, -0.5, 1, 0,
					0.5, 0.5, -0.5, 1, 1, 0.5, 0.5, 0.5, 0, 1, -0.5, -0.5,
					-0.5, 0, 0, -0.5, -0.5, 0.5, 1, 0, -0.5, 0.5, 0.5, 1, 1,
					-0.5, 0.5, -0.5, 0, 1 ]
		};
		this.indexBufferParameters = {
			numIndices : 36,
			format : 'USHORT',
			dynamic : false,
			data : [ 2, 0, 1, 3, 0, 2, 6, 4, 5, 7, 4, 6, 10, 8, 9, 11, 8, 10,
					14, 12, 13, 15, 12, 14, 18, 16, 17, 19, 16, 18, 22, 20, 21,
					23, 20, 22 ]
		};
	}
	Cube.prototype.toString = function() {
		return '<Cube numVertices=' + this.vertexBufferParameters.numVertices + '>';
	};
	return Cube;
})();