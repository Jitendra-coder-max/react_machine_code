// actions.js
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_TEXT = 'SET_TEXT';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const setText = (text) => ({ type: SET_TEXT, payload: text });
