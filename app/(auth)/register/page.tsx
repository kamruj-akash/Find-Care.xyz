"use client";
import Image from "next/image";
import Link from "next/link";
import { FieldValues, useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterUser = (data: FieldValues) => {
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

          <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
          <p className="mt-2 text-gray-500">
            Join Care.xyz to find trusted care easily.
          </p>

          {/* Tabs */}
          <div className="mt-6 flex rounded-lg bg-gray-100 p-1">
            <Link
              href="/login"
              className="w-1/2 py-2 text-center text-sm font-medium text-gray-600"
            >
              Log In
            </Link>
            <button className="w-1/2 rounded-md bg-white py-2 text-sm font-medium shadow">
              Register
            </button>
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

          {/* Form */}
          <form
            onSubmit={handleSubmit(handleRegisterUser)}
            className="space-y-4"
          >
            <div>
              <label className="mb-1 block text-sm font-medium">
                Full Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="John Doe"
                className="w-full rounded-lg border px-4 py-3 text-sm outline-none focus:border-blue-500"
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border px-4 py-3 text-sm outline-none focus:border-blue-500"
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Contact Number
              </label>
              <input
                {...register("contact", { required: true })}
                type="number"
                placeholder="+880 1XXXXXXXXX"
                className="w-full rounded-lg border px-4 py-3 text-sm outline-none focus:border-blue-500"
              />
              {errors.contact && (
                <span className="text-red-500">Contact is required</span>
              )}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Password</label>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border px-4 py-3 text-sm outline-none focus:border-blue-500"
              />
              {errors.password && (
                <span className="text-red-500">Password is required</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-500 py-3 text-white font-medium hover:bg-blue-600"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>

          <p className="mt-10 text-center text-xs text-gray-400">
            © 2024 Care.xyz Inc. All rights reserved.
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE (Same as Login) */}
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

export default RegisterPage;
