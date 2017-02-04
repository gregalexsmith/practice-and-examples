// accept one or more numbers as command line arguments
// print the sum of those numbers to the console
var args = process.argv,
    sum = 0;

// input arguments begin at index of 2 of process.argv array
for (var i = 2; i < args.length; i++) {
  sum += Number(args[i])
}

console.log(sum);
