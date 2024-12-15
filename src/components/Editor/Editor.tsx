"use client";
import '../../styles/editor.css'; 
import { MenuBar } from "./MenuBar";
import { Color } from '@tiptap/extension-color';
import FontFamily from '@tiptap/extension-font-family';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import Underline from '@tiptap/extension-underline';
import { useEditor, BubbleMenu, EditorContent, FloatingMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';
const Editor = () => {

  const extensions = [
    Color,
    FontFamily,
    TextStyle,
    Underline,
    HorizontalRule,
    TaskList,
    Table,
    TableCell,
    TableHeader,
    TableRow,
    TaskItem.configure({
      nested: true,
    }),
    Placeholder.configure({
      placeholder: 'Write something …',
    }),
    Link.configure({
      openOnClick: true,
      autolink: true,
    }),
    TextAlign.configure({
      types: ['heading', 'paragraph'],
      alignments: ['left', 'center', 'right', 'justify'],
    }),
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false,
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: false,
      },
    }),
  ];

    const editor = useEditor({
        extensions: extensions,
        content: "",
      });

  return (
    <div>
      {editor && (
        <FloatingMenu
          editor={editor}
          className='custom-floating-menu'
          tippyOptions={{ duration: 50 }}
        >
          <MenuBar
            editor={editor}
            />
        </FloatingMenu>
      )}
      <BubbleMenu editor={editor} tippyOptions={{ duration: 50 }}>
        <MenuBar
          editor={editor ?? undefined}
          />
      </BubbleMenu>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
