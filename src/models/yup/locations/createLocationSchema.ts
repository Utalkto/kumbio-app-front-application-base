import { DAYS_NAME_ARRAY } from '@/constants/daysName';
import { ICreateLocation } from '@/models';
import * as Yup from 'yup';

export const createLocationSchema = Yup.lazy(
	(values: ICreateLocation | undefined) => {
		if (values?.step === 0) {
			return Yup.object().shape({
				location: Yup.object().shape({
					name: Yup.string().required('Campo requerido'),
					dayWorks: Yup.array()
						.of(
							Yup.object().shape({
								day: Yup.string()
									.required('Campo requerido')
									.oneOf(DAYS_NAME_ARRAY, 'Campo requerido'),

								endHour: Yup.date()
									.required('Campo requerido')
									.min(Yup.ref('startHour'), 'Hora inválida')
									.test('endHour', 'Minutos no válidos', (value) => {
										const minutes = value?.getMinutes();
										if (minutes === 0) {
											return true;
										}
										return minutes ? minutes % 15 === 0 : false;
									}),

								startHour: Yup.date()
									.required('Campo requerido')
									.max(Yup.ref('endHour'), 'Hora inválida')
									.test('startHour', 'Minutos no válidos', (value) => {
										const minutes = value?.getMinutes();
										if (minutes === 0) {
											return true;
										}

										return minutes ? minutes % 15 === 0 : false;
									}),
							})
						)
						.min(1, 'Debe seleccionar al menos un día de trabajo'),
				}),
			});
		}

		return Yup.object(); // Return a default schema if none of the conditions match
	}
);
