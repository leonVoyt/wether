export const useDate = (UNIX_timestamp) => {
  if (UNIX_timestamp.dt) {
    return ''
  }
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  let a = new Date(UNIX_timestamp * 1000)
  let day = days[a.getDay()]
  // let year = a.getFullYear()
  let month = months[a.getMonth()]
  let date = a.getDate()
  let hour = a.getHours()
  let min = a.getMinutes()
  let sec = a.getSeconds()
  return { day, date, month, hour, min, sec }
}
