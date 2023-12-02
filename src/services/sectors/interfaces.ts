export interface IGetSectorsResponse {
	name: string;
	sub_sectors: IGetSectorsSubSectorsResponse[];
}

export interface IGetSectorsSubSectorsResponse {
	name: string;
	pk: number;
}
