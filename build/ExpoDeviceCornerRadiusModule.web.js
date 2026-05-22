import { NativeModule, registerWebModule } from "expo";
class ExpoDeviceCornerRadiusModule extends NativeModule {
    getCornerRadius() {
        return 0;
    }
}
export default registerWebModule(ExpoDeviceCornerRadiusModule, "ExpoDeviceCornerRadiusModule");
//# sourceMappingURL=ExpoDeviceCornerRadiusModule.web.js.map