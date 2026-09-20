import Header from "./Header";
import Markdown from "react-markdown";
import privacyNotice from "./privacy_notice.md?raw";
import privacyNoticeUrl from "./privacy_notice.md?url";

export default function Privacy() {
  return (
    <div id="phone">
      <Header name="Privacy" colour="green" />
      <a id="download-link" href={privacyNoticeUrl} download="chat_hackers_privacy_notice.md">
        Download privacy notice
      </a>
      <div id="message-container">
        <Markdown>{privacyNotice}</Markdown>
      </div>
    </div>
  );
}
