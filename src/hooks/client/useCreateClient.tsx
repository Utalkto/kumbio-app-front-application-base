import { ISession } from "@/interfaces";
import { ICreateClient, ICreateClientPayload } from "@/models";
import { createClientService } from "@/services/clients";
import { FormikHelpers } from "formik";
import { auth } from "@/auth";

const initialValues: ICreateClient = {
  name: "",
  last_name: "",
  email: "",
  phone_number: "",
  organization_pk: 0,
};

export const useCreateClient = () => {
  // const session = (await auth()) as unknown as ISession;

  const onSubmit = async (
    values: ICreateClient,
    formikHelpers: FormikHelpers<ICreateClient>
  ) => {
    const session = (await auth()) as unknown as ISession;

    console.log(session);
    const body: ICreateClientPayload = {
      user_data: {
        first_name: values.name,
        last_name: values.last_name,
        phone_number: values.phone_number,
        email: values.email,
      },
      organization_pk: session.organizationPk,
    };
    const response = await createClientService(body);
    console.log(response);
  };

  return { initialValues, onSubmit };
};
