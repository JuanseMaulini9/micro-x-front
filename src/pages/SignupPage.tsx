import { SignUpForm } from "../components/auth/SignUpForm";

export const SignupPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold absolute top-20">Micro-X</h2>
      <section>
        <SignUpForm />
      </section>
    </div>
  );
};
