"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import {
  Camera,
  Aperture,
  Sun,
  Mountain,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";
import { Counter } from "@/components/ui/NewCounter";
import { MyGear } from "@/components/ui/MyGear";
import Link from "next/link";



/* ---------------- DATA ---------------- */

const categories = ["All", "Landscape", "Street", "Portrait", "Macro", "Food & Drink", "Seascape", "Travel", "Architecture", "Nature", "Urban", "Lifestyle", "Automotive","Event", "Sport", "Culture", "Books"];

const photos = [
  {
  src: "/photos/photo_1.jpg",
  category: "Landscape",
  title: "Backwater Serenity",
  camera: "Apple iPhone 16 Pro Max",
  settings: "f/1.8 · 1/5000s · ISO 100",
  location: "Backwaters, Varkala",
  story:
    "A calm passage through Varkala’s backwaters, where the dense canopy formed a natural archway. The fast shutter froze the subtle ripples, preserving the stillness and symmetry of the scene.",
  date: "November 2025"
},
{
  src: "/photos/photo_2.jpg",
  category: "Food & Drink",
  title: "Cliffside Calm",
  camera: "Apple iPhone 16 Pro Max",
  settings: "f/1.8 · 1/7400s · ISO 80",
  location: "Varkala Cliff, Kerala",
  story:
    "A quiet pause above the Arabian Sea at Varkala Cliff. The turquoise drink echoed the tones of the sky, while the distant waves and passing bird completed the moment of coastal stillness.",
  date: "November 2025"
},
{
  src: "/photos/photo_3.jpg",
  category: "Landscape",
  title: "Through the Stillness",
  camera: "Apple iPhone 16 Pro Max",
  settings: "f/1.8 · 1/5000s · ISO 100",
  location: "Backwaters, Varkala",
  story:
    "Gliding quietly through Varkala’s backwaters, the vivid red boat cut through the calm reflections. The overhanging canopy created a natural tunnel, guiding the eye toward the open water ahead.",
  date: "November 2025"
},
{
  src: "/photos/photo_4.jpg",
  category: "Landscape",
  title: "Drift & Reflections",
  camera: "Apple iPhone 16 Pro Max",
  lens: "6.8mm f/1.8",
  settings: "f/1.8 · 1/7400s · ISO 80",
  dimensions: "4284 × 5712",
  location: "Backwaters, Varkala",
  story:
    "Resting quietly on the edge of a wooden boat, the moment balanced technology and nature. Gentle ripples carried reflections across the water while the distant green shoreline held the calm.",
  date: "November 2025"
},
{
  src: "/photos/photo_5.jpg",
  category: "Landscape",
  title: "Framed by Nature",
  camera: "Apple iPhone 16 Pro Max",
  lens: "6.8mm f/1.8",
  settings: "f/1.8 · 1/5000s · ISO 100",
  dimensions: "3024 × 4032",
  location: "Backwaters, Varkala",
  story:
    "A natural arch of tangled branches opened toward the quiet backwaters. The contrast between the shadowed foreground and the soft, misty horizon created a scene of depth and calm.",
  date: "November 2025"
},
{
  src: "/photos/photo_6.jpg",
  category: "Landscape",
  title: "Under Monsoon Skies",
  camera: "Apple iPhone 16 Pro Max",
  lens: "6.8mm f/1.8",
  settings: "f/1.8 · 1/5000s · ISO 100",
  dimensions: "3024 × 4032",
  location: "Varkala, Kerala",
  story:
    "Dark monsoon clouds gathered above the palm-lined hillside, casting a dramatic mood over the temple roof. The contrast between the stormy sky and the warm architecture captured Varkala’s raw coastal atmosphere.",
  date: "November 2025"
}, 
{
  src: "/photos/photo_7.jpg",
  category: "Food & Drink",
  title: "In Coffee We Trust",
  camera: "Apple iPhone 16 Pro Max",
  lens: "6.8mm f/1.8",
  settings: "f/1.8 · 1/5000s · ISO 100",
  dimensions: "3024 × 4032",
  location: "Cafe Trip is Life, Varkala",
  story:
    "Tucked into a lush corner of the café, the sign quietly echoed a universal truth. Surrounded by tropical greens and warm textures, the scene captured the relaxed, slow-living vibe of Varkala.",
  date: "November 2025"
},
{
  src: "/photos/photo_8.jpg",
  category: "Seascape",
  title: "Dusk on the Arabian Sea",
  camera: "Apple iPhone 16 Pro Max",
  lens: "6.8mm f/1.8",
  settings: "f/1.8 · 1/5000s · ISO 100",
  dimensions: "3024 × 4032",
  location: "Varkala Beach, Kerala",
  story:
    "As the sky softened into shades of pink and grey, a fishing boat drifted across the Arabian Sea. The silhouettes against the pastel horizon captured the quiet rhythm of evening at Varkala Beach.",
  date: "November 2025"
}, 
{
  src: "/photos/photo_9.jpg",
  category: "Travel",
  title: "Guardian of the Skies",
  camera: "Apple iPhone 16 Pro Max",
  lens: "6.8mm f/1.8",
  settings: "f/1.8 · 1/5000s · ISO 100",
  dimensions: "3024 × 4032",
  location: "Jatayu Earth's Center, Kerala",
  story:
    "Captured from a low, dramatic angle, the monumental Jatayu sculpture rose beneath brooding skies. The scale, textures, and moody clouds combined to evoke a sense of myth, power, and timelessness.",
  date: "November 2025"
},
{
  src: "/photos/photo_10.jpg",
  category: "Seascape",
  title: "Edge of Blue",
  camera: "Apple iPhone 16 Pro Max",
  lens: "6.8mm f/1.8",
  settings: "f/1.8 · 1/5000s · ISO 100",
  dimensions: "4284 × 5712",
  location: "Varkala Beach, Kerala",
  story:
    "A quiet coastal stretch where earthy tones met the endless blue of the Arabian Sea. The layered composition of greenery, road, stone barrier, and sky created a natural visual rhythm.",
  date: "November 2025"
},
{
  src: "/photos/photo_11.jpg",
  category: "Architecture",
  title: "Sacred Silence",
  camera: "Apple iPhone 16 Pro Max",
  lens: "6.8mm f/1.8",
  settings: "f/1.8 · 1/5000s · ISO 100",
  dimensions: "3024 × 4032",
  location: "Pune, Maharashtra",
  story:
    "Illuminated against the deep night sky, the white temple facade stood in striking contrast. The upward perspective emphasized its scale, while the flowing saffron flag added movement to the stillness.",
  date: "September 2025"
},
{
  src: "/photos/photo_12.jpg",
  category: "Nature",
  title: "Hidden in Green",
  camera: "Apple iPhone 16 Pro Max",
  lens: "6.8mm f/1.8",
  settings: "f/1.8 · 1/5000s · ISO 100",
  dimensions: "3024 × 4032",
  location: "Unknown",
  story:
    "Nestled among vibrant leaves, the young mangoes blended almost seamlessly into the canopy. The rich greens and natural light created a refreshing, organic composition.",
  date: "March 2025"
},
{
  src: "/photos/photo_13.jpg",
  category: "Urban",
  title: "Rising Lines",
  camera: "Apple iPhone 16 Pro Max",
  lens: "6.8mm f/1.8",
  settings: "f/1.8 · 1/5000s · ISO 100",
  dimensions: "3024 × 4032",
  location: "Hinjewadi, Pune",
  story:
    "A study in geometry and growth — the skeletal structure of a high-rise reached upward beneath a washed sky. The crane’s horizontal span balanced the vertical rhythm of the building’s frame.",
  date: "February 2025"
},
{
  src: "/photos/photo_14.jpg",
  category: "Landscape",
  title: "Himalayan Contrast",
  camera: "Apple iPhone 11",
  lens: "1.5mm f/2.4",
  settings: "f/2.4 · 1/340s · ISO 20",
  dimensions: "1862 × 4032",
  location: "Yumthang Valley, Sikkim",
  story:
    "Sharp mountain ridges rose dramatically beneath a deep, endless blue sky. Patches of snow scattered across the rugged terrain highlighted the raw textures and stark contrasts of the Himalayan landscape.",
  date: "February 2023"
},
{
  src: "/photos/photo_15.jpg",
  category: "Landscape",
  title: "Glacial Flow",
  camera: "Apple iPhone 11",
  lens: "1.5mm f/2.4",
  settings: "f/2.4 · 1/340s · ISO 20",
  dimensions: "1862 × 4032",
  location: "Yumthang Valley, Sikkim",
  story:
    "Crystal-clear glacial water wound gently through a bed of pale stones, leading the eye toward the snow-capped Himalayan peaks. The vivid blues and rugged textures captured the pristine stillness of Yumthang Valley.",
  date: "February 2023"
},
{
  src: "/photos/photo_16.jpg",
  category: "Landscape",
  title: "Whispers of the Hills",
  camera: "Apple iPhone 11",
  lens: "1.5mm f/2.4",
  settings: "f/2.4 · 1/340s · ISO 20",
  dimensions: "1862 × 4032",
  location: "North Sikkim",
  story:
    "A mountain stream carved its way through weathered rocks, hidden beneath a canopy of deep greens. The subdued light and moody tones reflected the raw, untouched atmosphere of North Sikkim.",
  date: "February 2023"
},
{
  src: "/photos/photo_17.jpg",
  category: "Lifestyle",
  title: "Mountain Companion",
  camera: "Apple iPhone 11",
  lens: "1.5mm f/2.4",
  settings: "f/2.4 · 1/340s · ISO 20",
  dimensions: "1862 × 4032",
  location: "Lachen, Sikkim",
  story:
    "Perched calmly among weathered wood and scattered stones, the mountain dog seemed perfectly at home in the rugged surroundings. A fleeting moment of quiet character in the high-altitude stillness of Lachen.",
  date: "February 2023"
},
{
  src: "/photos/photo_18.jpg",
  category: "Travel",
  title: "Road to the Mountains",
  camera: "Apple iPhone 11",
  lens: "1.5mm f/2.4",
  settings: "f/2.4 · 1/340s · ISO 20",
  dimensions: "1862 × 4032",
  location: "Lachen, Sikkim",
  story:
    "A quiet mountain road led across the bridge, framed by dense Himalayan slopes. Colorful prayer flags fluttered gently, adding life and motion to the otherwise still, rugged landscape.",
  date: "February 2023"
},
{
  src: "/photos/photo_19.jpg",
  category: "Landscape",
  title: "Where Light Meets the Peaks",
  camera: "Apple iPhone 11",
  lens: "1.5mm f/2.4",
  settings: "f/2.4 · 1/340s · ISO 20",
  dimensions: "1862 × 4032",
  location: "Sikkim",
  story:
    "Golden light broke through the clouds, briefly igniting the distant Himalayan peaks. Below, the winding river traced a quiet path through the shadowed valley, balancing drama and serenity.",
  date: "February 2023"
},
{
  src: "/photos/photo_20.jpg",
  category: "Landscape",
  title: "Valley of Light",
  camera: "Apple iPhone 11",
  lens: "1.5mm f/2.4",
  settings: "f/2.4 · 1/340s · ISO 20",
  dimensions: "1862 × 4032",
  location: "Sikkim",
  story:
    "Soft golden light spilled across the distant Himalayan range, briefly illuminating the jagged peaks. Below, the river quietly wound through the shadowed valley, creating a serene yet dramatic composition.",
  date: "February 2023"
},
{
  src: "/photos/photo_21.jpg",
  category: "Landscape",
  title: "Summit Under Drama",
  camera: "Apple iPhone 11",
  lens: "1.5mm f/2.4",
  settings: "f/2.4 · 1/340s · ISO 20",
  dimensions: "1862 × 4032",
  location: "Kala Pathar, Sikkim",
  story:
    "A solitary Himalayan peak stood framed between dark mountain slopes, while dramatic clouds swirled across the vivid blue sky. The interplay of light, shadow, and texture created a powerful high-altitude atmosphere.",
  date: "February 2023"
},
{
  src: "/photos/photo_22.jpg",
  category: "Travel",
  title: "Valley Beneath the Flags",
  camera: "Apple iPhone 11",
  lens: "4.2mm f/1.8",
  settings: "f/1.8 · 1/800s · ISO 32",
  dimensions: "4032 × 1862",
  location: "Lachen, Sikkim",
  story:
    "Colorful prayer flags stretched across the frame, overlooking the vast Lachen valley. The winding mountain road and layered Himalayan slopes added depth to the crisp, high-altitude scene.",
  date: "February 2023"
},
{
  src: "/photos/photo_23.jpg",
  category: "Architecture",
  title: "Tower Above the Canopy",
  camera: "Apple iPhone 11",
  lens: "4.2mm f/1.8",
  settings: "f/1.8 · 1/1300s · ISO 32",
  dimensions: "3024 × 4032",
  location: "IIT Kharagpur, West Bengal",
  story:
    "Rising quietly above a dense green canopy, the tower stood framed against layered blue skies. The contrast between structured architecture and organic foliage created a calm, balanced composition.",
  date: "August 2022"
},
{
  src: "/photos/photo_24.jpg",
  category: "Automotive",
  title: "Glow in the Dark",
  camera: "Apple iPhone 11",
  lens: "4.2mm f/1.8",
  settings: "f/1.8 · 1/1300s · ISO 32",
  dimensions: "3024 × 4032",
  location: "Unknown",
  story:
    "A single tail light pierced through the darkness, casting a vivid red glow against the night. The surrounding shadows framed the subject, creating a moody, cinematic atmosphere.",
  date: "June 2022"
},
{
  src: "/photos/photo_25.jpg",
  category: "Street",
  title: "Steps of Solitude",
  camera: "Nikon D40",
  lens: "55.0mm f/5.6",
  settings: "f/5.6 · 1/100s · ISO 400",
  dimensions: "3008 × 2000",
  location: "McLeod Ganj, Dharamshala, Himachal Pradesh, India",
  story:
    "A quiet moment captured as a lone dog carefully descended the worn concrete steps. The muted tones and soft shadows evoke the calm, contemplative mood of the hillside town.",
  date: "June 2022"
},
{
  src: "/photos/photo_26.jpg",
  category: "Travel",
  title: "Framed in Pines",
  camera: "Nikon D40",
  lens: "18.0mm f/9.0",
  settings: "f/9.0 · 1/320s · ISO 200",
  dimensions: "3008 × 2000",
  location: "Hidden Cafe, Dalhousie, Himachal Pradesh, India",
  story:
    "Captured through a dark railing, the pine canopy naturally segmented the scene into quiet layers of light and shadow. The distant hills and café rooftops peek through, creating a sense of discovery and depth.",
  date: "June 2022"
},
{
  src: "/photos/photo_27.jpg",
  category: "Event",
  title: "Spring Fest Nights",
  camera: "Apple iPhone 11",
  lens: "4.2mm f/1.8",
  settings: "f/1.8 · 1/8s · ISO 500",
  dimensions: "3024 × 4032",
  location: "IIT Kharagpur, India",
  story:
    "A late-night moment during Spring Fest, where glowing headlights and hanging lights stitched together a cinematic campus scene. The slow shutter embraced motion and ambient light, preserving the energy of the night.",
  date: "January 2022"
},
{
  src: "/photos/photo_28.jpg",
  category: "Nature",
  title: "Bloom After Dark",
  camera: "Apple iPhone 11",
  lens: "4.2mm f/1.8",
  settings: "f/1.8 · 1/8s · ISO 500",
  dimensions: "3024 × 4032",
  location: "Unknown",
  story:
    "A solitary sunflower illuminated against the soft haze of distant lights. The shallow depth and low-light grain lend a quiet, cinematic mood — where the night becomes part of the composition rather than just the backdrop.",
  date: "April 2022"
},
{
  src: "/photos/photo_29.jpg",
  category: "Architecture",
  title: "Clock Tower After Hours",
  camera: "Apple iPhone 11",
  lens: "4.2mm f/1.8",
  settings: "f/1.8 · 1/8s · ISO 500",
  dimensions: "3024 × 4032",
  location: "Clock Tower, IIT Kharagpur, India",
  story:
    "A quiet campus night framed through shadowed foreground textures. The illuminated clock tower stands as a focal anchor, while scattered ambient lights and deep contrast create a cinematic, contemplative mood.",
  date: "Jan 2022"
},
{
  src: "/photos/photo_30.jpg",
  category: "Sport",
  title: "Where Cricket Meets the Clouds",
  camera: "Nikon D40",
  lens: "18.0mm f/11.0",
  settings: "f/11.0 · 1/400s · ISO 200",
  dimensions: "3008 × 2000",
  location: "Dharamshala, Himachal Pradesh, India",
  story:
    "The iconic stadium set against the dramatic Dhauladhar range. The wide-angle perspective captures the sweeping geometry of the stands while towering monsoon clouds add scale, depth, and a sense of grandeur.",
  date: "October 2021"
},
{
  src: "/photos/photo_31.jpg",
  category: "Sport",
  title: "Light Tower & Monsoon Drama",
  camera: "Nikon D40",
  lens: "18.0mm f/11.0",
  settings: "f/11.0 · 1/400s · ISO 200",
  dimensions: "2000 × 3008",
  location: "Dharamshala, Himachal Pradesh, India",
  story:
    "A towering floodlight rises against billowing Himalayan clouds, balancing engineered geometry with raw atmospheric drama. The crisp daylight and deep contrast emphasize scale, texture, and mood.",
  date: "October 2021"
},
{
  src: "/photos/photo_32.jpg",
  category:  "Culture",
  title: "Divine Calm",
  camera: "Apple iPhone 11",
  lens: "4.2mm f/1.8",
  settings: "f/1.8 · 1/50s · ISO 320",
  dimensions: "3024 × 4032",
  location: "Unknown",
  story:
    "A serene close-up of Lord Ganesha framed by marigolds and white lilies. The shallow depth of field and soft lighting draw attention to the tranquil gaze and intricate crown details.",
  date: "September 2021"
},
{
  src: "/photos/photo_33.jpg",
  category: "Travel",
  title: "Stillness at the Steps",
  camera: "Apple iPhone 11",
  lens: "4.2mm f/1.8",
  settings: "f/1.8 · (auto exposure) · ISO auto",
  dimensions: "3024 × 4032",
  location: "Unknown",
  story:
    "Stone steps cascade into the frame, guiding the eye toward a lone wooden boat resting quietly by the water. The muted palette and gentle ripples evoke a sense of pause and solitude.",
  date: "September 2021"
},
{
  src: "/photos/photo_34.jpg",
  category: "Nature",
  title: "Sunlight Entangled",
  camera: "Apple iPhone 11",
  lens: "4.2mm f/1.8",
  settings: "f/1.8 · (auto exposure) · ISO auto",
  dimensions: "3024 × 4032",
  location: "Unknown",
  story:
    "Interwoven branches carve organic patterns against a vivid sky, while a burst of sunlight pierces through the canopy. The contrast between shadow and flare creates a layered, almost abstract composition.",
  date: "July 2021"
},
{
  src: "/photos/photo_35.jpg",
  category: "Nature",
  title: "Whispers of the Field",
  camera: "Apple iPhone 11",
  lens: "4.2mm f/1.8",
  settings: "f/1.8 · (auto exposure) · ISO auto",
  dimensions: "3024 × 4032",
  location: "Unknown",
  story:
    "Sunlit stalks stand gently against a soft countryside backdrop, capturing the quiet rhythm of a rural landscape. The shallow depth isolates texture and detail while preserving the calm atmosphere of the open field.",
  date: "July 2021"
},
{
  src: "/photos/photo_36.jpg",
  category: "Nature",
  title: "Forested Silence",
  camera: "Samsung SM-G975F",
  lens: "4.3mm f/1.5",
  settings: "f/1.5 · 1/400s · ISO 50",
  dimensions: "4032 × 1908",
  location: "IIT Kharagpur, Kharagpur, West Bengal, India",
  story:
    "A tranquil stretch of trees forms a dense green canopy, filtering daylight into soft, diffused tones. The panoramic frame emphasizes depth and rhythm, evoking the calm of a shaded campus pathway.",
  date: "March 2021"
},
{
  src: "/photos/photo_37.jpg",
  category: "Books",
  title: "Stacked Stories",
  camera: "Apple iPhone 11",
  lens: "4.2mm f/1.8",
  settings: "f/1.8 · 1/35s · ISO 400",
  dimensions: "2268 × 4032",
  location: "Unknown",
  story:
    "A layered stack of novels creates a graphic interplay of typography, texture, and depth. The shallow focus draws attention to the bold lettering while the warm tones evoke a quiet, contemplative mood.",
  date: "January 2021"
}
];

