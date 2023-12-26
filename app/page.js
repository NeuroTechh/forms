"use client";
import React, { useState } from "react";

const FileUploadForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    domain: "",
    description: "",
    techDomains: [],
    reel: false,
    posts: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDomainSelection = (event) => {
    const { name, checked } = event.target;
    if (name === "reel" || name === "posts") {
      setFormData({ ...formData, [name]: checked });
    } else {
      let updatedTechDomains = checked
        ? [...formData.techDomains, name]
        : formData.techDomains.filter((domain) => domain !== name);
      setFormData({ ...formData, techDomains: updatedTechDomains });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (formData.techDomains.length === 0 && !formData.reel && !formData.posts) {
        alert("Please select atleast one option");
        setLoading(false);
        return;
      }

      const response = await fetch(process.env.NEXT_PUBLIC_APPSCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response);

      if (response) {
        console.log("Form submitted successfully!");
        alert("Form submitted successfully!");
        setLoading(false);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
    }
  };

  const techDomains = [
    "ML",
    "Cyber Security",
    "Web Dev",
    "DSA",
    "Cloud Computing",
    "Data Science",
  ];

  const handleDomainForm = () => {
    if (formData.domain === "technical") {
      return (
        <div>
          <label className="font-semibold py-2 mb-2">Technical Domains:</label>
          <div className="pt-2 grid grid-cols-2">
            {techDomains.map((domain, index) => (
              <div key={index} className="px-4 py-2 flex gap-3">
                <input
                  type="checkbox"
                  id={domain}
                  name={domain}
                  value={domain}
                  onChange={handleDomainSelection}
                  className="bg-slate-100 border-purple-300 text-pink-500 focus:ring-0 focus:outline-none rounded shadow"
                />
                <label htmlFor={domain}>{domain}</label>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (formData.domain === "creatives") {
      return (
        <div>
          <label>Creative Domains:</label>
          <div className="px-4 py-2 flex gap-3">
            <input
              type="checkbox"
              id="reel"
              name="reel"
              onChange={handleDomainSelection}
              className="bg-slate-100 border-purple-300 text-red-500 focus:ring-0 focus:outline-none rounded shadow"
            />
            <label htmlFor="reel">Reel</label>
          </div>
          <div className="px-4 py-2 flex gap-3">
            <input
              type="checkbox"
              id="posts"
              name="posts"
              onChange={handleDomainSelection}
              className="bg-slate-100 border-purple-300 text-red-500 focus:ring-0 focus:outline-none rounded shadow"
            />
            <label htmlFor="posts">Posts</label>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen max-h-screen w-full flex md:flex-row justify-center items-center lg:bg-[#181818] md:bg-[url('/grainny.png')] bg-no-repeat bg-cover overflow-hidden">
      <div className="rounded-[0.5rem] text-white space-y-6 p-10 pb-16 md:min-w-[50vw] md:max-w-[50vw] h-full min-h-screen flex justify-center items-center md:items-start flex-col w-full grain overflow-y-scroll scrollbar">
        <h1 className="text-3xl font-black text-center">Naitechh Registrations</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md text-sm">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 font-semibold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="border-b border-gray-500 rounded px-2 py-2 w-full bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border-b border-gray-500 rounded px-2 py-2 w-full bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="domain" className="block mb-1 font-semibold">
              Select Domain:
            </label>
            <select
              id="domain"
              name="domain"
              value={formData.domain}
              onChange={handleInputChange}
              className="border-b font-semibold border-gray-500 rounded px-2 py-2 w-full bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg md:bg-[#222]"
              required
            >
              <option value="">Choose Domain</option>
              <option value="technical"> Technical</option>
              <option value="creatives" className="rounded-full">
                Creatives
              </option>
            </select>
          </div>
          {handleDomainForm()}
          <div className="my-4">
            <label htmlFor="description" className="block mb-1 font-semibold text-base">
              How can you contribute to the growth of Naitechh?
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="border-b border-gray-500 rounded px-2 py-5 w-full bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg text-md"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
      <img
        src="/bg.png"
        className="hidden lg:block w-full min-w-[50vw] max-w-[50vw] h-full min-h-screen max-h-screen"
        alt="Background"
      ></img>
    </div>
  );
};

export default FileUploadForm;
