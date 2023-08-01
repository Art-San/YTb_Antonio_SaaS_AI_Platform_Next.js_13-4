'use client'

import { MAX_FREE_COUNTS } from '@/constans'
import { useEffect, useState } from 'react'
import { Card, CardContent } from './ui/card'

interface IFreeCounterProps {
  apiLimitCount: number
}

const FreeCounter = ({ apiLimitCount = 0 }: IFreeCounterProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
              {apiLimitCount} / {MAX_FREE_COUNTS} 3:32:58
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default FreeCounter
