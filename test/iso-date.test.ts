import { describe, expect, it } from 'bun:test';
import { InvalidDateError, ISODate } from '../src/';


describe('new ISODate("2023-07-17")', () => {
  it('returns a new instance of ISODate from an ISO date string', () => {
    const date = new ISODate('2023-07-17');

    expect(date).toBeInstanceOf(ISODate);
    expect(date.valueOf()).toBe(1689552000000);
  })
})

describe('new ISODate(1689552000000)', () => {
  it('returns a new instance of ISODate from an epoch (milliseconds)', () => {
    const date = new ISODate(1689552000000)

    expect(date).toBeInstanceOf(ISODate);
    expect(date.valueOf()).toBe(1689552000000);
  })
})

describe('new ISODate("2023-07-32")', () => {
  it('throws InvalidDateError when date is invalid', () => {
    expect(() => new ISODate('2023-07-32')).toThrow(InvalidDateError);
  })
})

describe('[getter] date.year', () => {
  it('returns the year', () => {
    const date = new ISODate('2023-07-17');

    expect(date.year).toBe(2023);
  })
})

describe('[getter] date.month', () => {
  describe('returns the index for the month', () => {
    it('January is 0', () => {
      const date = new ISODate('2023-01-17');

      expect(date.month).toBe(0);
    })

    it('December is 11', () => {
      const date = new ISODate('2023-12-17');

      expect(date.month).toBe(11);
    })
  })
})

describe('[getter] date.day', () => {
  it('returns the day of the month', () => {
    const date = new ISODate('2023-07-17');

    expect(date.day).toBe(17);
  })
})

describe('[getter] date.weekday', () => {
  describe('returns the index for the weekday', () => {
    it('Sunday is 0', () => {
      const date = new ISODate('2023-07-16');

      expect(date.weekday).toBe(0);
    })

    it('Saturday is 6', () => {
      const date = new ISODate('2023-07-15');

      expect(date.weekday).toBe(6);
    })
  })
})

describe('date.setYear(2024)', () => {
  it('returns a new instance with the updated year', () => {
    const a = new ISODate('2023-07-17');
    const b = a.setYear(2024);
    const c = b.setYear(2025);

    expect(a.year).toBe(2023);
    expect(b.year).toBe(2024);
    expect(c.year).toBe(2025);
  })
})

describe('date.setMonth(0)', () => {
  it('returns a new instance with the updated year', () => {
    const a = new ISODate('2023-07-17');
    const b = a.setMonth(0);
    const c = b.setMonth(11);

    expect(a.month).toBe(6);
    expect(b.month).toBe(0);
    expect(c.month).toBe(11);
  })

  describe('[WARNING] weird behavior from `Date.UTC`', () => {
    it('settings month 12 to year 2023 results in Jan 2024', () => {
      const a = new ISODate('2023-07-17');
      const b = a.setMonth(12);

      expect(b.year).toBe(2024);
      expect(b.month).toBe(0);
    })

    it('settings month 13 to year 2023 results in Feb 2024', () => {
      const a = new ISODate('2023-07-17');
      const b = a.setMonth(13);

      expect(b.year).toBe(2024);
      expect(b.month).toBe(1);
    })
  })
})

describe('date.setDay(13)', () => {
  it('returns a new instance with the updated year', () => {
    const a = new ISODate('2023-07-17');
    const b = a.setDay(13);
    const c = b.setDay(31);

    expect(a.day).toBe(17);
    expect(b.day).toBe(13);
    expect(c.day).toBe(31);
  })

  describe('[WARNING] weird behavior from `Date.UTC`', () => {
    it('setting day `32` to Mar results in Apr 1st', () => {
      const a = new ISODate('2023-03-01');
      const b = a.setDay(32);

      expect(b.month).toBe(3);
      expect(b.day).toBe(1)
    })

    it('setting day `34` to Apr results in May 4th', () => {
      const a = new ISODate('2023-04-01');
      const b = a.setDay(34);

      expect(b.month).toBe(4);
      expect(b.day).toBe(4)
    })

    it('setting day `32` to Dec 2023 results in Jan 1st 2024', () => {
      const a = new ISODate('2023-12-01');
      const b = a.setDay(32);

      expect(b.year).toBe(2024);
      expect(b.month).toBe(0);
      expect(b.day).toBe(1)
    })
  })
})

describe('date.toISOString()', () => {
  describe('it returns the date as a string in ISO format', () => {
    it('e.g: "2023-07-17"', () => {
      const date = new ISODate('2023-07-17');

      expect(date.toISOString()).toBe('2023-07-17');
    })
  })
})

describe('date.toJSON()', () => {
  it('same as ISODate.prototype.toISOString', () => {
    const date = new ISODate('2023-07-17');

    expect(date.toJSON()).toBe('2023-07-17');
  })
})

describe('date.toString()', () => {
  it('same as ISODate.prototype.toISOString', () => {
    const date = new ISODate('2023-07-17');

    expect(date.toString()).toBe('2023-07-17');
  })
})

describe('date.toLocaleString(locale?, options?)', () => {
  describe('return the date as a string formated for a given locale', () => {
    it('same as Date.prototype.toLocaleDateString(locale?, options?)', () => {
      const a = (new ISODate("2023-07-17")).toLocaleString('pt-BR');
      const b = (new Date(Date.UTC(2023, 6, 17))).toLocaleDateString('pt-BR')

      expect(a).toBe(b);
    })
  })
})

describe('date.valueOf()', () => {
  it('returns the epoch (milliseconds since Jan 1th 1970 UTC)', () => {
    const date = new ISODate('2023-07-17');

    expect(date.valueOf()).toBe(1689552000000);
  })
})
