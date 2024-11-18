import React, { useState, useRef } from "react";

interface FieldOption {
  label: string;
  value: string;
}

interface Field {
  id: string;
  label: string;
  type: "text" | "email" | "select" | "radio" | "textarea";
  placeholder?: string;
  required?: boolean;
  validation?: {
    pattern?: string;
  };
  options?: FieldOption[];
}

interface Schema {
  formTitle: string;
  formDescription: string;
  fields: Field[];
}

interface JsonEditorProps {
  onSchemaChange: (schema: Schema | null) => void;
}

const JsonEditor: React.FC<JsonEditorProps> = ({ onSchemaChange }) => {
  const [json, setJson] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setJson(value);

    try {
      const parsed = JSON.parse(value) as Schema;
      if (
        typeof parsed.formTitle === "string" &&
        typeof parsed.formDescription === "string" &&
        Array.isArray(parsed.fields) &&
        parsed.fields.every(
          (field) =>
            typeof field.id === "string" &&
            typeof field.label === "string" &&
            ["text", "email", "select", "radio", "textarea"].includes(
              field.type
            )
        )
      ) {
        onSchemaChange(parsed);
        setError(null);
      } else {
        throw new Error("JSON does not match the required schema format.");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred."); 
      }
      onSchemaChange(null);
    }
  };

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; 
    }
  };

  const handleDownloadJson = () => {
    try {
      const blob = new Blob([json], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "form-schema.json";
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading JSON: ", error);
      alert("An error occurred while downloading the JSON.");
    }
  };

  return (
    <div className="flex flex-col p-4">
      <h2 className="text-lg font-semibold justify-center mb-4 text-center">
        JSON Editor
      </h2>
      <textarea
        ref={textareaRef}
        className="w-full min-h-[400px] max-h-[860px] overflow-y-auto p-2 border border-gray-200 rounded-md"
        value={json}
        onChange={handleChange}
        onInput={handleInput}
        placeholder="Paste your JSON schema here..."
      />
      {error && <p className="text-red-500">{error}</p>}

      <button
        onClick={handleDownloadJson}
        className="mt-4 p-2 bg-blue-500 text-white rounded-md"
      >
        Download JSON
      </button>
    </div>
  );
};

export default JsonEditor;
