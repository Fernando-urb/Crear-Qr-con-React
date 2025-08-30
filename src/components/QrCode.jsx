import QRCode from "react-qr-code";
import LogoHithub from "../img/Github.svg";

export const QrCode = () => {
  return (
    <>
    <div className="mt-10 bg-amber-50 p-5 rounded-2xl h-auto w-[280px] shadow-sm">
         <div className="flex flex-col text-center m-auto p-5  bg-[#3784dd] rounded-1xl rounded-sm">
        <QRCode
          value="https://github.com/Fernando-urb"
          bgColor="#3784dd"
          fgColor="white"
          size="200"
        />
      </div>

      <div className="flex justify-around py-5">
        <img src={LogoHithub} alt="" className="size-7" />
        <h1 className="flex">Mi Repositorio de Git-Hub</h1>
      </div>
      <p className="text-center text-neutral-700">
        Escanea el codigo Qr y podras ingresar a mi pagina de HitHub actualizada , donde podras encontrar todos mis repositorios

      </p>

    </div>
     

      
    </>
  );
};
