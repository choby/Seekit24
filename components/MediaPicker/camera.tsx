import IconFont from "@/components/Iconfont";
import { uuid } from "@/utils";
import { getLogicPixel } from "@/utils/pixelRatio";
import { useNavigation } from "@react-navigation/native";
import { Camera } from 'expo-camera';
import { ImageType } from "expo-camera/build/Camera.types";
import * as ImageManipulator from "expo-image-manipulator";
import { Asset } from "expo-media-library";
import React, { useRef, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
//@ts-ignore
import Loading from 'react-native-whc-loading';
import { Button } from "reactive";
import { Options } from ".";
import NextStepButton from "./nextStepButton";
import SelectedList from "./selectedList";
import styles from "./styles/camera";
import { Viewer } from "./viewer";

enum CameraMode {
    PICTURE = 1,
    VIDEO = 2
}

interface CameraProps {
    mode: CameraMode;
    selectedAssets: (Asset | string)[];
    onSelectAsset: (asset: Asset | string) => void;
    onCancelAsset: (asset?: Asset | string) => void;
    options: Options;
    onNextPress: () => void;
}

export default ({
    mode,
    selectedAssets,
    onSelectAsset,
    onCancelAsset,
    onNextPress,
    options
}: CameraProps) => {
    const navigation = useNavigation();
    const camera = useRef<Camera>(null);
    const viewer = useRef<Viewer>(null);
    const loading = useRef<any>(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
    const taking = useRef(false);

    const disabled = () => {
        return selectedAssets.length >= options.maxSelectQty;
    };

    const takePicture = async () => {
        if (taking.current === true) return;
        taking.current = true;
        const picture = await camera.current?.takePictureAsync({
            // base64: true,
            exif: true,
            quality: 0.5,
            imageType: ImageType.jpg
        });
        if (picture) {
            // console.log(picture.exif);
            //const asset = await MediaLibrary.createAssetAsync(picture.uri);
            const photo = await ImageManipulator.manipulateAsync(picture.uri, [{
                rotate: 0,//-(picture.exif?.Orientation ?? 0)
            }], {
                compress: 0.5
            });

            const now = Date.now();
            const uid = await uuid();
            const pictureAsset = {
                id: uid,
                uri: photo.uri,
                mediaType: "photo",
                width: photo.width,
                height: photo.height,
                creationTime: now,
                modificationTime: now,
                duration: 0,
                filename: `${uid}.${ImageType.jpg}`
            } as Asset;
            onSelectAsset(pictureAsset);
        }
        taking.current = false;
    };

    // const beginRecord = async () => {
    //     const record = await camera.current?.recordAsync();
    //     if (record) {
    //         const now = Date.now();
    //         const uid = await uuid();
    //         publishState.setSelectedAssets([...publishState.selectedAssets, {
    //             id: uid,
    //             uri: record.uri,
    //             mediaType: "video",
    //             width: 0,
    //             height: 0,
    //             creationTime: now,
    //             modificationTime: now,
    //             duration: 0,
    //         } as Asset]);
    //     }
    // }

    // const stopRecord = async () => {
    //     camera.current?.stopRecording();
    // }

    const onPressNext = async () => {
        loading.current?.show();
        await onNextPress();
        loading.current?.close();
    };

    return <View style={styles.cameraContainer}>
        {
            options.maxSelectQty === 1 && selectedAssets.length === 1 &&
            <View style={[styles.cameraContainer, styles.cameraContainerSingle]}>
                <Image source={{ uri: typeof selectedAssets[0] === "string" ? selectedAssets[0] : selectedAssets[0].uri }} style={styles.cameraContainer} />
            </View>
        }
        {
            (options.maxSelectQty !== 1 || selectedAssets.length === 0) && <Camera style={[styles.cameraContainer, options.maxSelectQty === 1 && styles.cameraContainerSingle]} type={type} flashMode={flashMode} ref={camera} autoFocus useCamera2Api focusable>
                <View style={[styles.cameraFunctions]}>
                    {/* 返回 */}
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <IconFont name="yemianguanbi-bai1x" />
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row" }}>
                        {/* 闪光灯 */}
                        <TouchableOpacity onPress={() => {
                            setFlashMode(flashMode === Camera.Constants.FlashMode.off
                                ? Camera.Constants.FlashMode.on
                                : Camera.Constants.FlashMode.off);
                        }} hitSlop={{
                            top: 10,
                            left: 10,
                            bottom: 10,
                            right: 10,
                        }}>
                            {
                                flashMode === Camera.Constants.FlashMode.on ? <IconFont name="shanguangdeng1x" /> : <IconFont name="shanguangdengguanbi" />
                            }

                        </TouchableOpacity>
                        {/* 切换前置/后置摄像头 */}
                        <TouchableOpacity onPress={() => {
                            setType(type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back);
                        }}
                            hitSlop={{
                                top: 10,
                                left: 10,
                                bottom: 10,
                                right: 10,
                            }}
                            style={styles.cameraFunctionFront}>
                            <IconFont name="jingtouqiehuan1x" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Camera>
        }

        <View style={[styles.paddingContainer, options.maxSelectQty === 1 ? styles.paddingContainerSingle : undefined]}>
            {
                options.maxSelectQty > 1 && <>
                    <SelectedList
                        onPreview={(asset) => {
                            viewer.current?.open(selectedAssets, asset);
                        }}
                        onCancelAsset={onCancelAsset}
                        onSelectAsset={onSelectAsset}
                        selectedAssets={selectedAssets}
                    >
                        <NextStepButton onNextPress={onNextPress} maxSelectQty={options.maxSelectQty} selectedAssets={selectedAssets} />
                    </SelectedList>
                    <Viewer
                        selectedAssets={selectedAssets}
                        onCancelAsset={onCancelAsset}
                        onSelectAsset={onSelectAsset}
                        options={options}
                        onNextPress={onNextPress}
                        ref={viewer}
                    />
                </>
            }


            <View style={[styles.cameraTakeContainer]}>
                {
                    mode === CameraMode.PICTURE &&
                    <>
                        <View>
                            {
                                options.maxSelectQty === 1 && <TouchableOpacity activeOpacity={1} onPress={() => onCancelAsset()} disabled={selectedAssets.length === 0}>
                                    <IconFont name="bianzu8" size={getLogicPixel(40)} style={selectedAssets.length === 0 ? { opacity: 0.5 } : undefined} />
                                </TouchableOpacity>
                            }

                        </View>
                        <Button disabled={disabled()} onPress={() => takePicture()} style={styles.cameraTakeButton}></Button>
                        <View>
                            {
                                options.maxSelectQty === 1 && <TouchableOpacity activeOpacity={1} onPress={onPressNext} disabled={selectedAssets.length === 0} >
                                    <IconFont name="bianzu8beifen" size={getLogicPixel(40)} style={selectedAssets.length === 0 ? { opacity: 0.5 } : undefined} />
                                </TouchableOpacity>
                            }
                        </View>
                    </>
                }
                {
                    // mode === CameraMode.VIDEO &&
                    // <>
                    //     <View>
                    //         <IconFont name="shanchushipin1x" size={40} />
                    //     </View>
                    //     <Button onPress={() => beginRecord()} style={styles.cameraTakeButton}></Button>
                    //     <View>
                    //         <IconFont name="shipinluzhiwancheng1x" size={40} />
                    //     </View>
                    // </>
                }

            </View>
        </View>
        {
            options.maxSelectQty === 1 && <Loading ref={loading} backgroundColor={'#00000096'}
                indicatorColor={'#fff'} />
        }
    </View>;
};