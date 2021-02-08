export interface Range<type> {
  min: type;
  max: type;
}
export interface Run {
  pace: Range<string>;
  length: Range<number>;
  people: number;
  time: Date;
}
