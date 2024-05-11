const navigation = {
    redes: [
      { name: 'TikTok', href: '#' },
      { name: 'Instagram', href: '#' },
      { name: 'Google Play', href: '#' },
    ]
  }
  
  export default function Footer() {
    return (
      <footer className="bg-zinc-900" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="px-6 py-16 mx-auto max-w-7xl sm:py-24 lg:px-8 lg:py-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">

            <img src="https://i.ibb.co/K5nTmd7/Black-Icon.png"
            className="w-12 h-12"
            alt="logos">
            </img>

            <div className="grid grid-cols-2 gap-8 mt-16 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Redes Sociales</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.redes.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  