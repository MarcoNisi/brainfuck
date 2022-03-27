import { validateInput, positionAfterCurrentLoop, run } from './lib'

test('validateInput', () => {
  expect(validateInput(']')).toBe(false)
  expect(validateInput('[]')).toBe(true)
  expect(validateInput('[]]')).toBe(false)
  expect(validateInput('[[]')).toBe(false)
  expect(validateInput('[[.]]')).toBe(true)
  expect(validateInput('.[[.]].')).toBe(true)
})

test('positionAfterCurrentLoop', () => {
  expect(positionAfterCurrentLoop('[++]', 0)).toBe(4)
  expect(positionAfterCurrentLoop('[+[]+]', 2)).toBe(4)
  expect(positionAfterCurrentLoop('', 1)).toBe(undefined)
})

test('run', () => {
  expect(run('++ > +++++ [ <+ >- ] ++++ ++++ [ < +++ +++ >- ] <.')).toEqual('7')
  expect(run('++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++.<br>.+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.')).toEqual('Hello World!')
})