import Form from "./components/Form";

function Login() {
  return (
    <div className="flex flex-col items-center bg-gray-50 justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="/" className="flex items-center mb-6 text-xl font-semibold text-dark-800">
        <img src="" className="mr-4 h-11" alt="Tolong buatin logo kak talitha & kak anita" />
      </a>
      <Form />
    </div>
  );
}

export default Login;

