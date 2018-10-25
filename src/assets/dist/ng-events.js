var ngEvents = (function() {

    var _callbacks = {};
    /**
     * 事件注册
     * 
     * @param {sting} eventName 事件名称
     * @param {function} callback 事件的回调函数
     */
    var on = function(eventName, callback) {
        if (!_callbacks[eventName]) {
            _callbacks[eventName] = [];
        }

        _callbacks[eventName].push(callback);
    };
    /**
     * 事件注销
     * 
     * @param {string} eventName 
     * @param {function} callback 
     */
    var off = function(eventName, callback) {
        if (callback === void 0) { callback = null; }

        var callbacks = _callbacks[eventName];
        if (!callbacks) {
            return;
        }

        if (!callback) {
            // Remove all callbacks for this eventName
            delete this._callbacks[eventName];
            return;
        }

        var index = -1;
        for (var i = 0; i < callbacks.length; i++) {
            if (callbacks[i] === callback) {
                index = i;
                break;
            }
        }

        if (index < 0) {
            return;
        }

        _callbacks[eventName].splice(index, 1);
    };
    /**
     * 事件触发
     * 
     * @param {string} eventName 
     * @param  {...any} args 
     */
    var trigger = function(eventName) {
        var callbacks = _callbacks[eventName];
        if (!callbacks || !callbacks.length) {
            return;
        }

        var args = Array.prototype.slice.call(arguments, 1);
        for (var i = 0; i < callbacks.length; i++) {
            callbacks[i].apply(this, args);
        }
    };

    // Public interface ///////////////////////////////////////////////////

    return {
        on: on,
        off: off,
        trigger: trigger
    };
})();