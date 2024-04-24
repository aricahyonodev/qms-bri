"use client"

import InputPassword from "@/components/InputPassword";
import InputText from "@/components/InputText";
import Image from "next/image";
import Link from "next/link";
import { loginAction } from "../../lib/actions/auth";
import { useFormState } from "react-dom";
import TextError from "@/components/textError";
const initialState = {
  message : ""
}
import SlideShow from "./SlideShow";

export default function Login() {

  const [error, actionLogin] = useFormState(loginAction, initialState);
  return (
    <main className="flex h-screen">
      <div className="basis-6/12 pl-10 text-sm">
        <Image
          className="w-40 py-4"
          src={"assets/icons/qms_bri.svg"}
          alt="QMS BRI Logo"
          width={228}
          height={57}
        />
        <h1 className="mb-2 mt-14 text-4xl font-light">Login</h1>
        <p className="mb-5 text-sm text-primary-davy-grey">
          Selamat datang pada BRI Pendaftaran Antrian Online, <br />
          mohon login pada form di bawah ini terlebih dahulu sebelum menggunakan
          website.
        </p>
        <TextError msg={error?.message}/>
        <form action={actionLogin} className="w-4/6 flex-col space-y-4 ">
          <InputText
            labelTitle={"Email"}
            id={"email"}
            placeholder={"nama@gmail.com"}
          />
          <InputPassword
            labelTitle={"Password"}
            id={"password"}
            placeholder={"password"}
          />
          <div className="pt-4">
            <button className="w-full rounded-md bg-primary-light-navy p-2 text-center font-medium text-white">
              Login
            </button>
          </div>
        </form>
        <div className="mt-12 w-4/6 text-center">
          <p>
            Belum memiliki akun?
            <span className="font-medium text-primary-light-navy ">
              <Link href="/register"> Daftar</Link>
            </span>
          </p>
        </div>
      </div>

      {/* Right Side */}
      {/* <div className="basis-7/12 bg-gradient-to-b from-[#00529C] to-[#061523]"></div> */}
      <SlideShow />
    </main>
  );
}
