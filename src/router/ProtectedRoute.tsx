
import useStore from "@/session/storeAuth"
import { Navigate } from "react-router-dom"

export default function ProtectedRoute({
  children,
  allowedRoles,
}: {
  children: React.ReactNode
  allowedRoles?: string[]
}) {
  const { token, userInfo } = useStore()

  if (!token || !userInfo)
    return <Navigate to="/auth/" replace />

  if (allowedRoles && !allowedRoles.includes(userInfo.role))
    return <Navigate to="/" replace />

  return <>{children}</>
}