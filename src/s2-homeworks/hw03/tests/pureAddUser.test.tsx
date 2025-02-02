import React from 'react'
import {pureAddUser} from '../GreetingContainer'

let name: string
let addedName: string | null;

const setName: React.Dispatch<React.SetStateAction<string>> = (n) => {
    name = typeof n === 'function' ? n(name) : n;
};
let error: string
const setError: React.Dispatch<React.SetStateAction<string>> = (e) => {
    error = typeof e === 'function' ? e(error) : e;
};
let added: boolean
const addUserCallback = (newUser: string) => {
    added = true;
    addedName = newUser;
};

beforeEach(() => {
    name = ''
    error = ''
    added = false
    addedName = null
})

test('name 1', () => {
    name = '1'
    pureAddUser(name, setError, setName, addUserCallback)
    expect(name).toBe('')
    expect(error).toBe('')
    expect(added).toBe(true)
})
test('name 2', () => {
    name = ''
    pureAddUser(name, setError, setName, addUserCallback)
    expect(name).toBe('')
    expect(error).toBe('Ошибка! Введите имя!')
    expect(added).toBe(false)
})
test('name 3', () => {
    name = '    '
    pureAddUser(name, setError, setName, addUserCallback)
    expect(name).toBe('    ')
    expect(error).toBe('Ошибка! Введите имя!')
    expect(added).toBe(false)
})