/* ---------------- PAGE ---------------- */

export default function PhotographyPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activePhoto, setActivePhoto] = useState<(typeof photos)[0] | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const pinchRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const [isPortrait, setIsPortrait] = useState(false);
  const [showDetails, setShowDetails] = useState(true);
  const [isIdle, setIsIdle] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
const dragRef = useRef<HTMLDivElement>(null);
  const constraintsRef = useRef<HTMLDivElement>(null);

  const filteredPhotos = useMemo(() => {
  return activeCategory === "All"
    ? photos
    : photos.filter((p) => p.category === activeCategory);
}, [activeCategory]);

  /* ---------------- NAVIGATION ---------------- */

  const navigatePhoto = (direction: number) => {
    const newIndex =
      (photoIndex + direction + filteredPhotos.length) %
      filteredPhotos.length;

    setPhotoIndex(newIndex);
    setActivePhoto(filteredPhotos[newIndex]);
  };

  /* ---------------- KEYBOARD ---------------- */

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!activePhoto) return;

      if (e.key === "Escape") setActivePhoto(null);
      if (e.key === "ArrowRight") navigatePhoto(1);
      if (e.key === "ArrowLeft") navigatePhoto(-1);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activePhoto, photoIndex, filteredPhotos]);

  /* ---------------- ZOOM RESET ---------------- */

  useEffect(() => {
    setZoom(1);
  }, [activePhoto]);

  /* ---------------- DETAILS RESET ---------------- */

  useEffect(() => {
    setShowDetails(true);
  }, [activePhoto]);

  /* ---------------- SCROLL LOCK ---------------- */

  useEffect(() => {
    document.body.style.overflow = activePhoto ? "hidden" : "auto";
  }, [activePhoto]);

  /* ---------------- IDLE AUTO-HIDE ---------------- */

  useEffect(() => {
    if (!activePhoto) return;

    setIsIdle(false);

    let timer = setTimeout(() => {
      setIsIdle(true);
      setShowDetails(false);
    }, 6000);

    const resetIdle = () => {
      setIsIdle(false);
      setShowDetails(true);
      clearTimeout(timer);

      timer = setTimeout(() => {
        setIsIdle(true);
        setShowDetails(false);
      }, 3000);
    };

    window.addEventListener("mousemove", resetIdle);
    window.addEventListener("keydown", resetIdle);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", resetIdle);
      window.removeEventListener("keydown", resetIdle);
    };
  }, [activePhoto, photoIndex]);

  const handleZoom = (delta: number) => {
  setZoom((prev) => Math.min(Math.max(prev + delta, 1), 3));
};

