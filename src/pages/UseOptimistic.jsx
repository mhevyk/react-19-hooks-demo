import { useOptimistic, useState } from "react";
import wait from "../utils/wait";

export default function UseOptimistic() {
  const [messages, setMessages] = useState([]);
  const [optimisticMessages, setOptimisticMessages] = useOptimistic(messages);

  async function sendMessage(message) {
    // Simulating request to the server...
    await wait(2000);
    setMessages((messages) => [...messages, { text: message }]);
  }

  const submitData = async (formData) => {
    const message = formData.get("message");

    if (!message) {
      return;
    }

    const optimisticMessage = {
      text: message,
      pending: true,
    };

    setOptimisticMessages((prev) => [...prev, optimisticMessage]);

    await sendMessage(message);
  };

  return (
    <>
      <form action={submitData}>
        <div className="form-group">
          <label>Message</label>
          <input type="text" name="message" />
        </div>

        <button type="submit">Submit</button>
      </form>
      <ul>
        {optimisticMessages.map((message, index) => (
          <li key={index} style={{ opacity: message?.pending ? 0.5 : 1 }}>
            {message.text}
          </li>
        ))}
      </ul>
    </>
  );
}

