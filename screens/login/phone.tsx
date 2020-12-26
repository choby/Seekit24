import { Pages } from "@/navigation/pages";
import { User } from "@/types/data/User";
import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import PhoneNumber from "./components/phoneNumber";


export interface LoginByPhoneRouteParams {
    changeAccount?: boolean;
    prevRoute?: Readonly<{
        key: string;
        name: string;
        params?: Record<string, unknown> | undefined;
    }>;
    phone?: string;
}

export default () => {
    const [accountInfo, setAccountInfo] = useState<User>();
    const route = useRoute<Route<Pages.LoginByPhone>>();
    const changeAccount = route.params?.changeAccount;

    return <PhoneNumber changeAccount={changeAccount} onInputPhone={phone => {
        setAccountInfo({ ...accountInfo, phone } as User);
    }}
        phone={route.params?.phone}
        prevRoute={route.params?.prevRoute}
    />;
};