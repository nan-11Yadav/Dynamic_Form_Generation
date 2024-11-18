"use client";

import FormGenerator from "@/Components/Form";
import JsonEditor from "@/Components/JsonEditor";
import React, { useState } from "react";

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

const Home: React.FC = () => {
  const [schema, setSchema] = useState<Schema | null>(null);

  return (
    <div className="lg:p-6 sm:p-2">
      <h2 className="flex justify-center lg:mt-4 sm:mt-9 font-extrabold mb-4 underline text-center lg:text-5xl sm:text-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        Dynamic Form Generator Challenge
      </h2>

      <div className="flex flex-col md:flex-row lg:px-32 sm:px-0 rounded-lg">
        <div className="w-full md:w-1/2 h-auto">
          <JsonEditor onSchemaChange={setSchema} />
        </div>
        <div className="w-full md:w-1/2 lg:p-2 p-4">
          <FormGenerator schema={schema} />
        </div>
      </div>
    </div>
  );
};

export default Home;
