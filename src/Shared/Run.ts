export interface Range<type> {
  min: type;
  max: type;
}
export interface Run {
  pace: Range<number>;
  length: Range<number>;
  people: number;
  time: Date;
  id: string;
}
