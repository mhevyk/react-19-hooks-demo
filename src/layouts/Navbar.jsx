import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/use-action-state">useActionState</Link>
      </li>
      <li>
        <Link to="/use-form-status">useFormStatus</Link>
      </li>
      <li>
        <Link to="/use-optimistic">useOptimistic</Link>
      </li>
    </ul>
  );
}
