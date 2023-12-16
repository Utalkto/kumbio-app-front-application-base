export interface ISession {
	user: {
		name: string;
		email: string;
	};
	expires: string;
	id: string;
	name: string;
	email: string;
	organizationPk: number;
}
