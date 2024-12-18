import React, { useEffect } from 'react';
import { EditorState } from 'prosemirror-state';
import { Schema } from 'prosemirror-model';
import { schema } from 'prosemirror-schema-basic';
import { addListNodes } from 'prosemirror-schema-list';
import { exampleSetup } from 'prosemirror-example-setup';
import { ProseMirror, ProseMirrorDoc, reactKeys } from '@nytimes/react-prosemirror';
import applyDevTools from 'prosemirror-dev-tools';

// Mix the nodes from prosemirror-schema-list into the basic schema to
// create a schema with list support.
const mySchema = new Schema({
  nodes: addListNodes(schema.spec.nodes, 'paragraph block*', 'block'),
  marks: schema.spec.marks
});

export function NYTProseMirrorEditor() {
  return (
    <ProseMirror
      defaultState={EditorState.create({
        schema,
        plugins: [
          // The reactKeys plugin is required for the ProseMirror component to work!
          reactKeys(),
          ...exampleSetup({schema: mySchema})
        ],
      })}
    >
      <ProseMirrorDoc />
    </ProseMirror>
  );
}


export default NYTProseMirrorEditor;
