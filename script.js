{
    /**
     * 了解闭包
     * 浅拷贝
     * 深拷贝
     * 扁平化
     * 排序
     * const let var的区别
     * const: 常量, 不可以被更改, 只能在作用域内使用
     * let: 可以被更改, 只能在作用域内使用
     * var: 可以被更改
     * const, let: 如果在声明前使用变量将会导致referenceError. var则会出现"undefined"
     */
}

{
    console.clear();
    const ACTIVE = true;
    if (ACTIVE) {
        console.clear();
        console.log("true");
    } else {
        console.log("false");
    }
}

{
    console.clear();
    let myName = "Alfred";
    myName = "Haomin";
    console.log(myName);
}

{
    /**
     * 0通常代表false, 1代表true. 除了这两个数字剩余的数字并不代表boolean的值
     * 通常使用"==="对两个变量进行判断, 这也意味着进行的是"严格相等".
     */
    console.clear();
    let a = 1;
    let b = "Alfred";
    let c = true;
    let d = undefined;
    let e = null;
    let f = NaN;
    // 非严格模式下判断0是否等于false, 结果为true. 当使用严格模式时, 结果为false
    console.log("No Strict Mode:",0 == false)
    console.log("Strict Mode:",0 === false)
    // 非严格模式下判断1是否等于true, 结果为true. 当使用严格模式时, 结果为false
    console.log("No Strict Mode:",1 == true)
    console.log("Strict Mode:",1 === true)
    console.log("Compare Undefined:", undefined == undefined);
    console.log("Compare NaN:", NaN == NaN);
    console.log("Compare Undefined and NaN:", undefined == NaN);
}

{
    console.clear();
    let a = "Alfred";
    let b = 'Haomin';
    let c = `Alfred Xin`
    let d = `${a} "is good guy", 'he will b find a good job'`;
    console.log(d);
}

{
    // 将数字转换为字符串("" + number)
    console.clear();
    let number = 3;
    let strResult = "" + number;
    console.log("strResult", strResult, typeof strResult);

    // 将字符串转换为数字(+("string"))
    let numResult = +(strResult);
    console.log("numResult", numResult, typeof numResult);

    // 字符串数字进行减法时都是数字
    console.log("result", "234" - 123);
    console.log("result", "234" - "123");
}

{
    console.clear();
    let list = [1, 2, 3, 4];
    let obj = {
        1: "Alfred",
        2: "Haomin",
        name: "Alfred Xin"
    };
    console.table(list);
    console.table(obj);
}

{
    /**
     * Falsy value(false, 0, empty value, -0, null, undefined, NaN)在if条件句中都是false
     */
    console.clear();
    const state = true;
    if (state) {
        console.log("Good");
    } else {
        console.log("bad");
    }

    let arr = [];
    if (arr) {
        console.log("HERE")
    } else {
        console.log("False");
    }
}

{
    /**
     * pass by reference: 当obj指向同一个地址的时候一个改变另一个也会改变
     */
    console.clear();
    const list = [1, 2, 3, 4];
    const newList = list;
    console.log("list", list);
    console.log("newList", newList);
    list[0] = 9
    newList[0] = 10;
    newList[6] = 0;
    console.log("list", list);
    console.log("newList", newList);
}

{
    /**
     * pass by reference example
     */
    console.clear();
    const person = {
        name: "Alfred",
        age: 22,
        profile: {
            address: "Toowong"
        }
    }

    const countAge = (person) => {
        person.age += 1;
        person.profile.address = "Brisbane"
        person = {
            name: "Alfred",
            age: 22,
        }
        console.log(person.age)
    }

    countAge(person);
    console.table(person);
}

{
    /**
     * pass by value
     */
    console.clear();
    const calSquare = (x) => {
        x = x * x;
        console.log("x:", x);
    }
    const y = 10;
    calSquare(y);
    console.log("y", y)
}

{
    /**
     * 浅拷贝(shallow copy)
     */
}


