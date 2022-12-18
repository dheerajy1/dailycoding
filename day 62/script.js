const contentDaily = document.querySelector('.container-daily-backup')
const contentWeekly = document.querySelector('.container-weekly-backup')
const mainDailybackup = document.querySelector('#main-dailybackup')
const mainWeeklybackup = document.querySelector('#main-weeklybackup')

const checkboxDaily = document.querySelector('#daily-check-box')
const checkboxWeekly = document.querySelector('#weekly-check-box')

checkboxDaily.addEventListener('click',()=>{
    if (checkboxDaily.checked) {
        contentDaily.style.display = 'block'
        mainWeeklybackup.style.display = 'none'
    }
    else {
        contentDaily.style.display = 'none'
        mainWeeklybackup.style.display = 'block'
    }
})

checkboxWeekly.addEventListener('click',()=>{
    if (checkboxWeekly.checked) {
        mainDailybackup.style.display = 'none'
        contentWeekly.style.display = 'block'
    }
    else {
        mainDailybackup.style.display = 'block'
        contentWeekly.style.display = 'none'
    }
})

