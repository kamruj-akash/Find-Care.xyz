"use client";

import Image from "next/image";
import Link from "next/link";
import { FieldValues, useForm } from "react-hook-form";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const handleLoginUser = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* LEFT FORM */}
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link href={"/"} className="mb-8 flex items-center gap-2">
            <span className="text-2xl text-blue-500">🛡️</span>
            <span className="text-xl font-semibold">Care.xyz</span>
          </Link>

          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="mt-2 text-gray-500">
            Trusted care for your loved ones, simplified.
          </p>

          {/* Tabs */}
          <div className="mt-6 flex rounded-lg bg-gray-100 p-1">
            <button className="w-1/2 rounded-md bg-white py-2 text-sm font-medium shadow">
              Log In
            </button>
            <Link
              href="/register"
              className="w-1/2 py-2 text-center text-sm font-medium text-gray-600"
            >
              Register
            </Link>
          </div>

          {/* Google */}
          <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border py-3 text-sm font-medium hover:bg-gray-50">
            <span>🔒</span>
            Continue with Google
          </button>

          <div className="my-6 flex items-center gap-2 text-xs text-gray-400">
            <div className="h-px flex-1 bg-gray-200" />
            OR CONTINUE WITH EMAIL
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Email */}
          <form onSubmit={handleSubmit(handleLoginUser)} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">
                Email Address
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border px-4 py-3 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <div className="mb-1 flex justify-between">
                <label className="text-sm font-medium">Password</label>
                <Link
                  href="#"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
              <input
                {...register("password")}
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border px-4 py-3 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <button className="w-full rounded-lg bg-blue-500 py-3 text-white font-medium hover:bg-blue-600">
              Log In
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-blue-500 hover:underline">
              Register now
            </Link>
          </p>

          <p className="mt-10 text-center text-xs text-gray-400">
            © 2024 Care.xyz Inc. All rights reserved.
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative hidden lg:block">
        <Image
          src="/images/login-hero.jpg"
          alt="Care"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-16 left-12 right-12 text-white">
          <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs">
            ⭐ Trusted by 5,000+ families
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight">
            Connecting families <br /> with verified professionals <br /> you
            can trust.
          </h2>

          <p className="mt-4 text-sm text-white/90">
            Join our secure community of caretakers and families.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
