import { DAYS_NAME_ARRAY } from '@/constants/daysName';
import { ICreateLocation } from '@/models';
import * as Yup from 'yup';

export const createLocationSchema = Yup.lazy(
	(values: ICreateLocation | undefined) => {
		if (values?.isAddingNewProfessional) {
			return Yup.object().shape({
				professionalToAdd: Yup.object().shape({
					user_data: Yup.object().shape({
						first_name: Yup.string().required('El nombre es requerido'),
						last_name: Yup.string().required('El apellido es requerido'),
						email: Yup.string()
							.email('Debe ser un email válido')
							.required('El email es requerido'),
						phone_number: Yup.string().required(
							'El número de teléfono es requerido'
						),
					}),
					sede_pk: Yup.number().required('La sede es requerida'),
					service_pk: Yup.number().required('El servicio es requerido'),
					description: Yup.string(),
					how_you_know_us: Yup.string(),
				}),
			});
		}

		return Yup.object(); // Return a default schema if none of the conditions match
	}
);
