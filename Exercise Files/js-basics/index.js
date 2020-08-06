// 'use strict'

console.log("Sveiki no faila");
console.log("Sveiki no faila")

console.log("Sveiki no faila")
console.log("Sveiki no faila")

a = 3.14;

var z, x, y;
z = 4;
x = 2;
var d = z + x;

y = z + x //6;
y = z - x //2;
y = z * x //8;
y = z / x //2;
y = z % x //0;

y = z++ //y=4; z=5
console.log(y, z);
y = ++z //y=6 z=6
console.log(y, z);

y++;
console.log(y);

y += z;


z = 1 // number;
x = "String" // string;
c = {
    firstname: "rolands"
} //object
c.firstname //string

var v
console.log(typeof v);
v = "";
console.log(typeof v);

v = [1, 2, 3, 4];
console.log(typeof v);
console.log(typeof v[1]);

console.log(typeof 1 + 2);


v = null;
console.log(typeof v);

v = "a2"; // typeof string;
var b = 1;

console.log(v + b); //21
console.log(v - b) //1
// NaN
console.log(typeof NaN);


if (2 == 3) {
    console.log("ok")
} else {
    console.log("error")
}

if ("2" == 2) { // only values are equal
    console.log("here")
} else {
    console.log("not here")
}

if ("2" === 2) { //value and number are equal !!!
    console.log("here")
} else {
    console.log("not here")
}

kalns = true; //1; false ==0;

if (kalns === 1 || kalns === 2) {
    console.log("here");
} else if (kalns == 2 && v == "62") {
    console.log("Kalns = 2");
} else if (kalns == 1) {
    console.log("kalns ir viens")
} else {
    console.log("not here");
}

// int i
for (i = 0; i < 10; i++) {
    if (i === 2) {
        continue;
    }

    console.log("mans: " + i);
    if (i === 5) {
        break;
    }
}

i = 0;
while (i < 10) {
    i++;
    console.log("mans: " + i);
}

do {
    i++;
    console.log("mans: " + i);

} while (i < 10);