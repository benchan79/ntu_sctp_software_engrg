import Subject from "./Subject";
import Card from "./Card";

// const contentList = [
//   {
//     header: "General",
//     subheader1: "About forwarding limits",
//     subheader2: "How to update WhatsApp",
//     subheader3: "How to change group privacy settings",
//   },
//   {
//     header: "Android",
//     subheader1: "Verifying your number",
//     subheader2: "How to restore your chat history",
//     subheader3: "How to manage your notifications",
//   },
//   {
//     header: "iPhone",
//     subheader1: "How to restore your chat history",
//     subheader2: "How to manage your notifications",
//     subheader3: "How to use status",
//   },
//   {
//     header: "Web and Desktop",
//     subheader1: "About WhatsApp Web and Desktop",
//     subheader2: "How to log in or out",
//     subheader3: "How to manage your notifications",
//   },
//   {
//     header: "KaiOS",
//     subheader1: "How to verify your phone number",
//     subheader2: "How to edit your profile",
//     subheader3: "How to send media, contacts, or location",
//   },
//   {
//     header: "WhatsApp Business for Android",
//     subheader1: "WhatsApp business products",
//     subheader2: "How to download the WhatsApp Business app",
//     subheader3: "How to edit your business profile",
//   },
// ];

// function Container() {
//   return (
//     <>
//       <h1 className="title">Help Center</h1>
//       <Card>
//         {contentList.map((content) => {
//           return (
//             <Subject
//               header={content.header}
//               subheader1={content.subheader1}
//               subheader2={content.subheader2}
//               subheader3={content.subheader3}
//             />
//           );
//         })}
//       </Card>
//     </>
//   );
// }

// Method 2: keep the contents in a separate file Contents.js
import {contents} from "./Contents.js"

function Container() {
  const contentList = [];
  for (const content in contents) {
    contentList.push(
      <Subject
        key={content}
        header={content}
        subheader1={contents[content].subtopics[0]}
        subheader2={contents[content].subtopics[1]}
        subheader3={contents[content].subtopics[2]}
      />
    );
  }

  return (
    <>
      <h1 className="title">Help Center</h1>
      <Card>{contentList}</Card>
    </>
  );
}

export default Container;
