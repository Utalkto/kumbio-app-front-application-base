export interface INavigationItem {
  name: string;
  icon: React.ElementType;
  url: string;
  navigationData?: INavigationItem[];
}