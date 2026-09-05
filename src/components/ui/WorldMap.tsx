import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

type TopoTopology = Parameters<typeof topojson.feature>[0];
type TopoFeatureArg = Parameters<typeof topojson.feature>[1];
type TopoMeshArg = NonNullable<Parameters<typeof topojson.mesh>[1]>;

const destinations: { name: string; coords: [number, number] }[] = [
  { name: 'Canada', coords: [-95, 60] },
  { name: 'États-Unis', coords: [-100, 38] },
  { name: 'Europe', coords: [10, 50] },
  { name: 'Afrique', coords: [25, 0] },
  { name: 'Asie-Pacifique', coords: [120, 25] },
];

const DAKAR: [number, number] = [-17.4, 14.7];

export default function WorldMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = 680;
    const H = 340;

    const projection = d3.geoNaturalEarth1()
      .scale(105)
      .translate([W / 2, H / 2 + 10]);

    const path = d3.geoPath(projection, ctx);

    d3.json<TopoTopology>(
      'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'
    ).then((world) => {
      if (!world) return;

      const countriesObj = world.objects['countries'];
      const countries = topojson.feature(world, countriesObj as TopoFeatureArg);
      const borders = topojson.mesh(
        world,
        countriesObj as TopoMeshArg,
        (a, b) => a !== b
      );

      // Fond
      ctx.fillStyle = '#102048';
      ctx.fillRect(0, 0, W, H);

      // Océan
      ctx.beginPath();
      path({ type: 'Sphere' });
      ctx.fillStyle = '#0d1c3e';
      ctx.fill();

      // Continents
      ctx.beginPath();
      path(countries);
      ctx.fillStyle = '#1e3870';
      ctx.fill();

      // Bordures
      ctx.beginPath();
      path(borders);
      ctx.strokeStyle = '#102048';
      ctx.lineWidth = 0.4;
      ctx.stroke();

      const dakarPx = projection(DAKAR);
      if (!dakarPx) return;

      // Lignes pointillées
      destinations.forEach((d) => {
        const px = projection(d.coords);
        if (!px) return;
        ctx.beginPath();
        ctx.setLineDash([5, 3]);
        ctx.moveTo(dakarPx[0], dakarPx[1]);
        ctx.lineTo(px[0], px[1]);
        ctx.strokeStyle = '#E0A238';
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.65;
        ctx.stroke();
        ctx.globalAlpha = 1;
        ctx.setLineDash([]);
      });

      // Points destinations
      destinations.forEach((d) => {
        const px = projection(d.coords);
        if (!px) return;
        ctx.beginPath();
        ctx.arc(px[0], px[1], 4, 0, Math.PI * 2);
        ctx.fillStyle = '#E0A238';
        ctx.fill();
        ctx.font = '600 11px Inter, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.fillText(d.name, px[0], px[1] - 10);
      });

      // Halo Dakar
      ctx.beginPath();
      ctx.arc(dakarPx[0], dakarPx[1], 12, 0, Math.PI * 2);
      ctx.fillStyle = '#C80828';
      ctx.globalAlpha = 0.2;
      ctx.fill();
      ctx.globalAlpha = 1;

      ctx.beginPath();
      ctx.arc(dakarPx[0], dakarPx[1], 7, 0, Math.PI * 2);
      ctx.fillStyle = '#C80828';
      ctx.globalAlpha = 0.5;
      ctx.fill();
      ctx.globalAlpha = 1;

      // Point Dakar
      ctx.beginPath();
      ctx.arc(dakarPx[0], dakarPx[1], 4, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(dakarPx[0], dakarPx[1], 2, 0, Math.PI * 2);
      ctx.fillStyle = '#C80828';
      ctx.fill();

      // Label Dakar
      ctx.font = '700 11px Inter, sans-serif';
      ctx.fillStyle = '#C80828';
      ctx.textAlign = 'center';
      ctx.fillText('DAKAR', dakarPx[0], dakarPx[1] + 18);
    });
  }, []);

  return (
    <div className="rounded-xl overflow-hidden w-full">
      <canvas
        ref={canvasRef}
        width={680}
        height={340}
        style={{ width: '100%', display: 'block' }}
        aria-label="Carte mondiale — Dakar connecté aux grandes régions universitaires"
      />
    </div>
  );
}
