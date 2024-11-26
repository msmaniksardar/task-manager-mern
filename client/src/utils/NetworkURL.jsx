export class NetworkURL {
    static BaseURL = "http://35.73.30.144:2005/api/v1";
    static loginURL = `${NetworkURL.BaseURL}/login`;
    static registerURL = `${NetworkURL.BaseURL}/registration`;
    static RecoverVerifyEmailURL = `${NetworkURL.BaseURL}/RecoverVerifyEmail`;
    static RecoverVerifyOTPURL = `${NetworkURL.BaseURL}/RecoverVerifyOTP`;
    static RecoverResetPasswordURL = `${NetworkURL.BaseURL}/RecoverResetPassword`;
    static createTaskURL = `${NetworkURL.BaseURL}/createTask`;
    static listTaskByStatusURL = `${NetworkURL.BaseURL}/listTaskByStatus`;
    static deleteTaskURL = `${NetworkURL.BaseURL}/deleteTask`;
    static updateTaskStatusURL = `${NetworkURL.BaseURL}/updateTaskStatus`;
    static taskStatusCountURL = `${NetworkURL.BaseURL}/taskStatusCount`;
}


export class NetworkMethod {
    static POST = "POST";
    static GET = "GET";
} 



