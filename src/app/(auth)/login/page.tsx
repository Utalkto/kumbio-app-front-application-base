import { Grid, Paper, Stack } from '@mui/material';
import { LoginForm } from './components';
import Image from 'next/image';

const LoginPage = () => {
	return (
		<Grid container component="main" height={'100vh'}>
			<Grid item xs={false} md={5} position={'relative'}>
				<Image
					src="/svg_login.svg"
					alt="Kumbio Logo"
					placeholder="blur"
					blurDataURL="/svg_login.svg"
					quality={100}
					fill
					sizes="100vw"
					style={{
						objectFit: 'cover',
					}}
				/>
			</Grid>
			<Grid
				item
				xs={12}
				md={7}
				component={Paper}
				elevation={6}
				square
				padding={2}
				gap="40px"
				alignItems={'center'}
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'center'}
			>
				<Stack width={'100%'} maxWidth={'400px'}>
					<LoginForm />
				</Stack>
			</Grid>
		</Grid>
	);
};

export default LoginPage;
