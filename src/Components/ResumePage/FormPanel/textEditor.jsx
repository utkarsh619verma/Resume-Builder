import textEditorStyles from "./textEditor.module.css";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import Placeholder from "@tiptap/extension-placeholder";

import {
  Bold,
  Italic,
  Strikethrough,
  Highlighter,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Heading1,
  Heading2,
  Heading3,
  Type,
} from "lucide-react";

const MenuBar = ({ editor }) => {
  if (!editor) return null;

  const button = (icon, action, isActive) => (
    <button
      type="button"
      onClick={action}
      className={`${textEditorStyles.toolbarButton} ${
        isActive ? textEditorStyles.activeButton : ""
      }`}
    >
      {icon}
    </button>
  );

  return (
    <div className={textEditorStyles.toolbar}>
      {button(
        <Heading1 size={18} />,
        () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
        editor.isActive("heading", { level: 1 })
      )}
      {button(
        <Heading2 size={18} />,
        () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
        editor.isActive("heading", { level: 2 })
      )}
      {button(
        <Heading3 size={18} />,
        () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
        editor.isActive("heading", { level: 3 })
      )}
      {button(
        <Type size={18} />,
        () => editor.chain().focus().setParagraph().run(),
        editor.isActive("paragraph")
      )}
      <div className={textEditorStyles.divider} />
      {button(
        <Bold size={18} />,
        () => editor.chain().focus().toggleBold().run(),
        editor.isActive("bold")
      )}
      {button(
        <Italic size={18} />,
        () => editor.chain().focus().toggleItalic().run(),
        editor.isActive("italic")
      )}
      {button(
        <Strikethrough size={18} />,
        () => editor.chain().focus().toggleStrike().run(),
        editor.isActive("strike")
      )}
      {button(
        <Highlighter size={18} />,
        () => editor.chain().focus().toggleHighlight().run(),
        editor.isActive("highlight")
      )}
      <div className={textEditorStyles.divider} />
      {button(
        <AlignLeft size={18} />,
        () => editor.chain().focus().setTextAlign("left").run(),
        editor.isActive({ textAlign: "left" })
      )}
      {button(
        <AlignCenter size={18} />,
        () => editor.chain().focus().setTextAlign("center").run(),
        editor.isActive({ textAlign: "center" })
      )}
      {button(
        <AlignRight size={18} />,
        () => editor.chain().focus().setTextAlign("right").run(),
        editor.isActive({ textAlign: "right" })
      )}
      {button(
        <AlignJustify size={18} />,
        () => editor.chain().focus().setTextAlign("justify").run(),
        editor.isActive({ textAlign: "justify" })
      )}
      <button
        type="button"
        className="basicPurpleButton"
        style={{ padding: "0.5rem 2rem", margin: "0rem 1rem" }}
      >
        Add
      </button>
      <button
        type="button"
        className="basicPurpleButton"
        style={{ padding: "0.5rem 2rem", margin: "0rem 1rem" }}
      >
        AI Touch
      </button>
    </div>
  );
};

export default function TextEditor({ placeholder }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Highlight,
      Placeholder.configure({
        placeholder: placeholder,
      }),
    ],
  });

  return (
    <div className={textEditorStyles.editorWrapper}>
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className={textEditorStyles.editorContent}
      />
    </div>
  );
}
