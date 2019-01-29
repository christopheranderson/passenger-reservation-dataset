# Passenger Reservation Dataset

This data set models reservations onboard a space vessel. output.json has 1000 reservations in it.

Sample reservation:

```json
{
  "id": "579D9E",
  "journeyId": "2071-1-3:SVYosemite",
  "shipName": "SV Yosemite",
  "tripDate": "2071-02-11T21:41:18.828Z",
  "contactInfo": {
   "primary": {
    "type": "email",
    "value": "wafo@outlook.com",
    "contactName": "Leila Soler"
   }
  },
  "checkedIn": false,
  "boardedVessel": false,
  "passengers": [
   {
    "givenName": "Leila",
    "familyName": "Soler",
    "ticket": {
     "id": "5CA38B"
    }
   }
  ]
 }
```

## Generating a new data set

Modify run.ts with any changes you might want to format or rules

```bash
npm i
npm start > output.json
```

## LICENSE

output.json is provided with no warranties, no restrictions on copying/distribution, and no attribution is required.

All other code in this sample is covered under standard MIT [license](./LICENSE)
