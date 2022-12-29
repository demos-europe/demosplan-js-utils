import { formatDate } from '../utils/date'
import dayjs from 'dayjs'

describe('formatDate', () => {
    const date = {
        day: 25,
        month: 12,
        year: 2019,
        time: '13:15:40.000000',
        firstDay: '0' + 1
    }

    const dates = {
        string: `${date.year}-${date.month}-${date.day} ${date.time}`,
        number: 1577276140000,
        date: `${date.year}-${date.month}-${date.day}T12:15:40.000Z`,
    }

    const transformedDates = {
        short1: `${date.day}.${date.month}.${date.year}`,
        short2: `${date.firstDay}.${date.month}.${date.year}`,
        long:  `${date.day}.${date.month}.${date.year}, 13:15 Uhr`
    }

    const currentDate = dayjs().format('DD.MM.YYYY')

    it('sets the short date format as a default value', () => {
        expect(formatDate(dates.string)).toMatch(transformedDates.short1)
        expect(formatDate(dates.number)).toMatch(transformedDates.short1)
        expect(formatDate(dates.date)).toMatch(transformedDates.short1)
    })

    it('sets the long date format if the "long" parameter is provided', () => {
        expect(formatDate(dates.string, 'long')).toMatch(transformedDates.long)
        expect(formatDate(dates.number, 'long')).toMatch(transformedDates.long)
        expect(formatDate(dates.date, 'long')).toMatch(transformedDates.long)
    })

    it('transforms number to a string using \'DD.MM.YYYY\' format', () => {
        expect(formatDate(dates.number)).toMatch(transformedDates.short1)
    })

    it('sets the \'DD.MM.YYYY\' date format if the provided date type is an instanceof date', () => {
        expect(formatDate(dates.date)).toMatch(transformedDates.short1)
    })

    it('sets the \'DD.MM.YYYY\' date format if the provided date type is a string', () => {
        expect(formatDate(dates.string)).toMatch(transformedDates.short1)
    })

    it('sets the current date if the provided date type is a null or undefined', () => {
        expect(formatDate(null)).toMatch(currentDate)
        expect(formatDate(undefined)).toMatch(currentDate)
    })

    it('transforms valid ISO 8601 date format types to DD.MM.YYYY format', () => {
        const dateISOFormat = {
            date1: date.year + '-' + date.month + '-' + date.day,
            date2: date.year + '-' + date.month,
            date3: date.year + '/' + date.month
        }

        expect(formatDate(dateISOFormat.date1)).toEqual(transformedDates.short1)
        expect(formatDate(dateISOFormat.date2)).toEqual(transformedDates.short2)
        expect(formatDate(dateISOFormat.date3)).toEqual(transformedDates.short2)
    })
})