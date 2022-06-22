

// write a function that takes a string and number called n, and repeats the string
// n times with a space in the middle of each time.

function repeatNTimesWithSpace(string, n){
    if(!string) return '';
    return (string + ' ').repeat(n);
};

function capitalizeFirstLetter(string){
    return string[0].toUppercase() + string.slice(1);
}


module.exports = repeatNTimesWithSpace;