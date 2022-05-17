// const getDays = (date1, date2) => (date2 - date1) / (1000 * 60 * 60 * 24)
//หาจำนวนวันที่ต่างกัน
function getDays(date1, date2) {
	oneDay = 24 * 60 * 60 * 1000
	return Math.round(Math.abs((date1 - date2) / oneDay))
}
console.log(getDays(new Date("June 14, 2019"),new Date("June 20, 2019")))
console.log(getDays(new Date("December-29-2018"),new Date("January 1, 2019")))