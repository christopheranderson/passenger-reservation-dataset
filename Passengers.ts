export interface Reservation {
    id: string,
    journeyId: string,
    shipName: string,
    tripDate: Date,
    contactInfo: {
        primary: ContactInfo,
        secondary?: ContactInfo
    }
    checkedIn: boolean,
    boardedVessel: boolean,
    passengers: Passenger[]
}

export interface ContactInfo {
    type: "cell" | "email",
    value: string,
    contactName: string
}

export interface Passenger {
    givenName: string,
    familyName: string,
    ticket: {
        id: string
    }
}