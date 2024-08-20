"use client";
import {
  Map as RMap,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl/maplibre";
import { useMapController } from "../../hooks";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { env } from "~/env";

export function CustomMap() {
  const { viewState, handleMove } = useMapController();

  const { theme } = useTheme();

  return (
    <motion.div layout="size" className="flex-auto">
      <RMap
        {...viewState}
        style={{ flex: 1 }}
        mapStyle={`https://api.maptiler.com/maps/streets-v2${
          theme === "dark" ? "-dark" : ""
        }/style.json?key=${env.NEXT_PUBLIC_MAP_KEY}`}
        onMove={handleMove}
        initialViewState={{ zoom: 14 }}
      >
        <GeolocateControl />
        <NavigationControl />
      </RMap>
    </motion.div>
  );
}
