export interface GoogleLocationDetailResult {
  adr_address: string;
  formatted_address: string;
  icon: string;
  id: string;
  name: string;
  place_id: string;
  scope: string;
  reference: string;
  url: string;
  utc_offset: number;
  vicinity: string;
  types: string[];
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
    viewport: {
      [type: string]: {
        lat: number;
        lng: number;
      };
    };
  };
  address_components: Array<{
    long_name: string;
    short_name: string;
    types: GoogleAddresscomponentType[];
  }>;

  getAdministrative_Area_Level_1: (name?: "long_name" | "short_name") => string | undefined;
  getAdministrative_Area_Level_2: (name?: "long_name" | "short_name") => string | undefined;
  getAdministrative_Area_Level_3: (name?: "long_name" | "short_name") => string | undefined;
  getStreet_Number: (name?: "long_name" | "short_name") => string | undefined;

}

export class GoogleLocationDetailDomain implements GoogleLocationDetailResult {
  constructor(data: GoogleLocationDetailResult) {
    this.adr_address = data.adr_address;
    this.formatted_address = data.formatted_address;
    this.icon = data.icon;
    this.id = data.id;
    this.name = data.name;
    this.place_id = data.place_id;
    this.scope = data.scope;
    this.reference = data.reference;
    this.url = data.url;
    this.utc_offset = data.utc_offset;
    this.vicinity = data.vicinity;
    this.types = data.types;
    this.geometry = data.geometry;
    this.address_components = data.address_components;
  }
  adr_address: string;
  formatted_address: string;
  icon: string;
  id: string;
  name: string;
  place_id: string;
  scope: string;
  reference: string;
  url: string;
  utc_offset: number;
  vicinity: string;
  types: string[];
  geometry: { location: { lat: number; lng: number; }; viewport: { [type: string]: { lat: number; lng: number; }; }; };
  address_components: { long_name: string; short_name: string; types: GoogleAddresscomponentType[]; }[];
  /*
   * method
   */
  getAdministrative_Area_Level_1 = (name?: "long_name" | "short_name"): string | undefined => {
    return this.address_components.find(x => x.types.includes("administrative_area_level_1"))?.[name ?? "long_name"];
  };
  getAdministrative_Area_Level_2 = (name?: "long_name" | "short_name"): string | undefined => {
    return this.address_components.find(x => x.types.includes("administrative_area_level_2") || x.types.includes("locality"))?.[name ?? "long_name"];
  };
  getAdministrative_Area_Level_3 = (name?: "long_name" | "short_name"): string | undefined => {
    return this.address_components.find(x => x.types.includes("administrative_area_level_3"))?.[name ?? "long_name"];
  };
  getStreet_Number = (name?: "long_name" | "short_name"): string | undefined => {
    return this.address_components.find(x => x.types.includes("street_address"))?.[name ?? "long_name"];
  };


}

export interface GoogleLocationResult {
  description: string;
  id: string;
  matched_substrings: Array<{
    length: number;
    offset: number;
  }>;
  place_id: string;
  reference: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
    main_text_matched_substrings: Array<{
      length: number;
    }>;
  };
  terms: Array<{
    offset: number;
    value: string;
  }>;
  types: string[];
}

export interface PlusCode {
  compound_code: string;
  global_code: string;
}

export type GoogleAddresscomponentType = "administrative_area_level_1" | "administrative_area_level_2" |
  "administrative_area_level_3" | "administrative_area_level_4" | "administrative_area_level_5" | "country" |
  "street_address" | "locality";
export interface GoogleGeocodingResult {
  address_components: {
    long_name: string;
    short_name: string;
    types: GoogleAddresscomponentType[];
  }[];
  formatted_address: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    },
    location_type: string;
    viewport: {
      [type: string]: {
        lat: number;
        lng: number;
      };
    };
  };
  place_id: string;
  plus_code: PlusCode;
  types: "bakery" | "cafe" | "establishment" | "food" | "point_of_interest" | "store"[];
  getAdministrative_Area_Level_1: (name?: "long_name" | "short_name") => string | undefined;
  getAdministrative_Area_Level_2: (name?: "long_name" | "short_name") => string | undefined;
  getAdministrative_Area_Level_3: (name?: "long_name" | "short_name") => string | undefined;
  getStreet_Number: (name?: "long_name" | "short_name") => string | undefined;
}
export class GoogleGeocodingResultDomain implements GoogleGeocodingResult {
  constructor(data: GoogleGeocodingResult) {
    this.address_components = data.address_components;
    this.formatted_address = data.formatted_address;
    this.geometry = data.geometry;
    this.place_id = data.place_id;
    this.plus_code = data.plus_code;
    this.types = data.types;
  }
  address_components: { long_name: string; short_name: string; types: GoogleAddresscomponentType[]; }[];
  formatted_address: string;
  geometry: { location: { lat: number; lng: number; }; location_type: string; viewport: { [type: string]: { lat: number; lng: number; }; }; };
  place_id: string;
  plus_code: PlusCode;
  types: "bakery" | "cafe" | "establishment" | "food" | "point_of_interest" | "store"[];

  /*
   * method
   */
  getAdministrative_Area_Level_1 = (name?: "long_name" | "short_name"): string | undefined => {
    return this.address_components.find(x => x.types.includes("administrative_area_level_1"))?.[name ?? "long_name"];
  };
  getAdministrative_Area_Level_2 = (name?: "long_name" | "short_name"): string | undefined => {
    return this.address_components.find(x => x.types.includes("administrative_area_level_2" || x.types.includes("locality")))?.[name ?? "long_name"];
  };
  getAdministrative_Area_Level_3 = (name?: "long_name" | "short_name"): string | undefined => {
    return this.address_components.find(x => x.types.includes("administrative_area_level_3"))?.[name ?? "long_name"];
  };
  getStreet_Number = (name?: "long_name" | "short_name"): string | undefined => {
    return this.address_components.find(x => x.types.includes("street_address"))?.[name ?? "long_name"];
  };
}


export interface SearchQuery {
  language: string;
  types: 'address' | 'geocode' | '(cities)' | 'establishment' | 'geocode|establishment';
  components?: string;
  radius?: string;
  lat?: number;
  lng?: number;
}

export interface NormalizeSearchQuery {
  language: string;
  types: 'address' | 'geocode' | '(cities)' | 'establishment' | 'geocode|establishment';
  components?: string;
  radius?: string;
  location?: string;
}

export interface GoogleNearbySearchResult {
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  icon: string;
  id: string;
  name: string;
  opening_hours: {
    open_now: boolean;
  };
  photos: {
    height: number;
    html_attributions: string[];
    photo_reference: string;
    width: number;
  }[];
  place_id: string;
  price_level: 0 | 1 | 2 | 3 | 4;
  rating: number;
  reference: string;
  types: string[];
  vicinity: string;
  formatted_address: string;
}