"use client";
import InputPassword from "@/components/InputPassword";
import InputText from "@/components/InputText";
import Image from "next/image";
import Link from "next/link";
import { registerAction } from "../../lib/actions/auth";
import { useFormState } from "react-dom";
import SlideShow from "../login/SlideShow";

const initialState = {
  fullName: "",
  email: "",
  password: "",
  rePassword: "",
};
export default function Register() {
  const [error, actionRegister] = useFormState(registerAction, initialState);

  return (
    <main className="flex min-h-screen  ">
      <div className="basis-6/12 pl-10 text-sm">
        <Image
          className="w-40 py-4"
          src={"assets/icons/qms_bri.svg"}
          alt="QMS BRI Logo"
          width={228}
          height={57}
        />
        <h1 className="mb-2 mt-14 text-4xl font-light">Daftar</h1>
        <p className="mb-5 text-sm text-primary-davy-grey">
          Selamat datang pada BRI Pendaftaran Antrian Online, mohon Daftar pada{" "}
          <br />
          form di bawah ini terlebih dahulu sebelum menggunakan Website.
        </p>

        <form action={actionRegister} className="w-4/6 flex-col space-y-4">
          <InputText
            labelTitle={"Nama Lengkap"}
            id={"fullName"}
            placeholder={"nama"}
            errorMsg={error?.fullName}
          />
          <InputText
            labelTitle={"Email"}
            id={"email"}
            placeholder={"nama@gmail.com"}
            errorMsg={error?.email}
          />
          <InputPassword
            labelTitle={"Password"}
            id={"password"}
            placeholder={"password"}
            errorMsg={error?.password}
          />
          <InputPassword
            labelTitle={"Re-Password"}
            id={"rePassword"}
            placeholder={"Re password"}
            errorMsg={error?.rePassword}
          />
          <div className="pt-4">
            <button className="w-full rounded-md bg-primary-light-navy p-2 text-center font-medium text-white">
              Daftar
            </button>
          </div>
        </form>
        <div className="mt-12 w-4/6 pb-24 text-center">
          <p>
            Sudah memiliki punya akun?
            <span className="font-medium text-primary-light-navy ">
              <Link href="/login"> Login</Link>
            </span>
          </p>
        </div>
      </div>

      {/* Right Side */}
      {/* <div className="basis-6/12 bg-gradient-to-b from-[#00529C] to-[#061523]"></div> */}
      <SlideShow />
    </main>
  );
}
