import ChanceLib from "chance";
import { Reservation, Passenger } from "./Passengers";

const chance = new ChanceLib();

const vessels = [
  "SV Yosemite",
  "SV Yellowstone",
  "SV Acadia",
  "SV Shenandoah",
  "SV Roosevelt",
  "SV Voyageurs",
  "SV Zion",
  "SV Wrangell"
];
const tripDates = new Array(vessels.length).fill(null).map(
  v => chance.date({}) as Date
);

const friendlyChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function randomPassengers(): Passenger[] {
  const length = chance.integer({ max: 5, min: 1 });
  const familyName = chance.last();
  return new Array(length).fill(null).map(v => {
    return {
      givenName: chance.first(),
      familyName,
      ticket: {
        id: chance.hash({length: 6, casing: 'upper'})
      }
    };
  });
}

function createPassengers(): Reservation {
  const vesselIndex = chance.integer({min: 0, max: vessels.length-1})
  const vessel = vessels[vesselIndex];
  const tripDate = tripDates[vesselIndex];
  const checkedIn = chance.bool();
  const passengers = randomPassengers();
  return {
    id: chance.hash({length: 6, casing: 'upper'}),
    journeyId: `${tripDate.getFullYear()}-${tripDate.getMonth()+1}-${
      tripDate.getDate()
    }:${vessel.replace(" ", "")}`,
    shipName: vessel,
    tripDate,
    contactInfo: {
      primary: {
        type: "email",
        value: chance.email({ domain: "outlook.com" }),
        contactName: `${passengers[0].givenName} ${passengers[0].familyName}`
      }
    },
    checkedIn,
    boardedVessel: checkedIn ? chance.bool() : false,
    passengers
  };
}

const output = new Array(1000).fill(null).map(v => createPassengers());

console.log(JSON.stringify(output, null , " "));