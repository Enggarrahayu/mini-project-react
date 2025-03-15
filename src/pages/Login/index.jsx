import React from "react";
import flower from '../../assets/img/flower.svg'
import loginBanner from '../../assets/img/login-banner-bg.svg'
import image1 from '../../assets/img/img-1.png'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [messageType, setMessageType] = useState(""); 

  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    setLoading(true);
    const payload = {
      email: email,
      password: password,
    };

    axios
      .post("https://reqres.in/api/login", payload)
      .then((res) => {
        console.log("Login successful:", res);
        setMessage("Login Successful");
        localStorage.setItem("token", res.data.token);
        setMessage("Login successful! Redirecting...");
        setMessageType("success");
        
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((err) => {
        console.error("Login failed:", err.response);
        setMessage(err.response?.data?.error || "Login failed");
        setMessageType("error");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Navbar/>
      <section className="">
        <div className="container max-w-full">
          <div className="row">
            <div className="min-h-[980px] bg-white py-10 lg:col-6 lg:py-[114px]">
              <div className="mx-auto w-full max-w-[480px]">
                <img className="mb-8" src={ flower } alt="" />
                <h1 className="mb-4">Login</h1>
                <form action="#">
                {message && (
                  <p className={`mb-4 text-lg text-center ${messageType === "success" ? "text-green-600" : "text-red-600"}`}>
                    {message}
                  </p>
                )}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Your Email Address"
                      value={email}
                      onChange={handleChangeEmail}
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
                      onChange={handleChangePassword}
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="block w-full mt-10 btn btn-primary"
                    type="submit"
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
              <img
                className="absolute top-0 left-0 w-full h-full"
                src={ loginBanner }
                alt="login banner"
              />
              <div className="w-full text-center">
                <h2 className="text-white h3">
                Streamline Your Payroll Process &<br /> Empower Your Workforce
                </h2>
                <div className="swiper auth-banner-carousel">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img
                        width="667"
                        height="557"
                        className="px-8 mx-auto mt-8"
                        src={ image1 }
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
      </>
  );
};

export default Login;
