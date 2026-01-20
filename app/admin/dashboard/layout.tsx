import { redirect } from "next/navigation";
import { verifySession } from "@/lib/auth";
import Link from "next/link";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await verifySession();

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-beige-50">
      {/* Admin Header */}
      <header className="border-b border-brown-300 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-xl font-bold text-brown-900">
                Admin Dashboard
              </h1>
              <p className="text-sm text-brown-600">
                Logged in as: {session.username}
              </p>
            </div>
            <form action="/api/admin/logout" method="POST">
              <button
                type="submit"
                className="text-sm text-brown-600 hover:text-brown-900 underline"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Admin Navigation */}
      <nav className="border-b border-brown-300 bg-beige-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex gap-6 py-3">
            <Link
              href="/admin/dashboard"
              className="text-sm font-medium text-brown-700 hover:text-brown-900"
            >
              Blog Posts
            </Link>
            <Link
              href="/"
              target="_blank"
              className="text-sm font-medium text-brown-700 hover:text-brown-900"
            >
              View Site →
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-8">{children}</main>
    </div>
  );
}