const handleWheel = (e: React.WheelEvent) => {
  e.preventDefault();
  if (!containerRef.current) return;

  const rect = containerRef.current.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const offsetY = e.clientY - rect.top;

  const delta = e.deltaY * -0.0015;
  const newZoom = Math.min(Math.max(zoom + delta, 1), 3);
  const zoomFactor = newZoom / zoom;

  x.set((x.get() - offsetX) * zoomFactor + offsetX);
  y.set((y.get() - offsetY) * zoomFactor + offsetY);

  setZoom(newZoom);
};
const handleDoubleClick = (e: React.MouseEvent) => {
  if (!containerRef.current) return;

  const rect = containerRef.current.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const offsetY = e.clientY - rect.top;

  if (zoom > 1) {
    setZoom(1);
    x.set(0);
    y.set(0);
    return;
  }

  const targetZoom = 2;
  const zoomFactor = targetZoom / zoom;

  x.set((x.get() - offsetX) * zoomFactor + offsetX);
  y.set((y.get() - offsetY) * zoomFactor + offsetY);

  setZoom(targetZoom);
};

const getDistance = (touches: React.TouchList) => {
  const [a, b] = [touches[0], touches[1]];
  return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
};

const handleTouchMove = (e: React.TouchEvent) => {
  if (e.touches.length === 2) {
    const dist = getDistance(e.touches);

    if (!pinchRef.current) {
      pinchRef.current = dist;
      return;
    }

    const delta = (dist - pinchRef.current) * 0.005;
    pinchRef.current = dist;

    setZoom((prev) => Math.min(Math.max(prev + delta, 1), 3));
  }
};

