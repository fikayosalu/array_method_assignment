// class Arrr<T> {
// 	array: T[] = [];

// 	addBack(item: T): T {
// 		this.array[this.length] = item;
// 		return item;
// 	}
// }

// const p = new Arrr<number>();
// p.addBack(10);
// p.addBack("10");

class ArrFreeMan<type> {
	array: type[] = [];

	addBack(item: type): type {
		this.array[this.length] = item;
		return item;
	}

	get length(): number {
		let count = 0;
		for (let item of this.array) {
			count++;
		}
		return count;
	}

	include(item: type) {
		for (let x of this.array) {
			if (x === item) {
				return true;
			}
		}
		return false;
	}

	unshift(item: type): void {
		let index: number = this.length;
		let i: number = this.length - 1;
		while (index >= 0) {
			if (index !== 0) {
				this.array[index] = this.array[i];
			} else {
				this.array[0] = item;
			}
			i--;
			index--;
		}
	}

	concat(item: type[]): void {
		for (let x of item) {
			this.addBack(x);
		}
	}

	slice(start: number, stop: number): ArrFreeMan<type> {
		let newArr = new ArrFreeMan<type>();

		while (start < stop) {
			newArr.addBack(this.array[start]);
			start++;
		}
		return newArr;
	}

	find(call: Function): type | undefined {
		for (let item of this.array) {
			if (call(item)) {
				return item;
			}
		}
		return;
	}

	reverse(): void {
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

	filter(call: Function): void {
		let arr: type[] = [];
		let i: number = 0;
		for (let item of this.array) {
			if (call(item)) {
				arr[i] = item;
				i++;
			}
		}
		this.array = [...arr];
	}

	map(call: Function): void {
		let index: number = 0;
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
arr.map((n: number) => n * 2);
console.log(arr);
