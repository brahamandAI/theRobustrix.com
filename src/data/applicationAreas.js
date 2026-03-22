/**
 * “Applications of Our AI-Driven Solutions” cards on Home and /applications/:id pages.
 */
export const APPLICATION_AREAS = [
  {
    id: 'ai-vision',
    title: 'AI Vision Systems',
    image: '/pictures/aiplatforms.jpg',
    bullets: [
      'Advanced defect detection and automated quality control.',
      'AI-driven neural networks to enhance line efficiency.',
      'High-speed image processing for real-time analysis.',
      'Integration with smart cameras for automation.',
    ],
    body: [
      'Machine vision on the factory floor has moved from rule-based templates to models that learn from production data. Robustrix edge platforms pair low-latency inference with industrial I/O so cameras, lights, and reject mechanisms stay synchronized with the line.',
      'Defect detection benefits from consistent imaging: fixed focal length, controlled lighting, and deterministic trigger timing. Our fanless systems are specified for 24/7 operation with storage and networking suited to buffering frames during upstream outages.',
      'Beyond inspection, vision guides robots for pick-and-place, guides AGVs with fiducials, and supports safety zones when combined with certified sensors. The same hardware stack can host multiple pipelines when workloads are sized with your integrator.',
      'Whether you standardize on a single vendor’s SDK or mix OpenVINO, TensorRT, and custom CUDA paths, the goal is the same: repeatable quality signals that operations trusts—and that engineering can audit.',
    ],
  },
  {
    id: 'autonomous-robotics',
    title: 'Autonomous Robotics',
    image: '/products/ROBO_AI_30000.png',
    bullets: [
      'Self-navigating AGVs for warehouse automation.',
      'High-precision robotic welding solutions.',
      'AI-powered drones for logistics and inspection.',
      'Robotic arms for handling and assembly.',
    ],
    body: [
      'Autonomous systems depend on tight loops between perception, planning, and actuation. Edge computers near the robot reduce round-trip latency to the cloud and keep critical functions running when WAN links degrade.',
      'AGVs and AMRs typically fuse lidar, cameras, and wheel odometry. That fusion needs deterministic USB/Ethernet paths, isolated power for motor noise, and storage that survives vibration per IEC/MIL profiles where required.',
      'Welding and assembly cells add requirements: extended temperature, metal dust, and long cable runs to teach pendants or PLCs. Fanless industrial PCs reduce maintenance while providing PCIe or MXM headroom for accelerators when models grow.',
      'From warehouse aisles to outdoor yards, Robustrix focuses on platforms that integrators can qualify once and replicate across sites—so your fleet software stack stays consistent as you scale.',
    ],
  },
  {
    id: 'smart-infrastructure',
    title: 'Smart Infrastructure',
    image: '/products/iotsystems.png',
    bullets: [
      'AI-driven traffic management and urban planning.',
      'Robotic waste sorting for greener cities.',
      'Intelligent solar farm management.',
      'AI-driven HVAC and smart grid solutions.',
    ],
    body: [
      'Smart infrastructure spans roadside cabinets, substation huts, and building mechanical rooms—environments with heat, dust, and imperfect power. Edge nodes must ingest telemetry, run analytics, and forward summaries without drowning wide-area links.',
      'Traffic and mobility use cases blend camera analytics, radar interfaces, and RS-485/serial legacy devices. A single rugged PC can consolidate protocol conversion, local dashboards, and encrypted backhaul.',
      'Renewables and grid edge applications emphasize wide DC input, galvanic isolation, and timestamps aligned to PTP or GNSS when regulations require it. Storage and RAM choices should match historian retention and model footprint.',
      'Robustrix supplies industrial-grade compute so municipalities and operators can deploy AI-assisted monitoring with hardware that matches maintenance windows and environmental ratings—not consumer timelines.',
    ],
  },
  {
    id: 'healthcare-4',
    title: 'Healthcare 4.0',
    image: '/pictures/home1.png',
    bullets: [
      'Surgical robotics for precision care.',
      'AI-powered diagnostics for early detection.',
      'Automated drug dispensing systems.',
      'AI-based patient monitoring.',
    ],
    body: [
      'Healthcare 4.0 connects imaging, robotics, and clinical workflows with stricter expectations for reliability, hygiene, and data handling. Edge systems often sit inside equipment carts, procedure suites, or clean-adjacent closets.',
      'Diagnostic assistance models may run next to modalities to preprocess or triage, reducing motion for staff and preserving bandwidth for PACS integration. Hardware must match vendor validation lists and EMI budgets.',
      'Dispensing and lab automation emphasize long uptimes, serial/device control, and audit logs. Fanless designs reduce airborne particle disturbance in sensitive zones while maintaining thermal headroom for sustained inference.',
      'Robustrix works with integrators who map regulatory pathways; our role is dependable industrial compute that matches shock, vibration, and thermal specs—so clinical engineering can focus on patient outcomes.',
    ],
  },
];

export function getApplicationAreaById(id) {
  return APPLICATION_AREAS.find((a) => a.id === id) ?? null;
}
