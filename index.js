"use strict";
class ArrFreeMan {
    constructor() {
        this.array = [];
    }
    addBack(item) {
        this.array[this.length] = item;
        return item;
    }
    get length() {
        let count = 0;
        for (let item of this.array) {
            count++;
        }
        return count;
    }
    include(item) {
        for (let x of this.array) {
            if (x === item) {
                return true;
            }
        }
        return false;
    }
    unshift(item) {
        let index = this.length;
        let i = this.length - 1;
        while (index >= 0) {
            if (index !== 0) {
                this.array[index] = this.array[i];
            }
            else {
                this.array[0] = item;
            }
            i--;
            index--;
        }
    }
    concat(item) {
        for (let x of item) {
            this.addBack(x);
        }
    }
    slice(start, stop) {
        let newArr = new ArrFreeMan();
        while (start < stop) {
            newArr.addBack(this.array[start]);
            start++;
        }
        return newArr;
    }
    find(call) {
        for (let item of this.array) {
            if (call(item)) {
                return item;
            }
        }
        return;
    }
    reverse() {
        let right = this.length - 1;
        let left = 0;
        let temp;
        while (left < right) {
            temp = this.array[left];
            this.array[left] = this.array[right];
            this.array[right] = temp;
            left++;
            right--;
        }
    }
    filter(call) {
        let arr = [];
        let i = 0;
        for (let item of this.array) {
            if (call(item)) {
                arr[i] = item;
                i++;
            }
        }
        this.array = [...arr];
    }
    map(call) {
        let index = 0;
        for (let item of this.array) {
            this.array[index] = call(item);
            index++;
        }
    }
}
const arr = new ArrFreeMan();
const arr1 = new ArrFreeMan();
console.log(arr.length);
arr.addBack(1);
arr.addBack("22929");
arr.addBack(2);
arr.addBack(3);
arr.unshift(9);
console.log(arr);
arr.map((n) => n * 2);
console.log(arr);
