const moment = require('moment-timezone');

const inputTimeLimitList = ['09:00-12:00', '19:00-21:00'];
const inputMenuItem = 'Dosa';

const currentDate = new Date();

// var indianTime = moment.tz(currentDate, "Asia/Kolkata").format('HH:mm');

var indianTime = "21:01";

console.log('Current Indian Time is (24 hours) :', indianTime);

const checkAvailability = (inputTimeLimitList, inputMenuItem) => {
  inputTimeLimitList.forEach((timeLimit) => {
    const timeLimitAfterSplit = timeLimit.split('-');
    if (timeLimitAfterSplit[0] <= indianTime && timeLimitAfterSplit[1] >= indianTime) {
      console.log(`${inputMenuItem} is available now`);

    }
    if (timeLimitAfterSplit[0] >= indianTime && timeLimitAfterSplit[1] <= indianTime) {
      console.log(`${inputMenuItem} is NOT available now at this time limit`);
    }
  })
}

checkAvailability(inputTimeLimitList, inputMenuItem);
