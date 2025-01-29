import { SVGProps } from 'react';

const Home = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M24.195 10.1059L14.2013 0.672169L14.1812 0.653419C13.722 0.233109 13.122 0 12.4994 0C11.8768 0 11.2768 0.233109 10.8175 0.653419L10.7963 0.672169L0.805 10.1059C0.551626 10.3403 0.349354 10.6245 0.21084 10.9407C0.0723253 11.2569 0.00054854 11.5982 0 11.9434V23.4997C0 24.1627 0.263392 24.7986 0.732233 25.2674C1.20107 25.7363 1.83696 25.9997 2.5 25.9997H22.5C23.163 25.9997 23.7989 25.7363 24.2678 25.2674C24.7366 24.7986 25 24.1627 25 23.4997V11.9434C24.9995 11.5982 24.9277 11.2569 24.7892 10.9407C24.6506 10.6245 24.4484 10.3403 24.195 10.1059ZM22 22.9997H3V12.1597L12.5 3.19092L22 12.1597V22.9997Z"
        fill="#343330"
      />
    </svg>
  );
};

export default Home;
