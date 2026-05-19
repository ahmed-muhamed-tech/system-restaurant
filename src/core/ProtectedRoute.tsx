// core/ProtectedRoute.tsx
import { Navigate } from "react-router-dom"
import useStore from "../features/auth/storeAuth"

export default function ProtectedRoute({
  children,
  allowedRoles,
}: {
  children: React.ReactNode
  allowedRoles?: string[]
}) {
  const { token, userInfo } = useStore()

  if (!token || !userInfo)
    return <Navigate to="/auth/login" replace />

  if (allowedRoles && !allowedRoles.includes(userInfo.role))
    return <Navigate to="/" replace />

  return <>{children}</>
}