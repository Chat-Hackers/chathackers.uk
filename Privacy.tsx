import Header from "./Header";
import Markdown from "react-markdown";
import privacyNotice from "./privacy_notice.md?raw";

export default function Privacy() {
  return (
    <div id="phone">
      <Header name="Privacy" colour="green" />
      <Markdown>{privacyNotice}</Markdown>
    </div>
  );
}
