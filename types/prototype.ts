import moment, { MomentInput, CalendarSpec } from 'moment';
import decimal from "decimal.js";
//import { fileIsImage, getImageFromBlob, getExtensionInfo, md5File } from "@/utils/file";

const SERVER_LONGDATETIME_FORMAT = "YYYY-MM-DD HH:mm:ss";
// const MOMENT_CALENDAR_FORMAT = {
//     lastDay: '[Yesterday ] LT',
//     sameDay: '[Today ] LT',
//     nextDay: '[Tomorrow ] LT',
//     lastWeek: '[last] dddd [] LT',
//     nextWeek: 'dddd [] LT',
//     sameElse: 'L'
// }
// moment.updateLocale("en", {
//     calendar: MOMENT_CALENDAR_FORMAT,
//     week: {
//         dow: 1
//     }
// });
// console.log(moment.locale())
// moment.updateLocale("zh-cn", {
//     calendar: MOMENT_CALENDAR_FORMAT,
//     week: {
//         dow: 1
//     }
// });

// moment.locale("km", {
//     calendar: MOMENT_CALENDAR_FORMAT,
//     week: {
//         dow: 1
//     }
// });

Number.prototype.fromNow = function (withoutSuffix?: boolean) {
    try {
        return moment.unix(this as number).fromNow(withoutSuffix);
    } catch {
        console.error(`${this} 不是有效的时间戳`);
        return "";
    }
}
Number.prototype.calendar = function (time?: MomentInput, formats?: CalendarSpec) {
    try {
        return moment.unix(this as number).calendar(time, formats);
    } catch {
        console.error(`${this} 不是有效的时间戳`);
        return "";
    }
}

// // 重写数值设置精度
// Number.prototype.toFixed = function (precision: number) {
//     try {
//         return new decimal(this as number).toFixed(precision);
//     } catch(e:Error){
//         console.error(`${this} 不是有效的数字,${e.message}`);
//         return "";
//     }
// }

// 数字字符串设置精度
String.prototype.toFixed = function (precision: number) {
    try {
        return new decimal(this as string).toFixed(precision);
    } catch {
        console.error(`${this} 不是有效的数字`);
        return "";
    }
}

// 字符串隐藏
String.prototype.mask = function () {
    try {
        return this.replace(/^(.).*(.)$/, "$1***$2")
    } catch {
        console.error(`${this} 不是有效的字符串`);
        return "";
    }
}

String.prototype.fromNow = function (withoutSuffix?: boolean) {
    try {
        return moment(this as string, SERVER_LONGDATETIME_FORMAT).fromNow(withoutSuffix);
    } catch {
        console.error(`${this} 不是有效的时间`);
        return "";
    }
}
String.prototype.calendar = function (time?: MomentInput, formats?: CalendarSpec) {
    try {
        return moment(this as string, SERVER_LONGDATETIME_FORMAT).calendar(time ?? moment(), formats);
    } catch {
        console.error(`${this} 不是有效的时间`);
        return "";
    }
}

Array.prototype.distinct = function () {
    return Array.from(new Set(this))
}

// File.prototype.getImageBase64 = function () {
//     if (!fileIsImage(this)) return undefined;
//     return URL.createObjectURL(this);
// }



// File.prototype.packInfo = async function () {
//     const extension = getExtensionInfo(this)?.[0];
//     if (!!!extension) return;
//     this.extension = extension.ext;
//     this.mime = extension.mime;

//     const md5 = await md5File(this);
//     if (md5) {
//         this.hash = md5;
//         this.md5Name = `${md5}.${extension.ext}`;
//     }

//     if (fileIsImage(this)) {
//         const image = await getImageFromBlob(this);
//         if (image) {
//             this.width = image.width;
//             this.height = image.height;
//         }
//     }
// }

// from: https://github.com/facebook/react-native/issues/21209
FileReader.prototype.readAsArrayBuffer = function (blob) {
    if (this.readyState === this.LOADING) throw new Error("InvalidStateError");
    //@ts-ignore
    this._setReadyState(this.LOADING); this._result = null; this._error = null;
    const fr = new FileReader();
    fr.onloadend = () => {
        //@ts-ignore
        const content = atob(fr.result.substr("data:application/octet-stream;base64,".length));
        const buffer = new ArrayBuffer(content.length);
        const view = new Uint8Array(buffer);
        view.set(Array.from(content).map(c => c.charCodeAt(0)));
        //@ts-ignore
        this._result = buffer; this._setReadyState(this.DONE);
    };
    fr.readAsDataURL(blob);
}

// from: https://stackoverflow.com/questions/42829838/react-native-atob-btoa-not-working-without-remote-js-debugging
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const atob = (input = '') => {
    const str = input.replace(/=+$/, '');
    let output = '';

    if (str.length % 4 == 1) {
        throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (let bc = 0, bs = 0, buffer, i = 0;
        !!(buffer = str.charAt(i++));

        ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
            bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
        buffer = chars.indexOf(buffer);
    }

    return output;
}
