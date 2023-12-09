import React, { FC } from 'react';
import { Props } from './interfaces';
import { CardActions, CardContent, Stack, Typography } from '@mui/material';
import { Button, Card } from '@/components';

export const LocationCard: FC<Props> = ({ location }) => {
	return (
		<Card>
			<CardContent>
				<Typography gutterBottom variant="h5">
					{location.name}
				</Typography>

				<Typography variant="body2" color="text.secondary">
					{location.address}
				</Typography>
				<Stack direction="row" justifyContent="flex-end">
					<CardActions>
						<Button variant="outlined" color="error" size="small">
							Eliminar
						</Button>
						<Button variant="contained" color="primary" size="small">
							Ver
						</Button>
					</CardActions>
				</Stack>
			</CardContent>
		</Card>
	);
};
