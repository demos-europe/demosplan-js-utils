import changeUrlforPager from '../../utils/changeUrlforPager'

describe('changeUrlforPager', () => {
  beforeAll(() =>  {
    global.window = Object.create(window);
  })

  it('should set given values if there are none already set', () => {
    const url = changeUrlforPager({ count: 2, current_page: 1 })

    expect(url[1]).toBe("r_limit=2&page=1")
  })

  it('should overwrite givven Values if there are values already set', () => {
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

  it('should overwrite given limit if that is the only param', () => {
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

  it('should overwrite givven pge if that is the only param', () => {
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

  it('should set params if they are set but undefined', () => {
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

  it('should work even if there are other params otr the order ist mixed', () => {
    const url = "http://dummy.com?test=tete&page=3&y=2&r_limit=3";
    Object.defineProperty(window, 'location', {
      value: {
        href: url
      }
    })

    const updatedUrl = changeUrlforPager({ count: 1, current_page: 1 })
    expect(updatedUrl[0]).toBe('http://dummy.com')
    expect(updatedUrl[1]).toContain('r_limit=1')
    expect(updatedUrl[1]).toContain('page=1')
  })
})
