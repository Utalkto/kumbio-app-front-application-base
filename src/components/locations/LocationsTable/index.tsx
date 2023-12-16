'use client';

import React, { FC } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { Stack } from '@mui/material';
import { Props } from './interfaces';
import { useLocationsListTable } from '@/hooks';
import { IRowLocation } from '@/interfaces';

export const LocationsTable: FC<Props> = ({ locations }) => {
	const { rows, locatiosColumns, onClickLocation } =
		useLocationsListTable(locations);

	return (
		<>
			<Stack width={'100%'} height={480}>
				<DataGrid<IRowLocation>
					rows={rows}
					columns={locatiosColumns}
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
					onCellClick={(params) => onClickLocation(params.row.id.toString())}
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
