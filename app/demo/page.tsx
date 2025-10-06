export default function Page({ params }) {
  const { demoid } = params;

  return (
    <div className="flex flex-col m-20 gap-4">
      <h1 className="text-3xl font-bold text-black caret-amber-400">Note page</h1>
      <ul>
        <li className="text-pink-600">note [demoid]</li>
        <li className="text-pink-500 drop-shadow-amber-400">Note 111233</li>
        <li className="text-pink-500 drop-shadow-amber-400">Note 11133</li>
        <p className="text-black">ini catatan dari note asli [demoid] </p>
      </ul>
    </div>
  );
} 