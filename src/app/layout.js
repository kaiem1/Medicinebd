export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Next.js Website</h1>
      <p className="text-lg mb-6 text-center max-w-xl">
        This is your homepage. You can customize it however you like!
      </p>
      <nav className="space-x-4">
        <a href="/about" className="text-blue-600 hover:underline">About</a>
        <a href="/contact" className="text-blue-600 hover:underline">Contact</a>
      </nav>
    </main>
  );
}
