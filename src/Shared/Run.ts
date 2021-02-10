export interface Range<type> {
  min: type;
  max: type;
}

export interface Position {
  lat: number;
  lng: number;
}

export interface Run {
  pace: Range<number>;
  length: Range<number>;
  people: string[];
  time: Date;
  id: string;
  startingPoint: Position;
}
