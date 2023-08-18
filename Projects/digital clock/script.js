
setInterval(()=>{
    let d = new Date()
    let h = d.getUTCHours()
    let m = d.getUTCMinutes()
    let s = d.getUTCSeconds()
    let week_day = d.getDay()
    if(week_day == "1"){
        day.innerHTML = "Sunday"
    }
    if(week_day == "2"){
        day.innerHTML = "Monday"
    }
    if(week_day == "3"){
        day.innerHTML = "Tuesday"
    }
    if(week_day == "4"){
        day.innerHTML = "Wednesday"
    }
    if(week_day == "5"){
        day.innerHTML = "Thursday"
    }
    if(week_day == "6"){
        day.innerHTML = "Friday"
    }
    if(week_day == "7"){
        day.innerHTML = "Satday"
    }

    hours.innerHTML = h
    mins.innerHTML = m
    seconds.innerHTML = s
    

},1000)