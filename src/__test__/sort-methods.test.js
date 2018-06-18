
'use strict';

import bubbleSort from '../lib/bubble-sort';
import insertionSort from '../lib/insertion-sort';
import selectionSort from '../lib/selection-sort';

describe('Testing bubble sorting method', () => {
  test('should return a sorted array of positive values', () => {
    expect(bubbleSort([6, 3, 52, 21, 51, 11, 500])).toEqual([3, 6, 11, 21, 51, 52, 500]);
  });

  test('should return a sorted array of negative values', () => {
    expect(bubbleSort([-54, -72, -107, -36, -9, -10])).toEqual([-107, -72, -54, -36, -10, -9]);
  });

  test('should return a sorted array of positive and negative numbers', () => {
    expect(bubbleSort([4, -1, 5, -21, 31, 1000, -31])).toEqual([-31, -21, -1, 4, 5, 31, 1000]);
  });

  test('should array if only one element', () => {
    expect(bubbleSort([5])).toEqual([5]);
  });
});

describe('Testing the insertion sorting method', () => {
  test('should return a sorted array of positive values', () => {
    expect(insertionSort([6, 3, 52, 21, 51, 11, 500])).toEqual([3, 6, 11, 21, 51, 52, 500]);
  });

  test('should return a sorted array of negative values', () => {
    expect(insertionSort([-54, -72, -107, -36, -9, -10])).toEqual([-107, -72, -54, -36, -10, -9]);
  });

  test('should return a sorted array of positive and negative numbers', () => {
    expect(insertionSort([4, -1, 5, -21, 31, 1000, -31])).toEqual([-31, -21, -1, 4, 5, 31, 1000]);
  });

  test('should return input if input is a single element', () => {
    expect(insertionSort([5])).toEqual([5]);
  });
});

describe('Testing the selection sort method', () => {
  test('should return a sorted array of positive values', () => {
    expect(selectionSort([6, 3, 52, 21, 51, 11, 500])).toEqual([3, 6, 11, 21, 51, 52, 500]);
  });

  test('should return a sorted array of negative values', () => {
    expect(selectionSort([-54, -72, -107, -36, -9, -10])).toEqual([-107, -72, -54, -36, -10, -9]);
  });

  test('should return a sorted array of positive and negative numbers', () => {
    expect(selectionSort([4, -1, 5, -21, 31, 1000, -31])).toEqual([-31, -21, -1, 4, 5, 31, 1000]);
  });

  test('should array if only one element', () => {
    expect(selectionSort([5])).toEqual([5]);
  });
});
