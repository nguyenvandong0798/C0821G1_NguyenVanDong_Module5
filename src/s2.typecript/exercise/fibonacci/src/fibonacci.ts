function fibonacci(x:number): number {
    if (x==1 || x==2)
        return 1;
    return fibonacci(n-1) + fibonacci(n - 2);
}
let n:number = 10;
let sum:number = 0;
console.log(n + " the number fist fibonacci: ");
for (let i = 1; i <=n; i++){
    console.log(fibonacci(i) + " ");
    sum+=fibonacci(i);
}
console.log("Sum " + n + "the number fist fibonacci is: " + sum);