export enum SelectedPage{
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclassses",
    ContactUs = "contactus",
  }
// so that you can use this across multiple pages


export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
