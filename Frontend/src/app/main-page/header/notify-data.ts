export interface Notify{
    messageId: number;
    readed: boolean;
    title: string;
    content: string;
}

export const NOTIFY_DATA: Notify[] = [
    {messageId: 1,readed: false, title: "First", content: "This is first test notification"},
    {messageId: 2, readed: false, title: "Second", content: "This is second test notification"},
    {messageId: 3, readed: false, title: "Third", content: "This is third test notification"}
] 