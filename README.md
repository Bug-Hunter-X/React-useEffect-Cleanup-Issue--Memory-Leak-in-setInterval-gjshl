# React useEffect Cleanup Issue: Memory Leak in setInterval

This repository demonstrates a common error in React's `useEffect` hook where improper cleanup of an interval leads to a memory leak.  The counter continues to increment even after the component is unmounted.

## Bug
The `bug.js` file contains the buggy code.  The `setInterval` function isn't properly cleared in the cleanup function, causing the interval to persist even after the component unmounts.

## Solution
The `bugSolution.js` file shows the corrected code. The cleanup function now correctly uses `clearInterval` to stop the interval when the component is unmounted, fixing the memory leak.