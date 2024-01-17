export interface InputFlight {
    sourceAirportId: string
    destinationAirportId: string
    airplaneId: string
    sourceTerminal: string
    destinationTerminal: string
    thumbnailUrl: string
    departureDate: string
    arrivalDate: string
    economySeatsPrice: number
    businessSeatsPrice: number
    firstSeatsPrice: number
    discount: number
    points: number
}
