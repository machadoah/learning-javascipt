// Comments are code snippets ignored by JavaScript 

console.log('Hello World'); // There are here, a comment
console.log('Line 1');
console.log('Line 2');
console.log('Line 3');
// It will be ignored

/**
 * Comment at block
 * Line a
 * Line b
 * Line c
 */

console.log('{name}');

// imprima nome do usuário
console.log('Eduardo');
// crie uma classe de usuário
class User {
    constructor(name) {
        this.name = name;
    }
}
// crie um megesort
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));
    return merge(left, right);
}
// crie uma função de merge
const merge = (left, right) => {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;
    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft]);
            indexLeft++;
        } else {
            result.push(right[indexRight]);
            indexRight++;
        }
    }
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}
// crie uma função de busca binária
const binarySearch = (arr, item) => {
    let start = 0;
    let end = arr.length;
    let middle;
    let found = false;
    let position = -1;
    while (found === false && start <= end) {
        middle = Math.floor((start + end) / 2);
        if (arr[middle] === item) {
            found = true;
            position = middle;
        } else if (item < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position;
}
// crie uma função de busca sequencial
const sequentialSearch = (arr, item) => {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            index = i;
            break;
        }
    }
    return index;
}
