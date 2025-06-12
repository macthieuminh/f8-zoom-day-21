// forEach2
Array.prototype.forEach2 = function (callback, thisArg) {
    let length = this.length
    for (let i = 0; i < length; i++) {
        if (i in this) {
            callback.call(thisArg, this[i], i, this)
        }
    }
}

const forEachArr = [1, , 3]
const forEachArr2 = [1, 2, 3, 4, 5]
const forEachArr3 = [1, 2]
console.log(`Phương thức forEach2 : Lọc qua một mảng`)
console.log("\n")
console.log(`Ví dụ thứ 1: (forEach)`)
console.log(forEachArr)
forEachArr.forEach2((value, index) => {
    console.log(`Value: ${value}, Index: ${index}`)
})
console.log("\n")
console.log(`Ví dụ thứ 2: (forEach)`)
console.log(forEachArr2)
forEachArr2.forEach2((value, index) => {
    console.log(`Value: ${value}, Index: ${index}`)
})
console.log("\n")

console.log(`Ví dụ thứ 3: (forEach)`)
console.log(forEachArr3)
forEachArr3.forEach2((value, index) => {
    console.log(`Value: ${value}, Index: ${index}`)
})
console.log("\n")
console.log("*****************************")
console.log("\n")

// find2
Array.prototype.find2 = function (callback, thisArg) {
    let length = this.length
    let num = undefined
    for (let i = 0; i < length; i++) {
        let value = callback.call(thisArg, this[i], i, this)
        if (value) {
            num = this[i]
            break
        }
    }
    return num
}

const find2Array = [1, 2, 3, 4, 5]
let resultFind2Array = find2Array.find2((value, index, array) => {
    return value % 3 === 0
})
let resultFind2Array2 = find2Array.find2((value, index, array) => {
    return value > 3
})
let resultFind2Array3 = find2Array.find2((value, index, array) => {
    return value < 2
})

console.log(`Phương thức find2 : Tìm và trả về một mảng thỏa điều kiện truyền vào!`)
console.log("\n")
console.log(`Mảng cho trước [${find2Array}]`)
console.log("\n")
console.log(`Ví dụ thứ 1: (find2)`)
console.log(`Tìm một số chia hết cho 3 : [${resultFind2Array}]`)
console.log("\n")
console.log(`Ví dụ thứ 2: (find2)`)
console.log(`Tìm một số lớn hơn 3 : [${resultFind2Array2}]`)
console.log("\n")
console.log(`Ví dụ thứ 3: (find2)`)
console.log(`Tìm một số nhỏ hơn 2 : [${resultFind2Array3}]`)
console.log("\n")
console.log("*****************************")
console.log("\n")

// finIndex2
Array.prototype.findIndex2 = function (callback, thisArg) {
    let length = this.length,
        index = -1
    for (let i = 0; i < length; i++) {
        let value = callback.call(thisArg, this[i], i, this)
        if (value) {
            index = i
            break
        }
    }
    return index
}

const arrFindIndex2 = [1, 9, 9, 8]

let indexFindIndex = arrFindIndex2.findIndex2((value, index, array) => {
    return value % 8 === 0
})
let indexFindIndex2 = arrFindIndex2.findIndex2((value, index, array) => {
    return value % 8 === 0
})
let indexFindIndex3 = arrFindIndex2.findIndex2((value, index, array) => {
    return value % 8 === 0
})

console.log(`Phương thức finIndex2 : Trả về Index thỏa điều kiện truyền vào`)
console.log("\n")
console.log(`Mảng cho trước [${arrFindIndex2}]`)
console.log("\n")
console.log(`Ví dụ thứ 1: (findIndex2)`)
console.log(`Trả về Index một số chia hết cho 8 : [${indexFindIndex}]`)
console.log("\n")
console.log(`Ví dụ thứ 2: (findIndex2)`)
console.log(`Trả về Index một số lớn hơn 3 : [${indexFindIndex2}]`)
console.log("\n")
console.log(`Ví dụ thứ 3: (findIndex2)`)
console.log(`Trả về Index số nhỏ hơn 2 : [${indexFindIndex3}]`)
console.log("\n")
console.log("*****************************")
console.log("\n")

// filter2
Array.prototype.filter2 = function (callback, thisArg) {
    let length = this.length,
        arr = []
    for (let i = 0; i < length; i++) {
        let value = callback.call(thisArg, this[i], i, this)
        if (i in this) {
            if (value) {
                arr.push(this[i])
            }
        }
    }
    return arr
}

