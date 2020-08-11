// 'use strict'

console.log("Sveiki no faila");
console.log("Sveiki no faila");

console.log("Sveiki no faila");
console.log("Sveiki no faila");

a = 3.14;

var z, x, y;
z = 4;
x = 2;
var d = z + x;

y = z + x; //6;
y = z - x; //2;
y = z * x; //8;
y = z / x; //2;
y = z % x; //0;

y = z++; //y=4; z=5
console.log(y, z);
y = ++z; //y=6 z=6
console.log(y, z);

y++;
console.log(y);

y += z;

z = 1; // number;
x = "String"; // string;
c = {
  firstname: "rolands",
}; //object
c.firstname; //string

var v;
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
console.log(v - b); //1
// NaN
console.log(typeof NaN);

if (2 == 3) {
  console.log("ok");
} else {
  console.log("error");
}

if ("2" == 2) {
  // only values are equal
  console.log("here");
} else {
  console.log("not here");
}

if ("2" === 2) {
  //value and number are equal !!!
  console.log("here");
} else {
  console.log("not here");
}

kalns = true; //1; false ==0;

if (kalns === 1 || kalns === 2) {
  console.log("here");
} else if (kalns == 2 && v == "62") {
  console.log("Kalns = 2");
} else if (kalns == 1) {
  console.log("kalns ir viens");
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

// Stringi

//variants 1
var string = "   Rolands     Kalpiņš    ";
string = string.trim();
var firstSpace = string.indexOf(" ");
string = string.replace(/ +/g, "");
string =
  string.slice(0, firstSpace) + " " + string.slice(firstSpace, string.length);
console.log(string);

//varinats2
var string = "   Rolands     Kalpiņš    ";
string = string.trim();
string = string.split(" ");
console.log(string);
string = string[0] + " " + string[string.length - 1];
console.log(string);

var str = "HELLO WORLD";
str[0] = "A"; // Gives no error, but does not work
str[0]; // returns H

var skaitlis = "3";
var sk2 = 5;

skaitlis = skaitlis * 1;

//Masīvs

var mas1 = [1, 2, 3, 4];
var mas2 = [];

mas2 = mas1;
console.log(mas2);
console.log(mas1);

mas2[5] = 5;
console.log(mas2);
console.log(mas1);

mas1[20] = 6;
console.log(mas2);
console.log(mas1);

mas1.push(8);
console.log(mas2);
console.log(mas1);

mas1[mas1.length] = 9;
console.log(mas2);
console.log(mas1);

mas1.pop();
mas1.pop();
mas1.pop();
console.log(mas2);
console.log(mas1);

mas1.splice(2, 3);
console.log(mas2);
console.log(mas1);

mas2 = mas1.slice();
mas2[0] = "test";
console.log(mas2);
console.log(mas1);

let sumFunTest = 5;

console.log(summa(sumFunTest, 3));
console.log(summa(2, 3));
console.log(summa(2, 3));
console.log(summa(2, 3));
console.log(summa(2, 3));

function summa(a1, a2) {
  return a1 + a2;
}
var a = 1;
var b = 2;

function stupidSumm() {
  return a + b;
}

var b = stupidSumm();

console.log(stupidSumm());

function summaNoVisiem(a, b) {
  console.log(a);
  console.log(b);
  console.log(arguments.length);
  var summmmma = 0;
  for (i = 0; i < arguments.length; i++) {
    summmmma += arguments[i];
  }
  return summmmma;
}

console.log(summaNoVisiem(1, 2, 3, 4, 5));

var cl = console.log;
var timenow = console.log(Date.now());

cl("test");

timenow;