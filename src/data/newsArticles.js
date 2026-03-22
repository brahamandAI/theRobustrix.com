/**
 * Blog / news articles for the home page cards and /blog/:id detail routes.
 */
export const NEWS_ARTICLES = [
  {
    id: 'n1',
    title: 'Unlocking Smart Connectivity: SIM-Enabled Industrial PCs by Robustrix',
    date: 'May 8, 2025',
    meta: '0 Comments · admin',
    image: '/pictures/home1.png',
    excerpt:
      'In today’s fast-paced industrial world, smart connectivity isn’t just a luxury—it’s a necessity. With industries leaning heavily on real-time...',
    body: [
      'In today’s fast-paced industrial world, smart connectivity isn’t just a luxury—it’s a necessity. Plants, utilities, and logistics networks depend on data that moves reliably between edge devices and central systems—even when wired LAN is unavailable, congested, or too costly to extend.',
      'SIM-enabled industrial PCs bridge that gap. By integrating cellular modems (4G/5G/LTE) into fanless, rugged enclosures, Robustrix platforms allow SCADA updates, remote diagnostics, firmware rollouts, and telemetry to continue without a fixed line. That matters for mobile equipment, temporary sites, distributed substations, and any deployment where “always on” matters more than “always cabled.”',
      'Security and manageability remain central. Industrial SIM solutions work best when paired with hardened OS images, VPN or private APN options, and clear separation between operational traffic and guest or IT networks. Robustrix systems are specified with wide-temperature components, isolated I/O where needed, and power designs suited to vehicle and cabinet installs.',
      'Whether you are modernizing a brownfield line or rolling out a greenfield edge cluster, SIM-capable industrial PCs reduce time-to-operation and give your team a practical path to monitor and service equipment from anywhere—without compromising the durability expectations of the factory floor.',
    ],
  },
  {
    id: 'n2',
    title: 'Introduction to Fanless PCs: The Future of Industrial Computing',
    date: 'June 12, 2024',
    meta: '0 Comments · admin',
    image: '/pictures/fanlesscpu.png',
    excerpt:
      'In today’s rapidly evolving industrial landscape, computing solutions must meet the increasing demands of durability, efficiency, and reliability...',
    body: [
      'Fanless industrial PCs replace rotating fans with passive cooling—typically extruded or bonded heatsinks that move heat to the chassis and then to the surrounding air. Removing the fan eliminates a common failure mode: bearing wear, dust clogging, and noise that can interfere with precision environments.',
      'Without forced airflow, the enclosure can be sealed or filtered more effectively against dust, metal fines, and humidity. That makes fanless designs a natural fit for food adjacent areas, woodworking, mining prep rooms, and outdoor kiosks where particulate control is part of the specification.',
      'Thermal design is engineering, not magic. Robustrix matches processor TDP, chassis mass, and surface area so sustained workloads stay within safe junction temperatures across the rated ambient range. The result is predictable performance for vision pipelines, PLC gateways, and HMI workloads that run 24/7.',
      'Fanless does not mean “low power only.” With the right platform—industrial chipsets, wide-input power, and validated storage—you can run demanding edge AI and multi-display setups while keeping maintenance cycles focused on software and application health, not filter changes and fan replacements.',
    ],
  },
  {
    id: 'n3',
    title: 'Exploring the Power of All-in-One PCs with Robustrix IT Solutions',
    date: 'June 12, 2024',
    meta: '0 Comments · admin',
    image: '/pictures/aiplatforms.jpg',
    excerpt:
      'In today’s fast-paced digital world, businesses require solutions that are efficient, space‑saving, and powerful. All‑in‑One PCs...',
    body: [
      'All-in-One (AiO) industrial systems combine display, computing, and often touch input in a single assembly. For control rooms, machine HMI, and customer-facing kiosks, that integration reduces cable clutter, shortens install time, and presents a cleaner surface for cleaning and sealing.',
      'Space at the operator station is almost always constrained. An AiO mount—panel, VESA arm, or embedded cutout—lets teams place the UI where it is ergonomically correct without stacking a small box, separate monitor, and bundle of adapters behind the panel.',
      'Industrial AiO differs from consumer designs: brighter panels for plant lighting, glove-friendly touch options, wide-temperature electronics, and I/O positioned for maintenance access. Robustrix focuses on long-life panels and chipsets so you are not forced into yearly refreshes driven by consumer SKU churn.',
      'When specification calls for vision overlays, MES terminals, or energy dashboards, a well-chosen AiO becomes the visible front end to your digital thread—while the heavy inference or historian workloads can still live on dedicated edge servers when the architecture demands it.',
    ],
  },
  {
    id: 'n4',
    title: 'Why do we use Fanless PC Instead of Regular PC?',
    date: 'June 12, 2024',
    meta: '0 Comments · admin',
    image: '/pictures/intelprocrssros.png',
    excerpt:
      'In industrial and mission‑critical environments, choosing the right computing solution is essential for reliability, durability, and performance...',
    body: [
      'Regular office PCs are optimized for climate-controlled spaces, short duty cycles, and occasional dust. Industrial sites introduce vibration, voltage fluctuation, oil mist, and temperature swings that accelerate fan failure and conductive dust buildup on motherboards.',
      'A fanless industrial PC trades the moving part for thermal mass and careful airflow geometry through the chassis itself. Maintenance teams spend less time opening cabinets to clean filters, and there is no sudden thermal trip because a fan stalled overnight.',
      'Mission-critical does not forgive unplanned downtime. Predictable thermals and sealed or filtered enclosures directly support higher mean time between failures (MTBF) for the platform as a whole—especially when paired with industrial SSDs and wide-range power supplies.',
      'Cost is not only purchase price. Fanless industrial designs often win on total cost of ownership: fewer truck rolls, fewer spare fans on the shelf, and less risk of foreign object damage inside the chassis. When the application is safety-adjacent or revenue-linked, that reliability margin is the reason teams choose industrial over regular PCs.',
    ],
  },
];

export function getNewsArticleById(id) {
  return NEWS_ARTICLES.find((a) => a.id === id) ?? null;
}

/** Fields used by the home page news grid (no full body). */
export const NEWS_CARD_ITEMS = NEWS_ARTICLES.map(
  ({ id, title, date, meta, image, excerpt }) => ({
    id,
    title,
    date,
    meta,
    image,
    excerpt,
  }),
);
