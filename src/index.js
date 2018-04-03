// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => {

Object.defineProperty(Object.prototype, property, {
    value: 'someEpicName',
    enumerable: true, //it doesn't influence, I don't know why???
    configurable: true,
    writable: true

});
return property;


};
const createNotEnumerableProperty = (property) => {
    Object.defineProperty(Object.prototype,property,{

        get: function() { return _prop; },
        set: function(property) { _prop = property; },

        enumerable: true, //It doesn't influence,, I don't know why??? It's just a magic.

    });
    return property;
};
const createProtoMagicObject = () => {
    function func() {}
    func.prototype = func.__proto__;
    return func;
};
const incrementor = () => {
    incrementor.privateCounter = incrementor.privateCounter || 0;
    function counter() {
        incrementor.privateCounter++;
        return counter;
    }

    counter.valueOf = () => incrementor.privateCounter;

    return counter();
};
const asyncIncrementor = () => {
    asyncIncrementor.privateCounter = asyncIncrementor.privateCounter || 0;
    return new Promise(resolve => {
        setTimeout(() => {
            asyncIncrementor.privateCounter++;
            resolve(asyncIncrementor.privateCounter);
        }, 5)
    })
};
const createIncrementer = () => {

    return {
        [Symbol.iterator](){
            return this;
        },
        next(){
            return {
                value: this.count > 15 ? undefined : ++this.count || (this.count = 1),
                done: this.count > 15
            }
        }
    }




};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (num) => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(num);
        },1000)
    })
};
const getDeepPropertiesCount = (obj) => {
    let count = 0;
    function getDeepProp(obj) {
        for(let key in obj){
            if (typeof obj[key] === 'object'){
                getDeepProp(obj[key]);
                count++;
            }

        }
        return count;
    }
    return getDeepProp(obj);
};
const createSerializedObject = () => {
    return null;
};
const toBuffer = () => {};
const sortByProto = (arr) => {
    return arr.sort((left, right) => left.__proto__ - right.__proto__)
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;