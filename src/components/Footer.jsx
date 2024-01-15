"use client"
import {React, useEffect} from "react";
import { Card, CardBody } from "@nextui-org/react";

export default function Footer() {

  return (
    <div>
      <button className="border rounded-md ml-[5rem] p-2 bg-white/30">
        <a href="#search" >Back to top</a>
      </button>
      <Card >
        <CardBody >
          <p className="flex justify-center ml-[4rem] px-4 font-semibold text-xl text-red-500">
            DISCLAIMER
            <br />
            {`
          This is an unofficial website is no way endorsed by Games Workshop
          Limited or Fantasy Flight Games. 40k, Adeptus Astartes, and all associated
          marks, names, races, race insignia, characters, vehicles, locations,
          units, illustrations and images from the Blood Bowl game, the
          Warhammer world, the Talisaman world, and the Warhammer 40,000
          universe are either ®, TM and/or © Copyright Games Workshop Ltd
          2000-2021, variably registered in the UK and other countries around
          the world. All images and instances on this website used without
          permission. No challenge to their status intended. All Rights Reserved
          to their respective owners.`}
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
