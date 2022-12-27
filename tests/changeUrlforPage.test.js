import changeUrlforPager from '../utils/changeUrlforPager'

describe('changeUrlforPager', () => {
    global.window = Object.create(window)
    const baseUrl = 'http://blp.dplan.local/app_dev.php/verfahren/abwaegung/view/b068e64b-b3ed-4e5e-9e64-4c893632e528/MI8NFLjRtxs8'

    let url = `${baseUrl}?r_limit=25&page=1`

    let changedUrl = [
        baseUrl,
        'r_limit=25&page=1'
    ]

    Object.defineProperty(window, 'location', {
        value: {
            href: url
        },
        writable: true
    })

    it('should contain "page" and "r_limit" parameters in the returned URL', () => {
        expect(changeUrlforPager({ count: 25, current_page: 1 })).toStrictEqual(changedUrl)
    })

    it('should add "page" parameter to the URL if it is not provided', () => {
        Object.defineProperty(window, 'location', {
            value: {
                href: `${baseUrl}?r_limit=25`
            }
        })
        changedUrl[1] = 'page=1&r_limit=25'

        expect(changeUrlforPager({ count: 25, current_page: 1 })).toStrictEqual(changedUrl)
    })

    it('should add "r_limit" parameter to the URL if it is not provided', () => {
        Object.defineProperty(window, 'location', {
            value: {
                href: `${baseUrl}?page=1`
            }
        })
        changedUrl[1] = 'r_limit=25&page=1'

        expect(changeUrlforPager({ count: 25, current_page: 1 })).toStrictEqual(changedUrl)
    })

    it('should add "page" and "r_limit" parameters to the URL if these parameters are not provided', () => {
        Object.defineProperty(window, 'location', {
            value: {
                href: baseUrl
            }
        })
        changedUrl[1] = 'r_limit=25&page=1'

        expect(changeUrlforPager({ count: 25, current_page: 1 })).toStrictEqual(changedUrl)
    })
})