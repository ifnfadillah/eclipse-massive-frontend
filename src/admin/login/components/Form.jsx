import Input from "./Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className="w-full rounded-2xl shadow-lg md:mt-0 sm:max-w-md xl:p-0 bg-gray-50">
      <div className="p-6 space-y-4 md:space-y-8 sm:p-8">
        <h1 className="text-xl font-primary font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl">Selamat Datang Admin!</h1>

        <form className="space-y-4 md:space-y-6" action="" method="post">
          <Input text="Username" name="username" type="username" placeholder="Masukkan Username" />
          <Input text="Kata Sandi" name="Password" type="Password" placeholder="Masukkan Kata Sandi" />
          <div className="mt-4">
            <Link to="/dashboard">
              <Button
                classname="w-full text-white bg-sky-500 hover:bg-sky-700 font-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-md text-sm px-5 py-3 text-center"
                type="submit"
                name="login">
                Masuk
              </Button>
            </Link>
          </div>
          <p className="text-sm font-light font-secondary text-gray-900">
            <span className="text-sm sm:text-center">
              © 2024{" "}
              <a href="/" className="hover:underline">
                Parentify
              </a>{" "}
            </span>
            Website
          </p>
        </form>
      </div>
    </div>
  );
};

export default Form;
