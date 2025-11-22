export function PawPattern() {
  return (
    <div className="absolute inset-0 opacity-10">
      <svg width="100%" height="100%">
        <defs>
          <pattern id="pawprints" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            {/* Paw print 1 */}
            <g transform="translate(20, 20)">
              <ellipse cx="15" cy="20" rx="8" ry="10" fill="currentColor" className="text-blue-700" />
              <ellipse cx="5" cy="10" rx="5" ry="6" fill="currentColor" className="text-blue-700" />
              <ellipse cx="15" cy="5" rx="5" ry="6" fill="currentColor" className="text-blue-700" />
              <ellipse cx="25" cy="10" rx="5" ry="6" fill="currentColor" className="text-blue-700" />
            </g>

            {/* Paw print 2 */}
            <g transform="translate(80, 70) rotate(25)">
              <ellipse cx="15" cy="20" rx="8" ry="10" fill="currentColor" className="text-blue-700" />
              <ellipse cx="5" cy="10" rx="5" ry="6" fill="currentColor" className="text-blue-700" />
              <ellipse cx="15" cy="5" rx="5" ry="6" fill="currentColor" className="text-blue-700" />
              <ellipse cx="25" cy="10" rx="5" ry="6" fill="currentColor" className="text-blue-700" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pawprints)" />
      </svg>
    </div>
  )
}
