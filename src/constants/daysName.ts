export type DAYSNAME =
	| 'Lunes'
	| 'Martes'
	| 'Miércoles'
	| 'Jueves'
	| 'Viernes'
	| 'Sábado'
	| 'Domingo';

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
	Monday: 'Lunes',
	Tuesday: 'Martes',
	Wednesday: 'Miércoles',
	Thursday: 'Jueves',
	Friday: 'Viernes',
	Saturday: 'Sábado',
	Sunday: 'Domingo',
};

// Array of days in spanish
export const DAYS_NAME_ARRAY: DAYSNAME[] = [
	'Lunes',
	'Martes',
	'Miércoles',
	'Jueves',
	'Viernes',
	'Sábado',
	'Domingo',
];
