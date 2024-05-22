import React from "react";
import "./CardHover.css";

function CardArtikel() {
  return (
    <div className="card-container w-[411px] h-[337px] rounded-lg shadow-2xl flex flex-col justify-center items-center mx-auto my-10">
      <div className="w-full h-[178px] rounded-t-lg overflow-hidden justify-center items-center flex">
        <img
          className="card-image w-full h-full object-cover transition-transform duration-500 ease-in-out"
          src="https://t3.ftcdn.net/jpg/00/97/81/02/360_F_97810286_SYAktfuCvCY7uFYxqFI0BVIVflKzqNT9.jpg"
          alt="Placeholder"
        />
      </div>
      <div className="self-stretch grow shrink basis-0 px-[15px] py-2.5 bg-white rounded-b-lg flex flex-col justify-between items-start">
        <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
          <h6
            className="card-title w-full text-sky-700 text-base font-bold font-['Fira Sans'] transition-colors duration-300 ease-in-out"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "1.5em",
              maxHeight: "3em",
            }}
          >
            Pentingnya Keterlibatan Ayah dalam Pengasuhan Anak Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Fuga id velit earum natus,
            odit modi autem harum assumenda soluta fugiat vel obcaecati officia
            neque nisi expedita numquam necessitatibus rem ratione.
          </h6>
          <div
            className="self-stretch text-zinc-700 text-sm font-normal font-['Open Sans']"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "1.5em",
              maxHeight: "3em",
            }}
          >
            Pengasuhan anak adalah tanggung jawab bersama yang melibatkan peran
            aktif dari kedua orang tua. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Laudantium, autem ab quia pariatur ipsam totam
            blanditiis magnam, ad exercitationem inventore excepturi harum
            ratione dolores magni unde! Quae cum dolores repellendus!
          </div>
        </div>
        <div className="self-stretch h-[21px] text-right text-neutral-400 text-sm font-normal font-['Fira Sans']">
          31 Februari 2024
        </div>
      </div>
    </div>
  );
}

export default CardArtikel;
