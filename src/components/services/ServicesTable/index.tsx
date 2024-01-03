'use client';

import { useServicesTable } from '@/hooks';
import { IRowService } from '@/interfaces';
import { Stack } from '@mui/material';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import React from 'react';

export const ServicesTable = () => {
	const { rows, servicesColumns, onClickService } = useServicesTable([]);

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
