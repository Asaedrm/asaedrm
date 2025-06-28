export interface LayoutHomeConstsProps {
  frontend: LayoutHomeContentsProps
  backend: LayoutHomeContentsProps;
}
export interface LayoutHomeContentsProps {
  title: string;
  description: string;
}
export const LAYOUT_HOME_CONSTS: LayoutHomeConstsProps = {
  frontend: {
    title: "Frontend",
    description: "Asaed Reyes Medina",
  },
  backend: {
    title: "Backend",
    description: "Full Stack Developer",
  },
}
