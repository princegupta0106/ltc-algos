# LeetCode Utility Functions

A library containing reusable algorithms and solutions from popular LeetCode problems (including Blind 75 questions). It offers well-documented, highly-efficient utility functions for common algorithm use-cases.

## Installation

```bash
npm install leetcode-utility-functions
```

## Usage

```javascript
const {
  twoSum,
  maxProfit,
  containsDuplicate,
  isAnagram,
} = require("leetcode-utility-functions");

// Two Sum
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

// Best Time to Buy and Sell Stock
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5

// Contains Duplicate
console.log(containsDuplicate([1, 2, 3, 1])); // true

// Valid Anagram
console.log(isAnagram("anagram", "nagaram")); // true
```

## Available Functions

### `twoSum(nums, target)`

Given an array of integers `nums` and an integer `target`, returns indices of the two numbers such that they add up to `target`.

### `maxProfit(prices)`

Given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day. Returns the maximum profit you can achieve from buying and selling a single stock.

### `containsDuplicate(nums)`

Given an integer array `nums`, returns `true` if any value appears at least twice in the array, and returns `false` if every element is distinct.

### `isAnagram(s, t)`

Given two strings `s` and `t`, returns `true` if `t` is an anagram of `s`, and `false` otherwise.
