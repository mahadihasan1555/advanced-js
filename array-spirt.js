const nums = [1, 2, 4, 5, 56]
// const part = nums .slice(2, 5);
// console.log(part);

const removed = nums.splice ( 2, 3, 5);
const together = nums.join(",");

console.log(together);
