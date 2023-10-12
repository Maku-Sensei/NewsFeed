function areAllPropertiesNull(obj: Record<string, any>) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== null) {
      return false; // If any property is not null, return false
    }
  }
  return true; // If all properties are null, return true
}
export default areAllPropertiesNull;

export function isObjectInSet(
  set: Set<any>,
  targetObject: Record<string, any>,
) {
  for (const obj of set) {
    // Use a custom equality check here, comparing object properties
    if (deepEqual(obj, targetObject)) {
      return true;
    }
  }
  return false;
}

export function deepEqual(
  objA: Record<string, any>,
  objB: Record<string, any>,
) {
  // Implement your custom deep equality check here
  // For simplicity, this example uses JSON.stringify
  return JSON.stringify(objA) === JSON.stringify(objB);
}
