export interface IClient {
  name: string;
  last_name: string;
  email: string;
  phone_number: string;
}

export interface ICreateClient {
  name: string;
  last_name: string;
  email: string;
  phone_number: string;
  organization_pk: number;
}

export interface ICreateClientPayload {
  user_data: {
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
  };
  organization_pk: number;
}
