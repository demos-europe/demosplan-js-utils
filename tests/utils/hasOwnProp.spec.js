import hasOwnProp from '../../utils/hasOwnProp'

const OGwarn = console.warn

describe.each([
  { obj: null, prop: 'foo', result: false, warn: 0 },
  { obj: undefined, prop: 'foo', result: false, warn: 1 },
  { obj: { test: 'x' }, prop: 'test', result: true, warn: 0 },
  { obj: { foo: 'x' }, prop: 'test', result: false, warn: 0 },
  { obj: [], prop: 'foo', result: false, warn: 0 },
  { obj: 42, prop: 'bar', result: false, warn: 1 }
])('hasOwnProp - a util to shorten Object.prototype.hasOwnPropery', ({ obj, prop, result, warn }) => {
  const warnings = []

  beforeEach(() => {
    console.warn = msg => warnings.push(msg)
  })

  afterEach(() => {
    console.warn = OGwarn
  })

  test(`returns ${result} for testcase with prop ${prop}`, () => {
    expect(hasOwnProp(obj, prop)).toBe(result)
    expect(warnings.length).toEqual(warn)
  })
})
