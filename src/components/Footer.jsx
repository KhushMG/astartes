"use client"
import {React} from "react";
import { Card, CardBody } from "@nextui-org/react";

// It's a footer for the website. 
export default function Footer() {
  return (
      <Card>
        <CardBody>
          <p className="text-center justify-center ml-[4rem] sm:mt-[4rem] px-4 font-semibold text-xl text-red-500/60">
              DISCLAIMER
              <br/>
            {`
              This website is completely unofficial and in no way endorsed by Games Workshop Limited or Fantasy Flight Games.
              40k, Adeptus Astartes, Battlefleet Gothic, Black Flame, Black Library, the Black Library logo, BL Publishing, Blood Angels, Bloodquest, Blood Bowl, the Blood Bowl logo, The Blood Bowl Spike Device, Cadian, Catachan, Chaos, the Chaos device, the Chaos logo, Citadel, Citadel Device, Cityfight, City of the Damned, Codex, Daemonhunters, Dark Angels, Darkblade, Dark Eldar, Dark Future, Dawn of War, the Double-Headed/Imperial Eagle device, 'Eavy Metal, Eldar, Eldar symbol devices, Epic, Eye of Terror, Fanatic, the Fanatic logo, the Fanatic II logo, Fire Warrior, the Fire Warrior logo, Forge World, Games Workshop, Games Workshop logo, Genestealer, Golden Demon, Gorkamorka, Great Unclean One, GW, GWI, the GWI logo, the Hammer of Sigmar logo, Horned Rat logo, Inferno, Inquisitor, the Inquisitor logo, the Inquisitor device, Inquisitor:Conspiracies, Keeper of Secrets, Khemri, Khorne, the Khorne logo, Kroot, Lord of Change, Marauder, Mordheim, the Mordheim logo, Necromunda, Necromunda stencil logo, Necromunda Plate logo, Necron, Nurgle, the Nurgle logo, Ork, Ork skull devices, Sisters of Battle, Skaven, the Skaven symbol devices, Slaanesh, the Slaanesh logo, Space Hulk, Space Marine, Space Marine chapters, Space Marine chapter logos, Talisman, Tau, the Tau caste designations, Tomb Kings, Trio of Warriors, Twin Tailed Comet Logo, Tyranid, Tyrannid, Tzeentch, the Tzeentch logo, Ultramarines, Warhammer, Warhammer Historical, Warhammer Online, Warhammer 40k Device, Warhammer World logo, Warmaster, White Dwarf, the White Dwarf logo, and all associated marks, names, races, race insignia, characters, vehicles, locations, units, illustrations and images from the Blood Bowl game, the Warhammer world, the Talisaman world, and the Warhammer 40,000 universe are either ®, TM and/or © Copyright Games Workshop Ltd 2000-2021, variably registered in the UK and other countries around the world. All images and instances on this website used without permission. No challenge to their status intended. All Rights Reserved to their respective owners.
          `}
          </p>
        </CardBody>
      </Card>
  );
}
