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
//export default
function getSeason(date) {
  let unswer = "Unable to determine the time of year!";
  let mounth = date.getMonth() + 0;
  //console.log(mounth);
  switch (mounth) {
    case mounth == 12 || mounth == 1 || mounth == 2:
      unswer = "winter";
      break;
    case mounth == 3 || mounth == 4 || mounth == 5:
      unswer = "spring";
      break;
    case mounth == 6 || mounth == 7 || mounth == 8:
      unswer = "summer";
      break;
    case mounth == 9 || mounth == 10 || mounth == 11:
      unswer = "autumn";
      break;
    default:
      unswer = "Invalid date!";
  }
  return unswer;
}
const date = new Date(1932, 1, 22);

console.log(getSeason(date));