const handleTouchEnd = () => {
  pinchRef.current = null;
};

const handleDragEnd = () => {
  if (zoom <= 1) {
    x.set(0);
    y.set(0);
  }
};
useEffect(() => {
  if (zoom === 1) {
    x.set(0);
    y.set(0);
  }
}, [zoom]);

useEffect(() => {
  if (!activePhoto) return;

  const next = filteredPhotos[(photoIndex + 1) % filteredPhotos.length];
  const prev =
    filteredPhotos[
      (photoIndex - 1 + filteredPhotos.length) % filteredPhotos.length
    ];

  [next, prev].forEach((p) => {
    const img = new window.Image();
    img.src = p.src;
  });
}, [activePhoto, photoIndex]);

useEffect(() => {
  if (!activePhoto || typeof window === "undefined") return;

  const img = new window.Image();
  img.src = activePhoto.src;

  img.onload = () => {
    setIsPortrait(img.height > img.width);
  };
}, [activePhoto]);

useEffect(() => {
  if (!activePhoto) return;

  x.set(0);
  y.set(0);
  setZoom(1);
}, [activePhoto]);

const handleCategoryChange = useCallback((cat: string) => {
  setActiveCategory(cat);
}, []);


  /* ---------------- UI ---------------- */

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <ParallaxBackground />

      {/* HERO */}
     <section className="py-20 sm:py-28 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-accent tracking-[0.25em] sm:tracking-[0.3em] text-[10px] sm:text-xs mb-4 sm:mb-6"
    >
      02 — PHOTOGRAPHY
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight"
    >
      Through the <span className="text-accent">Lens</span>
    </motion.h1>

    <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-accent/70 to-transparent my-6 sm:my-10" />

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-gray-400 max-w-2xl text-sm sm:text-base leading-relaxed"
    >
      Photography is my way of freezing time. <br />
      Every shot tells a story — from sweeping landscapes to intimate
      portraits, I aim to capture the emotion behind each moment.
    </motion.p>
  </div>
