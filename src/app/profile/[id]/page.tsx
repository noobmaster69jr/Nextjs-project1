export default function UserProfile({params}:any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      Profile <hr/>
      User <span className="text-center text-black-400 bg-orange-400">id {params.id}</span>
    </div>
  );
}
