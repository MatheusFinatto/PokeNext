import Image from "next/image";
import React from "react";

function about() {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-3xl">Sobre o projeto: </h1>
      <p className="m-10 max-w-lg">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
        impedit sint harum officiis ullam voluptates dignissimos est iste hic
        repudiandae quod modi assumenda illo, voluptatibus perferendis deserunt
        ipsa exercitationem tempore.
      </p>
      <Image
        src="/images/charizard.png"
        width={400}
        height={400}
        alt="charizard"
      ></Image>
    </div>
  );
}

export default about;
