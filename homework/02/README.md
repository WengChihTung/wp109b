# 習題2

1. 請寫一個程式可以印出指定數量的 * 號
例如： star(5) 會印出 5 個 * 號

star(5)

```
*
*
*
*
*
```

2. 請寫一個函數可以印出 a..b 之間的所有整數
例如： between(3,8) 會印出

```
3  
4  
5  
6  
7  
8  
```

加分題

3 請寫一個函數 primeBetween(a,b) 可以印出 a..b 之間的質數

例如 primeBetween(3,15)

```
3
5
7
11
13
```

記得善用函數，先寫一個判斷是否為質數的函數 isPrime(n) 去判斷會比較好

## 第一題

檔案：star5.js

```js
function star(x) {
    for (var i=1;i<=x;i++)
        console.log("*")
}

star(5)
```

執行結果
```
wengchihtung@MacBook-Pro 02 % deno run star5.js
*
*
*
*
*
```

## 第二題

檔案：between.js

```js
function between(x,y) {
    for (var i=x; i<=y; i++)
        console.log(i)
}

between(3,8)
```

執行結果：

```
wengchihtung@MacBook-Pro 02 % deno run between.js
3
4
5
6
7
8
```

## 加分題

檔案：pB.js

```js
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
```

執行結果：

```
wengchihtung@MacBook-Pro 02 % deno run pB.js
3
5
7
11
13
```