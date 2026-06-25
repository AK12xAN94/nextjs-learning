export default async function House({ params }: { params: Promise<{ num: number }> }) {
  const { num } = await params;
  return (
    <div>
      <h1 className="bg-black text-white p-4">House {num}</h1>
      <p className="bg-blue-300 text-black p-4">House {num}</p>
      <p className="bg-purple-300 text-black p-4">House {num}</p>
    </div>
  );
}