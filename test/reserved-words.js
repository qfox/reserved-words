var assert = require('assert');
var reserved = require('../');

describe('reserved-words', function() {

    var dialect;
    var strict;

    describe('es3 dialect', function() {
        before(function() {
            dialect = 'es3';
            strict = false;
        });

        it('should return true for ES3 deprecated word', function() {
            assert(reserved.check('volatile', dialect, strict));
        });

        it('should return true for ES3 deprecated word by version', function() {
            assert(reserved.check('volatile', 3));
        });

        it('should return false for ES5 word for strict mode', function() {
            assert(!reserved.check('yield', dialect, strict));
        });

        it('should return false for ES6 word', function() {
            assert(!reserved.check('await', dialect, strict));
        });

        it('should return false for prototype word', function() {
            assert(!reserved.check('toString', dialect, strict));
        });
    });

    describe('es5 dialect', function() {
        before(function() {
            dialect = 'es5';
            strict = false;
        });

        it('should return false for ES3 deprecated word', function() {
            assert(!reserved.check('volatile', dialect, strict));
        });

        it('should return true for ES5 word', function() {
            assert(reserved.check('super', dialect, strict));
        });

        it('should return true for ES5 word by version', function() {
            assert(reserved.check('super', 5));
        });

        it('should return false for ES5 word for strict mode', function() {
            assert(!reserved.check('yield', dialect, strict));
        });

        it('should return false for ES6 word', function() {
            assert(!reserved.check('await', dialect, strict));
        });

        it('should return false for ES6 word for strict mode', function() {
            assert(!reserved.check('static', dialect, strict));
        });
    });

    describe('es5 in strict mode', function() {
        before(function() {
            dialect = 'es5';
            strict = true;
        });

        it('should return false for ES3 deprecated word', function() {
            assert(!reserved.check('volatile', dialect, strict));
        });

        it('should return true for ES5 word', function() {
            assert(reserved.check('yield', dialect, strict));
        });

        it('should return true for ES5 word for strict mode', function() {
            assert(reserved.check('let', dialect, strict));
        });

        it('should return false for ES6 word', function() {
            assert(!reserved.check('await', dialect, strict));
        });

        it('should return true for ES6 word for strict mode', function() {
            assert(reserved.check('static', dialect, strict));
        });
    });

    describe('es6 dialect', function() {
        before(function() {
            dialect = 'es6';
            strict = false;
        });

        it('should return false for ES3 deprecated word', function() {
            assert(!reserved.check('volatile', dialect, strict));
        });

        it('should return true for ES5 word', function() {
            assert(reserved.check('super', dialect, strict));
        });

        it('should return true for ES5 word for strict mode', function() {
            assert(reserved.check('yield', dialect, strict));
        });

        it('should return true for ES6 word', function() {
            assert(reserved.check('await', dialect, strict));
        });

        it('should return true for ES6 word by version', function() {
            assert(reserved.check('super', 5));
        });

        it('should return false for ES6 word for strict mode', function() {
            assert(!reserved.check('let', dialect, strict));
        });
    });

    describe('es6 in strict mode', function() {
        before(function() {
            dialect = 'es6';
            strict = true;
        });

        it('should return false for ES3 deprecated word', function() {
            assert(!reserved.check('volatile', dialect, strict));
        });

        it('should return true for ES5 word', function() {
            assert(reserved.check('yield', dialect, strict));
        });

        it('should return true for ES5 word for strict mode', function() {
            assert(reserved.check('let', dialect, strict));
        });

        it('should return true for ES6 word', function() {
            assert(reserved.check('await', dialect, strict));
        });

        it('should return true for ES6 word for strict mode', function() {
            assert(reserved.check('let', dialect, strict));
        });

        it('should return true for ES6 word for strict mode by version', function() {
            assert(reserved.check('let', 6, strict));
        });
    });

});
