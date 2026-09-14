import { useEffect, useState, useRef } from "react";
import Header from "./Header";
import { Message, TypingIndicator, Option } from "./Home";
import type { Option as OptionType, Message as MessageType } from "./types";

const options: OptionType[] = [
  {
    question: "Are my messages private?",
    reply: [
      {
        text: "	Yes. Our automated system needs to see messages to provide actions, but we don't read individual messages unless they are brought to our attention by a bug report.",
      },
    ],
  },
  {
    question: "How much does this cost?",
    reply: [
      {
        text: "All our tools on offer are free, and will remain so. If in future we create a tool with a high running-cost, then we may need to charge for that tool in particular, however this wouldn't affect the users of the other ones. ",
      },
    ],
  },
  {
    question: "How does this work?",
    reply: [
      {
        text: "We use a piece of software called the Whatsapp-Matrix bridge, to bring messages onto our server, where we process and reply to them using the bridge.",
      },
    ],
  },
  {
    question: "		Can I make my own tools?",
    reply: [
      {
        text: "Yes, please get in contact and you can see the code for the existing tools on ",
        linkText: "our github",
        link: "https://github.com/Chat-Hackers",
      },
    ],
  },
  {
    question: "Can I self-host this system?",
    reply: [
      {
        text: "Yes, and we can provide free support to set that up. You will need a UK phone number and a Matrix homeserver to run these tools yourself.",
      },
    ],
  },
];

const firstMessage = {
  text: "hello, I hear you have some frequently asked questions",
  side: "left",
};

export default function FAQ() {
  const [usedOptions, setUsedOptions] = useState<string[]>([]);
  const [messages, setMessages] = useState<MessageType[]>([firstMessage]);
  const [typing, setTyping] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number>();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView();
  }, [messages]);

  function addToMessages(newMessages: MessageType[], delay = false) {
    if (delay) {
      setTimeout(() => {
        setMessages((prev) => prev.concat(newMessages));
      }, 1000);

      setTimeoutId((prev) => {
        if (prev) clearTimeout(prev);

        const typingTimeout = setTimeout(() => {
          setTyping(false);
          setTimeoutId(undefined);
        }, 1000);

        return typingTimeout;
      });
    } else {
      setMessages((prev) => prev.concat(newMessages));
    }
  }

  return (
    <div id="phone">
      <Header name="FAQ" colour="blue" />
      <div id="message-container">
        {messages.map((message) => (
          <Message
            text={message.text}
            side={message.side}
            link={message.link}
            linkText={message.linkText}
          />
        ))}
        {typing && <TypingIndicator />}
        <div ref={bottomRef} />
      </div>
      <div id="message-options">
        {options
          .filter((option) => !usedOptions.includes(option.question))
          .map((option) => (
            <button
              className="option-container"
              onClick={() => {
                setUsedOptions(usedOptions.concat(option.question));
                addToMessages([{ text: option.question, side: "right" }]);
                setTyping(true);
                addToMessages(
                  option.reply.map((reply) => ({
                    text: reply.text,
                    side: "left",
                    link: reply.link,
                    linkText: reply.linkText,
                  })),
                  true,
                );
              }}
            >
              {" "}
              <Option text={option.question} />
            </button>
          ))}
        {options.length === usedOptions.length && (
          <button
            className="option-container reset"
            onClick={() => {
              setMessages([firstMessage]);
              setUsedOptions([]);
            }}
          >
            <Option text={"Reset"} />
          </button>
        )}
      </div>
    </div>
  );
}
