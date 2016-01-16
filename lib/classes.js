'use strict';

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Foo = (_temp = _class = function () {
    function Foo() {
        _classCallCheck(this, Foo);

        this.state = {
            foo: 1
        };

        console.log('construct foo');
    }

    Foo.prototype.doSomething = function doSomething() {
        console.log('haha');
    };

    return Foo;
}(), _class.prop1 = 'aaa', _temp);