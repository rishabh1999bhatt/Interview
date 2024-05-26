const Polyfills = () => {
  //   // polyfill of map
  //   Array.prototype.polyfillFilter = function (callback) {
  //     const output = [];
  //     for (let i = 0; i < this.length; i++) {
  //       if (callback(this[i])) {
  //         output.push(this[i]);
  //       }
  //     }
  //     return output;
  //   };
  //   console.log([1, 2, 3, 4, 5, 6].polyfillFilter((item) => item % 2 === 0));

  // // polyfill of reduce
  // Array.prototype.myReduce = function (callback, initialValue) {
  //   if (!Array.isArray(this)) {
  //     throw TypeError("Not an array");
  //   }
  //   if (typeof callback !== "function") {
  //     throw TypeError("Not a function");
  //   }
  //   const array = Object(this);
  //   const length = array.length;
  //   let index = 0;
  //   let acc;
  //   if (arguments?.length >= 2) {
  //     acc = arguments[1];
  //   } else {
  //     while (index < length && !(index in array)) {
  //       index++;
  //     }
  //     acc = array[index++];
  //   }
  //   while (index < length) {
  //     acc = callback(acc, array[index], index, array);
  //     index++;
  //   }
  //   return acc;
  // };

  // console.log(
  //   [1, 1, 1, 1, 1].myReduce((acc, curr) => {
  //     acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
  //     return acc;
  //   }, {})
  // );

  return <h2 className="text-center">Polyfills</h2>;
};

export default Polyfills;
