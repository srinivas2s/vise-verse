"use client";

interface ScrollyCanvasProps {
  onVideoEnd?: () => void;
}

export default function ScrollyCanvas({ onVideoEnd }: ScrollyCanvasProps) {
  return (
    <div className="absolute inset-0 bg-[#121212]">
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={onVideoEnd}
        className="h-full w-full object-cover"
        style={{
          display: "block",
          filter: "contrast(1.05)"
        }}
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
