// Не получилось понять как правильно сделать
import { auth } from '@clerk/nextjs'
import prismadb from '@/lib/prismadb'

export const saveChatMessages = async (
  messages: { role: string; content: string }[]
) => {
  const { userId } = auth()

  if (!userId) {
    return
  }

  for (const message of messages) {
    await prismadb.chatMessage.create({
      data: {
        role: message.role,
        content: message.content,
        userId: userId
      }
    })
  }
}

export const getChatMessages = async () => {
  const { userId } = auth()

  if (!userId) {
    return []
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId: userId
    },
    include: { ChatMessages: true }
  })

  if (!userApiLimit) {
    return []
  }

  return userApiLimit.ChatMessages
}
