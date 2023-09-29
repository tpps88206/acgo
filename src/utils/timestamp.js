export const convertTimestamp = timestamp => {
  const d = new Date(timestamp);

  return [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('/') + ' ' + [d.getHours(), d.getMinutes()].join(':');
};
