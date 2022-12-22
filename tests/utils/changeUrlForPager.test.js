import changeUrlforPager from '../../utils/changeUrlforPager'

describe('changeUrlforPager', () => {
  let defineProp
  
  beforeAll(() =>  {
    global.window = Object.create(window)
    defineProp = (url) => Object.defineProperty(window, 'location', {
      value: {
        href: url
      }
    })
  })

  it('should set given values if there are none already set', () => {
    const url = changeUrlforPager({ count: 2, current_page: 1 })

    expect(url[1]).toBe("r_limit=2&page=1")
  })

  it('should overwrite given values if there are values already set', () => {
    const url = "http://dummy.com?r_limit=2&page=5";
    defineProp(url)

    const updatedUrl = changeUrlforPager({ count: 3, current_page: 3 })
    expect(updatedUrl[0]).toBe('http://dummy.com')
    expect(updatedUrl[1]).toBe('r_limit=3&page=3')
  })

  it('should overwrite given limit if that is the only param', () => {
    const url = "http://dummy.com?r_limit=2";
    defineProp(url)

    const updatedUrl = changeUrlforPager({ count: 3, current_page: 3 })
    expect(updatedUrl[0]).toBe('http://dummy.com')
    expect(updatedUrl[1]).toBe('r_limit=3&page=3')
  })

  it('should overwrite given page if that is the only param', () => {
    const url = "http://dummy.com?page=2";
    defineProp(url)

    const updatedUrl = changeUrlforPager({ count: 3, current_page: 3 })
    expect(updatedUrl[0]).toBe('http://dummy.com')
    expect(updatedUrl[1]).toBe('r_limit=3&page=3')
  })

  it('should set params if they are set but undefined', () => {
    const url = "http://dummy.com?page=&r_limit=";
    defineProp(url)

    const updatedUrl = changeUrlforPager({ count: 3, current_page: 3 })
    expect(updatedUrl[0]).toBe('http://dummy.com')
    expect(updatedUrl[1]).toBe('r_limit=3&page=3')
  })

  it('should work even if there are other params or the order is mixed', () => {
    const url = "http://dummy.com?test=tete&page=3&y=2&r_limit=3";
    defineProp(url)

    const updatedUrl = changeUrlforPager({ count: 1, current_page: 1 })
    expect(updatedUrl[0]).toBe('http://dummy.com')
    expect(updatedUrl[1]).toContain('r_limit=1')
    expect(updatedUrl[1]).toContain('page=1')
  })
})
