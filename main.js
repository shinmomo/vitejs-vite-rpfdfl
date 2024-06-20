//アロー関数

//従来
// function func1(str) {
//     return str;
// }

// const func1 = function(str) {
//     return str;
// };
// console.log(func1("func1です"));

//アロー関数(引数)=>{関数}
// const func2 = (str) => {
//     return str;
// };

// console.log(func2("func2です"));

//引数が1つなら()を消してよい
// const func2 = str => {
//     return str;
// };
// console.log(func2("func2です"));

//評価項目が1個だけ、かつ引数が1個
// const func2 = str => str;
// console.log(func2("func2です"));

// const arrowDoubleFunc = a => 2 * a;
// console.log(arrowDoubleFunc(5));

//練習
// const func3 = (num1, num2) => {
//     return num1 + num2;
// };

// const func3 = (num1,num2) => num1 + num2;
// console.log(func3(5,10));


// const func3 = (num1, num2) => ({
//     hoge: num1,
//     huga: num2,
// });
// console.log(func3(10, 20));

// const myProfile = {
//     name: "もも";
//     age: 27
// };


// const sayHello = (name = "名無し") => console.log(`こんにちは!${name}さん！`);
// sayHello();

// const myProfile = {
//     age: 31
// };
// const { age, name = "ゲスト" } = myProfile;
// console.log(age);
// console.log(name);

// const name ="もも";
// const age = 27;

// //オブジェクトの省略記法
// const myProfile ={
//     name,
//     age
// };
// console.log(myProfile);

// //スプレッド構文
// const arr1 = [1, 2];
// // console.log(arr1);  
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = [...arr4];
// console.log(arr8);

// arr4[0] = 20;
// console.log(arr8);

const nameArr = ["田中","山田", "もも"];
for (let index = 0; index < nameArr.length; index++){
    console.log(nameArr[index]);
}

