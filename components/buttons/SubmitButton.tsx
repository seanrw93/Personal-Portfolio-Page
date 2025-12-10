import React from 'react'

type SubmitButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
}

export const SubmitButton = ({ children, ...rest }: SubmitButtonProps) => {
  return (
    <button type="submit" className="group flex justify-center items-center gap-x-2 h-[3rem] w-full sm:w-[8rem] bg-darkest-blue text-base-white rounded-full outline-none transition-all hover:scale-110 active:scale-105">{children}</button>
  )
}
