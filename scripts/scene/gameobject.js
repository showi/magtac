/*
Copyright (c) 2014 Joachim Basmaison

This file is part of graphit <https://github.com/showi/js>

graphit is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

See the GNU General Public License for more details.
 */

var GameObject = (function() {

    'use strict';

    function GameObject() {
        this.type = eType.gameobject;
        BaseObject.apply(this, arguments);
        this.component = {};
        this.child = new Dlist();
    };
    GameObject.prototype = Object.create(BaseObject.prototype);
    GameObject.__namespace__ = 'graphit/scene/gameobject';

    GameObject.prototype.appendChild = function(child) {
        child.parent = this;
        this.child.append(child);
    };

    GameObject.prototype.getComponent = function(name) {
        if (name in this.component) { return this.component[name]; }
        return null;
    };

    GameObject.prototype.addComponent = function(cls) {
        var name = cls.name;
        var component;
        if (typeof cls === 'object') {
            component = cls;
            name = eType.reverse(component.type);
        } else {
            component = new cls(this);
            component.gameObject = this;
            if (component._initComponent !== undefined) {
                component._initComponent();
            }
        }
        name = name.toLowerCase();
        if (name in this.component) { throw 'ComponentAlreadyAttached'; }
        this.component[name] = component;
        Object.defineProperty(this, name, {
            get : function() {
                if (!(name in this.component)) { return null; }
                return this.component[name];
            },
        });
    };
    return GameObject;
})();
