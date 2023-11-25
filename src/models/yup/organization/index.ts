import * as Yup from 'yup';

import { StoreOrganization } from '@/interfaces/organization';

export const createOrganizationSchema = Yup.object<StoreOrganization>().shape({
    name: Yup.string().required(
		'El nombre es requerido'
	),
    sub_sector: Yup.number().required(
        'El sector es requerido'
    ),
    how_you_know_us: Yup.string().required(
		'El donde nos conociste es requerido'
    ),
    country: Yup.number().required(
        'El pais es requerido'
    ),
} as Record<keyof StoreOrganization, any>);
