"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle, X } from "lucide-react"

export function NewsletterSubscription() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      setError("Geçerli bir email adresi girin")
      return
    }

    setIsLoading(true)
    setError("")

    // Simulated API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSuccess(true)
      setEmail("")
    } catch (err) {
      setError("Bir hata oluştu. Lütfen tekrar deneyin.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    setIsSuccess(false)
  }

  if (isSuccess) {
    return (
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <span className="text-emerald-800 font-medium">
                Başarıyla abone oldunuz! Finansal güncellemelerimizi takip edin.
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="text-emerald-600 hover:text-emerald-800 hover:bg-emerald-100"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-blue-600" />
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Finansal Güncellemeler</h3>
              <p className="text-xs text-gray-600">Yeni terimler ve finans haberlerini ilk siz öğrenin</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex items-center space-x-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Input
                type="email"
                placeholder="Email adresiniz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pr-4 bg-white/80 backdrop-blur-sm border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                disabled={isLoading}
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 whitespace-nowrap"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Abone ol</span>
                </div>
              ) : (
                "Abone ol"
              )}
            </Button>
          </form>
        </div>

        {error && <div className="mt-2 text-sm text-red-600 text-center sm:text-right">{error}</div>}
      </div>
    </div>
  )
}
