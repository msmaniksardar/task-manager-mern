export class NetworkURL {
    static BaseURL = "http://152.42.163.176:2006/api/v1";
    static loginURL = `${NetworkURL.BaseURL}/login`;
    static registerURL = `${NetworkURL.BaseURL}/registration`;
    static RecoverVerifyEmailURL = `${NetworkURL.BaseURL}/RecoverVerifyEmail`;
    static RecoverVerifyOTPURL = `${NetworkURL.BaseURL}/RecoverVerifyOTP`;
    static RecoverResetPasswordURL = `${NetworkURL.BaseURL}/RecoverResetPassword`;
    static createTaskURL = `${NetworkURL.BaseURL}/createTask`;
    static listTaskByStatusURL = `${NetworkURL.BaseURL}/listTaskByStatus`;
    static deleteTaskURL = `${NetworkURL.BaseURL}/deleteTask`;
    static updateTaskStatusURL = `${NetworkURL.BaseURL}/updateTaskStatus`;
}


export class NetworkMethod {
    static POST = "POST";
    static GET = "GET";
} 



