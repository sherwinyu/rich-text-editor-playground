import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import applyDevTools from 'prosemirror-dev-tools'
import { useEffect } from 'react'

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello from Tiptap!</p>',
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
      },
    },
  })

  useEffect(() => {
    if (editor) {
      // Access the underlying ProseMirror view
      const view = editor.view
      applyDevTools(view)
    }
  }, [editor])

  return (
    <div className="editor-wrapper">
      <h2>Tiptap Editor</h2>
      <div className="editor-container">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}

export default TiptapEditor
