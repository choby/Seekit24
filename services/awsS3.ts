import awsS3 from "@/apis/awsS3";
import { getBaseURL } from "@/apis/baseUrl";
import { SessionStorage } from "@/infrastructures/storages";
import { ImageUploadResult } from "@/types/data/ImageUploadResult";
import { EnumMediaType } from "@/types/enums";
import { HttpResponse } from "@/types/RESTful";
import * as FileSystem from 'expo-file-system';
import { FileSystemUploadType } from "expo-file-system";
import * as ImageManipulator from "expo-image-manipulator";

const sessionStorage = new SessionStorage();

export async function uploadFile(uploadType: EnumMediaType, localUri: string) {
    let fileUrl = "";
    if (uploadType === EnumMediaType.IMAGE) {
        const image = await ImageManipulator.manipulateAsync(localUri, undefined, { compress: 1, format: ImageManipulator.SaveFormat.JPEG });
        fileUrl = image.uri;
    }
    const response = await FileSystem.uploadAsync(`${getBaseURL()}${awsS3.files}`, fileUrl, {
        uploadType: FileSystemUploadType.MULTIPART,
        httpMethod: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            "X-Access-Token": (await sessionStorage.getSession())?.accessToken ?? "",
        },
        fieldName: "file",
        mimeType: "image/jpg",
        parameters: {
            uploadType
        }
    });

    const resJson = JSON.parse(response.body) as HttpResponse<ImageUploadResult>;

    if ("data" in resJson && resJson.data) {
        return resJson.data;
    }
}