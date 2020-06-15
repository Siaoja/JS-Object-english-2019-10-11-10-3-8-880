//Program1
console.log("Program1 result: ")
//Create a null object and set its variable name as user;
var user = {};
// Add a name attribute and set its value as John
user.name = 'John';
// Add a surname attribute and set its value as Mike;
user.surname = 'Mike';
// Modify the value of name attribute as Peter;
user['name'] = 'Peter';
// console.log(user);
// Delete name attribute of user.
delete user.name;
console.log(user);


//Program2
console.log("Program2 result: ")
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
// calculate how many pieces of fruit there are in the fruit object and the output should be 50.
var sum = 0;
for(let price of Object.values(fruit)){
    // console.log(price);
    sum += price;
}
console.log(sum);