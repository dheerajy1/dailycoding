// src\components\home-v2\static-block.tsx

// Server Component — fully static
export default function StaticBlock() {
  return (
    <div className="rounded border bg-blue-50 p-4">
      <h2 className="font-bold">This is a STATIC component</h2>
      <p>Rendered at build time / cached due to cacheComponents: true</p>
    </div>
  );
}
