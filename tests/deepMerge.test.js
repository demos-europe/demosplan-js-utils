import deepMerge from '../utils/deepMerge'

let source = {
    hideDefaultLayer: true,
    procedureExtent: false,
    controls: [],
    autoSuggest: {}
}

let target = {
    hideDefaultLayer: false,
    procedureExtent: false,
    controls: ['contr1', 'contr2'],
    autoSuggest: {
        enabled: true,
        serviceUrlPath: 'test-path1'
    }
}

let mergedTarget

describe.each([
    { wrongType: 'test' },
    { wrongType: 1234 },
    { wrongType: Array },
    { wrongType: null },
    { wrongType: undefined },
    { wrongType: true }
]) ('checks an incorrect data type', ({ wrongType }) => {
    it(`returns a second parameter "source" back when the target has a ${wrongType} type`, () => {
        expect(deepMerge(wrongType, source)).toBe(source)
    })

    it(`returns a second parameter "source" back when it has a ${wrongType} type`, () => {
        expect(deepMerge(target, wrongType)).toBe(wrongType)
    })
})

describe('deepMerge', () => {
    it('merges properties of two objects (changes a value of the hideDefaultLayer property to true)', () => {
        mergedTarget = {
            hideDefaultLayer: true,
            procedureExtent: false,
            controls: ['contr1', 'contr2'],
            autoSuggest: {
                enabled: true,
                serviceUrlPath: 'test-path1'
            }
        }

        expect(deepMerge(target, source)).toBe(mergedTarget)
    })

    it('merges properties of two objects (merges controls arrays inside an Object)', () => {
        target = {
            hideDefaultLayer: false,
            procedureExtent: false,
            controls: ['contr1', 'contr2'],
            autoSuggest: {
                enabled: true,
                serviceUrlPath: 'test-path1'
            }
        }

        source = {
            controls: ['contr3']
        }

        mergedTarget = {
            hideDefaultLayer: false,
            procedureExtent: false,
            controls: ['contr1', 'contr2', 'contr3'],
            autoSuggest: {
                enabled: true,
                serviceUrlPath: 'test-path1'
            }
        }

        expect(deepMerge(target, source)).toBe(mergedTarget)
    })

    it('merges properties of two objects (merges autoSuggest objects inside an Object)', () => {
        target = {
            hideDefaultLayer: false,
            procedureExtent: false,
            controls: ['contr1', 'contr2'],
            autoSuggest: {
                enabled: true,
                serviceUrlPath: 'test-path1'
            }
        }

        source = {
            autoSuggest: {
                enabled: false,
                serviceUrlPath: 'test-path2'
            }
        }

        mergedTarget = {
            hideDefaultLayer: false,
            procedureExtent: false,
            controls: ['contr1', 'contr2'],
            autoSuggest: {
                enabled: false,
                serviceUrlPath: 'test-path2'
            }
        }

        expect(deepMerge(target, source)).toBe(mergedTarget)
    })
})

