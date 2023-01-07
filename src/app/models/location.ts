export interface Location {
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
    id:        number;
    name:      string;
    type:      string;
    dimension: string;
    residents: string[];
    url:       string;
    created:   string;
}


// export class Location{
//     constructor(

//     public id: number,
//     public name: string,
//     public type: string,
//     public dimension: string,
//     public residents: string[],	
//     public url: string, 
//     public created: string
//     ){}
// }
