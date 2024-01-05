import { ISession } from '@/interfaces';
import { ICreateClient, ICreateClientPayload } from '@/models';
import { createClientService } from '@/services/clients';
import { FormikHelpers } from 'formik';
import { auth } from '@/auth';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
export const useCreateClient = () => {
	// const session = (await auth()) as unknown as ISession;
	const router = useRouter();

	const initialValues: ICreateClient = {
		name: '',
		last_name: '',
		email: '',
		phone_number: '',
		organization_pk: 0,
	};

	const onSubmit = async (values: ICreateClient) => {
		const session = (await getSession()) as unknown as ISession;
		try {
			const body: ICreateClientPayload = {
				user_data: {
					first_name: values.name,
					last_name: values.last_name,
					phone_number: values.phone_number,
					email: values.email,
				},
				organization_pk: session.organizationPk,
			};
			const response = await createClientService(body);

			//Todo redirect to client detail
			// if (response) {
			// 	router.push(`/clients/${response.id}`);
			// }
		} catch (error) {}
	};

	return { initialValues, onSubmit };
};
