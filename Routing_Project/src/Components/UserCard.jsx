import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const UserCard = ({ user }) => {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-white shadow-lg">
      {/* Top Section */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-lime-400 text-xl font-bold text-black">
          {user.name.firstname[0].toUpperCase()}
          {user.name.lastname[0].toUpperCase()}
        </div>

        {/* Name */}
        <div className="min-w-0">
          <h2 className="truncate text-lg font-semibold capitalize">
            {user.name.firstname} {user.name.lastname}
          </h2>

          <p className="text-sm text-zinc-500">@{user.username}</p>
        </div>
      </div>

      {/* User Details */}
      <div className="mt-5 space-y-3 border-t border-zinc-800 pt-4">
        {/* Email */}
        <div className="flex items-center gap-3 text-sm">
          <Mail className="h-4 w-4 text-lime-400" />
          <span className="truncate text-zinc-400">{user.email}</span>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3 text-sm">
          <Phone className="h-4 w-4 text-lime-400" />
          <span className="text-zinc-400">{user.phone}</span>
        </div>

        {/* Location */}
        <div className="flex items-start gap-3 text-sm">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />

          <div className="text-zinc-400">
            <p className="capitalize">
              {user.address.street}, {user.address.number}
            </p>

            <p className="capitalize">
              {user.address.city} - {user.address.zipcode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
