export interface EpisodesResponse {
  episodes: APIResponse<Episode[]>;
}
export interface CharactersResponse {
  characters: APIResponse<Character[]>;
}
export interface APIResponse<T> {
  results: T;
}

export interface Episode {
  id: string;
  name: string;
  episode: string;
}

export interface EpisodeDetails extends Episode {
  air_date: string;
  characters: Character[];
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  isFavorite?: boolean;
}