const arrFilter2 = [2, 3, 3, 2, 6, 6, 6]
let resultFilter1 = arrFilter2.filter2((value) => {
    return value % 2 !== 0
})
let resultFilter2 = arrFilter2.filter2((value) => {
    return value > 5
})
let resultFilter3 = arrFilter2.filter2((value) => {
    return value == 2
})

console.log(
    `Phương thức filter2 : Trả về một mảng ánh xạ từ mảng gốc - thỏa mảng điều kiện truyền vào`
)
console.log("\n")
console.log(`Mảng cho trước [${arrFilter2}]`)
console.log("\n")
console.log(`Ví dụ thứ 1: (findIndex2)`)
console.log(`Trả về một mảng có số chia không hết cho 2 : [${resultFilter1}]`)
console.log("\n")
console.log(`Ví dụ thứ 2: (findIndex2)`)
console.log(`Trả về một mảng có số lớn hơn 5 : [${resultFilter2}]`)
console.log("\n")
console.log(`Ví dụ thứ 3: (findIndex2)`)
console.log(`Trả về một mảng có số bằng 2 : [${resultFilter3}]`)
console.log("\n")
console.log("*****************************")
console.log("\n")

// map2 (đã fix)
Array.prototype.map2 = function (callback, thisArg) {
    let length = this.length,
        arr = []
    for (let i = 0; i < length; i++) {
        if (i in this) {
            let value = callback.call(thisArg, this[i], i, this)
            arr.push(value)
        }
    }
    return arr
}

const arrMap2 = [1, 2, 3, 4, 5]
const resultMap1 = arrMap2.map2((value) => value * 2)
const resultMap2 = arrMap2.map2((value) => value + 3)
const resultMap3 = arrMap2.map2((value) => value - 1)

console.log(
    `Phương thức map2 : Lọc qua mảng và trả về một mảng ánh xạ từ mảng gốc - thực hiện điều kiện truyền vào`
)
console.log("\n")
console.log(`Mảng cho trước [${arrMap2}]`)
console.log("\n")
console.log(`Ví dụ thứ 1: (map2)`)
console.log(`Thực hiện nhân cho 2 : [${resultMap1}]`)
console.log("\n")
console.log(`Ví dụ thứ 2: (map2)`)
console.log(`Thực hiện cộng 3 : [${resultMap2}]`)
console.log("\n")
console.log(`Ví dụ thứ 3: (map2)`)
console.log(`Thực hiện trừ 1 : [${resultMap3}]`)
console.log("\n")
console.log("*****************************")
console.log("\n")

// includes2
Array.prototype.includes2 = function (value, index) {
    let length = this.length
    length === 0 ? false : void 0
    if (index < 0) {
        index += length
        index < 0 ? (index = 0) : void 0
    }
    for (let i = index; i < length; i++) {
        if (this[i] === value || (this[i] !== this[i] && value !== value)) {
            return true
        }
    }
    return false
}
const arrIncludes2 = ["Hi", NaN, "Im", "Coder", "Gangs"]
const resultIncludes = arrIncludes2.includes2("Coder", 0)
const resultIncludes2 = arrIncludes2.includes2(NaN, 0)
const resultIncludes3 = arrIncludes2.includes2("Minh", 0)

console.log(`Phương thức includes2 : Kiểm tra một phần tử có trong mảng hay không`)
console.log("\n")
console.log(`Mảng cho trước [${arrIncludes2}]`)
console.log("\n")
console.log(`Ví dụ thứ 1: (includes2)`)
console.log(`Kiểm tra có từ "Coder" trong mảng không : [${resultIncludes}]`)
console.log("\n")
console.log(`Ví dụ thứ 2: (includes2)`)
console.log(`Kiểm tra có NaN trong mảng không : [${resultIncludes2}]`)
console.log("\n")
console.log(`Ví dụ thứ 3: (includes2)`)
console.log(`Kiểm tra có từ "Minh" trong mảng không : [${resultIncludes3}]`)
console.log("\n")
console.log("*****************************")
console.log("\n")

// reduce2(đã sửa)
Array.prototype.reduce2 = function (callback, init) {
    const length = this.length
    let acc,
        i = 0

    if (arguments.length >= 2) {
        acc = init
    } else {
        while (i < length && !(i in this)) {
            i++
        }
        if (i >= length) {
            throw new TypeError("Mảng rỗng và không có giá trị khởi tạo")
        }
        acc = this[i++]
    }

    for (i; i < length; i++) {
        if (i in this) {
            acc = callback.call(thisArg, acc, this[i], i, this)
        }
    }

    return acc
}
const arrReduce = [8, 3, 8, 6]
const reduce2SumResult = arrReduce.reduce2((total, number) => {
    return total + number
}, 0)
const reduce2SubtractResult = arrReduce.reduce2((total, number) => {
    return total - number
})
const reduce2MultiResult = arrReduce.reduce2((total, number) => {
    return total * number
})

