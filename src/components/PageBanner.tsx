import { LucideIcon } from 'lucide-react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  pattern?: 'geometric' | 'dots' | 'lines';
  theme?: 'about' | 'certificate' | 'audit' | 'contact' | 'directory' | 'regulation' | 'iso' | 'default';
}

const PageBanner = ({ title, subtitle, icon: Icon, pattern = 'geometric', theme = 'default' }: PageBannerProps) => {
  const getThemeBackground = () => {
    switch (theme) {
      case 'about':
        return (
          <div className="absolute inset-0">
            {/* Mountain peaks representing achievement and vision */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 400" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="aboutGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#1f2937', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#374151', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="aboutGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 0.6 }} />
                  <stop offset="50%" style={{ stopColor: '#f59e0b', stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: '#fbbf24', stopOpacity: 0.6 }} />
                </linearGradient>
              </defs>

              {/* Dark background */}
              <rect width="1920" height="400" fill="url(#aboutGrad1)" />

              {/* Mountain layers */}
              <path d="M0,400 L0,280 L320,120 L640,200 L960,80 L1280,160 L1600,100 L1920,180 L1920,400 Z" fill="#111827" opacity="0.7" />
              <path d="M0,400 L0,320 L240,200 L480,260 L800,140 L1120,220 L1440,160 L1760,200 L1920,160 L1920,400 Z" fill="#1f2937" opacity="0.8" />
              <path d="M0,400 L0,340 L400,240 L800,280 L1200,200 L1600,260 L1920,220 L1920,400 Z" fill="#374151" opacity="0.6" />

              {/* Golden horizon glow */}
              <ellipse cx="960" cy="200" rx="800" ry="100" fill="url(#aboutGrad2)" opacity="0.3" />

              {/* Scattered light particles */}
              <circle cx="300" cy="150" r="3" fill="#fbbf24" opacity="0.6">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="800" cy="100" r="2" fill="#f59e0b" opacity="0.7">
                <animate attributeName="opacity" values="0.4;0.9;0.4" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="1400" cy="130" r="3" fill="#fbbf24" opacity="0.5">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="5s" repeatCount="indefinite" />
              </circle>
              <circle cx="1600" cy="90" r="2" fill="#f59e0b" opacity="0.8">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        );

      case 'certificate':
        return (
          <div className="absolute inset-0">
            {/* Professional achievement with golden accents */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 400" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="certGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#0f172a', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#1e293b', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="certGlow" cx="50%" cy="50%">
                  <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: '#f59e0b', stopOpacity: 0 }} />
                </radialGradient>
              </defs>

              <rect width="1920" height="400" fill="url(#certGrad1)" />

              {/* Geometric certification badge pattern */}
              <g opacity="0.15">
                <polygon points="960,50 1000,100 960,150 920,100" fill="#fbbf24" />
                <polygon points="960,50 1000,100 960,150 920,100" fill="none" stroke="#f59e0b" strokeWidth="2" />
                <circle cx="960" cy="100" r="80" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.5" />
                <circle cx="960" cy="100" r="100" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.3" />
              </g>

              {/* Golden rays */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <line
                  key={i}
                  x1="960"
                  y1="100"
                  x2={960 + Math.cos((angle * Math.PI) / 180) * 600}
                  y2={100 + Math.sin((angle * Math.PI) / 180) * 300}
                  stroke="#fbbf24"
                  strokeWidth="1"
                  opacity="0.1"
                />
              ))}

              {/* Central glow */}
              <circle cx="960" cy="100" r="200" fill="url(#certGlow)" />

              {/* Abstract achievement symbols */}
              <path d="M200,350 Q250,320 300,350" stroke="#fbbf24" strokeWidth="2" fill="none" opacity="0.3" />
              <path d="M1620,350 Q1670,320 1720,350" stroke="#f59e0b" strokeWidth="2" fill="none" opacity="0.3" />
            </svg>
          </div>
        );

      case 'audit':
        return (
          <div className="absolute inset-0">
            {/* Pathway/journey theme with perspective */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 400" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="auditGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#1e293b', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#334155', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="pathGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 0.2 }} />
                  <stop offset="100%" style={{ stopColor: '#f59e0b', stopOpacity: 0.4 }} />
                </linearGradient>
              </defs>

              <rect width="1920" height="400" fill="url(#auditGrad1)" />

              {/* Converging pathway lines creating depth */}
              <path d="M960,400 L800,200 L860,0" stroke="#fbbf24" strokeWidth="3" opacity="0.3" fill="none" />
              <path d="M960,400 L1120,200 L1060,0" stroke="#fbbf24" strokeWidth="3" opacity="0.3" fill="none" />

              {/* Road surface with perspective */}
              <path d="M600,400 L800,200 L1120,200 L1320,400 Z" fill="url(#pathGrad)" />

              {/* Milestone markers */}
              {[100, 180, 260, 340].map((y, i) => (
                <g key={i} opacity={0.5 - i * 0.1}>
                  <rect
                    x={880 - (340 - y) * 0.3}
                    y={y}
                    width={40 + (340 - y) * 0.2}
                    height={8}
                    fill="#f59e0b"
                    rx="2"
                  />
                  <rect
                    x={1000 + (340 - y) * 0.3}
                    y={y}
                    width={40 + (340 - y) * 0.2}
                    height={8}
                    fill="#f59e0b"
                    rx="2"
                  />
                </g>
              ))}

              {/* Horizon glow */}
              <ellipse cx="960" cy="100" rx="600" ry="80" fill="#fbbf24" opacity="0.15" />

              {/* Progress indicators */}
              <circle cx="960" cy="100" r="8" fill="#fbbf24" opacity="0.8">
                <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        );

      case 'contact':
        return (
          <div className="absolute inset-0">
            {/* Global connectivity with network nodes */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 400" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="contactGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#0f172a', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#1e293b', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="nodeGlow">
                  <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: '#fbbf24', stopOpacity: 0 }} />
                </radialGradient>
              </defs>

              <rect width="1920" height="400" fill="url(#contactGrad)" />

              {/* Network nodes */}
              {[
                { cx: 300, cy: 100 },
                { cx: 600, cy: 200 },
                { cx: 960, cy: 150 },
                { cx: 1320, cy: 200 },
                { cx: 1620, cy: 100 },
                { cx: 480, cy: 300 },
                { cx: 1440, cy: 300 },
              ].map((node, i) => (
                <g key={i}>
                  <circle cx={node.cx} cy={node.cy} r="30" fill="url(#nodeGlow)" opacity="0.3" />
                  <circle cx={node.cx} cy={node.cy} r="8" fill="#fbbf24" opacity="0.9">
                    <animate attributeName="r" values="6;10;6" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
                  </circle>
                  <circle cx={node.cx} cy={node.cy} r="12" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.5" />
                </g>
              ))}

              {/* Connection lines */}
              <line x1="300" y1="100" x2="600" y2="200" stroke="#fbbf24" strokeWidth="1" opacity="0.2" />
              <line x1="600" y1="200" x2="960" y2="150" stroke="#fbbf24" strokeWidth="1" opacity="0.2" />
              <line x1="960" y1="150" x2="1320" y2="200" stroke="#fbbf24" strokeWidth="1" opacity="0.2" />
              <line x1="1320" y1="200" x2="1620" y2="100" stroke="#fbbf24" strokeWidth="1" opacity="0.2" />
              <line x1="600" y1="200" x2="480" y2="300" stroke="#f59e0b" strokeWidth="1" opacity="0.2" />
              <line x1="1320" y1="200" x2="1440" y2="300" stroke="#f59e0b" strokeWidth="1" opacity="0.2" />
              <line x1="300" y1="100" x2="960" y2="150" stroke="#fbbf24" strokeWidth="0.5" opacity="0.15" />
              <line x1="960" y1="150" x2="1620" y2="100" stroke="#fbbf24" strokeWidth="0.5" opacity="0.15" />

              {/* Globe outline suggestion */}
              <circle cx="960" cy="200" r="150" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.1" />
              <ellipse cx="960" cy="200" rx="150" ry="60" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.1" />
              <ellipse cx="960" cy="200" rx="60" ry="150" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.1" />
            </svg>
          </div>
        );

      case 'directory':
        return (
          <div className="absolute inset-0">
            {/* City skyline representing businesses */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 400" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#1e293b', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#475569', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect width="1920" height="400" fill="url(#skyGrad)" />

              {/* Skyline buildings */}
              <rect x="100" y="250" width="80" height="150" fill="#0f172a" />
              <rect x="200" y="200" width="100" height="200" fill="#1e293b" />
              <rect x="320" y="230" width="70" height="170" fill="#0f172a" />
              <rect x="410" y="180" width="90" height="220" fill="#1e293b" />
              <rect x="520" y="220" width="80" height="180" fill="#0f172a" />

              <rect x="1220" y="220" width="80" height="180" fill="#0f172a" />
              <rect x="1320" y="180" width="90" height="220" fill="#1e293b" />
              <rect x="1430" y="230" width="70" height="170" fill="#0f172a" />
              <rect x="1520" y="200" width="100" height="200" fill="#1e293b" />
              <rect x="1640" y="250" width="80" height="150" fill="#0f172a" />

              {/* Windows with golden lights */}
              {[100, 200, 320, 410, 520, 1220, 1320, 1430, 1520, 1640].map((x, i) => (
                <g key={i} opacity="0.8">
                  {Array.from({ length: 8 }).map((_, j) => (
                    <rect
                      key={j}
                      x={x + 10}
                      y={400 - (j + 1) * 18 - 10}
                      width="8"
                      height="10"
                      fill={Math.random() > 0.3 ? '#fbbf24' : '#334155'}
                      opacity={Math.random() > 0.3 ? 0.7 : 0.3}
                    />
                  ))}
                </g>
              ))}

              {/* Central prominence - taller building */}
              <rect x="880" y="120" width="160" height="280" fill="#1e293b" />
              <polygon points="960,80 900,120 1020,120" fill="#f59e0b" opacity="0.6" />

              {/* Windows for central building */}
              {Array.from({ length: 5 }).map((_, col) => (
                <g key={col}>
                  {Array.from({ length: 12 }).map((_, row) => (
                    <rect
                      key={row}
                      x={900 + col * 25}
                      y={140 + row * 20}
                      width="12"
                      height="12"
                      fill="#fbbf24"
                      opacity={0.6}
                    />
                  ))}
                </g>
              ))}

              {/* Searchlight beams */}
              <path d="M960,120 L960,0" stroke="#fbbf24" strokeWidth="2" opacity="0.2">
                <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite" />
              </path>
            </svg>
          </div>
        );

      case 'regulation':
        return (
          <div className="absolute inset-0">
            {/* Balance and structure theme */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 400" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="regGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#0f172a', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#1e293b', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#0f172a', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect width="1920" height="400" fill="url(#regGrad)" />

              {/* Symmetrical structure representing balance */}
              <line x1="960" y1="100" x2="960" y2="350" stroke="#fbbf24" strokeWidth="4" opacity="0.4" />

              {/* Balance scales */}
              <line x1="700" y1="150" x2="1220" y2="150" stroke="#f59e0b" strokeWidth="3" opacity="0.5" />

              {/* Left pan */}
              <path d="M700,150 L650,200 L750,200 Z" fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0.6" />
              <line x1="650" y1="200" x2="750" y2="200" stroke="#f59e0b" strokeWidth="2" opacity="0.6" />
              <line x1="675" y1="200" x2="675" y2="180" stroke="#fbbf24" strokeWidth="1" opacity="0.4" />
              <line x1="725" y1="200" x2="725" y2="180" stroke="#fbbf24" strokeWidth="1" opacity="0.4" />

              {/* Right pan */}
              <path d="M1220,150 L1170,200 L1270,200 Z" fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0.6" />
              <line x1="1170" y1="200" x2="1270" y2="200" stroke="#f59e0b" strokeWidth="2" opacity="0.6" />
              <line x1="1195" y1="200" x2="1195" y2="180" stroke="#fbbf24" strokeWidth="1" opacity="0.4" />
              <line x1="1245" y1="200" x2="1245" y2="180" stroke="#fbbf24" strokeWidth="1" opacity="0.4" />

              {/* Geometric patterns suggesting structure */}
              {[300, 1620].map((x, i) => (
                <g key={i} opacity="0.2">
                  <rect x={x} y="200" width="60" height="60" fill="none" stroke="#fbbf24" strokeWidth="2" />
                  <rect x={x + 15} y="215" width="30" height="30" fill="none" stroke="#f59e0b" strokeWidth="1" />
                  <circle cx={x + 30} cy={230} r="8" fill="#fbbf24" opacity="0.3" />
                </g>
              ))}

              {/* Document/regulation lines */}
              {[280, 300, 320].map((y, i) => (
                <g key={i}>
                  <line x1="400" y1={y} x2="550" y2={y} stroke="#fbbf24" strokeWidth="1" opacity={0.3 - i * 0.1} />
                  <line x1="1370" y1={y} x2="1520" y2={y} stroke="#fbbf24" strokeWidth="1" opacity={0.3 - i * 0.1} />
                </g>
              ))}
            </svg>
          </div>
        );

      case 'iso':
        return (
          <div className="absolute inset-0">
            {/* Quality and precision theme */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 400" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="isoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#1e293b', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#334155', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="targetGlow">
                  <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 0.6 }} />
                  <stop offset="100%" style={{ stopColor: '#f59e0b', stopOpacity: 0 }} />
                </radialGradient>
              </defs>

              <rect width="1920" height="400" fill="url(#isoGrad)" />

              {/* Concentric circles representing precision and standards */}
              <g opacity="0.4">
                {[50, 80, 110, 140, 170].map((r, i) => (
                  <circle
                    key={i}
                    cx="960"
                    cy="200"
                    r={r}
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="2"
                    opacity={0.5 - i * 0.08}
                  />
                ))}
              </g>

              {/* Central target */}
              <circle cx="960" cy="200" r="200" fill="url(#targetGlow)" />
              <circle cx="960" cy="200" r="20" fill="#f59e0b" opacity="0.8" />

              {/* Quality checkmarks in corners */}
              {[
                { x: 300, y: 100 },
                { x: 1620, y: 100 },
                { x: 300, y: 300 },
                { x: 1620, y: 300 },
              ].map((pos, i) => (
                <g key={i} opacity="0.3">
                  <circle cx={pos.x} cy={pos.y} r="40" fill="none" stroke="#fbbf24" strokeWidth="2" />
                  <path
                    d={`M${pos.x - 15},${pos.y} L${pos.x - 5},${pos.y + 10} L${pos.x + 15},${pos.y - 10}`}
                    stroke="#f59e0b"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              ))}

              {/* Measurement grid lines */}
              {Array.from({ length: 10 }).map((_, i) => (
                <line
                  key={i}
                  x1={i * 200}
                  y1="0"
                  x2={i * 200}
                  y2="400"
                  stroke="#fbbf24"
                  strokeWidth="0.5"
                  opacity="0.1"
                />
              ))}
              {Array.from({ length: 5 }).map((_, i) => (
                <line
                  key={i}
                  x1="0"
                  y1={i * 100}
                  x2="1920"
                  y2={i * 100}
                  stroke="#fbbf24"
                  strokeWidth="0.5"
                  opacity="0.1"
                />
              ))}
            </svg>
          </div>
        );

      default:
        return (
          <div className="absolute inset-0">
            {/* Default professional pattern */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 400" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="defaultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#fef3c7', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#fde68a', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#fef3c7', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect width="1920" height="400" fill="url(#defaultGrad)" />

              {/* Hexagonal honeycomb pattern */}
              {Array.from({ length: 15 }).map((_, col) => (
                <g key={col}>
                  {Array.from({ length: 5 }).map((_, row) => {
                    const x = col * 80 + (row % 2) * 40;
                    const y = row * 70 + 50;
                    return (
                      <polygon
                        key={row}
                        points={`${x},${y - 20} ${x + 20},${y - 10} ${x + 20},${y + 10} ${x},${y + 20} ${x - 20},${y + 10} ${x - 20},${y - 10}`}
                        fill="none"
                        stroke="#fbbf24"
                        strokeWidth="1"
                        opacity="0.15"
                      />
                    );
                  })}
                </g>
              ))}

              {/* Golden accent blobs */}
              <circle cx="300" cy="100" r="150" fill="#fbbf24" opacity="0.1" />
              <circle cx="1620" cy="300" r="180" fill="#f59e0b" opacity="0.1" />
            </svg>
          </div>
        );
    }
  };

  const getThemeTextColor = () => {
    if (['about', 'certificate', 'audit', 'contact', 'directory', 'regulation', 'iso'].includes(theme)) {
      return 'text-white';
    }
    return 'text-honey-600';
  };

  const getThemeSubtitleColor = () => {
    if (['about', 'certificate', 'audit', 'contact', 'directory', 'regulation', 'iso'].includes(theme)) {
      return 'text-gray-300';
    }
    return 'text-charcoal-700';
  };

  return (
    <section className="relative overflow-hidden border-b-4 border-honey-500 h-96">
      {getThemeBackground()}

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center">
            {Icon && (
              <div className="mb-6 w-20 h-20 bg-gradient-to-br from-honey-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Icon className="w-10 h-10 text-white" />
              </div>
            )}

            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${getThemeTextColor()}`}>
              {title}
            </h1>

            {subtitle && (
              <div className="flex items-center space-x-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-honey-500" />
                <p className={`text-lg md:text-xl max-w-3xl ${getThemeSubtitleColor()}`}>
                  {subtitle}
                </p>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-honey-500" />
              </div>
            )}

            <div className="mt-6 flex items-center space-x-2">
              <div className="w-2 h-2 bg-honey-500 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-honey-500 rounded-full animate-pulse" style={{ animationDelay: '0.15s' }} />
              <div className="w-2 h-2 bg-honey-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
