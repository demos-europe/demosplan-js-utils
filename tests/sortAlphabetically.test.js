import sortAlphabetically from '../utils/sortAlphabetically'

describe('sortAlphabetically function', () => {
    const filteredUsersByFirstName =  [
        { id: 1031, firstName: 'Daniel', lastName: 'Ostermann' },
        { id: 1035, firstName: 'Katharina', lastName: 'Maier' },
        { id: 1067, firstName: 'Torsten', lastName: 'Wulf' }
    ]
    const mockArrayOfString = [ 'copySpec', 'email2', 'showlist', 'allowedRoleIds' ]
    const mockUsers = [
        { id: 1067, firstName: 'Torsten', lastName: 'Wulf' },
        { id: 1035, firstName: 'Katharina', lastName: 'Maier' },
        { id: 1031, firstName: 'Daniel', lastName: 'Ostermann' }
    ]


    it('returns an unchanged array if an object does not contain the given property', () => {
        expect(sortAlphabetically(mockUsers, 'phone')).toEqual(mockUsers)
    })

    it('sorts an object by the property "firstName" in alphabetical order', () => {
        expect(sortAlphabetically(mockUsers, 'firstName')).toEqual(filteredUsersByFirstName)
    })

    it('sorts an object in alphabetical order by default', () => {
        expect(sortAlphabetically(mockUsers, 'firstName')).toEqual(filteredUsersByFirstName)
    })

    it('sorts an object by the property "firstName" in reverse alphabetical order when "desc" parameter is provided', () => {
        const filteredUsersReverse =  [
            { id: 1067, firstName: 'Torsten', lastName: 'Wulf' },
            { id: 1035, firstName: 'Katharina', lastName: 'Maier' },
            { id: 1031, firstName: 'Daniel', lastName: 'Ostermann' }
        ]

        expect(sortAlphabetically(mockUsers, 'firstName', 'desc')).toEqual(filteredUsersReverse)
    })

    it('sorts an array of string in alphabetical order by default', () => {
        const sortedArrayOfString = mockArrayOfString.sort()

        expect(sortAlphabetically(mockArrayOfString, '')).toEqual(sortedArrayOfString)
    })

    it('sorts an array of string in alphabetical order', () => {
        const sortedArrayOfString = mockArrayOfString.sort()

        expect(sortAlphabetically(mockArrayOfString, '', 'asc')).toEqual(sortedArrayOfString)
    })

    it('sorts an array of string in reverse alphabetical order', () => {
        const sortedArrayOfString = mockArrayOfString.sort().reverse()

        expect(sortAlphabetically(mockArrayOfString, '', 'desc')).toEqual(sortedArrayOfString)
    })
})