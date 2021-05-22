import {strongString} from "./stringTasks/task1.js"
import {largestPalindrome} from "./stringTasks/task2.js";
import {largestConcat} from "./stringTasks/task3.js";
import {triangle} from "./primitiveTasks/task1.js";
import {maxNumber} from "./primitiveTasks/task2.js";
import {matrixSort} from "./primitiveTasks/task3.js";
import {piless} from "./money/piles.js";

console.log(strongString("abc", "xya"))
console.log(largestPalindrome("abacaca"))
console.log(largestConcat("acaacaaca"))
console.log(triangle([12,1,123,134]))
console.log(maxNumber([8,99,10]))
console.log(matrixSort([[3, 3, 5, 6], [2, 2, 1, 8], [1, 1, 1, 2], [2, 2, 1, 8]]));

piless([2,4,5])




