const contentDaily = document.querySelector('.container-daily-backup')
const contentWeekly = document.querySelector('.container-weekly-backup')
const mainDailybackup = document.querySelector('#main-dailybackup')
const mainWeeklybackup = document.querySelector('#main-weeklybackup')
const mainContainer = document.querySelector('.main-container')

const checkboxDaily = document.querySelector('#daily-check-box')
const checkboxWeekly = document.querySelector('#weekly-check-box')

const calculateDaily = document.querySelector('#button-daily-calculate')
const dailySolutions = document.querySelector('.container-daily-solutions')
const calculateWeekly = document.querySelector('#button-weekly-calculate')
const WeeklySolutions = document.querySelector('.container-weekly-solutions')


checkboxDaily.addEventListener('click', () => {
    contentDaily.classList.toggle('showblock')
    mainWeeklybackup.classList.toggle('showhidden')
    mainContainer.classList.toggle('switchmaincontent')

})

checkboxWeekly.addEventListener('click', () => {
    mainDailybackup.classList.toggle('showhidden')
    contentWeekly.classList.toggle('showblock')
    mainContainer.classList.toggle('switchmaincontent')
})


calculateDaily.addEventListener('click', () => {
    var a = parseInt(document.getElementById("a").value);

    var b = parseInt(document.getElementById("b").value);
    var b1 = parseInt(document.getElementById("b1").value);

    var d = parseInt(document.getElementById("d").value);
    var c = parseInt(document.getElementById("c").value);
    if (a > d) {
        let purelog = ((24 - Math.abs(a - d)) * 60) / c;

        document.getElementById("a1").innerHTML = `1. Previous day One Full Bakup = ` + (a > 12 ? a - 12 : a) + (a < 12 ? ` AM` : ` PM`);

        if (b1 > d) {
            while (b1 >= d) {
                b1 = b1 - b;
            }
        } else {
            //(b1<d)
            while (b1 - b < d) {
                b1 = b1 + b;
            }
        }
        let log1 = (Math.abs(b1 - d) * 60) / c;
        b1 = b1 > 12 ? b1 - 12 + ` PM` : b1 + ` AM`;
        document.getElementById("b2").innerHTML = `2. One Diff Backup = ` + b1;
        d = d > 12 ? d - 12 + " PM" : d + " AM";
        let text1 = `${log1} .ldf between ${b1} and ${d}`;

        b1 = parseInt(document.getElementById("b1").value);
        if (b1 - b > a) {
            while (b1 - b > a) {
                b1 = b1 - b;
            }
        } else {
            //b1 - b < a
            while (b1 < a) {
                b1 = b1 + b;
            }
        }

        document.getElementById("c1").innerHTML = `3. Log Backups =  ${log1} (${text1})  log files`;

        a = parseInt(document.getElementById("a").value);
        d = parseInt(document.getElementById("d").value);
        a = (a > 12 ? a - 12 : a) + (a < 12 ? ` AM` : ` PM`);
        d = d > 12 ? d - 12 + ` PM` : d + ` AM`;
        let text3 = `between Prev's day ${a} & Current day ${d}`;
        document.getElementById("c2").innerHTML = `OR <br> 1. Full backup at ${a} & Purely Log Backup = ${purelog}(${text3}) `;
    } else {
        //(a < d)
        let purelog = ((12 + Math.abs(a - Math.abs(12 - d))) * 60) / c;

        document.getElementById("a1").innerHTML = `1. Same day One Full Bakup = ` + (a > 12 ? a - 12 : a) + (a < 12 ? ` AM` : ` PM`);
        if (b1 > d) {
            while (b1 >= d) {
                b1 = b1 - b;
            }
        } else {
            //(b1<d)
            while (b1 + b < d) {
                b1 = b1 + b;
            }
        }
        let log1 = (Math.abs(b1 - d) * 60) / c;
        b1 = b1 > 12 ? b1 - 12 + ` PM` : b1 + ` AM`;
        document.getElementById("b2").innerHTML = `2. One Diff Backup = ` + b1;
        d = d > 12 ? d - 12 + ` PM` : d + ` AM`;
        let text1 = `${log1} .ldf between ${b1} and ${d}`;

        b1 = parseInt(document.getElementById("b1").value);
        if (b1 - b > a) {
            while (b1 - b > a) {
                b1 = b1 - b;
            }
        }

        document.getElementById("c1").innerHTML = `3. Log Backups =  ${log1} (${text1}) log files`;

        a = parseInt(document.getElementById("a").value);
        d = parseInt(document.getElementById("d").value);
        a = (a > 12 ? a - 12 : a) + (a < 12 ? ` AM` : ` PM`);
        d = d > 12 ? d - 12 + ` PM` : d + ` AM`;
        let text3 = `between ${a} & ${d}`;
        document.getElementById("c2").innerHTML = `OR <br> 4. Purely Log Backup = ${purelog}(${text3}) `;
    }
    dailySolutions.classList.toggle('showblock')
})
calculateWeekly.addEventListener('click', () => {
    let weekn = document.querySelector("#wd").value;

    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
    let numwe = weekday.findIndex((i) => i === weekn) + 1;
    var wa = parseInt(document.getElementById("wa").value);
    var wb = parseInt(document.getElementById("wb").value);
    var i, j = 0, we = parseInt(document.getElementById("we").value);

    numwe = wb > we ? (numwe = numwe - 1) : numwe;

    let wed = weekday[numwe - 1];
    document.getElementById("as1").innerHTML = `One Full Backup, Last Sunday = ${wa > 12 ? wa - 12 : wa}  ${wa < 12 ? ` AM` : ` PM`}`;

    document.getElementById("bs2").innerHTML = `One recent Differential Backu = ${wed} ${wb > 12 ? wb - 12 : wb}  ${wb < 12 ? ` AM` : ` PM`}`;
    if (wb > we) {
        for (i = 0; i < we; i++) {
            if (wb < 24) {
                for (; wb < 24; j++) {
                    wb += 1;
                }
            }
        }
    } else {
        for (i = 0; wb < we; i++) wb += 1;
    }
    var wc = parseInt(document.getElementById("wc").value);
    we1 = document.getElementById("we").value;

    document.getElementById("cs1").innerHTML = `Log Backups ${((i + j) * 60) / wc + parseInt(we1.slice(-2) / wc)} log files`;
    WeeklySolutions.classList.toggle('showblock')
})

const dropdownbox = document.querySelector('.dropdownbox')
const containerWeekdays = document.querySelector('.container-weekdays')
const weekdays = document.querySelectorAll('.weekdays')

dropdownbox.addEventListener('click', () => {
    containerWeekdays.classList.toggle('showvisibility')
})
window.addEventListener('click', (e) => {
    if (!e.target.matches('.dropdownbox') && containerWeekdays.classList.contains('showvisibility'))
        containerWeekdays.classList.remove('showvisibility')
})

weekdays.forEach((weekday) => {
    weekday.addEventListener('click', () => {
        dropdownbox.value = weekday.innerHTML
    })
})

