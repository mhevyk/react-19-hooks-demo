import { useFormStatus } from "react-dom";
import wait from "../utils/wait";

function SubmitButton() {
  const status = useFormStatus();

  console.log(status);

  return (
    <button disabled={status.pending}>
      {status.pending ? "Submitting..." : "Submit"}
    </button>
  );
}

const formAction = async () => {
  await wait(3000);
};

export default function UseFormStatus() {
  return (
    <form action={formAction}>
      <SubmitButton />
    </form>
  );
}
