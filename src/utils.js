export function getHHMM(time){
  const hours = parseInt(time/60);
  const mins = time%60;
  const hh = `${[0,0].slice(hours>=10?2:1).join('')}${hours}`;
  const mm = `${[0,0].slice(mins>=10?2:1).join('')}${mins}`;
  return `${hh}:${mm}`;
}