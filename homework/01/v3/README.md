# 個人網站
此網站分為六個頁面：Home, Works, Homework, Wiki, About, More，其中主要部分之作品放置於 Works。

## 來源
『這個程式完全是自行創作的，沒有修改自任何人的程式碼，也沒有用到外部套件』！

此專案之 Html, Css, JavaScript，皆未採用樣板、框架，或修改自他人專案。

唯 Css 部分，橫置的頁面選單，概念來自於學期初上課時的內容。具體出處已想不起來。

## 功能
主要部分之作品為經典撲克牌遊戲--射龍門。具體功能如下：

1. 按下開始遊戲後，從撲克牌組裡隨機產生兩張不重複之底牌。
2. 若兩張底牌大小相同會開啟下拉式選單。
3. 玩家輸入下注金額後點選下注。玩家必須輸入有效的金額數字，並且不能跳過下注開啟新的牌局。
4. 按下下注後，從撲克牌組裡隨機產生一張與底牌不重複之手牌。
5. 比對底牌與手牌，確認結果及計算收益。玩家不能再次下注同樣的牌局。

## 技術手段
0. 使用 for 創造出二維陣列撲克牌組。
```js
  var poker = []
  for (var i = 1; i < 10; i++) {
    poker[i] = ["Spade "+(i+1), "Heart "+(i+1), "Diamond "+(i+1), "Club "+(i+1)]
  }
  poker[0] = ["Spade A", "Heart A", "Diamond A", "Club A"]
  poker[10] = ["Spade J", "Heart J", "Diamond J", "Club J"]
  poker[11] = ["Spade Q", "Heart Q", "Diamond Q", "Club Q"]
  poker[12] = ["Spade K", "Heart K", "Diamond K", "Club K"]
```

1. 使用 Math.random() 隨機取值，並使用 Math.floor() 限制範圍。將取到的值當作陣列的位置來產生撲克牌。
```js
//產生第一張牌。
    x1 = Math.floor(Math.random() * 12)
    y1 = Math.floor(Math.random() * 3)
    document.getElementById("card1").innerHTML = poker[x1][y1]

//產生第二張牌並避免與第一張相同。
    x2 = x1
    y2 = y1
    while (x1 == x2 && y1 == y2) {
      x2 = Math.floor(Math.random() * 12)
      y2 = Math.floor(Math.random() * 3)
    }
    document.getElementById("card2").innerHTML = poker[x2][y2]
```

2. 若兩張底牌大小相同會開啟下拉式選單。
```html
  <label id="fbig" for="big" style="display: none;">比大或比小：</label>
  <select id="big" style="display: none;">
    <option value = 999>比大</option>
    <option value = 0>比小</option>
  </select>
```
```js
    if (x1 == x2) {
      fbig.style = "display: inline;"
      big.style = "display: inline;"
    }
```

3. 玩家必須輸入有效的金額數字，並且不能跳過下注開啟新的牌局。
```js
//關閉新牌局按鈕。
    document.getElementById("start").disabled = true

//若下注金額輸入並非正數會出現警告視窗。
    if (!(m>0)) {
      alert("Please enter a positive number!")
    }

//若下注金額輸入超過持有籌碼數會出現警告視窗。
    else if (m > ch) {
      alert("Not enough chips.")
    }

//若下注金額輸入小於最小額度會出現警告視窗。
    else if (m < 100) {
      alert("At least bet 100。")
    }
```

4. 隨機產生一張與底牌不重複之手牌。
```js
      x3 = x1
      y3 = y1
      while (x1 == x3 && y1 == y3 || x2 == x3 && y2 == y3) {
        x3 = Math.floor(Math.random() * 12)
        y3 = Math.floor(Math.random() * 3)
      }
      document.getElementById("card3").innerHTML = poker[x3][y3]
```

5. 比對底牌與手牌，確認結果及計算收益。玩家不能再次下注同樣的牌局。
```js
//關閉下注按鈕。
      document.getElementById("bett").disabled = true

//底牌大小不相同時，判斷勝負。
      if (x1 !== x2) {
        if (x3 > x1 && x3 < x2 || x3 < x1 && x3 > x2) {
          c = 1
        }
        else if (x1 == x3 || x2 == x3) {
          c = 2
        }
        else {
          c = 0
        }
      }

//底牌大小相同時，判斷勝負
      b = big.value
      else if (x1 == x2) {
//玩家選擇比大
        if (b == 999) {
          if (x3 > x1) {
            c = 1
          }
          else if (x3 < x1) {
            c = 0
          }
          else if (x3 == x1){
            c = 2
          }
        }
//玩家選擇比小
        else if (b == 0) {
          if (x3 < x1) {
            c = 1
          }
          else if (x3 > x1) {
            c = 0
          }
          else if (x3 == x1) {
            c = 2
          }
        }
      }

//顯示勝負並計算收益
      if (c == 1) {
        document.getElementById("outs").innerHTML = "你贏了！"
        m = m * 1
      }
      else if (c == 0) {
        document.getElementById("outs").innerHTML = "你輸了！"
        m = m * -1
      }
      else if (c == 2) {
        document.getElementById("outs").innerHTML = "撞柱！"
        m = m * -2
      }
      document.getElementById("money").innerHTML = m
      ch = ch + m
      document.getElementById("chip").innerHTML = ch

//當籌碼不足以下注即結束遊戲。
      if (ch < 100) {
        document.getElementById("cont").innerHTML = "籌碼不足，遊戲結束。"
      }

//籌碼足夠則可繼續遊戲。
      else {
        if (ch > re) {re = ch}
        document.getElementById("record").innerHTML = re
        document.getElementById("start").disabled = false
        document.getElementById("cont").innerHTML = "請按「開始遊戲」繼續。"
      }      
    }
```
