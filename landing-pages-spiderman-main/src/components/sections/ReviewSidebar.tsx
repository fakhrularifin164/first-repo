import { Play } from "lucide-react";

const reviews = [
  { score: "9.9", source: "IGN", quote: '"Potential Game of the year"' },
  { score: "9.7", source: "GamesRadar", quote: '"PlayStation\'s Masterpiece"' },
];

export function ReviewSidebar() {
  return (
    <div className="space-y-12 pl-4 lg:pl-12">
      {/* Game Reviews */}
      <div className="space-y-6">
        <h3 className="text-sm font-bold tracking-widest text-white uppercase border-b border-white/20 pb-2 mb-4 w-32">
          Game Reviews
        </h3>
        {reviews.map((review) => (
          <div
            key={review.source}
            className="flex items-center space-x-4 group cursor-pointer text-white"
          >
            <div className="relative w-12 h-12 flex items-center justify-center rounded-full border-2 border-white/30 group-hover:border-white transition-all duration-300 group-hover:scale-110 animate-pulse-border">
              <span className="font-bold text-lg">{review.score}</span>
            </div>
            <div className="group-hover:translate-x-1 transition-transform duration-300">
              <p className="font-bold text-sm">{review.source}</p>
              <p className="text-xs text-gray-300 italic">{review.quote}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Watch Trailer */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold tracking-widest text-white uppercase mb-2">
          Watch Trailer
        </h3>
        <div className="relative w-full aspect-video rounded-xl overflow-hidden group cursor-pointer shadow-2xl hover:shadow-red-900/40 transition-shadow duration-500 animate-border-glow">
          <img
            src="/trailer-thumbnail.png"
            alt="Spider-Man Bahlil Morales Trailer Thumbnail"
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-125 transition-all duration-500 group-hover:shadow-white/30">
              <Play
                className="w-6 h-6 text-red-700 ml-0.5 transition-transform duration-300 group-hover:scale-110"
                fill="currentColor"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
