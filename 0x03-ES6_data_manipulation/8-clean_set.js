export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  if (typeof startString !== 'string') {
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
