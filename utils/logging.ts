import { CaptureContext } from '@sentry/types';
import * as Sentry from "sentry-expo";

export class Logging {
    public static error(exception: any, captureContext?: CaptureContext) {
        return Sentry.Native.captureException(exception, captureContext);
    }
}