import Header from "./Header";
import { Message } from "./Home";

const tools = [
  {
    emoji: "👋",
    title: "Welcome",
    description: "Sends a welcome message to your group when new members join",
  },
  {
    emoji: "📧",
    title: "Email Summaries",
    description: "Get summaries of the chat via email",
  },
  {
    emoji: "🌀",
    title: "Spacetube Chat Connection",
    description:
      "Forward messages from your chat to other groups and platforms",
  },
  {
    emoji: "🗓️",
    title: "Event Reminders",
    description: "Sends reminders of upcoming events to the group",
  },
  {
    emoji: "⏰",
    title: "Message Scheduler",
    description: "Schedule messages to be sent at specific times",
  },
  {
    emoji: "🛡️",
    title: "Auto Moderator",
    description: "Approved-number checks, auto-remove and message rules",
  },
  {
    emoji: "📈",
    title: "Stats Dashboard",
    description: "See membership growth and engagement over time",
  },
  {
    emoji: "🎙️",
    title: "Voice",
    description: "Collects voice messages to transcribe and interact with",
  },
  {
    emoji: "🌐",
    title: "Publish to Web",
    description: "Creates source of posts to the web",
  },
  {
    emoji: "📝",
    title: "Trello Integration",
    description: "Adds tasks to a trello board",
  },
];

const upcomingTools = [
  {
    emoji: "🗳️",
    title: "Voting",
    description: "Granular voting with secret ballots",
  },
  {
    emoji: "📜",
    title: "Story Choices",
    description: "Choose your own adventure through a scenario as a group",
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
