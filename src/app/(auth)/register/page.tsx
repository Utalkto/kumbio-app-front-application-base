import React from 'react';
import { Stack } from '@mui/material';
import Image from 'next/image';
import { RegisterForm } from './components';

const RegisterPage = () => {
	return (
		<Stack
			component={'main'}
			margin={'auto'}
			maxWidth={'500px'}
			paddingInline={2}
			height={'calc(100vh - 100px)'}
			display={'flex'}
			alignItems={'center'}
			justifyContent={'center'}
			gap="40px"
		>
			<Image src="/kumbio-logo.png" alt="Kumbio Logo" width={200} height={50} />
			<RegisterForm />
		</Stack>
	);
};

export default RegisterPage;
