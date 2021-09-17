import { NotImplementedError } from "../extensions/index.js";

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let unswer = false;
  let arrFirstLetters = [];
  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === "string") {
        arrFirstLetters.push(
          members[i].replace(/\s/g, "").charAt(0).toUpperCase()
        );
      } else {
        continue;
      }
    }
    unswer = arrFirstLetters.sort().join("");
    return unswer;
  } else {
    return false;
  }
}
/*console.log(
  createDreamTeam([
    "Evelyn",
    "Wayne",
    "Ryan",
    "Abigail",
    "Theresa",
    "Jack",
    "Austin",
    "Willie",
    "Judith",
    "Stephen",
  ])
); //  "AAEJJRSTWW"*/
