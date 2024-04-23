// OLD: import { useFormState } from "react-dom";
import { useActionState } from "react";

async function action(currentState, formData) {
  const values = Object.fromEntries(formData.entries());
  // OR: formData.get("message")
  console.log(values);
  return currentState + 1;
}

export default function UseActionState() {
  const [state, formAction] = useActionState(action, 0);

  return (
    <form>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <input
          type="text"
          id="message"
          name="message"
          placeholder="Enter message"
        />
      </div>
      <div className="form-group">{state}</div>
      <button formAction={formAction}>Increment</button>
    </form>
  );
}