</section>

      {/* STATS */}
    <section className="px-4 sm:px-6 pb-16 sm:pb-20">
  <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
    <Stat icon={Camera} value={850} label="Photos Taken" />
    <Stat icon={Aperture} value={3} label="Lenses Owned" />
    <Stat icon={Sun} value={50} label="Golden Hours" />
    <Stat icon={Mountain} value={15} label="Locations Shot" />
  </div>
</section>
      {/* FILTERS */}
     <section className="px-4 sm:px-6 pb-6 sm:pb-10">
  <div className="max-w-6xl mx-auto flex flex-wrap gap-2 sm:gap-3">
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={handleCategoryChange.bind(null, cat)}
        className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm transition ${
          activeCategory === cat
            ? "bg-accent text-black"
            : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10"
        }`}
      >
        {cat}
      </button>
    ))}
  </div>
</section>

      {/* GALLERY */}
     <section className="px-4 sm:px-6 pb-20 sm:pb-28">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
    {filteredPhotos.map((photo, i) => (
      <motion.div
        key={photo.src + i}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          setActivePhoto(photo);
          setPhotoIndex(i);
        }}
        className="cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden bg-white/5 border border-white/10"
      >
        <Image
          src={photo.src}
          alt={photo.title}
          width={800}
          height={600}
          sizes="(max-width: 640px) 100vw,
                 (max-width: 1024px) 50vw,
                 33vw"
          quality={70}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </motion.div>
    ))}
  </div>
</section>

      {/* LIGHTBOX */}
     <AnimatePresence>
  {activePhoto && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute inset-0 bg-black/85 sm:bg-black/80 backdrop-blur-sm sm:backdrop-blur-md"
        onClick={() => setActivePhoto(null)}
      />

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full h-[100dvh] sm:h-[85vh] max-w-full sm:max-w-6xl
                   bg-[#0f1115] border border-white/10
                   rounded-none sm:rounded-3xl overflow-hidden"
      >
        {/* Close */}
        <button
          onClick={() => setActivePhoto(null)}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30
                     w-9 h-9 sm:w-10 sm:h-10 rounded-full
                     bg-black/50 backdrop-blur-md
                     border border-white/10
                     flex items-center justify-center
                     hover:bg-black/70 transition"
        >
          <X size={16} />
        </button>

        <div
          ref={constraintsRef}
          className="relative w-full h-full bg-black overflow-hidden flex items-center justify-center"
        >
          <div
            ref={containerRef}
            onWheel={handleWheel}
            onDoubleClick={handleDoubleClick}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative w-full h-full bg-black overflow-hidden flex items-center justify-center"
          >
            {/* Blurred BG */}
            {isPortrait && (
              <motion.div
                key={activePhoto.src + "-blur"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 pointer-events-none"
              >
                <Image
                  src={activePhoto.src}
                  alt=""
                  fill
                  quality={40}
                  sizes="100vw"
                  className="object-cover scale-110 blur-2xl"
                />
              </motion.div>
            )}

            {/* SCALE */}
            <motion.div
              animate={{ scale: zoom }}
              transition={{ type: "spring", stiffness: 140, damping: 24 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* DRAG */}
              <motion.div
                drag={zoom > 1}
                dragConstraints={containerRef}
                dragElastic={0.12}
                dragMomentum={false}
                style={{ x, y }}
                whileTap={{ cursor: "grabbing" }}
                className="relative w-full h-full cursor-grab"
              >
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  fill
                  priority
                  className={`pointer-events-none ${
                    isPortrait ? "object-contain" : "object-cover"
                  }`}
                  sizes="100vw"
                  quality={zoom > 1 ? 100 : 85}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Navigation */}
          <button
            onClick={() => navigatePhoto(-1)}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30
                       w-9 h-9 sm:w-10 sm:h-10 rounded-full
                       bg-black/50 backdrop-blur-md
                       border border-white/10
                       flex items-center justify-center
                       hover:bg-black/70 transition"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => navigatePhoto(1)}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30
                       w-9 h-9 sm:w-10 sm:h-10 rounded-full
                       bg-black/50 backdrop-blur-md
                       border border-white/10
                       flex items-center justify-center
                       hover:bg-black/70 transition"
          >
            <ChevronRight size={18} />
          </button>

          {/* Info toggle */}
          <button
            onClick={() => setShowDetails(prev => !prev)}
            className="absolute bottom-20 sm:bottom-6 left-3 sm:left-6 z-20
                       w-8 h-8 sm:w-9 sm:h-9 rounded-full
                       bg-black/50 border border-white/10 text-sm"
          >
            i
          </button>

          {/* Zoom controls */}
          <div className="absolute bottom-20 sm:bottom-4 right-3 sm:right-4 flex gap-2 z-20">
            <button
              onClick={() => handleZoom(-0.5)}
              className="w-8 h-8 rounded-full bg-black/50 border border-white/10"
            >
              −
            </button>
            <button
              onClick={() => handleZoom(0.5)}
              className="w-8 h-8 rounded-full bg-black/50 border border-white/10"
            >
              +
            </button>
          </div>

          {/* DETAILS */}
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: zoom > 1 ? 0 : 1,
                  y: zoom > 1 ? 10 : 0,
                }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-28 sm:bottom-24 left-0 right-0 px-4 sm:px-8"
              >
                <div className="relative max-w-xl bg-black/50 sm:bg-black/40
                                border border-white/10 rounded-xl sm:rounded-2xl
                                p-4 sm:p-5 text-sm sm:text-base">
                  <button
                    onClick={() => setShowDetails(false)}
                    className="absolute top-2 right-2 sm:top-3 sm:right-3"
                  >
                    <X size={12} />
                  </button>

                  <h3 className="text-white">{activePhoto.title}</h3>
                  <p className="text-gray-400">{activePhoto.camera}</p>
                  <p className="text-gray-400">{activePhoto.settings}</p>
                  <p className="text-gray-400">{activePhoto.location}</p>
                  <p className="text-gray-400">{activePhoto.story}</p>
                  <p className="text-gray-500">{activePhoto.date}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Thumbnails */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 sm:bg-black/40
                        px-3 sm:px-6 py-2 sm:py-3 flex gap-2 sm:gap-3
                        overflow-x-auto">
          {filteredPhotos.map((p, i) => (
            <button
              key={p.src + i}
              onClick={() => {
                setActivePhoto(p);
                setPhotoIndex(i);
              }}
              className="shrink-0"
            >
              <Image
                src={p.src}
                alt={p.title}
                width={56}
                height={56}
                loading="lazy"
                quality={60}
                className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-md"
              />
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )}
  
</AnimatePresence>

      
        <MyGear/>

        
      <Footer />
    </main>
  );
}
// className="w-14 h-14 object-cover"
/* ---------------- COMPONENTS ---------------- */
function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: number;
  label: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="
        group relative rounded-2xl
        bg-gradient-to-b from-white/[0.05] to-white/[0.01]
        border border-white/10
        backdrop-blur-xl
        px-6 py-5
        flex flex-col items-center justify-center
        text-center
        shadow-[0_10px_40px_rgba(0,0,0,0.6)]
      "
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-accent/5" />

      <Icon size={18} className="text-accent mb-2 opacity-80" />

      {/* Animated Value */}
      <p className="text-lg font-semibold tracking-tight">
        <Counter to={value} suffix="+" />
      </p>

      <p className="text-[10px] tracking-[0.25em] text-gray-500 uppercase mt-1">
        {label}
      </p>
    </motion.div>
  );
}