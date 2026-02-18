// Historical Mauna Loa CO2 yearly averages (ppm) — NOAA data
const CO2_DATA: Record<number, number> = {
     1958: 315.97, 1959: 316.91, 1960: 317.64, 1961: 318.45, 1962: 318.99,
     1963: 319.62, 1964: 319.93, 1965: 320.04, 1966: 321.37, 1967: 322.18,
     1968: 323.05, 1969: 324.62, 1970: 325.68, 1971: 326.32, 1972: 327.45,
     1973: 329.68, 1974: 330.17, 1975: 331.15, 1976: 332.13, 1977: 333.90,
     1978: 335.40, 1979: 336.84, 1980: 338.68, 1981: 340.10, 1982: 341.44,
     1983: 343.03, 1984: 344.58, 1985: 345.90, 1986: 347.15, 1987: 348.93,
     1988: 351.48, 1989: 352.90, 1990: 354.35, 1991: 355.57, 1992: 356.38,
     1993: 357.07, 1994: 358.82, 1995: 360.80, 1996: 362.59, 1997: 363.71,
     1998: 366.65, 1999: 368.33, 2000: 369.52, 2001: 371.13, 2002: 373.22,
     2003: 375.77, 2004: 377.49, 2005: 379.78, 2006: 381.90, 2007: 383.76,
     2008: 385.59, 2009: 387.37, 2010: 389.85, 2011: 391.63, 2012: 393.82,
     2013: 396.48, 2014: 398.55, 2015: 400.83, 2016: 404.21, 2017: 406.53,
     2018: 408.52, 2019: 411.44, 2020: 414.21, 2021: 416.45, 2022: 418.56,
     2023: 420.95, 2024: 422.54,
}

const years = Object.keys(CO2_DATA).map(Number).sort((a, b) => a - b)
const MIN_YEAR = years[0]
const MAX_YEAR = years[years.length - 1]

export function getCO2ForDate(date: Date): number {
     const year = date.getFullYear()
     const month = date.getMonth() // 0–11
     const clampedYear = Math.max(MIN_YEAR, Math.min(MAX_YEAR, year))
     const current = CO2_DATA[clampedYear]
     const next = CO2_DATA[Math.min(clampedYear + 1, MAX_YEAR)] ?? current
     return current + (next - current) * (month / 12)
}

export function generateId(dateStr: string): string {
     const base = dateStr.replace(/-/g, '')
     const rand = Math.random().toString(36).substring(2, 8)
     return `${base}-${rand}`
}
