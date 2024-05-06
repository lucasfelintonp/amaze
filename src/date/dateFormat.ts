import { MONTHS } from './months.const';

export class DateFormat {
	valueDt: Date;
	valueStr: string;
	private _fromFormat: string = '';
	private _toFormat: string = '';
	private _this = this;

	constructor(value: Date | string) {
		this.valueDt = value as Date;
		this.valueStr = value as string;

		this._addPattern();
	}

	private _addPattern(): DateFormat {
		return this._this;
	}

	from(value: string): DateFormat {
		this._fromFormat = value;
		return this._addPattern();
	}

	private _toDefaultFormat(date: Date): string | Date {
		const dd: number = date.getDay();

		const MM: number = date.getMonth() + 1;
		const MMM: string = MONTHS[date.getMonth()];

		const yyyy: number = date.getFullYear();
		const yy: string = yyyy.toString().substring(2, 4);

		const HH = date.getHours();
		const mm = date.getMinutes();

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

			default:
				return date;
		}
	}

	to(value: string): string | Date {
		this._toFormat = value;

		switch (this._fromFormat) {
			case 'date':
				return this._toDefaultFormat(this.valueDt);

			case 'HHmm': {
				const now = new Date();

				const originalValueToDateUTC = Date.UTC(
					now.getFullYear(),
					now.getUTCMonth(),
					now.getUTCDate(),
					parseInt(this.valueStr.substring(0, 2)),
					parseInt(this.valueStr.substring(2, 4)),
					0
				);

				return this._toDefaultFormat(new Date(originalValueToDateUTC));
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

				return this._toDefaultFormat(new Date(originalValueToDateUTC));
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

				return this._toDefaultFormat(new Date(originalValueToDateUTC));
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

				return this._toDefaultFormat(new Date(originalValueToDateUTC));
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

				return this._toDefaultFormat(new Date(originalValueToDateUTC));
			}

			default:
				return `Error trying format. From format: '${this._fromFormat}' not available`;
		}
	}
}
