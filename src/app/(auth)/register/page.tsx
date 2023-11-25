import React from 'react';
import { Stack } from '@mui/material';
import Image from 'next/image';
import { RegisterForm } from './components';

const RegisterPage = () => {
	return (
		<Stack
			component={'main'}
			margin={'auto'}
			maxWidth={'560px'}
			padding={2}
			display={'flex'}
			alignItems={'center'}
			justifyContent={'center'}
			minHeight={'100vh'}
			
		>
			<Stack
				gap="40px"
				display={'flex'}
				alignItems={'center'}
				justifyContent={'center'}
				paddingX={2}
				paddingY={3}
				boxShadow={'0 .5rem 1rem #00000026'}
				borderRadius={2}
			>
				<Image src="/kumbio-logo.png" alt="Kumbio Logo" width={200} height={50} />
				<RegisterForm />
			</Stack>
		</Stack>
	);
};

export default RegisterPage;
