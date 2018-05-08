import { Map } from "./index";

export class Campaign {
    Id: number;
    Name: string;
    Owner: string;
    CurrentMapId: number;
    Map: Map;

    constructor(campaign: Campaign) {
        this.Id = campaign.Id;
        this.Name = campaign.Name;
        this.Owner = campaign.Owner;
        this.CurrentMapId = campaign.CurrentMapId;
        this.Map = campaign.Map;
    }
}
