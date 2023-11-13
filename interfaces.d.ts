interface PlaceByTextSearch {
  formatted_address: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  icon: URL;
  icon_background_color: string;
  icon_mask_base_uri: URL;
  name: string;
  photos?: {
    photo_reference: string;
  }[];
  place_id: string;
  rating: number;
  reference: string;
  types: string[];
  user_ratings_total: number;
}

interface PlaceByIdSearch {
  name: string;
  place_id: string;
  editorial_summary?: {
    language: string;
    overview: string;
  };
  photos?: [
    {
      photo_reference: string;
    }
  ];
  rating: number;
  user_ratings_total: number;
  icon_background_color: string;
}
