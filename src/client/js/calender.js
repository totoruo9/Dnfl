const calenderList = document.querySelector(".calender-list");
const month = calenderList.querySelector("caption");
const tbody = calenderList.querySelector("tbody");

const dayList = ["일", "월", "화", "수", "목", "금", "토"];

const today = new Date();

const current = {
    year: today.getFullYear(),
    month: today.getMonth(),
    day: today.getDay(),
    date: today.getDate()
}

const start = new Date(current.year, current.month, 1);

let startDay = 1-start.getDay();

let weekList = [];
let dateList = [];

for(let i=startDay; i<= 31; i++){
    const monthCalender = new Date(current.year, current.month, i);
    const monthDate = monthCalender.getDate();

    if(current.month !== monthCalender.getMonth()){
        continue;
    }

    if(dateList.length < 6){
        dateList.push(monthDate);
    } else {
        dateList.push(monthDate);
        weekList.push(dateList);
        dateList = [];
    }
}

if(weekList.length < 6){
    const len = dateList.length;
    
}


weekList.forEach(item => {
    const tr = document.createElement("tr");
    item.forEach(date => {
        const td = document.createElement("td");
        td.innerText = date;
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
})




month.innerText = `${current.year+1}월`;