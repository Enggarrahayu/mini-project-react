import React from "react";
import flower from '../../assets/img/flower.svg'
import loginBanner from '../../assets/img/login-banner-bg.svg'
import image1 from '../../assets/img/img-1.png'

const Login = () => {
  return (
    <section className="">
      <div className="container max-w-full">
        <div className="row">
          <div className="min-h-[980px] bg-white py-10 lg:col-6 lg:py-[114px]">
            <div className="mx-auto w-full max-w-[480px]">
              <img className="mb-8" src={ flower } alt="" />
              <h1 className="mb-4">Login</h1>
              <form action="#">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Your Email Address"
                  />
                </div>
                <div className="mt-4 form-group">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Your Password"
                  />
                </div>
                <input
                  className="block w-full mt-10 btn btn-primary"
                  type="submit"
                  value="Sign In"
                />
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
  );
};

export default Login;
