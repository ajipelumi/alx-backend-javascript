export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  if (typeof startString !== 'string') {
    return '';
  }

  const newSet = [];
  for (const item of set) {
    if (item.startsWith(startString)) {
      newSet.push(item.slice(startString.length));
    }
  }

  return newSet.join('-');
}
