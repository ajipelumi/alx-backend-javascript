export default function getStudentIdsSum(arr) {
  return arr.reduce((total, item) => total + item.id, 0);
}
