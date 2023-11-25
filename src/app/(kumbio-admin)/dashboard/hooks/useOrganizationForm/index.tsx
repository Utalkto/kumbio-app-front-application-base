import { StoreOrganization } from "@/interfaces/organization"


const initFormOrganization: StoreOrganization  = {
  name: '',
  sub_sector: -1,
  how_you_know_us: '',
  country: -1
}


export const useOrganizationForm = () => {

  const onStoreOrganization = async() => {

  }

  return {
    onStoreOrganization,
    initFormOrganization
  }
}
