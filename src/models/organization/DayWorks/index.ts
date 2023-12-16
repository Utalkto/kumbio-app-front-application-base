export interface IDayWorks {
	day: DayWorksType;
	startHour: Date;
	endHour: Date;
	active: boolean;
}

export type DayWorksType =
	| 'MONDAY'
	| 'TUESDAY'
	| 'WEDNESDAY'
	| 'THURSDAY'
	| 'FRIDAY'
	| 'SATURDAY'
	| 'SUNDAY';
