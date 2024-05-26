import Form from "./components/Form";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="flex flex-col items-center bg-gray-50 justify-center py-24 px-6 md:py-8 mx-auto md:h-screen lg:py-0">
      <Link to="/" className="flex items-center mb-6">
        <img src="/assets/parentify-logo.png" className="w-40 h-20" alt="Logo" />
      </Link>
      <Form />
    </div>
  );
}

export default Login;
