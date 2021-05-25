function vowels(str) {
    let count = 0;
    let vlist = 'aeiouAEIOU';
    for (let i = 0; i < str.length; i++) {
        if (vlist.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    return count;
}
let str = prompt("Enter Your String  !!");
console.log(vowels(str));