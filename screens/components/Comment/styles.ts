import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    commentContainer: {

    },
    commentTitle: {
        fontSize: FontSize.TEXT_SIZE_6,
        color: Color.SECONDARY_1,
        fontFamily: FontFamily.SEMIBOLD,
    },
    closeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: getLogicPixel(20),
        paddingBottom: getLogicPixel(12)
    },
    total: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_3
    },
    commentItemContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
        paddingTop: getLogicPixel(16)
    },
    commentItemTopBorder: {
        borderTopColor: Color.SEPARATOR,
        borderTopWidth: getLogicPixel(0.5),

    },
    commentItemReplyContainer: {
        borderTopColor: Color.SEPARATOR,
        borderTopWidth: getLogicPixel(0.5),
        paddingTop: getLogicPixel(15),
        marginTop: getLogicPixel(12)
    },
    commentItemContentContainer: {
        paddingLeft: getLogicPixel(8),
        flex: 1,
        marginBottom: getLogicPixel(15),
    },
    commentItemNickNameAndTime: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: getLogicPixel(32)
    },
    commentItemNickNameContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: getLogicPixel(32),
        width: "100%",
        maxWidth: "50%"
    },
    commentItemNickName: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_2,

    },
    commentItemTime: {
        fontSize: FontSize.TEXT_SIZE_2,
        fontFamily: FontFamily.REGULAR,
        color: Color.SECONDARY_4
    },
    commentItemSellerNameTag: {
        borderColor: Color.PRIMARY,
        borderWidth: getLogicPixel(0.5),
        justifyContent: "center",
        borderRadius: getLogicPixel(2),
        backgroundColor: "#FFFFFF",
        height: getLogicPixel(14),
        marginLeft: getLogicPixel(4),
        paddingBottom: 0,
        paddingTop: 0
    },
    commentItemSellerName: {
        fontFamily: FontFamily.MEDIUM,
        fontSize: FontSize.TEXT_SIZE_1,
        color: Color.PRIMARY,

    },
    commentItemContent: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_1,
        textAlign: "justify",
    },
    commentItemReplyContentContainer: {
        marginBottom: 0,
    },
    commentItemReply: {
        fontSize: FontSize.TEXT_SIZE_3,
    },

    commentLoadMoreContainer: {
        alignItems: "center",
    },
    commentLoadMoreText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.WARNING
    },
    replyUserName: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_3
    },
    messageInputContainer: {
        zIndex: 3,
        minHeight: getLogicPixel(50),
        backgroundColor: "#FFFFFF",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20),
        justifyContent: "space-between",
        shadowColor: "#002695",
        shadowOffset: {
            width: 1,
            height: -1
        },
        shadowOpacity: 0.04,
        bottom: 0
    },
    messagePlaceholderText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_4
    },

    bottomSendButton: {
        width: getLogicPixel(34),
        height: getLogicPixel(34),
        borderRadius: getLogicPixel(34),
        paddingLeft: 0,
        paddingRight: 0
    },
});
