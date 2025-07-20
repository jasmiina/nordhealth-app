// ~/types/index.d.ts

declare global {
  type AutoCompleteValue = "email" | "new-password";

  type InputType = "text" | "password";

  type BaseTextElement = "span" | "label" | "h2" | "h1";

  type MessageType = "success" | "error" | "info";
}

export {};