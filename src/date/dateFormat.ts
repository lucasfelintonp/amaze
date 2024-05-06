import { MONTHS } from './months.const';

export class DateFormat {
	valueDt: Date;
	valueStr: string;
	private _fromFormat: string = '';
	private _toFormat: string = '';

	constructor(value: Date | string | number) {
		this.valueDt = value as Date;
		this.valueStr = value.toString();

		this._addPattern();
	}

	private _addPattern(): DateFormat {
		return this;
	}

	from(value: string): DateFormat {
		this._fromFormat = value;
		return this._addPattern();
	}

	private _toMinChars(value: number, minChar: number): string {
		let val = '000'.repeat(minChar) + value;
		val = val.substring(val.length - minChar, val.length);
		return val;
	}

	private _formatter(date: Date): string | Date {
		const dd: string = this._toMinChars(date.getDay(), 2);

		const MM: string = this._toMinChars(date.getMonth() + 1, 2);
		const MMM: string = this._toMinChars(MONTHS[date.getMonth()], 2);

		const yyyy: string = this._toMinChars(date.getFullYear(), 4);
		const yy: string = this._toMinChars(parseInt(yyyy), 2);

		const HH = this._toMinChars(date.getHours(), 2);
		const mm = this._toMinChars(date.getMinutes(), 2);

		const ss = this._toMinChars(date.getSeconds(), 2);

		switch (this._toFormat) {
			case 'minutes':
				return date.getMinutes().toString();

			case 'yyyy-MM-ddTHH:mm:ss.SZ':
			case 'isoString':
				return this.valueDt.toISOString();

			case 'dd MMM yyyy':
				return `${dd} ${MMM} ${yyyy}`;

			case 'dd MMM yy':
				return `${dd} ${MMM} ${yy}`;

			case 'dd MMM':
				return `${dd} ${MMM}`;

			case 'dd/MM/yyyy':
				return `${dd}/${MM}/${yyyy}`;

			case 'yyyy-MM-dd':
				return `${yyyy}-${MM}-${dd}`;

			case 'HHmm':
				return `${HH}${mm}`;

			case 'HH:mm:ss':
				return `${HH}:${mm}:${ss}`;

			default:
				return date;
		}
	}

	private _createDate(
		year: number,
		month: number,
		day: number,
		hours: number,
		minutes: number,
		seconds: number,
		miliseconds: number,
		timezone: string
	): Date {
		let yyyy = this._toMinChars(year, 4);

		let MM = this._toMinChars(month + 1, 2);

		let dd = this._toMinChars(day, 2);

		let HH = this._toMinChars(hours, 2);

		let mm = this._toMinChars(minutes, 2);

		let ss = this._toMinChars(seconds, 2);

		let ms = this._toMinChars(miliseconds, 3);

		let tz = timezone;

		console.log(`${yyyy}-${MM}-${dd}T${HH}:${mm}:${ss}.${ms}-${tz}`);

		return new Date(`${yyyy}-${MM}-${dd}T${HH}:${mm}:${ss}.${ms}-${tz}`);
	}

	to(value: string): string | Date {
		this._toFormat = value;

		switch (this._fromFormat) {
			case 'date':
				return this._formatter(this.valueDt);

			case 'HHmm': {
				const now = new Date();

				const dt = this._createDate(
					now.getFullYear(),
					now.getMonth(),
					now.getDate(),
					parseInt(
						this.valueStr.substring(
							this.valueStr.length - 4,
							this.valueStr.length - 2
						)
					),
					parseInt(
						this.valueStr.substring(
							this.valueStr.length - 2,
							this.valueStr.length
						)
					),
					0,
					0,
					'00:00'
				);

				return this._formatter(dt);
			}

			case 'dd/MM/yyyy': {
				const dtSplitted = this.valueStr.split('/');
				const originalValueToDateUTC = Date.UTC(
					parseInt(dtSplitted[2]),
					parseInt(dtSplitted[1]),
					parseInt(dtSplitted[0]),
					0,
					0,
					0
				);

				return this._formatter(new Date(originalValueToDateUTC));
			}
			case 'yyyy-MM-dd': {
				const dtSplitted = this.valueStr.split('-');
				const originalValueToDateUTC = Date.UTC(
					parseInt(dtSplitted[0]),
					parseInt(dtSplitted[1]),
					parseInt(dtSplitted[2]),
					0,
					0,
					0
				);

				return this._formatter(new Date(originalValueToDateUTC));
			}

			case 'YYYYMMDD':
			case 'yyyyMMdd': {
				const originalValueToDateUTC = Date.UTC(
					parseInt(this.valueStr.substring(0, 4)),
					parseInt(this.valueStr.substring(4, 6)),
					parseInt(this.valueStr.substring(6, 8)),
					0,
					0,
					0
				);

				return this._formatter(new Date(originalValueToDateUTC));
			}

			case 'dd/MM/yy': {
				const dtSplitted = this.valueStr.split('/');
				const originalValueToDateUTC = Date.UTC(
					parseInt('20' + dtSplitted[2]),
					parseInt(dtSplitted[1]),
					parseInt(dtSplitted[0]),
					0,
					0,
					0
				);

				return this._formatter(new Date(originalValueToDateUTC));
			}

			default:
				return `Error trying format. From format: '${this._fromFormat}' not available`;
		}
	}
}
