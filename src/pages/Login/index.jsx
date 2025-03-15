import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Import AuthContext
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import flower from "../../assets/img/flower.svg";
import loginBanner from "../../assets/img/login-banner-bg.svg";
import image1 from "../../assets/img/img-1.png";

const Login = () => {
  const { login } = useAuth(); // Use authentication context
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [messageType, setMessageType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });

      login(response.data.token); // Call login() from AuthContext
      setMessage("Login successful! Redirecting...");
      setMessageType("success");

      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      setMessage(error.response?.data?.error || "Login failed. Please try again.");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="container max-w-full">
          <div className="row">
            {/* Left Panel */}
            <div className="min-h-[980px] bg-white py-10 lg:col-6 lg:py-[114px]">
              <div className="mx-auto w-full max-w-[480px]">
                <img className="mb-8" src={flower} alt="Flower Icon" />
                <h1 className="mb-4">Login</h1>
                
                {message && (
                  <p className={`mb-4 text-lg text-center ${messageType === "success" ? "text-green-600" : "text-red-600"}`}>
                    {message}
                  </p>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Your Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  
                  <div className="mt-4 form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="block w-full mt-10 btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Sign In"}
                  </button>

                  <p className="mt-6 text-center">
                    Can't <span className="text-dark">log in</span>? <a className="text-dark" href="signup.html">Sign up</a> to create an account
                  </p>
                </form>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center py-16 auth-banner bg-gradient lg:col-6">
              <img className="absolute top-0 left-0 w-full h-full" src={loginBanner} alt="Login Banner" />
              <div className="w-full text-center">
                <h2 className="text-white h3">
                  Streamline Your Payroll Process &<br /> Empower Your Workforce
                </h2>
                <div className="swiper auth-banner-carousel">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img width="667" height="557" className="px-8 mx-auto mt-8" src={image1} alt="Illustration" />
                    </div>
                  </div>
                  <div className="pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
