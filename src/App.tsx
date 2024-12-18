import React, { useState } from 'react';
import './App.css';
import TiptapEditor from './components/TiptapEditor';
import ProseMirrorEditor from './components/ProseMirrorEditor';
import BlockNoteEditor from './components/BlockNoteEditor';
import NYTProseMirrorEditor from './components/NYTProseMirrorEditor';

function App() {
  const [activeEditor, setActiveEditor] = useState<string>('tiptap');

  const renderEditor = () => {
    switch (activeEditor) {
      case 'tiptap':
        return <TiptapEditor />;
      case 'prosemirror':
        return <ProseMirrorEditor />;
      case 'blocknote':
        return <BlockNoteEditor />;
      case 'nyt-prosemirror':
        return <NYTProseMirrorEditor />;
      default:
        return <TiptapEditor />;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Rich Text Editor Playground</h1>
        <div className="editor-tabs">
          <button
            className={`tab-button ${activeEditor === 'tiptap' ? 'active' : ''}`}
            onClick={() => setActiveEditor('tiptap')}
          >
            Tiptap
          </button>
          <button
            className={`tab-button ${activeEditor === 'prosemirror' ? 'active' : ''}`}
            onClick={() => setActiveEditor('prosemirror')}
          >
            ProseMirror
          </button>
          <button
            className={`tab-button ${activeEditor === 'blocknote' ? 'active' : ''}`}
            onClick={() => setActiveEditor('blocknote')}
          >
            BlockNote
          </button>
          <button
            className={`tab-button ${activeEditor === 'nyt-prosemirror' ? 'active' : ''}`}
            onClick={() => setActiveEditor('nyt-prosemirror')}
          >
            NYT ProseMirror
          </button>
        </div>
      </header>
      <main className="app-main">
        <div className="editor-container">
          {renderEditor()}
        </div>
      </main>
    </div>
  );
}

export default App;
