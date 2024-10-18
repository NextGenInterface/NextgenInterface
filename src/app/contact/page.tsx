"use client";
import React, { useState } from "react";
import PageLayout from "../../components/utils/pageLayout/PageLayout";
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Page = () => {
  type FormType = {
    name: string;
    email: string;
    message: string;
  };
  const initialValue = {
    name: "",
    email: "",
    message: "",
  };

  const [formValue, setFormValue] = useState<FormType>(initialValue);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading("Sending....");

    const formData = new FormData();
    formData.append("name", formValue.name);
    formData.append("email", formValue.email);
    formData.append("message", formValue.message);

    formData.append("access_key", "b426fda8-3a99-474c-b181-aafefb0d463a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setLoading("");
      setTimeout(() => {
        setSuccess("Form Submitted Successfully");
      }, 3000);
      setFormValue(initialValue);
    } else {
      console.log("Error", data);
      setError(data.message);
    }
  };

  return (
    <PageLayout>
      <div className="flex flex-col justify-center item-center">
        <div className="w-full md:w-2/4 self-center">
          <div className="mb-2 text-center flex flex-col">
            <h1 className="text-4xl font-bold">Contact us</h1>
            <p className="text-xl font-light">
              We love to here from you and we are here to help you.
            </p>
            {loading ? (
              <div className="flex gap-2 justify-center w-fit self-center border-[1px] bg-orange-50 border-orange-600 p-1 px-4 rounded-full mt-6">
                <span className="text-center text-sm text-orange-600 ">
                  {loading} sebding
                </span>
              </div>
            ) : success ? (
              <div className="flex gap-2 justify-center w-fit self-center border-[1px] bg-green-50 border-green-700 p-1 px-4 rounded-full mt-6">
                <TiTick className="text-green-700" />
                <span className="text-center text-sm text-green-700">
                  {success}
                </span>
              </div>
            ) : error ? (
              <div className="flex gap-2 justify-center w-fit self-center border-[1px] border-red-800 p-1 px-4 rounded-full mt-6">
                <IoClose className="text-red-800" />
                <span className="text-center text-sm text-red-800">
                  {error}
                </span>
              </div>
            ) : null}
          </div>
          <div className="h-[55vh] mt-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="p-2 text-sm border border-neutral-300 dark:bg-neutral-800 dark:border-neutral-700 rounded-sm focus:bg-neutral-100 dark:focus:bg-neutral-900"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormValue({ ...formValue, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Your email"
                required
                className="p-2 text-sm border border-neutral-300 dark:bg-neutral-800 dark:border-neutral-700 rounded-sm focus:bg-neutral-100 dark:focus:bg-neutral-900"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormValue({ ...formValue, email: e.target.value })
                }
              />
              <textarea
                name="message"
                id=""
                placeholder="Your message"
                required
                rows={10}
                className="p-2 text-sm border border-neutral-300 dark:bg-neutral-800 dark:border-neutral-700 rounded-sm focus:bg-neutral-100 dark:focus:bg-neutral-900 resize-none"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setFormValue({ ...formValue, message: e.target.value })
                }
              />
              <input
                type="hidden"
                name="apikey"
                value="b426fda8-3a99-474c-b181-aafefb0d463a"
              />
              <input
                type="submit"
                className="w-fit text-sm bg-themeColor text-white font-medium active:scale-95 p-2 rounded-sm cursor-pointer hover:bg-indigo-600"
              />
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Page;
