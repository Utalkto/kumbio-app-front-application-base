export type User = IRegisterFormValues & {
    full_name:    string;
}

export interface IRegisterFormValues {
	first_name:   string;
    last_name:    string;
    phone_number: string;
    email:        string;
    password:     string;
}

export interface AuthUser{
    user:               User;
    access_token:       string;
}

export type ErrorResponseRegister = {
	first_name?: 		string[];
	last_name?: 		string[];
	phone_number?: 		string[];	
	email?: 			string[];
	password?:			string[];
};



export interface ILoginFormValues{
    email:          string;
    password:       string;
    rememberMe:     boolean;    
}
