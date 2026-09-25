import Header from "./Header";
import { Message } from "./Home";

const tools = [
  {
    emoji: "👋",
    title: "Welcome",
    description:
      "Sends a welcome message to your group and/or new members when they join",
  },
  { emoji: "📝", title: "Trello", description: "Adds tasks to trello board" },
  {
    emoji: "🌐",
    title: "Publish",
    description: "Creates source of posts to the web",
  },
  {
    emoji: "🗓️",
    title: "Event",
    description: "Sends reminders of upcoming events to the group",
  },
];

const upcomingTools = [
  { emoji: "🗳️", title: "Poll", description: "Collect and analyse your polls" },
  {
    emoji: "📧",
    title: "Email",
    description: "Send messages to an email list",
  },
  {
    emoji: "🌀",
    title: "Spacetube",
    description: "Connects your chat with other chats",
  },
  {
    emoji: "🎙️",
    title: "Voice",
    description: "Collects voice messages to transcribe and interact with",
  },
];

export default function Tools() {
  return (
    <div id="phone">
      <Header name="Tools" colour="purple" />
      <div id="message-container">
        <Message text="What tools do you have?" side="right" />
        {tools.map((tool) => (
          <Message
            text={`${tool.title} ${tool.emoji} ${tool.description}`}
            side="left"
          />
        ))}
        <Message text="What tools are upcoming?" side="right" />
        {upcomingTools.map((tool) => (
          <Message
            text={`${tool.title} ${tool.emoji} ${tool.description}`}
            side="left"
          />
        ))}
      </div>
    </div>
  );
}
