import { Component } from "@angular/core";
import { AdvertisementsService } from "./advertisements.service";

@Component({
    selector: 'app-advertisements',
    templateUrl:'./advertisements.component.html'
})

export class AdvertisementComponent{
    ads;
    constructor(advertisements: AdvertisementsService){
        this.ads=advertisements.getAdvertisements();
    }
    isActive=true;
}