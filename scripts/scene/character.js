/*{{ javascript("scripts/scene/enum.js") }}*/

var eAttribute = new Enum({
	    gauge : 1 << 0,
	    flag : 1 << 1,
});

var Attribute = (function() {

	'use strict';
	
	function Attribute(type, name) {
		eAttribute.reverse(type);
		if (name === undefined) throw 'UndefinedNamed';
		this.name = name;
		this.type = type;
	};
});

var Gauge = (function() {

	'use strict';
	
	function Gauge(name, min, max, value, regen) {
		Attribute.call(eAttribute.gauge, name);
		if (name === undefined) throw 'UndefinedNamed';
		this.name = name;
		this.min = (min === undefined)? 0: min;
		this.max = (max === undefined)? 100: max;
		this.value = (value === undefined)? 100: value;
		this.regen = (regen === undefined)? 0: regen;
	};
	
	Gauge.prototype = Object.create(Attribute.prototype);
});

var Character = (function() {

    'use strict';

    function Character() {
    	this.attribute = {};
    	this.addAttribute(new Gauge('life', 0, 100, 100, 1));
    };

    Character.prototype.addAttribute = function(attr) {
    	if (attr.name in this.attribute) {
    		throw "AttributeNameAlreadyDefined";
    	}
    };
});
