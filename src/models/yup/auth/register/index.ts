import * as Yup from 'yup';


export const registerSchema = Yup.object().shape({
	first_name: Yup.string().required(
		'El nombre es requerido'
	),
	phone_number: Yup.string().required('El número de teléfono es requerido'),
	email: Yup.string()
		.email('Correo Inválido')
		.required('El correo es requerido'),
	password: Yup.string()
		.min(8, 'La constraseña debe de tener al menos 8 dígitos')
		.required('La constraseña es requerida'),
	last_name: Yup.string().required('El apellido es requerido'),
});
