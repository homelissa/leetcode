/*
Function Description

Complete the makeAnagram function in the editor below. It must return an integer representing the minimum total characters that must be deleted to make the strings anagrams.

makeAnagram has the following parameter(s):

a: a string
b: a string
Input Format

The first line contains a single string, .
The second line contains a single string, .

Constraints

The strings  and  consist of lowercase English alphabetic letters ascii[a-z].
Output Format

Print a single integer denoting the number of characters you must delete to make the two strings anagrams of each other.

Sample Input

cde
abc
Sample Output

4
*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the makeAnagram function below.
function createFrequencyMap(str) {
  let map = {};

  str = str.split('');
  str.forEach(el => {
    map[el] = map[el] ? map[el] += 1 : 1
  })

  return map;
}

function makeAnagram(a, b) {
  let map1 = createFrequencyMap(a);
  let map2 = createFrequencyMap(b);
  let deletion_count = 0;

  const keys1 = Object.keys(map1)

  keys1.forEach(el => {
    if (map2[el] != undefined) {
      if (map1[el] != map2[el]) {
       deletion_count += Math.abs(map1[el] - map2[el]);
      }
    } else {
      deletion_count += map1[el];
    }
  })

  const keys2 = Object.keys(map2);

  keys2.forEach(el => {
    if (map1[el] === undefined) {
      deletion_count += map2[el];
    }
  })

  return deletion_count;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine();

    const b = readLine();

    const res = makeAnagram(a, b);

    ws.write(res + '\n');

    ws.end();
}
