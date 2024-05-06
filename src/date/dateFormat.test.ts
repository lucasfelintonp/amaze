import { describe, expect, test } from '@jest/globals';
import { DateFormat } from './dateFormat';

describe('DateFormat To Format', () => {
	test('HHmm', () => {
		expect(new DateFormat(900).from('Hmm').to('HH:mm:ss')).toBe(
			"Error trying format. From format: 'Hmm' not available"
		);

		expect(new DateFormat(900).from('HHmm').to('HH:mm')).toBe('09:00');

		expect(new DateFormat(900).from('HHmm').to('HH:mm:ss')).toBe(
			'09:00:00'
		);

		expect(new DateFormat(900).from('HHmm').to('HH:mm a')).toBe('09:00 AM');
		expect(new DateFormat(900).from('HHmm').to('H:mm a')).toBe('9:00 AM');

		expect(new DateFormat(1425).from('HHmm').to('HH:mm:ss')).toBe(
			'14:25:00'
		);
		expect(new DateFormat(1425).from('HHmm').to('HH:mm a')).toBe(
			'14:25 PM'
		);
		expect(new DateFormat(1425).from('HHmm').to("HH'h'mm")).toBe('14h25');

		const testNow = new Date();
		const testDateTime = Date.UTC(
			testNow.getUTCFullYear(),
			testNow.getUTCMonth(),
			testNow.getUTCDate(),
			14,
			25
		);
		expect(new DateFormat(1425).from('HHmm').to('date')).toBe(testDateTime);
	});

	test('dd MMM yyyy', () => {
		expect(
			new DateFormat(1668740400000).from('date').to('dd MMM yyyy')
		).toBe('18 Nov de 2022');
		expect(
			new DateFormat(1668740400000).from('date').to('dd MMM yyyy')
		).toBe('18 Nov of 2022');
	});

	test('dd/MM/yyyy', () => {
		expect(
			new DateFormat('31/12/2000').from('dd/MM/yyyy').to('yyyy-MM-dd')
		).toBe('2000-12-31');
		expect(
			new DateFormat('31/12/2000').from('dd/MM/yyyy').to('HH:mm a')
		).toBe('00:00 AM');
		expect(
			new DateFormat('31/12/2000').from('dd/MM/yyyy').to('dd MM yyyy')
		).toBe('31 12 2000');

		expect(
			new DateFormat('31/12/2000')
				.from('dd/MM/yyyy')
				.to('dd-MM-yyyy HH:mm:ss')
		).toBe('31-12-2000 00:00:00');
		expect(
			new DateFormat('31/12/2000')
				.from('dd/MM/yyyy')
				.to('dd-MM-yyyy HH:mm:ss')
		).toBe('31-12-2000 03:00:00');
		expect(
			new DateFormat('31/12/2000')
				.from('dd/MM/yyyy')
				.to('dd-MM-yyyy HH:mm:ss')
		).toBe('30-12-2000 22:00:00');
		expect(
			new DateFormat('31/12/2000')
				.from('dd/MM/yyyy')
				.to('dd-MM-yyyy HH:mm:ss')
		).toBe('30-12-2000 11:00:00');

		const testDateTime = new Date(2000, 12, 31);
		expect(new DateFormat('31/12/2000').from('dd/MM/yyyy').to('date')).toBe(
			testDateTime
		);
	});

	test('yyyy-MM-dd', () => {
		expect(
			new DateFormat('2000-12-31').from('yyyy-MM-dd').to('yyyy-MM-dd')
		).toBe('2000-12-31');
		expect(
			new DateFormat('2000-12-31').from('yyyy-MM-dd').to('HH:mm a')
		).toBe('00:00 AM');
		expect(
			new DateFormat('2000-12-31').from('yyyy-MM-dd').to('dd MM yyyy')
		).toBe('31 12 2000');

		expect(
			new DateFormat('2000-12-31')
				.from('yyyy-MM-dd')
				.to('dd-MM-yyyy HH:mm:ss')
		).toBe('31-12-2000 00:00:00');
		expect(
			new DateFormat('2000-12-31')
				.from('yyyy-MM-dd')
				.to('dd-MM-yyyy HH:mm:ss')
		).toBe('31-12-2000 03:00:00');
		expect(
			new DateFormat('2000-12-31')
				.from('yyyy-MM-dd')
				.to('dd-MM-yyyy HH:mm:ss')
		).toBe('30-12-2000 22:00:00');
		expect(
			new DateFormat('2000-12-31')
				.from('yyyy-MM-dd')
				.to('dd-MM-yyyy HH:mm:ss')
		).toBe('30-12-2000 11:00:00');

		const testDateTime = new Date(2000, 12, 31);
		expect(new DateFormat('2000-12-31').from('yyyy-MM-dd').to('date')).toBe(
			testDateTime
		);
	});

	test('YYYYMMDD', () => {
		expect(new DateFormat(20201004).from('YYYYMMDD').to('yyyy-MM-dd')).toBe(
			'2020-10-04'
		);
		expect(new DateFormat(20201004).from('YYYYMMDD').to('HH:mm a')).toBe(
			'00:00 AM'
		);
		expect(new DateFormat(20201004).from('YYYYMMDD').to('dd MM yyyy')).toBe(
			'04 10 2020'
		);

		expect(
			new DateFormat(20201004).from('YYYYMMDD').to('dd-MM-yyyy HH:mm:ss')
		).toBe('04-10-2020 00:00:00');
		expect(
			new DateFormat(20201004).from('YYYYMMDD').to('dd-MM-yyyy HH:mm:ss')
		).toBe('04-10-2020 01:00:00');
		expect(
			new DateFormat(20201004).from('YYYYMMDD').to('dd-MM-yyyy HH:mm:ss')
		).toBe('03-10-2020 20:00:00');
		expect(
			new DateFormat(20201004).from('YYYYMMDD').to('dd-MM-yyyy HH:mm:ss')
		).toBe('03-10-2020 11:00:00');

		const testDateTime = new Date(2020, 10, 4);
		expect(new DateFormat(20201004).from('YYYYMMDD').to('date')).toBe(
			testDateTime
		);
	});

	test('unixUTC', () => {
		expect(
			new DateFormat(1318781876).from('unixUTC').to('yyyy-MM-dd')
		).toBe('2011-10-16');
		expect(new DateFormat(1318781876).from('unixUTC').to('HH:mm a')).toBe(
			'16:17 PM'
		);
		expect(
			new DateFormat(1318781876).from('unixUTC').to('dd MM yyyy')
		).toBe('16 10 2011');

		expect(
			new DateFormat(1318781876).from('unixUTC').to('dd-MM-yyyy HH:mm:ss')
		).toBe('16-10-2011 16:17:56');
		expect(
			new DateFormat(1318781876).from('unixUTC').to('dd-MM-yyyy HH:mm:ss')
		).toBe('16-10-2011 18:17:56');
		expect(
			new DateFormat(1318781876).from('unixUTC').to('dd-MM-yyyy HH:mm:ss')
		).toBe('16-10-2011 13:17:56');
		expect(
			new DateFormat(1318781876).from('unixUTC').to('dd-MM-yyyy HH:mm:ss')
		).toBe('16-10-2011 03:17:56');

		const testDateTime = Date.UTC(2011, 10, 16, 16, 17, 56);
		expect(new DateFormat(1318781876).from('unixUTC').to('date')).toBe(
			testDateTime
		);
	});
});

describe('DateFormat From Format DateTime', () => {
	test('dd MMM', () => {
		expect(new DateFormat(1643770800000).from('date').to('dd MMM')).toBe(
			'02 FEV'
		);
		expect(new DateFormat(1643770800000).from('date').to('dd MMM')).toBe(
			'02 FEB'
		);
	});

	test('dd/MM/yy', () => {
		expect(new DateFormat(1643770800000).from('date').to('dd/MM/yy')).toBe(
			'02/02/22'
		);
		expect(new DateFormat(1643770800000).from('date').to('dd/MM/yy')).toBe(
			'02/02/22'
		);
	});
});
