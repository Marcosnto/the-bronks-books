import { BiLogoGithub } from "react-icons/bi";

export default function Footer() {
  return (
    <div
      className="
        text-1xl  
        font-light
        mt-10
        text-slate-50
        bg-emerald-600 
        p-1"
    >
      <a
        href="https://github.com/Marcosnto"
        className="      
          flex
          justify-center
          gap-2"
      >
        <p>Desenvolvido por Marcos Neto</p>
        <BiLogoGithub className="text-2xl" />
      </a>
    </div>
  );
}
