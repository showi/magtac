var Namespace = (function() {
    function Namespace() {
        this._genuid = 0;
    }
    Namespace.prototype.genUID = function() {
        return this._genuid++;
    };
    return new Namespace();
})();