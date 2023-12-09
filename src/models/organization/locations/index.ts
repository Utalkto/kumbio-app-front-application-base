export interface ILocation {
	id: number;
	created: Date;
	modified: Date;
	name: string;
	description: string | null;
	sede_type: string;
	address: string;
	maps_url: string | null;
	phone: string | null;
	phone_aux: string | null;
	organization: number;
}
