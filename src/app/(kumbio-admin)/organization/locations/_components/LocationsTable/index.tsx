'use client';

import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { Stack } from '@mui/material';
import { useLocationsListTable } from './hooks';
import { IRowLocation } from './hooks/useLocationsListTable/interfaces';

export const LocationsTable = () => {
	const { rows, locatiosColumns, onClickLocation } = useLocationsListTable();

	return (
		<Stack width={'100%'}>
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
			/>
		</Stack>
	);
};
