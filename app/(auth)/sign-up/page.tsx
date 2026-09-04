"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import { INVESTMENT_GOALS, RISK_TOLERANCE_OPTIONS, PREFERRED_INDUSTRIES } from "@/lib/constants";
import { CountrySelectField } from "@/components/forms/CountrySelectField";
import type { Control } from "react-hook-form";
import FooterLink from "@/components/forms/FooterLink";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "",
      investmentGoals: "",
      riskTolerance: "",
      preferredIndustry: "",
    },
    mode: "onBlur",
  });
  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <h1 className="form-title"> Sign Up & Personalize</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
        name = "fullName"
        label = "Full Name"
        placeholder = "John Doe"
        register = {register}
        error = {errors.fullName}
        validation={{required: 'Full name is required', minlength: 2}}
        />

        <InputField
        name = "email"
        label = "Email"
        placeholder = "john.doe@example.com"
        register = {register}
        error = {errors.email}
        validation={{required: 'Email is required', pattern: {value: /^\S+@\S+$/i, message: 'Invalid email address'}}}
        />

         <InputField
        name = "password"
        label = "Password"
        placeholder = "••••••••"
        type = "password"
        register = {register}
        error = {errors.password}
        validation={{required: 'Password is required', minlength: 6}}
        />

        <CountrySelectField 
          name = "country"
          label = "Country"
          control = {control as Control<any>}
          error = {errors.country}
          required
        />

        <SelectField
          name = "investmentGoals"
          label = "Investment Goals"
          placeholder = "Select your investment goals"
          options = {INVESTMENT_GOALS}
          control = {control}
          error = {errors.investmentGoals}
        />

        <SelectField
          name = "riskTolerance"
          label = "Risk Tolerance"
          placeholder = "Select your risk level"
          options = {RISK_TOLERANCE_OPTIONS}
          control = {control}
          error = {errors.riskTolerance}
        />

        <SelectField
          name = "preferredIndustry"
          label = "Preferred Industry"
          placeholder = "Select your preferred industry"
          options = {PREFERRED_INDUSTRIES}
          control = {control}
          error = {errors.preferredIndustry}
        />
       
        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Creating Account" : "Start Your Investing Journey"}
        </Button>
        <FooterLink text="Already have an account?" linkText="Sign In" href="/sign-in" />
      </form>
    </>
  );
};

export default SignUp;
