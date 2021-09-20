import { NotImplementedError } from "../extensions/index.js";

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  console.log(`111 Date is ${date}`);
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }
  if (!(date instanceof Date)) {
    throw Error("Invalid date!");
  } else {
    let mounth;
    try {
      mounth = date.getMonth();
    } catch (e) {
      throw Error("Invalid date!");
    }
    switch (mounth) {
      case 0:
      case 1:
      case 11:
        return "winter";
      case 3:
      case 2:
      case 4:
        return "spring";
      case 6:
      case 7:
      case 5:
        return "summer";
      case 9:
      case 10:
      case 8:
        return "autumn";
      default:
        throw Error("Invalid date!");
    }
  }
}
const date = () => new Date(); //winter

//console.log(getSeason(date));
