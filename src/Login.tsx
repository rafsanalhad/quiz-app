import React, { MouseEventHandler, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export default function Login(): JSX.Element {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  let user = {
    username: "user",
    password: "user",
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (userName === user.username && password === user.password) {
      window.location.href = "/Test";
    } else {
      showSwal();
    }
  };
  const showSwal = () => {
    withReactContent(Swal).fire({
      icon: "error",
      title: "Login Gagal",
      text: "Username/Password Salah",
    });
  };
  useEffect(() => {}, []);
  return (
    <section className="min-h-screen bg-[#f7f7f7] dark:bg-[#ededf1]">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        Anime Quiz App
                      </h4>
                    </div>

                    <form>
                      <p className="mb-4">Please login to your account</p>
                      <div className="flex flex-col">
                        <label htmlFor="Username">Username</label>
                        <input
                          onChange={(e) => setUserName(e.target.value)}
                          type="text"
                          className="mb-4 rounded-[4px] h-[30px] text-[#303234]"
                        ></input>

                        <label htmlFor="Password">Password</label>
                        <input
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          className="mb-4 rounded-[4px] h-[30px] text-[#303234]"
                        ></input>
                      </div>

                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          onClick={handleClick}
                          className="mb-3 bg-blue-700 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="button"
                        >
                          Log in
                        </button>

                        {/* <!--Forgot password link--> */}
                      </div>

                      {/* <!--Register button--> */}
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-blue-600">
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a Website
                    </h4>
                    <p className="text-sm">
                      If you are weeb and computer science nerd, you are in the
                      right place, we have a lot of quiz about anime and
                      computer science. Let's join us and have fun!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
