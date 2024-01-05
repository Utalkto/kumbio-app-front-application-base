'use client';

import { useServicesTable } from '@/hooks';
import { IRowService } from '@/interfaces';
import { Stack } from '@mui/material';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import React, { FC } from 'react';
import { Props } from './interfaces';

export const ServicesTable: FC<Props> = ({ services }) => {
	const { rows, servicesColumns, onClickService } = useServicesTable(services);

	return (
		<>
			<Stack width={'100%'} height={480}>
				<DataGrid<IRowService>
					rows={rows}
					columns={servicesColumns}
					initialState={{
						pagination: {
							paginationModel: {
								page: 0,
								pageSize: 5,
							},
						},
					}}
					pageSizeOptions={[5, 10, 20]}
					disableRowSelectionOnClick
					onCellClick={(params: GridCellParams<IRowService>) => {
						onClickService(params.row.id.toString());
					}}
					sx={{
						'& .MuiDataGrid-cell': {
							cursor: 'pointer',
						},
					}}
				/>
			</Stack>
		</>
	);
};
