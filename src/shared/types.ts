import { ReactNode } from "react";

// 列挙型
export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus"
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  // ? をつけることで optionalにできる
  description?: string;
  image: string;
}