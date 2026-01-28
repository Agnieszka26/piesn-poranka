"use client";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import EditorToolbar from "./Toolbar";

import { PendingImage } from "@/app/dashboard/types";
import { useEffect } from "react";

type Props = {
  value: string;
  onChange: (html: string) => void;
  setPendingImages: React.Dispatch<React.SetStateAction<PendingImage[]>>;
};

const TiptapEditor = ({ value, onChange, setPendingImages }: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        inline: false,
      }),
    ],
    content: value,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "prose prose-sm max-w-none focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });


  const uploadImage = async () => {
    if (!editor) return;

    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();

    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) return;

      const id = crypto.randomUUID();
      const previewUrl = URL.createObjectURL(file);

      setPendingImages((prev) => [...prev, { id, file }]);

      editor
        .chain()
        .focus()
        .setImage({
          src: previewUrl,
          "data-upload-id": id,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any)
        .run();
    };
  };
    useEffect(() => {
    if (!editor) return;

    // czyść edytor
    if (value === "") {
      editor.commands.clearContent();
    }
  }, [value, editor]);



  return (
    <div className="border rounded p-3">
      <EditorToolbar editor={editor} onImageUpload={uploadImage} />
      <EditorContent
        editor={editor}
        className="prose prose-sm max-w-none min-h-[200px] p-4 focus:outline-none"
      />
    </div>
  );
};

export default TiptapEditor;
