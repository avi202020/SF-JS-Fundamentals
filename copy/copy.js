/*
 * Fill in the `copy' function so that it duplicates the object it is
 * passed as its first argument.  It should return the duplicate.
 *
 * Ensure that the duplicated object only contains properties that are
 * present on the incoming object, and not those that it inherits.
 * (In other words, use the `hasOwnProperty' method.)
 *
 */
function copy(object) {

  // Your code here.
  let rv = {};
  
  for (let k in object) {
      if (object.hasOwnProperty(k)) {
//          Object.defineProperty(rv, k, {
//              value: object[k],
//                enumerable: true              
//          });
        rv[k] = object[k];
      }
  }
  return rv;
}
