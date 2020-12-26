export interface Region {
    id: number;
    cn_name: string;
    en_name: string;
    kh_name: string;
    pid: number;
    short_name: string;
    region_code: string;
    city_id: number;
    children?:Region[];
}