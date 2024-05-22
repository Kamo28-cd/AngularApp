export class Sport {
  name: string;
  duration: number; // Duration of the game in minutes
  numberOfPlayers: number;
  breaks: number;

  constructor(
    name: string,
    duration: number,
    numberOfPlayers: number,
    breaks: number
  ) {
    this.name = name;
    this.duration = duration;
    this.numberOfPlayers = numberOfPlayers;
    this.breaks = breaks;
  }
  //description to check if it works
  getDescription(): string {
    return `${this.name} is played for ${this.duration} minutes with ${this.numberOfPlayers} players in each team.`;
  }

  getBreaks(): string {
    return `${this.name} has ${this.breaks} breaks.`;
  }
}
