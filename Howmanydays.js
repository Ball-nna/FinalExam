//คำนวน วันที่ลบกัน
function days_between(date1, date2) {

    // The number of milliseconds in one day
    const ONE_DAY = 1000 * 60 * 60 * 24;

    // Calculate the difference in milliseconds
    const differenceMs = Math.abs(date2 - date1);
    console.log("1")
    // Convert back to days and return
    const res = Math.round(differenceMs/ONE_DAY)
    return res
    
}
console.log(days_between((2022,2,15),(2022,2,20)))