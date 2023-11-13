import { Grid, Paper, Stack, Typography } from '@mui/material';

const LoginPage = () => {
	return (
		<Grid container component="main" height={'100vh'}>
			<Grid item xs={false} sm={4} md={5}></Grid>
			<Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
				<Stack>
					<Typography
						color={'primary'}
						component={'h1'}
						variant={'h4'}
						fontSize={'1.5rem'}
						fontWeight={500}
						lineHeight={'1.2'}
					>
						Bienvenido a Kumbio
					</Typography>
				</Stack>
			</Grid>
		</Grid>
	);
};

export default LoginPage;
