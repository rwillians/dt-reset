import { EpochMilliseconds, ISODateString } from './types'
import { InvalidDateError } from './errors'

/**
 * Manipulate dates and dates only! No time and no timezones.
 */
export class ISODate {
  #date: Date;

  constructor(value: ISODateString | EpochMilliseconds) {
    // just for parsing
    const date = new Date(value);

    if (isNaN(date.valueOf())) {
      throw new InvalidDateError(`invalid date \`${value}\``);
    }

    const epoch = Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate()
    );

    this.#date = new Date(epoch);
  }

  /**
   * Get the year.
   *
   * Same as `Date.prototype.getUTCFullYear`.
   */
  get year() {
    return this.#date.getUTCFullYear();
  }

  /**
   * Get the index for the month.
   *
   * Same as `Date.prototype.getUTCMonth`.
   */
  get month() {
    return this.#date.getUTCMonth();
  }

  /**
   * Get the day of the month.
   *
   * Same as `Date.prototype.getUTCDate`.
   */
  get day() {
    return this.#date.getUTCDate();
  }

  /**
   * Get the index for day of the week.
   *
   *    Sunday is `0`
   *    Saturday is `6`
   *
   * Same as `Date.prototype.getUTCDay`.
   */
  get weekday() {
    return this.#date.getUTCDay();
  }

  /**
   * Returns a new instance with the updated year.
   */
  setYear(year: number) {
    const epoch = Date.UTC(year, this.month, this.day)

    return new ISODate(epoch);
  }

  /**
   * Returns a new instance with the updated month.
   *
   *    Warning!
   *    This funciton uses `Date.UTC` which contains a weird behavior. For
   *    example, if you pass monthIndex as `12` (December is 11), then instead
   *    of failing the function will increase 1 year then set the month as
   *    `monthIndex - 11`. In this example, the month will be set to January.
   *
   */
  setMonth(monthIndex: number) {
    const epoch = Date.UTC(this.year, monthIndex, this.day);

    return new ISODate(epoch);
  }

  /**
   * Returns a new instance with the updated day.
   *
   *    Warning!
   *    This funciton uses `Date.UTC` which contains a weird behavior. For
   *    example, if you pass day `32` to January (max 31 days in January),
   *    the month will be increased to Feburary and the day set to 1st. And if
   *    you set day 32 to December 2023, for example, the year would be bumped
   *    to 2024 with January as month and day set to 1st.
   *
   */
  setDay(day: number) {
    const epoch = Date.UTC(this.year, this.month, day);

    return new ISODate(epoch);
  }

  /**
   * Returns the date as a formatted string according to `locale` and `options`
   * provided.
   *
   * Same as `Date.prototype.toLocaleDateString(localed?, options?)`.
   */
  toLocaleString(
    locale?: string | string[] | undefined,
    options?: Intl.DateTimeFormatOptions | undefined
  ) {
    return this.#date.toLocaleDateString(locale, options);
  }

  /**
   * Returns the date as a string value in ISO format.
   */
  toISOString() {
    const year = this.year;
    const month = (this.month + 1).toString().padStart(2, '0');
    const day = this.day.toString().padStart(2, '0');

    return `${year}-${month}-${day}`
  }

  toString = this.toISOString;
  toJSON = this.toISOString;

  /**
   * Returns the stored time value in milliseconds since midnight,
   * January 1, 1970 UTC.
   *
   * Same as `Date.prototype.valueOf`.
   */
  valueOf () {
    return this.#date.valueOf();
  }
}
