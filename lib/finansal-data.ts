import { createClient as createBrowserClient } from "@/lib/supabase/client"

export interface FinancialTerm {
  term: string
  slug: string
  definition: string
  example: string
  category: string
  seoTitle: string
  metaDescription: string
  pronunciation?: string
}

export async function getAllTerms(): Promise<FinancialTerm[]> {
  console.log("[v0] getAllTerms: Starting fetch")
  try {
    const supabase = createBrowserClient()
    console.log("[v0] getAllTerms: Supabase client created")

    const { data, error } = await supabase.from("finansal_sozluk").select("*").order("term")

    if (error) {
      console.error("[v0] getAllTerms: Supabase error:", error)
      console.error("[v0] getAllTerms: Error details:", JSON.stringify(error, null, 2))
      return []
    }

    console.log("[v0] getAllTerms: Raw data:", data)
    console.log("[v0] getAllTerms: Data type:", typeof data)
    console.log("[v0] getAllTerms: Data is array:", Array.isArray(data))
    console.log("[v0] getAllTerms: Fetched", data?.length || 0, "terms")

    if (data && data.length > 0) {
      console.log("[v0] getAllTerms: First term:", JSON.stringify(data[0], null, 2))
    }

    return data || []
  } catch (err) {
    console.error("[v0] getAllTerms: Unexpected error:", err)
    return []
  }
}

export async function getTermBySlug(slug: string): Promise<FinancialTerm | null> {
  const supabase = createBrowserClient()
  const { data, error } = await supabase.from("finansal_sozluk").select("*").eq("slug", slug).single()

  if (error) {
    console.error("Error fetching term by slug:", error)
    return null
  }

  return data
}

export async function getTermsByCategory(category: string): Promise<FinancialTerm[]> {
  const supabase = createBrowserClient()
  const { data, error } = await supabase.from("finansal_sozluk").select("*").ilike("category", category).order("term")

  if (error) {
    console.error("Error fetching terms by category:", error)
    return []
  }

  return data || []
}

export async function getTermsByLetter(letter: string): Promise<FinancialTerm[]> {
  const supabase = createBrowserClient()
  const { data, error } = await supabase.from("finansal_sozluk").select("*").ilike("term", `${letter}%`).order("term")

  if (error) {
    console.error("Error fetching terms by letter:", error)
    return []
  }

  return data || []
}

export async function searchTerms(query: string): Promise<FinancialTerm[]> {
  const supabase = createBrowserClient()
  const { data, error } = await supabase
    .from("finansal_sozluk")
    .select("*")
    .or(`term.ilike.%${query}%,definition.ilike.%${query}%,category.ilike.%${query}%`)
    .order("term")

  if (error) {
    console.error("Error searching terms:", error)
    return []
  }

  return data || []
}

export async function getPopularTerms(limit = 6): Promise<FinancialTerm[]> {
  console.log("[v0] getPopularTerms: Starting fetch with limit:", limit)
  try {
    const supabase = createBrowserClient()
    console.log("[v0] getPopularTerms: Supabase client created")

    const { data, error } = await supabase.from("finansal_sozluk").select("*").order("term").limit(limit)

    if (error) {
      console.error("[v0] getPopularTerms: Supabase error:", error)
      console.error("[v0] getPopularTerms: Error details:", JSON.stringify(error, null, 2))
      return []
    }

    console.log("[v0] getPopularTerms: Raw data:", data)
    console.log("[v0] getPopularTerms: Data type:", typeof data)
    console.log("[v0] getPopularTerms: Data is array:", Array.isArray(data))
    console.log("[v0] getPopularTerms: Fetched", data?.length || 0, "terms")

    if (data && data.length > 0) {
      console.log("[v0] getPopularTerms: First term:", JSON.stringify(data[0], null, 2))
    }

    return data || []
  } catch (err) {
    console.error("[v0] getPopularTerms: Unexpected error:", err)
    return []
  }
}

// Client-side functions (for client components)
export async function searchTermsClient(query: string): Promise<FinancialTerm[]> {
  console.log("[v0] searchTermsClient: Searching for:", query)
  const supabase = createBrowserClient()
  const { data, error } = await supabase
    .from("finansal_sozluk")
    .select("*")
    .or(`term.ilike.%${query}%,definition.ilike.%${query}%,category.ilike.%${query}%`)
    .order("term")

  if (error) {
    console.error("[v0] Error searching terms:", error)
    return []
  }

  console.log("[v0] searchTermsClient: Found", data?.length || 0, "results")
  return data || []
}
