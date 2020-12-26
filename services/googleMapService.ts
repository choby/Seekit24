import { getBaseURL } from "@/apis/baseUrl";
import GoogleMapApi from "@/apis/googleMap";
import { GoogleGeocodingResult, GoogleGeocodingResultDomain, GoogleLocationDetailDomain, GoogleLocationDetailResult, GoogleLocationResult, GoogleNearbySearchResult, NormalizeSearchQuery, PlusCode, SearchQuery } from "@/types/data/GoogleMap";
import { HttpResponse, HttpResponseCode } from '@/types/RESTful';
import request from "@/utils/request";

export async function search(term: string, query: SearchQuery) {
  const response = await request.get<HttpResponse<{
    predictions: GoogleLocationResult[];
    status: string;
  }>>(`${getBaseURL()}${GoogleMapApi.autocomplete}`, {
    params: { input: encodeURIComponent(term), ...normalizeQuery(query) }
  });

  if (response.code === HttpResponseCode.SUCCESS)
    return response.data;
}


export async function searchDetails(placeid: string, query: SearchQuery,) {
  const response = await request.get<HttpResponse<{
    status: string;
    result: GoogleLocationDetailResult;
  }>>(`${getBaseURL()}${GoogleMapApi.searchDetails}`, {
    params: { ...normalizeQuery(query), place_id: placeid, }
  });
  if (response.code === HttpResponseCode.SUCCESS) {
    response.data.result = new GoogleLocationDetailDomain(response.data.result);
    return response.data;
  }

}

export async function geocoding(address: string) {
  const response = await request.get<HttpResponse<GoogleLocationDetailResult>>(`${getBaseURL()}${GoogleMapApi.geocoding}`, {
    params: { address: address }
  });
  if (response.code === HttpResponseCode.SUCCESS)
    return response.data;
}

//搜索附近建筑
export async function nearbySearch(lat: number, lng: number, lang?: string) {
  const response = await request.get<HttpResponse<{
    status: string;
    next_page_token: string;
    results: GoogleNearbySearchResult[];
    html_attributions: string[];
  }>>(`${getBaseURL()}${GoogleMapApi.nearbySearch}`, {
    params: { latlng: `${lat},${lng}`, language: lang ?? "en" }
  });

  if (response.code === HttpResponseCode.SUCCESS) {
    return response.data;
  }

}

export async function reverseGeocoding(lat: number, lng: number) {
  const response = await request.get<HttpResponse<{
    status: string;
    results: GoogleGeocodingResult[];
    plus_code: PlusCode;
  }>>(`${getBaseURL()}${GoogleMapApi.geocoding}`, {
    params: { latlng: `${lat},${lng}` }
  });

  if (response.code === HttpResponseCode.SUCCESS) {
    response.data.results = response.data.results.map(x => new GoogleGeocodingResultDomain(x));
    return response.data;
  }

}


const normalizeQuery = (query: SearchQuery): NormalizeSearchQuery => {
  const { lat, lng, ...rest } = query;

  // The latitude/longitude around which to retrieve place information. This must be specified as latitude,longitude.
  let location;
  // If one of the value is provide lat/lng both must be there
  if ((lat && !lng) || (lng && !lat)) {
    throw new Error('Query: Location must have both lat & lng');
  }

  if (lat && lng) {
    location = `${lat},${lng}`;
  }
  return { ...rest, location, };
};

