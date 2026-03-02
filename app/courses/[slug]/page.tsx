import { redirect } from "next/navigation"

const slugMap: Record<string, string> = {
  strategy: "/education/business-strategy",
  management: "/education/business-management",
}

export default async function CourseLegacyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  redirect(slugMap[slug] ?? "/education")
}
