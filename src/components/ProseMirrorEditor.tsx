import React, { useEffect, useRef } from 'react'
import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { Schema, DOMParser } from 'prosemirror-model'
import { schema } from 'prosemirror-schema-basic'
import { addListNodes } from 'prosemirror-schema-list'
import { exampleSetup } from 'prosemirror-example-setup'
import applyDevTools from 'prosemirror-dev-tools'
import './ProseMirrorEditor.css'

const ProseMirrorEditor = () => {
  const editorRef = useRef<HTMLDivElement>(null)
  const viewRef = useRef<EditorView | null>(null)

  useEffect(() => {
    if (editorRef.current && !viewRef.current) {
      // Mix the nodes from prosemirror-schema-list into the basic schema to
      // create a schema with list support.
      const mySchema = new Schema({
        nodes: addListNodes(schema.spec.nodes, 'paragraph block*', 'block'),
        marks: schema.spec.marks
      })

      const content = document.createElement('div')
      content.innerHTML = '<h1>Welcome to ProseMirror!</h1><p>This is a basic example with formatting support.</p>'

      // Create a new editor state
      const state = EditorState.create({
        schema: mySchema,
        doc: DOMParser.fromSchema(mySchema).parse(content),
        plugins: exampleSetup({ schema: mySchema })
      })

      // Create and mount the editor
      viewRef.current = new EditorView(editorRef.current, {
        state,
      })

      // Initialize DevTools
      applyDevTools(viewRef.current)
    }

    return () => {
      if (viewRef.current) {
        viewRef.current.destroy()
        viewRef.current = null
      }
    }
  }, [])

  return (
    <div className="editor-wrapper">
      <h2>ProseMirror Editor</h2>
      <div className="prosemirror-container">
        <div ref={editorRef} />
      </div>
    </div>
  )
}

export default ProseMirrorEditor
