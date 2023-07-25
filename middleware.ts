// https://clerk.com/docs/nextjs/get-started-with-nextjs
// https://clerk.com/docs/nextjs/get-started-with-nextjs#:~:text=component%20as%20well.-,Protect%20your%20Application,-Now%20that%20Clerk

import { authMiddleware } from '@clerk/nextjs'

// Этот пример защищает все маршруты, включая маршруты api/trpc
// Пожалуйста, отредактируйте это, чтобы позволить другим маршрутам быть общедоступными по мере необходимости..
// See https://clerk.com/docs/nextjs/middleware для получения дополнительной информации о настройке промежуточного программного обеспечения.
export default authMiddleware({
  publicRoutes: ['/']
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
}
