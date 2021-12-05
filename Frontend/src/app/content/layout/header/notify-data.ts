export interface Notify{
    messageId: number;
    readed: boolean;
    title: string;
    content: string;
}

export const NOTIFY_DATA: Notify[] = [
    {messageId: 1,readed: false, title: "First", content: "This is first test notification"},
] 