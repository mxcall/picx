export default class TimeHelper {
  private static zerofill(n: number) {
    return n < 10 ? `0${n}` : n
  }

  private static zerofill000(n: number) {
    if (n < 10) {
      return `00${n}`
    }
    if (n >= 10 && n < 100) {
      return `0${n}`
    }
    return `${n}`
  }

  static getYyyyMmDd(now: number = Date.now()) {
    const date: Date = new Date(now)
    const yyyy = date.getFullYear()
    const MM = date.getMonth() + 1
    const DD = date.getDate()
    return `${yyyy}${this.zerofill(MM)}${this.zerofill(DD)}`
  }

  static getXpicDate(now: number = Date.now()) {
    const date: Date = new Date(now)
    const yyyy = date.getFullYear()
    const MM = date.getMonth() + 1
    const DD = date.getDate()
    const allStr = `${yyyy}${this.zerofill(MM)}${this.zerofill(DD)}`
    return `picx/${allStr.substring(0, 4)}/${allStr.substring(4, 6)}`
  }

  static getLuyaTimeStamp(now: number = Date.now()) {
    const date: Date = new Date(now)
    const yyyy = date.getFullYear()
    const MM = date.getMonth() + 1
    const DD = date.getDate()
    const hh = date.getHours()
    const mm = date.getMinutes()
    const ss = date.getSeconds()
    const ms = date.getMilliseconds()
    const allStr = `${yyyy}${this.zerofill(MM)}${this.zerofill(DD)}${this.zerofill(
      hh
    )}${this.zerofill(mm)}${this.zerofill(ss)}${this.zerofill000(ms)}`
    return allStr
  }

  static formatTimestamp(now: number = Date.now()) {
    const date: Date = new Date(now)
    const YYYY = date.getFullYear()
    const MM = date.getMonth() + 1
    const DD = date.getDate()
    const hh = date.getHours()
    const mm = date.getMinutes()
    const ss = date.getSeconds()
    const ms = date.getMilliseconds()
    return `${YYYY}-${this.zerofill(MM)}-${this.zerofill(DD)} ${this.zerofill(
      hh
    )}:${this.zerofill(mm)}:${this.zerofill(ss)}`
  }
}
