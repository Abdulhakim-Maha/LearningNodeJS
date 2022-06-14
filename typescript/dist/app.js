"use strict";
var SomeEnum;
(function (SomeEnum) {
    SomeEnum[SomeEnum["A"] = 0] = "A";
    SomeEnum[SomeEnum["B"] = 1] = "B";
})(SomeEnum || (SomeEnum = {}));
console.log(SomeEnum[0]);
