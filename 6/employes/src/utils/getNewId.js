export const getNewId = (busyIds) => {
  for(let i = 0; i <= busyIds.length; i++) {
    if(!busyIds.includes(i)) {
      return i;
    }
  }
}