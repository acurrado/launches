interface _Rocket{
  rocket_id: string
}

export class Launch {
  constructor(
    public flight_number: string,
    public mission_name: string,
    public rocket: _Rocket
  ) {}
}
