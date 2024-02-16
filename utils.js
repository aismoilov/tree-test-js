export function nestedClone(array) {
  return JSON.parse(JSON.stringify(array))
}