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

})

checkboxWeekly.addEventListener('click', () => {
    mainDailybackup.classList.toggle('showhidden')
    contentWeekly.classList.toggle('showblock')
    //mainContainer.classList.toggle('switchmaincontent')
})


calculateDaily.addEventListener('click', () => {
    dailySolutions.classList.toggle('showblock')
})
calculateWeekly.addEventListener('click', () => {
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

