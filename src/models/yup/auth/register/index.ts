import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
	organizationName: Yup.string().required(
		'El nombre de la organización es requerido'
	),
	sector: Yup.number().required('El sector es requerido'),
	email: Yup.string()
		.email('Correo Inválido')
		.required('El correo es requerido'),
	password: Yup.string()
		.min(8, 'La constraseña debe de tener al menos 8 dígitos')
		.required('La constraseña es requerida'),
	country: Yup.string().required('El país es requerido'),
});
