import { useState } from 'react'
import { Dialog } from '@headlessui/react'

const navigation = [
  { name: 'Inicio', href: '#' },
  { name: 'Ver en Google Play', href: 'https://www.googleplay.com' },
]

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-zinc-900">
      <nav className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
           <img src="https://i.ibb.co/K5nTmd7/Black-Icon.png"
                className="w-12 h-12"
                alt="logos">
           </img>
        </div>
        <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
            <img
                  src="burguer.png"
                  className="w-9"
                  alt='menu'
            >      
           </img>
          </button>
        </div>


        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white hover:text-coffe">
              {item.name}
            </a>
          ))}
        </div>


      </nav>


      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-zinc-900 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-start">

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >

            <h1
                  className="text-xl font-bold text-coffe">Cerrar
            </h1>

            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="py-6 space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white rounded-lg hover:bg-gray-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

      
    </header>
  )
}
