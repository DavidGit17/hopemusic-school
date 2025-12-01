import React from "react";

export default function HeroBackground({ opacity = 0.6 }) {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ opacity }}
    >
      {/* TOP-LEFT PINK */}
      <div className="absolute -top-20 -left-32 w-[380px] h-[280px] bg-[#ffcbac] rotate-[-23deg] rounded-3xl blur-[80px]"></div>

      {/* MID PINK BOX */}
      <div className="absolute top-[140px] -left-10 w-[280px] h-[220px] bg-[#FF6CDF] rounded-3xl blur-[60px]"></div>

      {/* WHITE RECT */}
      <div className="absolute top-[330px] -left-20 w-[340px] h-[260px] bg-white rounded-3xl blur-[40px]"></div>

      {/* ORANGE ROTATED */}
      <div className="absolute top-[90px] left-[20px] w-[330px] h-[260px] bg-[#FF8240] rotate-[59deg] rounded-3xl blur-[70px]"></div>

      {/* WHITE ROTATED */}
      <div className="absolute top-[40px] left-[230px] w-[330px] h-[260px] bg-white rotate-[59deg] rounded-3xl blur-[60px]"></div>

      {/* BOTTOM-LEFT ORANGE */}
      <div className="absolute bottom-[250px] -left-[400px] w-[780px] h-[550px] bg-[#FF8240] rounded-3xl blur-[150px]"></div>

      {/* TOP-RIGHT ORANGE */}
      <div className="absolute top-[60px] right-[-200px] w-[630px] h-[450px] bg-[#FF8240] rounded-3xl blur-[120px]"></div>

      {/* TOP-RIGHT PEACH */}
      <div className="absolute top-[200px] right-[-100px] w-[600px] h-[690px] bg-[#FFD8C4] rotate-[57deg] rounded-3xl blur-[160px]"></div>
    </div>
  );
}
