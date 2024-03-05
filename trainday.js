
const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
if (random === 0) {
return 'Marathon';
 } else if (random === 1) {
return 'Triathlon';
 } else if (random === 2) {
return 'Pentathlon';
 }
};
const getTrainingDays = event=> {
    let days='';
    if (event === 'Marathon') {
     days = 50;
     } else if (event === 'Triathlon') {
     days = 80;
     } else if (event === 'Pentathlon') {
     days = 120;
     }
    return days; 
    };
    //console.log(getTrainingDays());

const logEvent =(name,event) => {

    
    console.log(`${name}'s event is: ${event}`);
    
    };
    
    const logTime = ( name,days)=> {
    console.log(`${name}'s time to train is: ${days} days`);
    };
    const event = getRandEvent();
    const days = getTrainingDays(event);
    const name = 'FLORENCE';
    logEvent(name ,event);
    logTime(name, days);

    // other competitor

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);

// other competitor

const event3 = getRandEvent();
const days3 = getTrainingDays(event2);
const name3 = 'steicy';

logEvent(name3, event3);
logTime(name3, days3);