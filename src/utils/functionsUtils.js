export const sort = (array, sortParameters) => {
  array.sort((a, b) => {
    if (sortParameters[1].includes('asc')) {
      return a[sortParameters[0]] < b[sortParameters[0]] ? -1 : 1
    } else if (sortParameters[1].includes('desc')) {
      return a[sortParameters[0]] > b[sortParameters[0]] ? -1 : 1
    }
  })
  return array
}
