export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  const newSet = [];
  set.forEach((item) => {
    if (item.startsWith(startString)) {
      newSet.push(item.substring(startString.length));
    }
  });

  return newSet.join('-');
}
