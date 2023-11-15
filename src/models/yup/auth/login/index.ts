import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
	email: Yup.string()
		.email('Correo Inválido')
		.required('El correo es requerido'),
	password: Yup.string().required('La constraseña es requerida'),
	remeberMe: Yup.boolean(),
});
