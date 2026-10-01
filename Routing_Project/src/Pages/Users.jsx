import UserCard from "../Components/UserCard";
import { APIcalling } from "../Custom Hooks/APIcalling";
const Users = () => {
  const {loading,User} = APIcalling()
  if (loading) {
    return (
      <div className="flex  min-h-screen items-center justify-center bg-zinc-950">
        <div className="flex flex-col items-center gap-6">
          {/* Spinner */}
          <div className="relative h-16 w-16">
            <div className="absolute inset-0 rounded-full border-4 border-zinc-800"></div>

            <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-lime-400"></div>

            <div className="absolute inset-3 rounded-full bg-lime-400/10"></div>
          </div>

          {/* Text */}
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-wide text-white">
              Loading Products
              <span className="text-lime-400">...</span>
            </h1>

            <p className="mt-2 text-sm text-zinc-500">
              Getting everything ready for you
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-wrap gap-9 p-8">
        {User.map((elem) => (
          <UserCard user={elem} />
        ))}
      </div>
    );
  }
};

export default Users;
