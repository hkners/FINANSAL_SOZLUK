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
  console.log("getAllTerms: Starting fetch")
  try {
    const supabase = createBrowserClient()
    console.log("getAllTerms: Supabase client created")

    const { data, error } = await supabase.from("finansal_sozluk").select("*").order("term")

    if (error) {
      console.error("getAllTerms: Supabase error:", error)
      console.error("getAllTerms: Error details:", JSON.stringify(error, null, 2))
      return []
    }

    console.log("getAllTerms: Raw data:", data)
    console.log("getAllTerms: Data type:", typeof data)
    console.log("getAllTerms: Data is array:", Array.isArray(data))
    console.log("getAllTerms: Fetched", data?.length || 0, "terms")

    if (data && data.length > 0) {
      console.log("getAllTerms: First term:", JSON.stringify(data[0], null, 2))
    }

    return data || []
  } catch (err) {
    console.error("getAllTerms: Unexpected error:", err)
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
  console.log("getTermsByCategory: Starting fetch for category:", category)
  try {
    const supabase = createBrowserClient()
    console.log("getTermsByCategory: Supabase client created")

    const { data, error } = await supabase.from("finansal_sozluk").select("*").eq("category", category).order("term")

    if (error) {
      console.error("getTermsByCategory: Supabase error:", error)
      console.error("getTermsByCategory: Error details:", JSON.stringify(error, null, 2))
      return []
    }

    console.log("getTermsByCategory: Raw data:", data)
    console.log("getTermsByCategory: Fetched", data?.length || 0, "terms for category:", category)

    if (data && data.length > 0) {
      console.log("getTermsByCategory: First term:", JSON.stringify(data[0], null, 2))
    }

    return data || []
  } catch (err) {
    console.error("getTermsByCategory: Unexpected error:", err)
    return []
  }
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
  const { data, error } = await supabase.from("finansal_sozluk").select("*").ilike("term", `%${query}%`).order("term")

  if (error) {
    console.error("Error searching terms:", error)
    return []
  }

  return data || []
}

export async function getPopularTerms(limit = 6): Promise<FinancialTerm[]> {
  console.log("getPopularTerms: Starting fetch with limit:", limit)
  try {
    const supabase = createBrowserClient()
    console.log("getPopularTerms: Supabase client created")

    const { data, error } = await supabase.from("finansal_sozluk").select("*").order("term").limit(limit)

    if (error) {
      console.error("getPopularTerms: Supabase error:", error)
      console.error("getPopularTerms: Error details:", JSON.stringify(error, null, 2))
      return []
    }

    console.log("getPopularTerms: Raw data:", data)
    console.log("getPopularTerms: Data type:", typeof data)
    console.log("getPopularTerms: Data is array:", Array.isArray(data))
    console.log("getPopularTerms: Fetched", data?.length || 0, "terms")

    if (data && data.length > 0) {
      console.log("getPopularTerms: First term:", JSON.stringify(data[0], null, 2))
    }

    return data || []
  } catch (err) {
    console.error("getPopularTerms: Unexpected error:", err)
    return []
  }
}

// Client-side functions (for client components)
export async function searchTermsClient(query: string): Promise<FinancialTerm[]> {
  console.log("searchTermsClient: Searching for:", query)
  const supabase = createBrowserClient()
  const { data, error } = await supabase.from("finansal_sozluk").select("*").ilike("term", `%${query}%`).order("term")

  if (error) {
    console.error("Error searching terms:", error)
    return []
  }

  console.log("searchTermsClient: Found", data?.length || 0, "results")
  return data || []
}
