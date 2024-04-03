export enum SelectedPage{
    Home = "home",
    AboutMe= "aboutMe",
    Experience = "experience",
    GetInTouch = "getInTouch",
    Projects = "projects"
  }
// so that you can use this across multiple pages


export interface BenefitType {
  image: string;
  title: string;
  description: string;
  path: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
