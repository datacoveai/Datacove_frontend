import React, { useState, useRef, useMemo } from "react";
import vector from "../assets/Vector.png";
import bag from "../assets/Dashboard/bag.png";
import draft from "../assets/Dashboard/draft.png";
import question from "../assets/Dashboard/question.png";
import case_img from "../assets/Dashboard/case.png";
import { ArrowBigDown, ArrowDown, ChevronRight, Send } from "lucide-react";
import { FileUp } from "lucide-react";
import { Editor } from "@tinymce/tinymce-react";
import useAppStore from "../store/useAppStore";

const DashboardContent = () => {
  const { user, saveNote } = useAppStore();
  // console.log("USER", user);
  const [noteData, setNoteData] = useState({
    NoteTitle: "",
    NoteContent: "",
  });

  const handleEditorChange = (content, editor) => {
    setNoteData({
      ...noteData,
      NoteContent: content, // Capture editor content
    });
  };
  const handleTitleChange = (e) => {
    setNoteData({
      ...noteData,
      NoteTitle: e.target.value, // Update NoteTitle when typing
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const plainTextContent =
      new DOMParser().parseFromString(noteData.NoteContent, "text/html").body
        .textContent || "";
    const credential = {
      userId: user._id,
      title: noteData.NoteTitle,
      content: noteData.NoteContent,
    };
    saveNote(credential);
  };

  return (
    <div className="flex-1 p-12 bg-[#060b27] space-y-8">
      <div className="flex gap-6 h-auto">
        {/* Left Section */}
        <div className="flex-1 p-2">
          <div className="space-y-6 flex flex-col justify-between h-full">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/10 rounded-full">
                <img src={vector} alt="" />
              </div>
              <h2 className="bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent font-bold text-3xl">
                AI For Document Review
              </h2>
            </div>

            <p className="bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent text-xl">
              Which legal Task can AI accelerate for you today?
            </p>

            {/* Grid Container */}
            <div className="grid grid-cols-2 gap-6 h-full">
              {[
                { title: "Ask a Question?", icon: bag },
                { title: "Create a draft", icon: draft },
                { title: "Summarize a case", icon: case_img },
                { title: "Ask a question?", icon: question },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-64 gap-4 border-2 border-white/20 border-dotted p-6 rounded-2xl hover:border-white/80 transition-colors"
                >
                  <img src={item.icon} alt={item.title} className="w-12 h-12" />{" "}
                  {/* Use <img> tag to display the icon */}
                  <p className="bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent font-medium">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Ask Now */}
        <div className="w-[40rem] h-full justify-center my-auto bottom-0">
          <form
            className="bg-[#1A114A] p-4 rounded-2xl"
            onSubmit={handleSubmit}
          >
            <h3 className="text-white font-bold text-lg font-beVietnam mb-4">
              Add Notes
            </h3>

            <div className="mb-[2rem]">
              <h3 className="text-white  font-beVietnam mb-4">
                <input
                  type="text"
                  placeholder="Post Title"
                  name="NoteTitle"
                  value={noteData.NoteTitle}
                  onChange={handleTitleChange} // Handle the change event
                  className="bg-inherit w-full border border-white/80 p-2 text-sm text-white rounded-[1rem]"
                />
              </h3>
              <Editor
                onEditorChange={handleEditorChange}
                apiKey="anpfmeb7fv27df7te7i43st6vp48mar7eu77wisqeiww3gz9"
                init={{
                  plugins: [
                    // Core editing features
                    "anchor",
                    "autolink",
                    "charmap",
                    "codesample",
                    "emoticons",
                    "image",
                    "link",
                    "lists",
                    "media",
                    "searchreplace",
                    // "table",
                    "visualblocks",
                    "wordcount",
                    // Your account includes a free trial of TinyMCE premium features
                    // Try the most popular premium features until Feb 28, 2025:
                    "checklist",
                    "mediaembed",
                    "casechange",
                    "export",
                    "formatpainter",
                    "pageembed",
                    "a11ychecker",
                    "tinymcespellchecker",
                    "permanentpen",
                    "powerpaste",
                    "advtable",
                    "advcode",
                    "editimage",
                    "advtemplate",

                    "mentions",
                    "tinycomments",
                    "tableofcontents",
                    "footnotes",
                    "mergetags",
                    "autocorrect",
                    "typography",
                    "inlinecss",
                    "markdown",
                    "importword",
                    "exportword",
                    "exportpdf",
                  ],
                  toolbar:
                    "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                  tinycomments_mode: "embedded",
                  tinycomments_author: "Author name",
                  mergetags_list: [
                    { value: "First.Name", title: "First Name" },
                    { value: "Email", title: "Email" },
                  ],
                }}
                initialValue="Welcome to DATACOVE!"
              />
            </div>
            <div className="flex justify-between font-beVietnam mt-[1rem] gap-4">
              <button className="bg-green-500 font-[500] text-white rounded-[1.5rem] p-4 border border-white/90">
                Save Note
              </button>
              <button className="bg-[#060b27] font-[500] text-white rounded-[1.5rem] p-4 border border-white/90">
                Edit Note
              </button>
              <button className="bg-red-700 font-[500] text-white rounded-[1.5rem] p-4">
                Delete Note
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Upload Document Section */}
      <div className="bg-[#0B213F] p-8 mt-[2rem] rounded-[1rem] flex justify-center items-center flex-col border-dashed border-white border-2 space-y-5 h-52">
        <div>
          <FileUp size={70} />
        </div>
        <div className="text-lg font-[500] font-beVietnam">
          Upload a document
        </div>
      </div>
      {/* Ask a question with jurisdiction */}
      <div className="h-auto bg-black flex justify-between items-center p-4 border gap-2 border-white/20 mt-[1rem] rounded-md">
        <div className="w-[60%]">
          <p className="text-lg text-white/60">Ask a question</p>
        </div>
        <div className="flex items-center justify-between gap-2 w-[40%]">
          <div className="flex items-center justify-center gap-2 px-[2rem] py-[1rem] bg-[#1A114A] p-4 rounded-[1rem]">
            Select a jurisdiction
            <p>
              <ArrowDown className="w-5 h-5" />
            </p>
          </div>

          <div>
            <Send className="w-5 h-5 text-white/60" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardContent;
