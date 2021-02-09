export function toText(value: number): string {
  // Convert to base 6 with ':' instead of ','
  const withoutRemainder = Math.floor((value - Math.floor(value)) * 10 * 6);
  const nearestTenth = Math.ceil(withoutRemainder / 10) * 10;
  let paceText = Math.floor(value) + ":" + nearestTenth;

  // 2:0 -> 2:00
  if (paceText.split(":")[1].length === 1) {
    const last = paceText.slice(-1);
    paceText = paceText.slice(0, -1) + "0" + last;
  }

  return paceText;
}
