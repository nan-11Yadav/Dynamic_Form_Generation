import React, { useState } from "react";
import { useForm } from "react-hook-form";

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

interface FormGeneratorProps {
  schema: Schema | null;
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ schema }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Record<string, string>>();
  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState<Record<
    string,
    string
  > | null>(null);

  const onSubmit = (data: Record<string, string>) => {
    console.log("Form Submitted:", data);
    setSubmittedData(data);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSubmittedData(null);
  };

  if (!schema)
    return (
      <div className="flex justify-center items-center h-[400px] mt-12 border-2 border-gray-200 text-center rounded-lg">
        Awaiting valid JSON schema...
      </div>
    );

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col lg:p-4 p-6 border-2 border-gray-200 mt-9 rounded-lg"
      >
        <p className="justify-center text-center lg:text-3xl text-2xl font-semibold mb-4">
          Design Using JSON Data
        </p>
        <h2 className="text-lg font-semibold mb-2">{schema.formTitle}</h2>
        <p className="text-gray-600 mb-4">{schema.formDescription}</p>

        {schema.fields.map((field) => (
          <div key={field.id} className="my-4">
            <label className="block mb-1">{field.label}</label>
            {field.type === "text" || field.type === "email" ? (
              <input
                {...register(field.id, {
                  required: field.required ? "This field is required" : false,
                  pattern: field.validation?.pattern
                    ? new RegExp(field.validation.pattern)
                    : undefined,
                })}
                type={field.type}
                placeholder={field.placeholder}
                className="w-full p-2 border rounded-md border-gray-200"
              />
            ) : field.type === "select" && field.options ? (
              <select
                {...register(field.id, {
                  required: field.required ? "This field is required" : false,
                })}
                className="w-full p-2 border rounded-md border-gray-200"
              >
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : field.type === "radio" && field.options ? (
              <div className="flex lg:flex-row flex-col gap-2">
                {field.options.map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      {...register(field.id, {
                        required: field.required
                          ? "This field is required"
                          : false,
                      })}
                      type="radio"
                      value={option.value}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            ) : field.type === "textarea" ? (
              <textarea
                {...register(field.id, {
                  required: field.required ? "This field is required" : false,
                })}
                placeholder={field.placeholder}
                rows={4}
                className="w-full p-2 border border-gray-200 rounded-md"
              />
            ) : null}
            {errors[field.id]?.message && (
              <p className="text-red-500 text-sm">
                {String(errors[field.id]?.message)}
              </p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="p-2 mt-4 bg-blue-500 text-white rounded-md"
        >
          Submit
        </button>
      </form>

      {/* Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Form Submitted Successfully!
            </h2>
            <p className="text-gray-700 mb-4">Here is your submitted data:</p>
            <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-auto">
              {JSON.stringify(submittedData, null, 2)}
            </pre>
            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormGenerator;
