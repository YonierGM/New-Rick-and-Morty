
    // constructor(
    //     id:       number,
    //     name:     string,
    //     status:   string,
    //     species:  string,
    //     type:     string,
    //     gender:   string,
    //     origin:   Object,
    //     location: Location,
    //     image:    string,
    //     episode:  Episode,
    //     url:      string,
    //     created:  string,
    // ){}

    import { Episode } from "./episode";
    import { Location } from "./location";
    
        export interface Character {
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
            id:       number;
            name:     string;
            status:   string;
            species:  string;
            type:     string;
            gender:   string;
            origin:   Object;
            location: Location;
            image:    string;
            episode:  Episode;
            url:      string;
            created:  string;
        }
    
    