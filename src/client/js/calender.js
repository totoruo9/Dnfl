const calenderList = document.querySelector(".calender-list");
const caption = calenderList.querySelector("caption");
const tbody = calenderList.querySelector("tbody");
const prevMonth = document.querySelector(".prevMonth");
const nextMonth = document.querySelector(".nextMonth");

const today = new Date();
let moveMonth = 0;
let moveYear = 0;

const createCalenderObj = (setDate) => {
    return {
        year: setDate.getFullYear()+moveYear,
        month: setDate.getMonth()+moveMonth,
        day: setDate.getDay(),
        date: setDate.getDate(),
        get startDay() {
            return new Date(this.year, this.month, 1).getDay();
        },
    }
}

let weekList = [];
let dateList = [];

const calenderArray = (calenderObj) => {
    const start =-(calenderObj.startDay)+1;
    const end = 42+start-1;

    for(let i = start; i<=end; i++){
        const arrayDate = new Date(calenderObj.year, calenderObj.month, i);
        if(calenderObj.month !== arrayDate.getMonth()){
            dateList.push({off: arrayDate.getDate()});
            continue;    
        }
        
        dateList.push({on: arrayDate.getDate()});
    }
};

const paintCalender = (dateList, dateObj) => {
    dateList.map((item, index) => {
        const td = document.createElement("td");
        if(item.off){
            td.className="off";
            td.innerText = item.off;
        }else{
            td.className="on";
            td.innerText = item.on;
            if(item.on === dateObj.date && dateObj.month === today.getMonth()){
                td.classList.add("today");
            }
        };
        
        weekList.push(td);

        if(weekList.length === 7){
            const tr = document.createElement("tr");
            weekList.forEach(item => {
                tr.append(item);
            });
            tbody.append(tr);
            weekList = [];
        }
    })
    
};

const calender = (date, state=0) => {
    weekList = [];
    dateList = [];
    tbody.innerHTML = "";
    moveMonth = state;

    const currentObj = createCalenderObj(date);
    calenderArray(currentObj);
    paintCalender(dateList, currentObj);

    const {month, year} = currentObj;
    caption.innerText = `${month < 9 ? year+"년 "+"0"+Math.abs(month+1)+"월": year+"년 "+(month+1)+"월"}`;
}

calender(today);

const handlePrevMonth = () => {
    moveMonth -= 1;
    const todayMonth = today.getMonth();
    if(todayMonth+moveMonth === -1){
        moveYear -= 1;
        moveMonth = 0;
        moveMonth += 11-todayMonth;
    }
    calender(today, moveMonth);
}

const handlenextMonth = () => {
    moveMonth += 1;
    const todayMonth = today.getMonth();
    if(todayMonth + moveMonth === 12){
        moveYear += 1;
        moveMonth = 0;
        moveMonth -= todayMonth;    
    };
    calender(today, moveMonth);
}

prevMonth.addEventListener("click", handlePrevMonth);
nextMonth.addEventListener("click", handlenextMonth);