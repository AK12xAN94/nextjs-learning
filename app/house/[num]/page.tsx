export default async function House({ params }: { params: Promise<{ num: number }> }) {
  const { num } = await params;
  return (
    <div>
      <h1>House {num}</h1>
    </div>
  );
}