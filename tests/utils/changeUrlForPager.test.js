import changeUrlforPager from '../../utils/changeUrlforPager'

describe('changeUrlforPager', () => {
  beforeAll(() =>  {
    global.window = Object.create(window);
  })

  test('without previous Values', () => {
    const url = changeUrlforPager({ count: 2, current_page: 1 })

    expect(url[1]).toBe("r_limit=2&page=1")
  })

  test('with previous Values', () => {
    const url = "http://dummy.com?r_limit=2&page=5";
    Object.defineProperty(window, 'location', {
      value: {
        href: url
      }
    })

    const updatedUrl = changeUrlforPager({ count: 3, current_page: 3 })
    expect(updatedUrl[0]).toBe('http://dummy.com')
    expect(updatedUrl[1]).toBe('r_limit=3&page=3')
  })

  test('without previous limit', () => {
    const url = "http://dummy.com?r_limit=2";
    Object.defineProperty(window, 'location', {
      value: {
        href: url
      }
    })

    const updatedUrl = changeUrlforPager({ count: 3, current_page: 3 })
    expect(updatedUrl[0]).toBe('http://dummy.com')
    expect(updatedUrl[1]).toBe('r_limit=3&page=3')
  })

  test('without previous page', () => {
    const url = "http://dummy.com?page=2";
    Object.defineProperty(window, 'location', {
      value: {
        href: url
      }
    })

    const updatedUrl = changeUrlforPager({ count: 3, current_page: 3 })
    expect(updatedUrl[0]).toBe('http://dummy.com')
    expect(updatedUrl[1]).toBe('r_limit=3&page=3')
  })

  test('without previous page', () => {
    const url = "http://dummy.com?page=&r_limit=";
    Object.defineProperty(window, 'location', {
      value: {
        href: url
      }
    })

    const updatedUrl = changeUrlforPager({ count: 3, current_page: 3 })
    expect(updatedUrl[0]).toBe('http://dummy.com')
    expect(updatedUrl[1]).toBe('r_limit=3&page=3')
  })
})
