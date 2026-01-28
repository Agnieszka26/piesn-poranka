"use client";
import { Editor } from "@tiptap/react";
import clsx from "clsx";

type Props = {
  editor: Editor | null;
  onImageUpload: () => void;
};

const buttonClass = (active: boolean) =>
  clsx(
    "px-2 py-1 rounded border text-sm",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500",
    active
      ? "bg-blue-600 text-white border-blue-600"
      : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
  );

const EditorToolbar = ({ editor, onImageUpload }: Props) => {
  if (!editor) return null;

  return (
    <div
      role="toolbar"
      aria-label="Edytor tekstu – formatowanie"
      className="flex flex-wrap gap-2 border-b pb-2 mb-2"
    >
      {/* BOLD */}
      <button
        type="button"
        aria-label="Pogrubienie"
        aria-pressed={editor.isActive("bold")}
        className={buttonClass(editor.isActive("bold"))}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <b>B</b>
      </button>

      {/* ITALIC */}
      <button
        type="button"
        aria-label="Kursywa"
        aria-pressed={editor.isActive("italic")}
        className={buttonClass(editor.isActive("italic"))}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <i>I</i>
      </button>

      {/* H2 */}
      <button
        type="button"
        aria-label="Nagłówek poziomu 2"
        aria-pressed={editor.isActive("heading", { level: 2 })}
        className={buttonClass(editor.isActive("heading", { level: 2 }))}
        onClick={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        H2
      </button>

      {/* BULLET LIST */}
      <button
        type="button"
        aria-label="Lista punktowana"
        aria-pressed={editor.isActive("bulletList")}
        className={buttonClass(editor.isActive("bulletList"))}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        • Lista
      </button>

      {/* ORDERED LIST */}
      <button
        type="button"
        aria-label="Lista numerowana"
        aria-pressed={editor.isActive("orderedList")}
        className={buttonClass(editor.isActive("orderedList"))}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        1. Lista
      </button>


      {/* IMAGE */}
      <button
        type="button"
        aria-label="Dodaj obraz"
        className={buttonClass(false)}
        onClick={onImageUpload}
      >
        🖼️ Obraz
      </button>
    </div>
  );
};

export default EditorToolbar;
