//Q1
function max(iterable, key) {
    var maximum = Number.MIN_VALUE;
    for (var og_v in iterable) {
      var v = key(v0);
      if (v >= maximum) {
        maximum = og_v;
      }
    }
    return maximum;
  }
//Q2
const reverser = function(v) {return -v};
//Q4
function changer(object, key, value) {
    var prev = object[key];
    if (Array.isArray(prev)) {//is list
        object[key].push(value);
    } else if (typeof prev == 'object' && prev != null) { //is json obj
        object.push(key, value);
    } else { //is singular item
        object[key] = value;
    }
    return null;
  }

//Q5
async function promise_me(truthy) {
    const a = new Promise((resolve, reject) => {
        console.log(1)
        return 5;
    })
    console.log(2)
    console.log(3)
    console.log(4)
    const five = a()
    console.log(five)
    return five
}