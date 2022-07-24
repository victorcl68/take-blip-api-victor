const compareDates = (a,b) => {
  return new Date(a.created_at) - new Date(b.created_at);
}

module.exports = compareDates;
