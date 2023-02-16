// Generic Types
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var printData = function (data) {
    console.log('data: ');
    console.log(data);
    return data;
};
console.log(' Generic Types');
var data1 = printData(2);
var data2 = printData('Something');
var data3 = printData({ key1: 'key1', key2: 'key2' });
//////////////////////////////////////////////////////////////////////////
// Generic Constrains
var uniteObjects = function (obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
};
console.log('Generic Constrains');
//works
console.log(uniteObjects({ name: 'Pablo' }, { body: { height: 1.86, age: 36, hair: 'grey' } }));
// doesn't work
// console.log(uniteObjects({name: 'Pablo'}, 'somedata'))
//////////////////////////////////////////////////////////////////////////
// Generic Classes
var NewObjectType = /** @class */ (function () {
    function NewObjectType() {
    }
    NewObjectType.prototype.setKeyValue = function (key, value) {
        this.key = key;
        this.value = value;
    };
    NewObjectType.prototype.logNewObject = function () {
        console.log('{ key: ', this.key, ', value: ', this.value, '}');
    };
    return NewObjectType;
}());
var firstObject = new NewObjectType();
firstObject.setKeyValue('key1', { value1: 'value1', value2: 'value2' });
console.log('Generic Classes');
firstObject.logNewObject();
var printUserProperty = function (user, property) {
    console.log("".concat(user.name, " has also ").concat(property, ": ").concat(user[property], " "));
};
console.log('keyof');
printUserProperty({ name: 'Pablo', age: 36, mail: 'something@ex.com' }, 'age');
//////////////////////////////////////////////////////////////////////////
// typeof
var sumNumber = function (a, b) {
    return a + b;
};
var result = sumNumber(2, 3);
var newObject = result;
console.log('typeof');
console.log(typeof newObject);
//////////////////////////////////////////////////////////////////////////
// Indexed Access Types
var SomeObject = [{ name: 'Pablo', body: { height: 1.86, age: 36, hair: 'grey' } }];
console.log('Indexed Access Types');
console.log(SomeObject);
console.log('type humanName = "name"');
console.log('type Name = Human[humanName]');
console.log('type Name = string');
