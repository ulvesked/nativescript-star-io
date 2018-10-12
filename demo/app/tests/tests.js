var StarIo = require("nativescript-star-io").StarIo;
var starIo = new StarIo();

describe("greet function", function() {
    it("exists", function() {
        expect(starIo.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(starIo.greet()).toEqual("Hello, NS");
    });
});