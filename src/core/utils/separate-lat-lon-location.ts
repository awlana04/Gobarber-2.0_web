export default function separateLatLonLocation(entity: { location: string }) {
  const entityLat = entity.location.split(/,+/).at(0);
  const entityLon = entity.location.split(/,+/).at(1);

  const latitude = Number.parseFloat(entityLat!);
  const longitude = Number.parseFloat(entityLon!);

  return { latitude, longitude };
}
