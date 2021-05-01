class Vector {
    constructor(array) {
        this.a = array
    }
    add(f) {
        var r = []
        var s = this
        for (var i=0; i<s.a.length; i++) {
            r[i] = s.a[i]+f.a[i]
        }
        return new Vector(r)
    }
    sub(f) {
        var r = []
        var s = this
        for (var i = 0; i < s.a.length; i++) {
            r[i] = s.a[i]-f.a[i]
        }
        return new Vector(r)
    }
    dot(f) {
        var r = []
        var s = this
        var k = 0
        for (var i = 0; i < s.a.length; i++) {
            r[i] = s.a[i]*f.a[i]
            k = k + r[i]
        }
        return k
    }
    neg() {
        var r = []
        var s = this
        for (var i = 0; i < s.a.length; i++) {
            r[i] = s.a[i]*(-1)
        }
        return new Vector(r)
    }
  }
  
  var x = new Vector([1, 2, 3])
  var y = new Vector([1, 1, 1])
  console.log("x.add(y)=", x.add(y))
  console.log("x.sub(y)=", x.sub(y))
  console.log("x.dot(y)=", x.dot(y))
  console.log("x.neg()=", x.neg())
  