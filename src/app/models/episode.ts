import { Character } from "./character";

export interface Episode {
    info:    Info;
    results: Result[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface Result {
    id:         number;
    name:       string;
    air_date:   string;
    episode:    string;
    characters: Character;
    url:        string;
    created:    string;
}

// export class Episode{
//     constructor(
//         public id: number,
//         public name: string,
//         public air_date: string,
//         public episode: string,
//         public characters: Character,
//         public url: string,
//         public created: string
        
//     ){}
// }
