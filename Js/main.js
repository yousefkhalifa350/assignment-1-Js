
//1- Write a program that allow to user enter number then printit


// var userName = window.prompt('enter your user name')

// console.log(userName);






//2-  Write a program that take number from user then print yes if that number can divide by 3
// and 4 otherwise print no

// var takeNumber = Number(window.prompt('enter a number'))

// if (takeNumber % 3 == 0 && takeNumber % 4 == 0) {
//     console.log('yes');
// }
// else {
//     console.log('no')
// }



//3-  Write a program that allows the user to insert 2 integers then print the max
// var firstNumber = Number(window.prompt('enter first number'))
// var secondNumber = Number(window.prompt('enter second number'))


// if (firstNumber > secondNumber) {

// console.log('the max is')
// console.log(firstNumber)
// }

// if (secondNumber > firstNumber ) {

// console.log('the max is')
// console.log(secondNumber)
// }




// 4- Write a program that allows the user to insert an integer then print negative if it is
// negative number otherwise print positive.
//  var number = Number(window.prompt('enter first number'))


//  if (number < 0) {
//     console.log('nagitave');

//  }
//  else{
//    console.log('postive')
//  }




// 5- Write a program that takes 3 integers from the user and then prints the maximum and minimum elements.
// var firstNumber = Number(window.prompt('enter first number'))
// var secondNumber = Number(window.prompt('enter second number'))
// var threeNumber = Number(window.prompt('enter three number'))


// var maximum = firstNumber
// var minimum = firstNumber



// if(secondNumber > maximum){
//     maximum=secondNumber
// }
// if (secondNumber<minimum) {
//     minimum=secondNumber
// } 
// if(threeNumber > maximum){
//     maximum=threeNumber
// }
// if(threeNumber < minimum){
//     minimum=threeNumber
// }


// console.log('the maximum is'  +maximum);
// console.log('the minimum is'  +minimum);











// document.getElementById('demo').innerHTML =box


// function Check() {
// var username = window.prompt("please enter your username")
// var userpassword = window.prompt("please enter your password")


// if(username == 'yousef'&& userpassword == 'AAA')
// console.log('login succefully');
// else{
//     console.log('invalid username or password ')
// }

// }



// function  getSum (){

// var num1 = 10 

// var num2 = 20 

// var sum  = num1 + num2 

// var avg  = sum/2

// return avg
// }



// var fix = getSum ()

// console.log(fix)
























// ****************************************************


//1- Write a program that allow to user enter number then printit


// var userName = window.prompt('enter your user name')

// console.log(userName);





// 2 Write a program that take number from user then print yes if that number can divide by 3
//and 4 otherwise print no

// var x = window.prompt()



// if ( x % 3 == 0 && x % 4==0){
//     console.log('yes')
// }
// else{
//     console.log('wrong')
// }




// 3 Write a program that allows the user to insert 2 integers then print the max

// window.alert('Check The Max')
// var x = window.prompt('firstNumber')
// var y = window.prompt('secondNumber')

// if ( x > y ) {
//     console.log(x)
// }
// else{
//     console.log(y)
// }


// 4 var x = window.prompt('check if postive or Nagitve')



// if (x < 0 ) {
//      console.log('nagitve')
// }
// else{
//     console.log('postive')
// }


//  5 Write a program that take 3 integers from user then print the max element
// and the min element.



// var firstnumber = window.prompt('enter first number ')
// var secondnumber = window.prompt('enter second number ')
// var threenumber = window.prompt('enter three number ')


// var max = firstnumber
// var min = firstnumber

// if (secondnumber > max) {
//     max = secondnumber
// }


// if (secondnumber < min) {
//     min = secondnumber
// }

// if (threenumber > max) {
//     max = threenumber
// }


// if (threenumber < min) {
//     min = threenumber
// }

// console.log('the max is '   +max)
// console.log('the min is '   +min)


// 6- Write a program that allows the user to insert integer number then
// check If a number is oven or odd



// var user = Number(window.prompt('check the number if is even or odd'))


// if (  user >= 0   ){

//     console.log('the number is even')
// }
// else{
//     console.log('the number is odd')
// }


