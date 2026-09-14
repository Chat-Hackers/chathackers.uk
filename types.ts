export type Option = {
    question: string;
    reply: {
        text: string;
        link?: string;
        linkText?: string;
    }[];
};

export type Message = {
    text: string;
    side: string;
    link?: string;
    linkText?: string;
};