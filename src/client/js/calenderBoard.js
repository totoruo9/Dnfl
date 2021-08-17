import fetch from "node-fetch";

const calenderDay = document.querySelectorAll(".calender-list tbody tr");
const planWrite = document.querySelector(".planWrite");

console.log(planWrite);

const handleTodoList = (event) => {
    planWrite.dataset.date = event.target.dataset.date;
    planWrite.classList.remove("displaynone");
};

const handlePlanWrite = (event) => {
    const {target:{dataset:{date}}} = event;

    location.href = `/board/calender/write?date=${date}`
}

calenderDay.forEach(item => {
    item.addEventListener("click", handleTodoList);
});

planWrite.addEventListener("click", handlePlanWrite);