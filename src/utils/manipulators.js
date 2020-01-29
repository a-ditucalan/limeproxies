const manipulators = {
  parseDate: (str) => {
    let mdy = str.split('-')
    return new Date(mdy[0] - 1, mdy[1], mdy[2])
  },
  dateDiff: (first, second) => {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  },
  getDateToday: () => {
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth() + 1 //January is 0!

    let yyyy = today.getFullYear()

    if (dd < 10) { dd = '0' + dd }
    if (mm < 10) { mm = '0' + mm }

    today = yyyy + '-' + mm + '-' + dd;
    return today
  },
  ageCalculator: (days) => {
    if (days > 365) { return Math.floor(days / 365) + ' years ago' }
    if (days === 365) { return 'a year ago' }
    if (days > 30) { return Math.floor(days / 30) + ' months ago' }
    if (days === 30) { return 'a month ago' }
    if (days > 7) { return Math.floor(days / 7) + ' weeks ago' }
    if (days === 7) { return 'a week ago' }
    if (days > 1) { return days + ' days ago' }
    if (days === 1) { return 'a day ago' }
  },
  slugify: (text) => {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '')
  }
}

export default manipulators