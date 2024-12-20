import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser, loginWithGoogle } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Extract form data using FormData
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const photoURL = formData.get("photo");
    const pass = formData.get("pass");

    // console.log({ name, email, photoURL, pass });
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(pass)) {
      toast.error(
        "Password must include at least one uppercase, one lowercase, and be at least 6 characters long."
      );
      return;
    }
    createUser(email, pass, name, photoURL)
      .then(() => {
        toast.success("Registration successful!");
        form.reset();
      })
      .catch((error) => {
        toast.error(`Registration failed: ${error.message}`);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        toast.success("Registered with Google successfully!");
      })
      .catch((error) => {
        toast.error(`Google registration failed: ${error.message}`);
      });
  };
  return (
    <div>
      <ToastContainer />
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-[#f5f5ee] w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-red-900 text-2xl font-bold text-center pt-6">
            Register
          </h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo-url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="pass"
                type="password"
                placeholder="password"
                className="input input-bordered pr-10"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-red-900  text-white font-bold text-lg">
                Register
              </button>
            </div>
            <div className="form-control">
              <button
                onClick={handleGoogleLogin}
                className="btn bg-red-900  text-white font-bold text-lg"
              >
                Register with Google
              </button>
            </div>
          </form>

          <p className="text-center pb-6">
            Already Have An Account?
            <Link
              className="underline underline-offset-1 text-blue-600 ml-1"
              to="/auth/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
