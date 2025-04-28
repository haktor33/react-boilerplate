import { notification as antNotification } from 'antd';

export const notification = (type, message, description) => {
    switch (type) {
        case "warning":
            antNotification.warning({
                message: message,
                description: description,
            });
            break;
        case "error":
            antNotification.error({
                message: message,
                description: description,
            });
            break;
        case "info":
            antNotification.info({
                message: message,
                description: description,
            });
            break;
        case "success":
            antNotification.success({
                message: message,
                description: description,
            });
            break;
        default:
            break;
    }
}

export const getStringValuesFromEnum = (enumType, enumValue) => {
    for (var enumMember in enumType) {
        if (enumType[enumMember] === enumValue) { return enumMember }
    }
}