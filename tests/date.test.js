import { formatDate } from "../utils/date"
import dayjs from "dayjs"

describe('formatDate function', () => {
    it('sets the short date format as a default value', () => {
        expect(formatDate('2019-09-25 13:15:40.000000')).toMatch('25.09.2019')
    })

    it('sets the long date format if the "long" parameter is provided', () => {
        expect(formatDate('2019-09-25 13:15:40.000000', 'long')).toMatch('25.09.2019, 13:15 Uhr')
    })

    it('transforms number to a string using \'DD.MM.YYYY\' format', () => {
        expect(formatDate(1569369600000)).toMatch('25.09.2019')
    })

    it('transforms number to a string using a long \'DD.MM.YYYY, HH:mm [Uhr]\' format ', () => {
        expect(formatDate(1569410140000, 'long')).toMatch('25.09.2019, 13:15 Uhr')
    })

    it('sets the current date if the provided date is a null or undefined', () => {
        const currentDate = dayjs().format('DD.MM.YYYY')

        expect(formatDate(null)).toMatch(currentDate)
        expect(formatDate(undefined)).toMatch(currentDate)
    })
})