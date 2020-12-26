import moment from "moment";
import { useEffect } from "react";
import timeZone from "moment-timezone";


export default () => {
    useEffect(() => {
        updateLocale();
    }, []);

    const updateLocale = () => {
        const SERVER_LONGDATETIME_FORMAT = "YYYY-MM-DD HH:mm:ss";
        const CALENDAR = {
            twoDaysAgo: "[2 days ago] HH:mm",
            threeDaysAgo: "[3 days ago] HH:mm",
            fourDaysAgo: "[4 days ago] HH:mm",
            fiveDaysAgo: "[5 days ago] HH:mm",
            sixDaysAgo: "[6 days ago] HH:mm",
            sevenDaysAgo: "[7 days ago] HH:mm",
            lastDay: '[Yesterday ] HH:mm',
            sameDay: '[Today ] HH:mm',
            nextDay: '[Tomorrow ] HH:mm',
            lastWeek: '[Last ] dddd HH:mm',
            nextWeek: '[Next ] dddd HH:mm',
            sameElse: SERVER_LONGDATETIME_FORMAT
        };
        moment.calendarFormat = function (m) {
            const timeZoneInput = timeZone.parseZone(m, timeZone.tz.guess());
            const timeZoneNow = Date.now();

            const firstDayOfWeek = moment(timeZoneNow).startOf('isoWeek');
            const lastDayoFWeek = moment(timeZoneNow).endOf('isoWeek');
            let diff = moment(timeZoneInput).diff(firstDayOfWeek, 'days', true);
            const diff2 = moment(timeZoneInput).diff(lastDayoFWeek, 'days', true);

            if (-6 <= diff && diff <= -1)
                return "lastWeek";
            else if (diff < -6)
                return "sameElse";
            else if (diff2 > 0)
                return "nextWeek";

            diff = moment(timeZoneInput).diff(timeZoneNow, 'days', true);

            return diff < -6 ? 'sevenDaysAgo'
                : diff < -5 ? 'sixDaysAgo'
                    : diff < -4 ? 'fiveDaysAgo'
                        : diff < -3 ? 'fourDaysAgo'
                            : diff < -2 ? 'threeDaysAgo'
                                : diff < -1 ? 'twoDaysAgo'
                                    : diff < 0 ? 'lastDay'
                                        : diff < 1 ? 'sameDay'
                                            : diff < 2 ? 'nextDay'
                                                : 'sameElse';
        }

        moment.updateLocale("en", {
            calendar: CALENDAR,
            week: {
                dow: 1,// Monday is the first day of the week
            },
        });


    }
}