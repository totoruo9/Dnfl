const calenderList = document.querySelector(".calender-list");
const caption = calenderList.querySelector("caption");
const tbody = calenderList.querySelector("tbody");

const today = new Date();

const createCalenderObj = (setDate) => {
    return {
        year: setDate.getFullYear(),
        month: setDate.getMonth(),
        day: setDate.getDay(),
        date: setDate.getDate(),
        get startDay() {
            return new Date(this.year, this.month, 1).getDay();
        },
    }
}

const currentObj = createCalenderObj(today);

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

calenderArray(currentObj);

const paintCalender = (dateList) => {
    dateList.map((item, index) => {
        const td = document.createElement("td");
        if(item.off){
            td.className="off";
            td.innerText = item.off;
        }else{
            td.className="on";
            td.innerText = item.on;
            if(item.on === currentObj.date){
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

paintCalender(dateList);

const {month} = currentObj;
caption.innerText = `${month < 9 ? "0"+(month+1)+"월": (month+1)+"월"}`;

// const start = new Date(current.year, current.month, 1);

// let startDay = 1-start.getDay();



// for(let i=startDay; i<= 31; i++){
//     const monthCalender = new Date(current.year, current.month, i);
//     const monthDate = monthCalender.getDate();

//     if(current.month !== monthCalender.getMonth()){
//         continue;
//     }

//     if(dateList.length < 6){
//         dateList.push(monthDate);
//     } else {
//         dateList.push(monthDate);
//         weekList.push(dateList);
//         dateList = [];
//     }
// }

// if(weekList.length < 6){
//     const len = dateList.length;
    
// }


// weekList.forEach(item => {
//     const tr = document.createElement("tr");
//     item.forEach(date => {
//         const td = document.createElement("td");
//         td.innerText = date;
//         tr.appendChild(td);
//     });
//     tbody.appendChild(tr);
// })




