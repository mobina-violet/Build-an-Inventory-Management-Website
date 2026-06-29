"use client";

import { useUser } from "@hexclave/next";     // ← مهم
// import { useStackApp } from "@hexclave/next"; // اگه نیاز شد

export default function AccountSettings() {
  const user = useUser();

  console.log("Current User:", user); // برای دیباگ

  if (!user) {
    return <div className="p-10 text-center">در حال بارگذاری...</div>;
  }

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      {/* Profile */}
      <div className="rounded-xl border bg-white p-6">
        <h2 className="text-xl font-semibold mb-6">Profile</h2>

        <div className="flex items-center gap-5">
          <img
            src={user.profileImageUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || "")}`}
            alt="Profile"
            className="h-20 w-20 rounded-full border object-cover"
          />
          <div>
            <button className="rounded-lg border px-4 py-2 hover:bg-gray-100">
              Change Photo
            </button>
          </div>
        </div>

        <div className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">Full Name</label>
            <input
              className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              value={user.displayName || ""}
              onChange={(e) => {
                // بعداً updateProfile رو اضافه می‌کنیم
                console.log("New name:", e.target.value);
              }}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Email</label>
            <input
              disabled
              value={user.primaryEmail || ""}
              className="w-full rounded-lg border bg-gray-100 px-3 py-2"
            />
          </div>
        </div>
      </div>

      {/* بقیه بخش‌ها (Password, Danger Zone) */}
    </div>
  );
}