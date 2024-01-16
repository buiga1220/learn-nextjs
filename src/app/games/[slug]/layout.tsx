import type { Metadata } from "next"
import { Inter } from "next/font/google"
import React from "react"
import internal from "stream"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Games Detail Page",
  description: "BUIGA1220"
}


export default function GamesLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (

    <div className="flex">


    {/* Main Content */}
    <div className="w-full p-4 md:w-3/4">
      {/* Main content goes here */}
      <h1 className="text-2xl font-bold">Main Content</h1>
      <p>This is the main content area.</p>
      {children}
    </div>

        {/* Sidebar */}
        <div className="hidden min-h-screen text-white bg-gray-800 md:block md:w-1/4">
      {/* Sidebar content goes here */}
      <h1>Siderbar</h1>
        {/* Add more sidebar items as needed */}
      
    </div>
  </div>
  )
}
