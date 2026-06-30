"use client";

import dynamic from "next/dynamic";

const UserButton = dynamic(
  () => import("@hexclave/next").then((mod) => mod.UserButton),
  {
    loading: () => (
      <div className="h-10 w-full bg-gray-800 rounded-lg animate-pulse" />
    ),
    ssr: false,
  },
);

export default function UserButtonWrapper() {
  return <UserButton showUserInfo />;
}
