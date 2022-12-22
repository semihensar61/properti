
import React from 'react'; // we need this to make JSX compile

type LayoutProps = {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps)  => {
  return (
    <>
      <main className='bg-slate-900 justify-center h-screen'>{children}</main>
    </>
  )
}