console.log(
    `Phương thức reduce2 : Lọc qua từng phần tử và thực hiện tính toán phần tử hiện tại và phần tử tổng, có thể cho giá trị khởi tạo và bắt đầu từ phần tử thứ 2`
)
console.log("\n")
console.log(`Mảng cho trước [${arrReduce}]`)
console.log("\n")
console.log(`Ví dụ thứ 1: (reduce2)`)
console.log(`Thực hiện phép tính cộng, giá trị khởi tạo là 0 : ${reduce2SumResult}`)
console.log("\n")
console.log(`Ví dụ thứ 2: (reduce2)`)
console.log(`Thực hiện phép tính trừ: ${reduce2SubtractResult}`)
console.log("\n")
console.log(`Ví dụ thứ 3: (reduce2)`)
console.log(`Thực hiện phép tính nhân : ${reduce2MultiResult}`)
console.log("\n")
console.log("*****************************")
console.log("\n")

// slice2 (đã sửa)
Array.prototype.slice2 = function (start, end) {
    let length = this.length,
        arr = []
    start = start === undefined ? 0 : start
    end = end === undefined ? length : end
    if (start >= length || start >= end) {
        return arr
    }
    if (start < 0) {
        start = Math.max(length + start, 0)
    } else {
        start = Math.min(start, length)
    }
    if (end < 0) {
        end = Math.max(length + end, 0)
    } else {
        end = Math.min(end, length)
    }
    for (let i = start; i < end; i++) {
        arr.push(this[i])
    }
    return arr
}

const arrSpice2 = ["Never", "Give", "Up", "!!!"]
const spice2Result = arrSpice2.slice2()
const spice2Result2 = arrSpice2.slice2(1)
const spice2Result3 = arrSpice2.slice2(1, 2)

console.log(`Phương thức slice2`)
console.log("\n")
console.log(`Mảng cho trước [${arrSpice2}]`)
console.log("\n")
console.log(`Ví dụ thứ 1: (slice2)`)
console.log(`Không truyền tham số để shallow copy mảng : [${spice2Result}]`)
console.log("\n")
console.log(`Ví dụ thứ 2: (slice2)`)
console.log(`Cắt bỏ phần tử thứ tự 1 : [${spice2Result2}]`)
console.log("\n")
console.log(`Ví dụ thứ 3: (slice2)`)
console.log(`Cắt bỏ phần tử từ thứ tự 1 -> 2 : [${spice2Result3}]`)
console.log("\n")
console.log("*****************************")
console.log("\n")

// splice2 (đã sửa)
Array.prototype.splice2 = function (start, deleteCount, ...strings) {
    let length = this.length,
        arr = []

    start = start === undefined ? 0 : start
    deleteCount = deleteCount === undefined ? length - start : deleteCount
    if (start < 0) {
        start = Math.max(length + start, 0)
    } else {
        start = Math.min(start, length)
    }
    if (deleteCount === undefined) {
        deleteCount = length - start
    } else {
        deleteCount = Math.max(0, Math.min(deleteCount, length - start))
    }
    for (let i = 0; i < deleteCount; i++) {
        if (start + i < length) {
            arr.push(this[start + i])
        }
    }
    let cut = this.slice(start + deleteCount)
    this.length = start
    for (let i = 0; i < strings.length; i++) {
        this.push(strings[i])
    }
    for (let i = 0; i < cut.length; i++) {
        this.push(cut[i])
    }
    return arr
}

const arrSplice2 = ["Hal", "le", "lu", "jah"]
const splice2Result = arrSplice2.splice2(1)
const splice2Result2 = arrSplice2.splice2(1, 2)
const splice2Result3 = arrSplice2.splice2(1, 1, "Amen")

console.log(`Phương thức splice2`)
console.log("\n")
console.log(`Mảng cho trước [${arrSplice2}]`)
console.log("\n")
console.log(`Ví dụ thứ 1: (splice2)`)
console.log(`Không truyền tham số để shallow copy mảng : [${splice2Result}]`)
console.log("\n")
console.log(`Ví dụ thứ 2: (splice2)`)
console.log(`Cắt bỏ phần tử thứ tự 1 : [${splice2Result2}]`)
console.log("\n")
console.log(`Ví dụ thứ 3: (splice2)`)
console.log(`Cắt bỏ phần tử từ thứ tự 1 -> 2 : [${splice2Result3}]`)
console.log("\n")
console.log("*****************************")
console.log("\n")
