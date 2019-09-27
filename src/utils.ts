export const FangSongFont = (() => {
  if (/macintosh|mac os x/i.test(navigator.userAgent)) {
    return 'STFangsong'
  }
  if (/windows|win32/i.test(navigator.userAgent)) {
    return 'Fangsong'
  }
  return 'Fangsong'
})()

export const rads = (x: number) => {
  return (Math.PI * x) / 180
}
