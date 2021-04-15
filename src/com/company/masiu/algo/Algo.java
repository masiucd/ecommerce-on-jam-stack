package com.company.masiu.algo;

import java.sql.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Algo {

  public String reverseString(String s) {
    String revered = "";

    for (char c : s.toCharArray()) {

      revered = c + revered;
    }
    return revered;
  }

  public int[] bubbleSort(int[] xs) {
    for (int i = 0; i < xs.length; i++) {
      for (int j = 0; j < xs.length - 1; j++) {
        if (xs[j] > xs[j + 1]) {
          int temp = xs[j];
          xs[j] = xs[j + 1];
          xs[j + 1] = temp;
        }
      }
    }
    return xs;
  }

  int factorial(int n) {
    if (n < 2) {
      return n;
    }
    return n * factorial(n - 1);
  }

  int fib(int n) {
    if (n == 2) return 1;
    if (n == 1) return 0;
    return fib(n - 2) + fib(n - 1);
  }

  public int binarySearch(int[] array, int target) {
    int startIndex = 0;
    int endIndex = array.length - 1;

    while (startIndex <= endIndex) {
      int middleIndex = (startIndex + endIndex) / 2;
      if (array[middleIndex] == target) {
        return middleIndex;
      }
      if (target < array[middleIndex]) {
        endIndex = middleIndex - 1;
      }
      if (target > array[middleIndex]) {
        startIndex = middleIndex + 1;
      }
    }
    return -1;
  }

  public String runLengthEncoding(String input) {
    StringBuilder chars = new StringBuilder();
    int count = 1;
    for (int i = 1; i < input.length(); i++) {
      char current = input.charAt(i);
      char prev = input.charAt(i - 1);
      if ((current != prev) || (count == 9)) {
        chars.append(Integer.toString(count));
        chars.append(prev);
        count = 0;
      }
      count += 1;
    }

    chars.append(Integer.toString(count));
    chars.append(input.charAt(input.length() - 1));
    return chars.toString();
  }

  public int[] insertionSort(int[] xs) {
    for (int i = 1; i < xs.length; i++) {
      int j = i;
      while (j > 0 && xs[j] < xs[j - 1]) {
        int temp = xs[j];
        xs[j] = xs[j - 1];
        xs[j - 1] = temp;
        j -= 1;
      }
    }

    return xs;
  }

  public String caesarCipherEncryptor(String input, int key) {

    ArrayList<Character> charList = new ArrayList<>();
    int amountOfChars = 26;
    int newKey = key % amountOfChars;
    for (int i = 0; i < input.length(); i++) {
      charList.add(this.charFn(input.charAt(i), newKey));
    }
    return charList.stream().map(String::valueOf).collect(Collectors.joining());
  }

  private char charFn(char c, int key) {
    int newCharCode = c + key;
    return newCharCode <= 122 ? (char) newCharCode : (char) (96 + (newCharCode % 122));
  }

  private <T> void print(T v) {
    System.out.println(v);
  }

  public int nonConstructibleChange(int[] coins) {
    Arrays.sort(coins);
    int currentChange = 0;

    for (Integer coin : coins) {
      if (coin > currentChange + 1) {
        return currentChange + 1;
      }
      currentChange += coin;
    }
    return currentChange + 1;
  }

  public int[] sortedSquaredArray(int[] array) {
    int[] sortedArray = new int[array.length];
    for (int i = 0; i < array.length; i++) {
      int value = array[i];
      sortedArray[i] = value * value;
    }
    Arrays.sort(sortedArray);
    return sortedArray;
  }

  public int firstDuplicateValue2(int[] array) {
    int minIndex = array.length;

    for (int i = 0; i < array.length; i++) {
      int current = array[i];
      for (int j = i + 1; j < array.length; j++) {
        int toCompareWith = array[j];
        if (current == toCompareWith) {
            minIndex = Math.min(minIndex,j);
        }
      }
    }

    return minIndex == array.length ? -1 : array[minIndex];
  }

  public int firstDuplicateValue(int[] array) {
    HashMap<Integer, Boolean> hasSeenNumber = new HashMap<Integer, Boolean>();

    for (int n : array) {
      if (hasSeenNumber.containsKey(n)) {
        return n;
      }
      hasSeenNumber.put(n, true);
    }
    return -1;
  }
}
