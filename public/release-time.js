document.querySelectorAll('time[data-release-time]').forEach(element => {
  const date = new Date(element.dateTime);
  if (Number.isNaN(date.getTime())) return;
  element.textContent = new Intl.DateTimeFormat(undefined, {year:'numeric',month:'long',day:'numeric',hour:'numeric',minute:'2-digit',timeZoneName:'short'}).format(date);
});
