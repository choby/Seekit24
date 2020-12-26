import { getBaseURL } from "@/apis/baseUrl";
import ReportApi from "@/apis/report";
import { HttpResponse, HttpResponseCode } from "@/types/RESTful";
import request from "@/utils/request";


interface Report {
    reason: string;
    content: string;
    imageUrls: string[];
    relatedId: string;
    reportType: number;
}
export const postReport: (report: Report) => Promise<boolean> = async (report: Report) => {
    const response = await request.post<HttpResponse<boolean>>(`${getBaseURL()}${ReportApi.report}`, {
        data: { ...report }
    });
    return response.code === HttpResponseCode.SUCCESS;
};
