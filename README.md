# Reasonable DateTime

Immutable distinct Date, Time and DateTime objects for JS/TS.

> **Warning** wip!


## Documentation as tests

```txt
bun test v0.6.7 (59d7c47e)

test/iso-date.test.ts:
✓ new ISODate("2023-07-17") > returns a new instance of ISODate from an ISO date string [0.14ms]
✓ new ISODate(1689552000000) > returns a new instance of ISODate from an epoch (milliseconds) [0.02ms]
✓ new ISODate("2023-07-32") > throws InvalidDateError when date is invalid [0.08ms]
✓ [getter] date.year > returns the year [0.01ms]
✓ [getter] date.month > returns the index for the month > January is 0 [0.02ms]
✓ [getter] date.month > returns the index for the month > December is 11 [0.01ms]
✓ [getter] date.day > returns the day of the month [0.01ms]
✓ [getter] date.weekday > returns the index for the weekday > Sunday is 0 [0.01ms]
✓ [getter] date.weekday > returns the index for the weekday > Saturday is 6
✓ date.setYear(2024) > returns a new instance with the updated year [0.02ms]
✓ date.setMonth(0) > [WARNING] weird behavior from `Date.UTC` > settings month 12 to year 2023 results in Jan 2024 [0.02ms]
✓ date.setMonth(0) > [WARNING] weird behavior from `Date.UTC` > settings month 13 to year 2023 results in Feb 2024
✓ date.setMonth(0) > returns a new instance with the updated year [0.01ms]
✓ date.setDay(13) > [WARNING] weird behavior from `Date.UTC` > setting day `32` to Mar results in Apr 1st [0.02ms]
✓ date.setDay(13) > [WARNING] weird behavior from `Date.UTC` > setting day `34` to Apr results in May 4th
✓ date.setDay(13) > [WARNING] weird behavior from `Date.UTC` > setting day `32` to Dec 2023 results in Jan 1st 2024
✓ date.setDay(13) > returns a new instance with the updated year [0.01ms]
✓ date.toISOString() > it returns the date as a string in ISO format > e.g: "2023-07-17" [0.12ms]
✓ date.toJSON() > same as ISODate.prototype.toISOString [0.02ms]
✓ date.toString() > same as ISODate.prototype.toISOString [0.01ms]
✓ date.toLocaleString(locale?, options?) > return the date as a string formated for a given locale > same as Date.prototype.toLocaleDateString(locale?, options?) [8.74ms]
✓ date.valueOf() > returns the epoch (milliseconds since Jan 1th 1970 UTC) [0.02ms]

 22 pass
 0 fail
 36 expect() calls
Ran 22 tests across 1 files. 22 total [16.00ms]
```
