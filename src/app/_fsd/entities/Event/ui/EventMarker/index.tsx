import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Marker } from "react-map-gl/maplibre";
import type { EventMarkerProps } from "../../types";

/**
 * @ItemEntity пин иконка ивента
 */

export function EventMarker({ latitude, longitude }: EventMarkerProps) {
  return (
    <Marker latitude={latitude} longitude={longitude} anchor="bottom">
      <FaMapMarkerAlt size={30} className="fill-primary-400" />
    </Marker>
  );
}
