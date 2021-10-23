export interface UserData {
    email: string;
    name: string;
}

export interface RegisterResponse {
    message: string;
    user_data: UserData;
    email_sent: boolean;
}