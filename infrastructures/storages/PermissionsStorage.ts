import AsyncStorage from '@react-native-community/async-storage';
import { PermissionStatus, PermissionType } from "expo-permissions";

type AppPermissions = {
    [K in PermissionType]?: PermissionStatus;
};

export class PermissionsStorage {
    private PERMISSIONS = "PERMISSIONS";

    private getPermissions = async () => {
        const permissions = await AsyncStorage.getItem(this.PERMISSIONS);
        if (permissions)
            return JSON.parse(permissions) as AppPermissions;
        return {};
    };

    async getPermission(name: PermissionType) {
        return (await this.getPermissions())[name];
    }

    async updatePermission(name: PermissionType, status?: PermissionStatus) {
        const permissions = await this.getPermissions();
        permissions[name] = status;
        AsyncStorage.setItem(this.PERMISSIONS, JSON.stringify(permissions));
    }

}
