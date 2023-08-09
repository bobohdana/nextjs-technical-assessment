'use client'

import React from 'react'
import { redirect } from 'next/navigation'

export default () => {
  React.useEffect(() => {
    redirect('nav/contact')
  }, [])

  return <></>
}
