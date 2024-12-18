import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import { useEffect } from "react";
import applyDevTools from 'prosemirror-dev-tools'

const BlockNoteEditor = () => {
  // Creates a new editor instance.
  const editor = useBlockNote({
    initialContent: [
      {
        type: "paragraph",
        content: "Hello from BlockNote!"
      }
    ]
  });

  useEffect(() => {
    if (editor) {
      window.editor = editor
      // Access the underlying Tiptap editor which contains the ProseMirror view
      const tiptapEditor = editor._tiptapEditor
      if (tiptapEditor) {
        const view = tiptapEditor.view
        applyDevTools(view)
      }
    }
  }, [editor]);

  return (
    <div className="editor-wrapper">
      <h2>BlockNote Editor</h2>
      <div className="editor-container">
        <BlockNoteView editor={editor} theme="light" />
      </div>
    </div>
  );
};

export default BlockNoteEditor;
