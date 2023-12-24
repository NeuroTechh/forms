"use client";
import React, { useState } from "react";
import Head from "next/head";

const FileUploadForm = () => {
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
      let updatedTechDomains = [...formData.techDomains];

      if (checked) {
        updatedTechDomains = [...updatedTechDomains, name];
      } else {
        updatedTechDomains = updatedTechDomains.filter(
          (domain) => domain !== name
        );
      }

      setFormData({ ...formData, techDomains: updatedTechDomains });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_APPSCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response)

      if (response) {
        console.log("Form submitted successfully!");
        alert("Form submitted successfully!");
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
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
          <label>Technical Domains:</label>
          {techDomains.map((domain, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={domain}
                name={domain}
                value={domain}
                onChange={handleDomainSelection}
              />
              <label htmlFor={domain}>{domain}</label>
            </div>
          ))}
        </div>
      );
    } else if (formData.domain === "creatives") {
      return (
        <div>
          <label>Creative Domains:</label>
          <div>
            <input
              type="checkbox"
              id="reel"
              name="reel"
              onChange={handleDomainSelection}
            />
            <label htmlFor="reel">Reel</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="posts"
              name="posts"
              onChange={handleDomainSelection}
            />
            <label htmlFor="posts">Posts</label>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="max-w-lg mx-auto  mt-8 p-6 bg-gray-200 text-gray-900 rounded-lg">
      <Head>
        <title>NaiTechh Registrations</title>
      </Head>
      <h1 className="text-4xl font-bold  text-center m-4 ">
        NaiTechh Registrations
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border rounded px-2 py-1 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border rounded px-2 py-1 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="domain" className="block mb-1">
            Select Domain:
          </label>
          <select
            id="domain"
            name="domain"
            value={formData.domain}
            onChange={handleInputChange}
            className="border rounded px-2 py-1 w-full"
            required
          >
            <option value="">Choose Domain</option>
            <option value="technical">Technical</option>
            <option value="creatives">Creatives</option>
          </select>
        </div>
        {handleDomainForm()}
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">
            How can you help in growing naitechh:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="border rounded px-2 py-1 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FileUploadForm;