// 7  Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
// then print vowel otherwise print consonant



// var user = window.prompt('enter a character');



// if (user == 'a' || user == 'A'

//     || user == 'e' || user == 'E'
//     || user == 'i' || user == 'I'
//     || user == 'o' || user == 'O'
//     || user == 'u' || user == 'U'

// ) {
//     console.log('vowel')
// }
// else{
//     console.log('consanant')
// }



// 9 Write a program that allows user to insert   integer then print all numbers between 1 to
// that’s number




// var user = Number(window.prompt('all-number as u like'))


// for ( i =0 ;  i <= user   ; i++ )  {

// console.log(i)
// }



//  10 Write a program that allows userto insert integerthen print a multiplication table up to 12.
// Example




// var user = Number(window.prompt('power'))

// for (   var i=1     ;    i<=12   ;  i++ ) {

// console.log(`${user} x ${i} = ${user * i}`);

// }





// 11 - Write a program that allows to user to insert number  then print all evennumbers
// between 1 to this number

// var user = Number(window.prompt('even number only'))

// var allNumber=''

// for ( var i = 1 ; i <= user ; i++){
//     if (i % 2 ==0){
//         allNumber +=i
//     }

// }
//    console.log(allNumber)



// Write a program that take two integers then print the power



// Hint how to calculate 4^3 = 4 * 4 * 4 =64

// var num1 = Number(window.prompt('number one'))
// var num2 = Number(window.prompt('number two'))



// console.log (`${num1*num2} `);




// 12- Write a program to enter marks of five subjects and calculate total, average and
// percentage.



// function getTotal() {

//     var subjects1 = Number(window.prompt('subjects1'))
//     var subjects2 = Number(window.prompt('subjects2'))
//     var subjects3 = Number(window.prompt('subjects3'))
//     var subjects4 = Number(window.prompt('subjects4'))
//     var subjects5 = Number(window.prompt('subjects5'))

//     var total = subjects1 + subjects2 + subjects3 + subjects4 + subjects5
//     console.log(`the total ${total}`)

//     var average = total / 5

//     console.log(`the average ${average}`)


//     var percentage = ((total) / (3) * 100) * 100;

//     console.log(`Percentage: ${percentage}%`);

// }


// getTotal();



// 13-Write a program to input month number and print number of days in that
// month.




// var month = Number(window.prompt('month number'))


// switch (month) {

//     case 1:
//         console.log("31");

//         break;


//     case 2:
//         console.log("28");

//         break;


//     case 3:
//         console.log("31");

//         break;

//     case 4:
//         console.log("30");

//         break;


//     case 5:
//         console.log("31");

//         break;



//     case 6:
//         console.log("30");

//         break;

//     case 7:
//         console.log("31");

//         break;


//     case 8:
//         console.log("31");

//         break;

//     case 9:
//         console.log("30");

//         break;


//     case 10:
//         console.log("31");

//         break;

//     case 11:
//         console.log("30");

//         break;

//     case 12:
//         console.log("31");

//         break;


// }


// Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade

// Percentage >= 90%: Grad A
// Percentage >= 80%: Grad B
// Percentage >= 70%: Grad C
// Percentage >= 60%: Grad D
// Percentage >= 40%: Grad E
// Percentage < 40%: Grad F



// var Subject1 = Number(window.prompt('Physics'))
// var Subject2 = Number(window.prompt('Chemistry'))
// var Subject3 = Number(window.prompt('Biology'))
// var Subject4 = Number(window.prompt('Mathematics'))
// var Subject5 = Number(window.prompt('Computer'))


// var total= Subject1 + Subject2 + Subject3 + Subject4 + Subject5;

// var maxtotal=500;

// var Percentage = (total / maxtotal) * 100 ;

// console.log(`Percentage: ${Percentage}%`);

// if (Percentage >= 90) {
//     console.log("Grade A");
// } else if (Percentage >= 80) {
//     console.log("Grade B");
// } else if (Percentage >= 70) {
//     console.log("Grade C");
// } else if (Percentage >= 60) {
//     console.log("Grade D");
// } else if (Percentage >= 40) {
//     console.log("Grade E");
// } else {
//     console.log("Grade F");
// }


