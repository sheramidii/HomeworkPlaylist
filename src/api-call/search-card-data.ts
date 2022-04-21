import axios from "axios";
import { RootObject } from "../storagets";

export type propsTrackData = RootObject



export const searchCardData = async (query: string, accessToken: string): Promise<propsTrackData> =>{
    const cards = await axios
      .get(
        `https://api.spotify.com/v1/search?q=${query}&type=track&access_token=${accessToken}`
      )
      .catch((error) => error)
    console.log(cards.data.tracks.items);
    return cards.data.tracks.items; 
   }