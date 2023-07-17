export type Year = `${number}`;
export type Month = `${number}${number}`;
export type Day = `${number}${number}`;
export type Hours = `${number}${number}`;
export type Minutes = `${number}${number}`;
export type Seconds = `${number}${number}`;
export type Milliseconds = `${number}${number}${number}`;

export type EpochMilliseconds = number;
export type Offset = `+${Hours}:${Minutes}` | `-${Hours}:${Minutes}` | "Z"

export type ISODateString = `${Year}-${Month}-${Day}`;
export type ISOTimeString = `${Hours}:${Minutes}:${Seconds}.${Milliseconds}` | `${Hours}:${Minutes}:${Seconds}`;
export type ISODateTimeString = `${ISODateString}T${ISOTimeString}${Offset}`
