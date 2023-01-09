
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

// info: [
//     count: number,
//     pages: number,
//     next: string,
//     prev: null

// ];
export interface Character {

        id: number,
        name: string,
        status: string,
        species: string,
        type: string,
        gender: string,
        origin: {
            name: string,
            url: string
        },
        location: {
            name: string
            url: string
        },
        image: string,
        episode: string[],
        url: string,
        created: string,
}