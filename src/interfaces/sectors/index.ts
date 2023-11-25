export interface Sector {
    name:        string;
    sub_sectors: SubSector[];
}

export interface SubSector {
    name: string;
    pk:   number;
}
