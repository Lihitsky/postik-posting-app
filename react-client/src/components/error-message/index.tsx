import React from "react"

export const ErrorMessage = ({ error = "" }: { error: string }) => {
  return error && <p className="text-red-500 mt-1 mb-1 text-small">{error}</p>
}
