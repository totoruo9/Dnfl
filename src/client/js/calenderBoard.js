import fetch from "node-fetch";

const calenderDay = document.querySelectorAll(".calender-list tbody tr");
const planWrite = document.querySelector(".planWrite");

console.log(planWrite);

const handleTodoList = (event) => {
    planWrite.dataset.date = event.target.dataset.date;
    planWrite.classList.remove("displaynone");
};

const handlePlanWrite = async(event) => {
    const text = event.target.dataset.date;
    console.log(text);

    const test = await fetch("/board/calender/write",{
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({text}),
    });

    console.log(test);

    // location.href = `/board/calender/write?date=${event.target.dataset.date}`
}

calenderDay.forEach(item => {
    item.addEventListener("click", handleTodoList);
});

planWrite.addEventListener("click", handlePlanWrite);