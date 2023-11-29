import { locationList } from '../locations/location.js';
import { FishList } from './FishList.js'
import { getHolyFish } from './FishList.js';
import { getSolFish } from './FishList.js';
import { getNonHolyFish } from './FishList.js';
import { getLocation, getTips } from './database.js';
import { tipsList } from './tips.js';



const holyFish = document.querySelector(".holyFish");
holyFish.innerHTML = FishList(getHolyFish(), "Holy Fish");

const solFish = document.querySelector(".solFish");
solFish.innerHTML = FishList(getSolFish(), "Soldier Fish");

const nonHolyFish = document.querySelector(".nonHolyFish");
nonHolyFish.innerHTML = FishList(getNonHolyFish(), "Non Holy Fish");

const tipsListContainer = document.querySelector("#tipsList");
tipsListContainer.innerHTML = tipsList(getTips(), "Tips & Tricks of the Trade!");

const locationContainer = document.querySelector("#location");
locationContainer.innerHTML = locationList(getLocation(), "Locations!")


