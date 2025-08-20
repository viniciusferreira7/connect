interface ButtonProps {
  text?: string
}

export function Button({ text = 'Enviar' }: ButtonProps){
  return (
    <button className='px-5 h-12 bbg-gray-500 text-blue font-semibold rounded-xl cursor-pointer transition ease-in-out hover:bg-blue hover:text-gray-900 duration-300 flex items-center justify-center gap-y-2'>{text}
    <ArrowRight /></button>
  )
}

//TODO: Install lucide-react