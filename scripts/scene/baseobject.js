/*
Copyright (c) 2014 Joachim Basmaison

This file is part of graphit <https://github.com/showi/js>

graphit is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

See the GNU General Public License for more details.
 */

var BaseObject = (function() {

    'use strict';

    function BaseObject() {
        if (this.type === undefined) { throw 'UndefinedGameObjectType'; }
        this.instanceId = Namespace.genUID();
        console.log('this', this);
    }

    BaseObject.prototype.getInstanceID = function() {
        return this.instanceId;
    };

    BaseObject.prototype.toString = function() {
        var s = "<Gamobject\n";
        for ( var key in this) {
            s += " - " + key + ": " + this[key] + "\n";
        }
    };

    return BaseObject;
})();
