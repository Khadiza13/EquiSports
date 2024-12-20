import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { loginUser, setUser, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const emailref = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");

    const pass = form.get("pass");
    // console.log({ email, pass });
    loginUser(email, pass)
      .then((res) => {
        const user = res.user;
        setUser(user);
        toast.success("Login successful!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(`Login failed: ${error.message}`);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        toast.success("Logged in with Google successfully!");
        navigate("/"); // Redirect to the homepage
      })
      .catch((error) => {
        toast.error(`Google login failed: ${error.message}`);
      });
  };

  return (
    <div>
      <ToastContainer />
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-[#f5f5ee] w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-red-900 text-2xl font-bold text-center pt-6">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                ref={emailref}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="pass"
                placeholder="password"
                className="input input-bordered pr-10"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-red-900  text-white font-bold text-lg">
                Login
              </button>
            </div>
            <div className="form-control">
              <button
                onClick={handleGoogleLogin}
                className="btn bg-red-900  text-white font-bold text-lg"
              >
                Login with Google
              </button>
            </div>
          </form>
          <p className="text-center pb-8">
            Don't Have An Account?
            <Link
              className="underline underline-offset-1 text-blue-600 ml-1"
              to="/auth/register"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
