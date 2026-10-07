import Header from "./Header";
import { Message } from "./Home";

export default function Motivations() {
  return (
    <div id="phone">
      <Header name="Motivations" colour="black" />
      <div id="message-container">
        <Message
          side="left"
          text="We want to help groups communicate so they can spend more time doing what they care about"
        />
        <Message
          side="left"
          text="And that means being able to customise your Whatsapp or Signal group chat, just like you can on Slack or Discord"
        />
        <Message
          side="left"
          text="Why Whatsapp and Signal? Those are the most common political organising tools in the UK"
        />
        <Message
          side="left"
          text="Our long term horizon is to help people take control of their communication infrastructure"
        />
        <Message
          side="left"
          text="We believe in sovereign tech, and cooperative technology. To us, that means building technology that centers our political community"
        />
        <Message
          side="left"
          text="Our orientation is around UK politics, at the grassroots and party political level"
        />
        <Message
          side="left"
          text="We want to help the union organiser, the canvasser, the coop founder and the local party member"
        />
        <Message
          side="left"
          text="If we can communicate better, we can do more together"
        />
      </div>
    </div>
  );
}
