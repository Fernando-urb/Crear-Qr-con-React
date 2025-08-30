import QRCode from "react-qr-code";
import LogoHithub from "../img/Github.svg";

export const QrCode = () => {
  return (
    <>
      <div className=" bg-amber-50  rounded-2xl h-auto  w-auto p-2 shadow-sm  flex flex-col gap-4 text-center ">

        <div className="flex flex-col text-center m-auto  p-8  bg-[#3784dd] rounded-1xl rounded-sm">
          <QRCode
            className="qr"
            value="https://github.com/Fernando-urb"
            bgColor="#3784dd"
            fgColor="white"
            size="150"
          />
        </div>

        <div className="flex flex-col gap-3  text-center  qr">
          <h1 className="text-[0.8rem]  flex justify-center gap-3 ">
            Mi Repositorio de Git-Hub{" "}
            <img src={LogoHithub} alt="" className=" size-7" />
          </h1>

          <p className=" text-neutral-700 text-sm ">
            Escanea el codigo Qr y podras ingresar a mi pagina de HitHub
            actualizada , donde podras encontrar todos mis repositorios
          </p>
        </div>
      </div>
    </>
  );
};
