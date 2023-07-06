import { Metadata } from "next"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { LoginForm } from "@/components/auth/LoginForm"

export const metadata: Metadata = {
  title: "Login",
}

export default function LoginPage() {
  return (
    <>
      <div className="container relative hidden flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-5 lg:px-0">
        <div className="relative hidden h-screen flex-col p-10 text-white dark:border-r lg:flex lg:col-span-3">
          <div className="absolute inset-0">
            {" "}
            <img
              src="/assets/hero.jpg"
              alt="Pokemon Hero"
              className="block h-screen object-cover object-center"
            />
            {/* This is the element we add for creating the overlay: */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;
                <a
                  href="https://unsplash.com/photos/ssVt_BoJV2U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                  className="underline"
                >
                  Photo
                </a>{" "}
                by{" "}
                <a
                  href="https://unsplash.com/@branden_skeli?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                  className="underline"
                >
                  Branden Skeli
                </a>{" "}
                on Unsplash&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8 lg:col-span-2">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col text-left">
              <p className="text-2xl font-medium tracking-tight">Welcome to</p>
              <p className="text-4xl font-extrabold">{siteConfig.name}</p>
            </div>
            <LoginForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link
                href="/sign-up"
                className="font-medium underline underline-offset-4 hover:text-primary"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
