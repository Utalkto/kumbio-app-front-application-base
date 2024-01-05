import { ISession } from "@/interfaces";
import { IClient, ICreateClientPayload } from "@/models";
import { baseUrl } from "@/services/config";
import { auth } from "@/auth";

export const createClientService = async (payload: ICreateClientPayload) => {
  const session = (await auth()) as unknown as ISession;
  try {
    const response = await fetch(`${baseUrl}/api/clients/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${session?.id}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return [];
    }

    const responseJson: IClient[] = await response.json();

    return responseJson;
  } catch (error) {
    console.error(error);
    return [];
  }
};
