# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by incorrectly updating state within the dependency array.

## Bug Description
The `useEffect` hook is designed to perform side effects after a component renders.  However, if the state update within the `useEffect` causes the dependency array to change, it creates an infinite loop.  The component continuously re-renders, leading to performance issues or crashes.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the continuously incrementing counter in the browser console.

## Solution
The solution involves modifying the `useEffect` logic to avoid updating the state based on the current state value.  Often, the correct approach depends on what you intend to do within the `useEffect`. One approach is to only update the state if a condition is met. Another common way to solve is to remove the count from the dependency array when updating count is not necessary.