//หาค่าเฉลี่ยนของความเร็วรถ
function avgspd(upT,upSpd,downSpd){
    let rate = upT*upSpd/60
    let total = 2*rate
    let downT = rate/downSpd*60
    let totalT = downT+upT
    return total/totalT*60
}
console.log(avgspd(18,20,60))
console.log(avgspd(30,10,30))
console.log(avgspd(30,8,24))