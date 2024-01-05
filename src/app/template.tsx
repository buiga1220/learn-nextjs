import Ads from "@/components/Widgets/Ads";
import Header from "@/components/layout/Header";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="app-box pb-[100px] pt-[50px] games-home">
      <Ads adsCode="Im is Adsense"/>
      {children}
      </div>
    </div>
  );
}
