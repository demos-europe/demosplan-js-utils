import { formatDate, toDate } from '../utils/date'
import dayjs from 'dayjs'

describe('date', () => {
    const currentDate = dayjs().format('DD.MM.YYYY')
    let dateFormat
    const date = {
        day: 25,
        firstDay: '0' + 1,
        month: 12,
        time: {
            opt1: '13:15:40.000000',
            opt2: 'T12:15:40.000Z'
        },
        year: 2019
    }
    const dates = {
        date: new Date(`${date.year}-${date.month}-${date.day}${date.time.opt2}`),
        number: 1577276140000,
        string: `${date.year}-${date.month}-${date.day} ${date.time.opt1}`
    }
    const transformedDates = {
        long:  `${date.day}.${date.month}.${date.year}, 13:15 Uhr`,
        short1: `${date.day}.${date.month}.${date.year}`,
        short2: `${date.firstDay}.${date.month}.${date.year}`
    }

    it('sets the short date format as a default value', () => {
        expect(formatDate(dates.string)).toEqual(transformedDates.short1)
        expect(formatDate(dates.number)).toEqual(transformedDates.short1)
        expect(formatDate(dates.date)).toEqual(transformedDates.short1)
    })

    it('sets the long date format if the second parameter "long" is provided', () => {
        expect(formatDate(dates.string, 'long')).toEqual(transformedDates.long)
        expect(formatDate(dates.number, 'long')).toEqual(transformedDates.long)
        expect(formatDate(dates.date, 'long')).toEqual(transformedDates.long)
    })

    it('transforms number to a string using \'DD.MM.YYYY\' format', () => {
        expect(formatDate(dates.number)).toEqual(transformedDates.short1)
    })

    it('sets the \'DD.MM.YYYY\' date format if the provided date type is an instanceof Date', () => {
        expect(formatDate(dates.date)).toEqual(transformedDates.short1)
    })

    it('sets the \'DD.MM.YYYY\' date format if the provided date type is a string', () => {
        expect(formatDate(dates.string)).toEqual(transformedDates.short1)
    })

    it('sets the current date if the provided date type is a null or undefined', () => {
        expect(formatDate(null)).toEqual(currentDate)
        expect(formatDate(undefined)).toEqual(currentDate)
    })

    it('transforms valid ISO 8601 date format types to DD.MM.YYYY format', () => {
        dateFormat = {
            date1: date.year + '-' + date.month + '-' + date.day,
            date2: date.year + '-' + date.month,
            date3: date.year + '/' + date.month
        }

        expect(formatDate(dateFormat.date1)).toEqual(transformedDates.short1)
        expect(formatDate(dateFormat.date2)).toEqual(transformedDates.short2)
        expect(formatDate(dateFormat.date3)).toEqual(transformedDates.short2)
    })

    it('transforms string to a Date', () => {
        expect(toDate(dates.string)).toEqual(dates.date)
    })

    it('transforms number to a Date', () => {
        expect(toDate(dates.number)).toEqual(dates.date)
    })

    it('transforms valid ISO 8601 date format type to a Date', () => {
        dateFormat = {
            date: date.year + '/' + date.month + '/' + date.day + date.time.opt1
        }

        expect(toDate(dateFormat.date)).toEqual(dates.date)
    })
})