import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <section className="py-16 page-hero">
        <div className="container">
          <div className="text-center">
            <ul className="inline-flex items-center justify-center h-8 px-4 py-2 space-x-2 breadcrumb rounded-3xl bg-theme-light">
              <li className="leading-none text-dark">
                <a className="inline-flex items-center text-primary" href="#">
                  <svg
                    className="mr-1.5"
                    width="15"
                    height="15"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.1769 15.0588H10.3533V9.41178H5.64744V15.0588H2.82391V6.58825H1.88274V16H14.118V6.58825H13.1769V15.0588ZM6.58862 15.0588V10.353H9.41215V15.0588H6.58862ZM15.8084 6.09225L15.2512 6.85178L8.00038 1.52472L0.749559 6.8499L0.192383 6.09131L8.00038 0.357666L15.8084 6.09225Z"
                      fill="black"
                    />
                  </svg>
                  <span className="text-sm leading-none">Landing Page</span>
                </a>
              </li>
            </ul>
          </div>
        </div>  
        <div className="page-hero-content mx-auto max-w-[768px] text-center">
        <h1 className="mt-8 mb-5">PayWise</h1>
        <p>
            Designed to streamline salary processing, tax calculations,
            and employee benefits with precision and ease. Whether you're a small business or a large enterprise,
            PayWise ensures fast, error-free, and compliant payroll processing every time.
        </p>
        <div className="justify-center mt-11 sm:flex">
          <a className="block m-3 btn btn-primary sm:inline-block" href="#">
            Order Products
          </a>
          <a
            className="btn btn-outline-primary m-3 block min-w-[160px] sm:inline-block"
            href="#"
          >
            Learn more
          </a>
        </div>
      </div>
        <div className="mt-16 counter">
          <div className="row mx-0 rounded-[20px] bg-white px-10 shadow-lg lg:py-10">
            <div className="px-10 py-10 text-center border-border sm:col-6 lg:col-3 lg:border-r lg:py-0">
              <h2>
                <span className="count">2K</span>{" "}
                <span className="text-[#A3A1FB]">+</span>
              </h2>
              <p>Businesses Managed</p>
            </div>
            <div className="px-10 py-10 text-center border-border sm:col-6 lg:col-3 lg:border-r lg:py-0">
              <h2>
                <span className="count">4K</span>{" "}
                <span className="text-[#5EE2A0]">+</span>
              </h2>
              <p>Payrolls Processed Monthly</p>
            </div>
            <div className="px-10 py-10 text-center border-border sm:col-6 lg:col-3 lg:border-r lg:py-0">
              <h2>
                <span className="count">50K</span>{" "}
                <span className="text-primary">+</span>
              </h2>
              <p>Employees Paid Efficiently</p>
            </div>
            <div className="px-10 py-10 text-center sm:col-6 lg:col-3 lg:py-0">
              <h2>
                <span className="count">20K</span>{" "}
                <span className="text-[#FEC163]">+</span>
              </h2>
              <p>Successful Transactions</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="items-center justify-between row">
            <div className="md:col-5">
              <h2 className="text-center md:text-left">
              Why Choose <br/>PayWise?
              </h2>
            </div>
            <div className="mt-6 text-center md:col-3 md:mt-0 md:text-right">
              <a className="btn btn-primary" href="#">
                Schedule Free Demo
              </a>
            </div>
          </div>
          <div className="row mt-14">
            {[
              { id: "01", title: "Automated Payroll Processing", description: "Generate accurate payroll with tax and deductions in just a few clicks." },
              { id: "02", title: "Employee Self-Service Portal", description:"Empower employees with access to payslips, tax reports, and leave management." },
              { id: "03", title: "Secure & Compliant", description:"Stay up-to-date with the latest tax regulations and data security standards." },
              { id: "04", title: "Multi-User Access", description:"Assign roles and permissions for HR, finance, and employees." },
              { id: "05", title: "Seamless Integrations", description:"Connect with HR, accounting, and banking systems for a smooth workflow." },
              { id: "06", title: "Scalable for Any Business",description:"Whether you're a startup or an enterprise, PayWise adapts to your growing payroll needs effortlessly." },
            ].map((item) => (
              <div key={item.id} className="mb-8 sm:col-6 lg:col-4">
                <div className="flex flex-col h-full p-6 bg-white shadow-lg rounded-xl lg:p-8">
                  <div className="relative inline-block gradient-number">
                    <span className="absolute -translate-x-1/2 -translate-y-1/2 bg-gradient top-1/2 left-1/2">
                      {item.id}
                    </span>
                    <img src="images/gradient-number-bg.svg" alt="" />
                  </div>
                  <h4 className="my-6">{item.title}</h4>
                  <p className="flex-grow">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default LandingPage;
