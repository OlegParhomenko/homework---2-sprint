import React, {SetStateAction} from 'react'
import {pureOnBlur} from '../GreetingContainer'
import {UserType} from "../HW3";

let name: string
let error: string
const setError: React.Dispatch<React.SetStateAction<string>> = (newError) => {
    if (typeof newError === 'function') {
        error = newError(error); // если передали функцию, вызываем её с текущим значением error
    } else {
        error = newError; // если передали строку, просто присваиваем
    }
};
beforeEach(() => {
    name = ''
    error = ''
})

test('name 1', () => {
    name = '1'
    pureOnBlur(name, setError)
    expect(error).toBe('')
})
test('name 2', () => {
    name = ''
    pureOnBlur(name, setError)
    expect(error).toBe('Ошибка! Введите имя!')
})
test('name 3', () => {
    name = '    '
    pureOnBlur(name, setError)
    expect(error).toBe('Ошибка! Введите имя!')
})
