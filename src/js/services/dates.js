const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const MONTH = 30 * DAY;
const YEAR = 365 * DAY;

const TIME_UNITS = {
    'second': SECOND,
    'minute': MINUTE,
    'hour': HOUR,
    'day': DAY,
    'month': MONTH,
    'year': YEAR,
}

function plural(number, word) {
    return number + ' ' + (number == 1 ? word : word + 's');
}

export function ago (strTime) {
    let elapsed = Date.now() - Date.parse(strTime);
    let str_time;
    if (elapsed > TIME_UNITS['year']) {
        str_time = 'year';
    } else if (elapsed > TIME_UNITS['month']) {
        str_time = 'month';
    } else if (elapsed > TIME_UNITS['day']) {
        str_time = 'day';
    } else if (elapsed > TIME_UNITS['hour']) {
        str_time = 'hour';
    } else if (elapsed > TIME_UNITS['minute']) {
        str_time = 'minute';
    } else if (elapsed > TIME_UNITS['second']) {
        str_time = 'second';
    }

    return plural(Math.floor(elapsed/TIME_UNITS[str_time]), str_time);
};