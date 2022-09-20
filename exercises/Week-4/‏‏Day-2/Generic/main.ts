// let calc_num: string | number = 3;
// const new_num = calc_num + 4; // No exception as in the previous line we initialized the type to be number

let calc_num2: string | number = "John";
const new_num2 = calc_num2 + " Smith"; // No exception as in the previous line we initialized the type to be string

console.log(new_num2);

// function calc(num: string | number): string | number {
//   return num;
// }

// const calc_num3 = calc(4);
// const new_num3 = calc_num + 4; // ERROR: Supposed to be a 'number' type, but throws an error
// console.log(new_num3);

function calc<Type>(num: Type): Type {
  return num;
}

const calc_num = calc(4);
const new_num = calc_num + 4; // No error is thrown.
console.log(new_num);
//
//
//
//
//

function calc3<Type>(num: Type): Type {
  return num;
}

const calc_num3 = calc3<number>(4);
const new_num3 = calc_num3 + 4; // No error is thrown.
console.log(new_num3);
//
//
//

const first_name = calc3<string>("John");
const full_name = first_name + " Sagi"; // No error is thrown.
console.log(full_name);

//
//
//
//

// function toPNG(data: DataType): DataType {
//   // Check if the data is of class ‘Buffer’
//   if (Buffer.isBuffer(data)) {
//     //   …
//     // Check if the data is of class ‘Array’
//   } else if (Array.isArray(data)) {
//     //     …
//     // Check if the data is of type ‘string’
//   } else if (typeof data === "string") {
//     //       …
//     // Otherwise, throw an exception
//   } else {
//     throw "toPNG only accepts arrays, buffers, or strings";
//   }
// }

//
//
//
//
//
//
//
//

class ImageType<DataType> {
  data: DataType;
  height: number;
  width: number;
  constructor(data: DataType, height: number, width: number) {
    this.data = data;
    this.height = height;
    this.width = width;
  }
}
const imageType = new ImageType<string>("John", 480, 640);

class Numbers<T> {
  genericArray: T[];
  constructor(genericArray: T[]) {
    this.genericArray = genericArray;
  }
  addNumber(num: T): void {
    this.genericArray.push(num);
  }
  sum(): number {
    let total: number = 0;
    this.genericArray.forEach((elem) => {
      if (typeof elem === "string" || typeof elem === "number") {
        total += this.getNumValue(elem);
      }
    });
    return total;
  }

  getNumValue(val: string | number): number {
    if (typeof val === "string") {
      const num: number = parseInt(val);
      return !isNaN(num) ? num : 0;
    } else {
      return val;
    }
  }
}

const numbers1: Numbers<string> = new Numbers<string>(["t", "22", "3", "ed"]);
numbers1.addNumber("2222");
numbers1.addNumber("www");
numbers1.addNumber("1000000002");
console.log(numbers1.sum());

const numbers2: Numbers<number> = new Numbers<number>([0, 12, 12, 12, 12]);
numbers2.addNumber(7888);
numbers2.addNumber(8);
numbers2.addNumber(1888);
numbers2.addNumber(100008);
console.log(numbers2.sum());
