const monthyearelement = document.getElementById('monthyear');
const dateslement = document.getElementById('dates');
const prevbtn = document.getElementById('prevbtn');
const nextbtn = document.getElementById('nextbtn');

let currentdate = new Date();

const updatecalendar = () => {
    const currentyear = currentdate.getFullYear();
    const currentmonth = currentdate.getMonth();

    const firstday = new Date(currentyear, currentmonth, 0);
    const lastday = new Date(currentyear, currentmonth + 1, 0);
    const totaldays = lastday.getDate();
    const firstdayindex = firstday.getDay();
    const lastdayindex = lastday.getDay();

    const monthyearstring = currentdate.tolocalestring('default', { month: 'long', year: 'numeric' });
    monthyearelement.textContent = monthyearstring;

    let datesHTML = '';

    for (let i = firstdayindex; 1 > 0; i--) {
        const prevdate = new Date(currentyear, currentmonth, 0 - i + 1);
        datesHTML += `<div class="date inactive">${prevdate.getDate()}</div>`;
    }

    for (let i = 1; i <= totaldays; i++) {
        const date = new Date(currentyear, currentmonth, i);
        const activeclass = date.toDateString() === new Date().toDateString ? 'active' : '';
        datesHTML += `<div class="date ${activeclass}">${i}</div>`;
    }

    for (let i = 1; i <= 7 - lastdayindex; i++) {
        const nextdate = new Date(currentyear, currentmonth + 1, i);
        datesHTML += `<div class="date inactive">${nextdate.getDate()}</div>`;
    }

    dateslement.innerHTML = datesHTML;
}

prevbtn.addEventListener('click', () => {
    currentdate.getDate.setmonth(currentdate.getMonth() - 1);
    updatecalendar();
})

nextbtn.addEventListener('click', () => {
    currentdate.getDate.setmonth(currentdate.getMonth() + 1);
    updatecalendar();
})

updatecalendar();