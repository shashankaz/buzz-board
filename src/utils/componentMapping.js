import GoogleSlide from "../components/Widgets/GoogleSlide/GoogleSlide";
import PomodoroTimer from "../components/Widgets/PomodoroTimer/PomodoroTimer";
import GoogleSpreadsheet from "../components/Widgets/GoogleSpreadsheet/GoogleSpreadsheet";
import GoogleForm from "../components/Widgets/GoogleForm/GoogleForm";
import Music from "../components/Widgets/Music/Music";
import Polls from "../components/Widgets/Polls/Polls";
import IssueTracker from "../components/Widgets/IssueTracker/IssueTracker";
import DGC from "../components/Widgets/DGC/DGC";
import OpportunityBoard from "../components/Widgets/OpportunityBoard/OpportunityBoard";
import GoogleMeet from "../components/Widgets/GoogleMeet/GoogleMeet";
import GoogleKeep from "../components/Widgets/GoogleKeep/GoogleKeep";
import ChatGPT from "../components/Widgets/ChatGPT/ChatGPT";

const componentMapping = {
  "Google Slide": GoogleSlide,
  "Pomodoro Timer": PomodoroTimer,
  "Google Spreadsheet": GoogleSpreadsheet,
  "Google Form": GoogleForm,
  "Music": Music,
  "Polls": Polls,
  "Issue Tracker": IssueTracker,
  "DGC - Daily Growth Checklist": DGC,
  "Opportunity Board": OpportunityBoard,
  "Google Meet": GoogleMeet,
  "Google Keep": GoogleKeep,
  "ChatGPT": ChatGPT,
};

export default componentMapping;
