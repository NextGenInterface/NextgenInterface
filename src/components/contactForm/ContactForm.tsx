"use client";

import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../app/globals.css";

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
const ContactForm = () => {
  const [formValue, setFormValue] = useState<FormType>(initialValue);
  const [loading, setLoading] = useState(false);

  () => toast("Wow so easy!");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

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
      setLoading(false);
      toast.success("your form has been sent, will get back yo your shorlty");
      setFormValue(initialValue);
    } else {
      toast.error(`Failed to send form, ${data.message}`);
      setFormValue(initialValue);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <input
        type="text"
        placeholder="Your Name"
        required
        className="p-2 text-sm font-medium text-white placeholder:text-neutral-600 border border-neutral-700 rounded-lg bg-transparent focus:bg-neutral-900  focus:outline-none focus:border-neutral-300"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormValue({ ...formValue, name: e.target.value })
        }
      />
      <input
        type="email"
        placeholder="Your email"
        required
        className="p-2 text-sm font-medium text-white placeholder:text-neutral-600 border border-neutral-700 rounded-lg bg-transparent focus:bg-neutral-900  focus:outline-none focus:border-neutral-300"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormValue({ ...formValue, email: e.target.value })
        }
      />
      <textarea
        name="message"
        id=""
        placeholder="Your message"
        required
        rows={4}
        className="p-2 text-sm font-medium text-white placeholder:text-neutral-600 border border-neutral-700 rounded-lg bg-transparent focus:bg-neutral-900  focus:outline-none focus:border-neutral-300 resize-none"
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setFormValue({ ...formValue, message: e.target.value })
        }
      />
      <input
        type="hidden"
        name="apikey"
        value="b426fda8-3a99-474c-b181-aafefb0d463a"
      />
      <button
        type="submit"
        className="w-fit text-sm bg-themeColor text-white font-medium active:scale-95 p-3 rounded-sm cursor-pointer hover:bg-indigo-600">{`${
        loading ? "sending..." : "submit"
      }`}</button>
    </form>
  );
};

export default ContactForm;
