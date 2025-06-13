"use client"

export function ThemeProvider({ children, ...props }) {
  return <div className="dark">{children}</div>
}
