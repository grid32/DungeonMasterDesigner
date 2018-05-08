export class Map {
    Id: number;
    Name: string;
    Owner: string;
    MapImageUrl: string;

    constructor(map: Map) {
        this.Id = map.Id || 0;
        this.Name = map.Name;
        this.Owner = map.Owner;
        this.MapImageUrl = map.MapImageUrl || "/assets/australia_map.png";
    }
}
