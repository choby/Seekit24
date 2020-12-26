import React, { PropsWithChildren } from 'react';
import Moment, { MomentProps } from 'react-moment';
import { Text } from 'react-native';
import timezone from 'moment-timezone';
import moment from 'moment';

Moment.globalMoment = moment;
Moment.globalTimezone = "Asia/Phnom_Penh";
Moment.globalLocal = true;
const LONGDATETIMEFORMAT = "YYYY-MM-DD HH:mm:ss";


export default ({ children, calendar, ...otherProps }: PropsWithChildren<Omit<MomentProps, "element" | "calendar">> & { calendar?: boolean }) => {
    const showFormat = () => {
        return calendar !== true;
    }
    return <Moment
        element={Text}
        {...otherProps}
        calendar={calendar}
        format={showFormat() ? LONGDATETIMEFORMAT : undefined}
    >
        {timezone.tz(children, "UTC")}
    </Moment>;
}