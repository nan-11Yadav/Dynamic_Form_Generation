declare module "react-json-pretty" {
  import * as React from "react";

  interface JsonPrettyProps<T = unknown> {
    data: T;
    theme?: string;
  }

  const JsonPretty: React.FC<JsonPrettyProps>;

  export default JsonPretty;
}
