import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { MapPin } from 'lucide-react';

interface MapProps {
  center?: [number, number];
  zoom?: number;
  showTokenInput?: boolean;
}

export const Map = ({ center = [72.8311, 21.1702], zoom = 13, showTokenInput = true }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    try {
      mapboxgl.accessToken = token;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: center,
        zoom: zoom,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add marker for store location
      const marker = new mapboxgl.Marker({ color: '#d91d64' })
        .setLngLat(center)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML('<h3 class="font-bold">SareeVastra Boutique</h3><p>Ring Road, Surat, Gujarat</p>')
        )
        .addTo(map.current);

      setIsMapLoaded(true);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (showTokenInput && !isMapLoaded) {
    return (
      <Card className="p-8">
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <MapPin className="w-8 h-8" />
            <h3 className="text-2xl font-playfair font-bold">Store Location Map</h3>
          </div>
          <p className="text-muted-foreground text-center mb-6">
            To view our store location on the map, please enter your Mapbox access token.
            <br />
            <a 
              href="https://account.mapbox.com/access-tokens/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Get your free token from Mapbox →
            </a>
          </p>
          <form onSubmit={handleTokenSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Enter your Mapbox access token"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="text-center"
            />
            <Button type="submit" variant="luxury" className="w-full">
              Load Map
            </Button>
          </form>
          <div className="mt-8 p-6 bg-accent/10 rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Store Address:</strong><br />
              Ring Road, Near Udhna Darwaja<br />
              Surat, Gujarat 395002, India
            </p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-2xl border-2 border-border">
      <div ref={mapContainer} className="absolute inset-0" />
      {!isMapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse">
          <p className="text-muted-foreground">Loading map...</p>
        </div>
      )}
    </div>
  );
};
