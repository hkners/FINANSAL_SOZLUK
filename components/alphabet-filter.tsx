"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const alphabet = [
  "A",
  "B",
  "C",
  "Ç",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "İ",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "Ö",
  "P",
  "R",
  "S",
  "Ş",
  "T",
  "U",
  "Ü",
  "V",
  "Y",
  "Z",
]

export function AlphabetFilter() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {alphabet.map((letter, index) => (
        <Link key={letter} href={`/harf/${index + 1}`}>
          <Button
            variant="outline"
            size="sm"
            className="w-10 h-10 p-0 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 bg-transparent"
          >
            {letter}
          </Button>
        </Link>
      ))}
    </div>
  )
}
