import Header from "./Header";
import { Message } from "./Home";

export default function FAQ() {
  return (
    <div id="phone">
      <Header name="FAQ" colour="blue" />
      <div id="message-container">
        <Message side="left" text="FAQ coming soon" />
      </div>
    </div>
  );
}
