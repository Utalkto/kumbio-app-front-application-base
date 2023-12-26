import { IOnboardingForm } from '@/components/ui/OnBoardingModal/interfaces';
import { DAYS_NAME_ARRAY } from '@/constants/daysName';
import * as Yup from 'yup';

export const onBoardingFormYupSchema = Yup.lazy(
	(values: IOnboardingForm | undefined) => {
		if (values?.step === 0) {
			return Yup.object().shape({
				bussines: Yup.object().shape({
					name: Yup.string().required('Campo requerido'),
					sector: Yup.number()
						.required('Campo requerido')
						.min(1, 'Campo requerido'),

					howDidYouKnow: Yup.string()
						.required('Campo requerido')
						.notOneOf(['-1'], 'Campo requerido'),
					country: Yup.number()
						.min(1, 'Campo requerido')
						.required('Campo requerido'),
				}),
			});
		}

		if (values?.step === 1) {
			return Yup.object().shape({
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
			});
		}

		if (values?.step === 2) {
			return Yup.object().shape({
				service: Yup.object().shape({
					name: Yup.string().required('Campo requerido'),
					duration: Yup.string().required('Campo requerido'),
					price: Yup.number().required('Campo requerido'),
				}),
			});
		}

		return Yup.object(); // Return a default schema if none of the conditions match
	}
);
