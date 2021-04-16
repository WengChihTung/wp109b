function isPrime(i) {
    if (i < 2) 
        return 0;
    for (var k=2; k * k <= i; k++)
        if (i % k == 0) 
            return 0;
    return 1;
}

function primeBetween(a, b) {
    for (var i=a; i<=b; i++)
        if (isPrime(i))
        console.log(i);
}

primeBetween(3, 15)