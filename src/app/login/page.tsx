"use client";

import React, { useActionState } from "react";

async function increment(previousState: number, formData: FormData) {
  const username = formData.get("username") as string;
  const pass = formData.get("pass") as string;

  console.log({ username, pass });

  return previousState + 1;
}

export default function Page() {
  const [state, formAction] = useActionState(increment, 0);

  return (
    <div className="p-5">
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium">
            Your email
          </label>
          <input
            type="email"
            data-testid="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
            name="username"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium">
            Your password
          </label>
          <input
            type="password"
            data-testid="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            name="pass"
          />
        </div>
        <button formAction={formAction} className="font-medium rounded-lg hover:bg-slate-500 w-full h-full bg-gray-400 px-5 py-2.5">login</button>{" "}
      </form>
    </div>
  );
}
