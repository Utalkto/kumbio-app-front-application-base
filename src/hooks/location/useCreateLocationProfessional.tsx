import { professionalsMock } from '@/mocks';
import { ICreateLocation } from '@/models';
import { SelectChangeEvent } from '@mui/material';
import { FieldArrayRenderProps, useFormikContext } from 'formik';
import React, { useState } from 'react';

export const useCreateLocationProfessional = () => {
	const formValues = useFormikContext<ICreateLocation>();
	const [professionals, setProfessionals] = useState(professionalsMock);

	const onSelectProfessional = (
		event: SelectChangeEvent<unknown>,
		arrayHelpers: FieldArrayRenderProps
	) => {
		const values = event.target.value as number[];

		const selectedProfessionals = formValues.values.professionals;

		if (values.includes(-1)) {
			formValues.setFieldValue('isAddingNewProfessional', true);

			return;
		}

		// Con  el array de values que viene del select que corresponde a los pk de los profesionales seleccionados filtrar los que ya estan en el array de profesionales
		const professionalsToAdd = values.filter(
			(value) =>
				!selectedProfessionals.some(
					(professional) => professional.user_data.user_pk === value
				)
		);

		if (professionalsToAdd.length === 0) {
			const professionalsToRemove = selectedProfessionals.filter(
				(professional) => !values.includes(professional.user_data.user_pk)
			);

			// Remover los profesionales que no estan en el array de profesionales
			professionalsToRemove.forEach((professional) => {
				arrayHelpers.remove(
					selectedProfessionals.findIndex(
						(professionalToRemove) =>
							professionalToRemove.user_data.user_pk ===
							professional.user_data.user_pk
					)
				);
			});

			return;
		}

		// Buscar los profesionales que no estan en el array de profesionales
		const professionals = professionalsMock.filter((professional) =>
			professionalsToAdd.includes(professional.user_data.user_pk)
		);

		// Agregar los profesionales al array de profesionales
		professionals.forEach((professional) => {
			arrayHelpers.push(professional);
		});
	};

	const onAddNewProfessional = (arrayHelpers: FieldArrayRenderProps) => {
		const professionalToAdd = formValues.values.professionalToAdd;

		arrayHelpers.push(professionalToAdd);

		console.log({ professionalToAdd });
		setProfessionals([...professionals, professionalToAdd]);
		formValues.setFieldValue('professionalToAdd', {
			user_data: {
				first_name: '',
				last_name: '',
				email: '',
				phone_number: '',
				user_pk: -1,
			},
			sede_pk: -1,
			service_pk: -1,
			description: '',
			how_you_know_us: '',
		});
		formValues.setFieldValue('isAddingNewProfessional', false);
	};
	return {
		...formValues,
		professionals,
		onSelectProfessional,
		onAddNewProfessional,
	};
};
