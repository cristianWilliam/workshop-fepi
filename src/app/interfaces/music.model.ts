import { Artist } from "./artist.model";

export interface Music {
  id: number,
  title: string,
  artist?: Artist,
  artistId: number,
  time: string,
  album: string
}