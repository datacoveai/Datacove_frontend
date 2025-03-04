import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Trash2, X } from "lucide-react";
import useAppStore from "../store/useAppStore";

const NotesHistory = () => {
  const [expandedNote, setExpandedNote] = useState();
  const { deleteNote, user } = useAppStore();

  const notes = user.notes;

  const toggleNote = (id) => {
    setExpandedNote(expandedNote === id ? null : id);
  };

  const handleDelete = (e, noteId) => {
    e.stopPropagation();

    const credential = {
      userId: user._id,
      noteId: noteId,
    };

    console.log("Credential before deleteNote:", credential); // ✅ Now it will show both userId and noteId

    deleteNote(credential);
  };

  return (
    <div className="p-6 w-full mx-auto">
      <h3 className="font-[700] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-center p-8 bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
        Notes History
      </h3>
      <div className="space-y-4">
        {notes?.length > 0 ? (
          <AnimatePresence>
            {notes.map((note) => (
              <motion.div
                key={note._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="
                  bg-gradient-to-r from-purple-900/90 to-purple-800/90
                  rounded-xl shadow-lg overflow-hidden
                  border border-violet-500/30 backdrop-blur-sm 
                "
              >
                <div
                  onClick={() => toggleNote(note._id)}
                  className="p-4 flex items-center justify-between cursor-pointer group"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {note.title}
                  </h3>
                  <div className="flex items-center space-x-3">
                    <motion.button
                      onClick={(e) => handleDelete(e, note._id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-full hover:bg-purple-700/50 transition-colors"
                    >
                      <Trash2
                        className="w-5 h-5 text-purple-200 opacity-60 group-hover:opacity-100"
                        color="red"
                      />
                    </motion.button>
                    <motion.div
                      animate={{ rotate: expandedNote === note._id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-2 rounded-full hover:bg-purple-700/50 transition-colors"
                    >
                      <ChevronDown className="w-5 h-5 text-purple-200 opacity-60 group-hover:opacity-100" />
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedNote === note._id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-4 pb-4">
                        <div className="bg-purple-950/50 rounded-lg p-4 backdrop-blur-sm">
                          <div
                            dangerouslySetInnerHTML={{ __html: note.content }}
                            className="prose prose-invert max-w-none text-purple-100"
                          />
                          <div className="mt-4 pt-3 border-t border-violet-500/30 flex justify-between items-center text-purple-300 text-sm">
                            <span>
                              {new Date(note.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        ) : (
          <p className="text-center text-purple-300 text-xl">
            You don't have any notes.
          </p>
        )}
      </div>
    </div>
  );
};

export default NotesHistory;
