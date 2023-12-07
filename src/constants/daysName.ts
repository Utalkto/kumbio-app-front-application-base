type DAYSNAME =
	| 'MONDAY'
	| 'TUESDAY'
	| 'WEDNESDAY'
	| 'THURSDAY'
	| 'FRIDAY'
	| 'SATURDAY'
	| 'SUNDAY';

export interface IDAYS_NAME {
	Monday: DAYSNAME;
	Tuesday: DAYSNAME;
	Wednesday: DAYSNAME;
	Thursday: DAYSNAME;
	Friday: DAYSNAME;
	Saturday: DAYSNAME;
	Sunday: DAYSNAME;
}

export const DAYS_NAME: IDAYS_NAME = {
	Monday: 'MONDAY',
	Tuesday: 'TUESDAY',
	Wednesday: 'WEDNESDAY',
	Thursday: 'THURSDAY',
	Friday: 'FRIDAY',
	Saturday: 'SATURDAY',
	Sunday: 'SUNDAY',
};

// Array of days in spanish
export const DAYS_NAME_ARRAY: DAYSNAME[] = [
	DAYS_NAME.Monday,
	DAYS_NAME.Tuesday,
	DAYS_NAME.Wednesday,
	DAYS_NAME.Thursday,
	DAYS_NAME.Friday,
	DAYS_NAME.Saturday,
	DAYS_NAME.Sunday,
];
