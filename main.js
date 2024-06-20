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


const func3 = (num1, num2) => ({
    hoge: num1,
    huga: num2,
});
console.log(func3(10, 20));


