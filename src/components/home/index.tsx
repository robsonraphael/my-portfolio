export function Home() {
  return (
    <header className="flex items-center justify-between p-4 bg-neutral-200">
      <a
        href="/"
        className="text-3xl text-neutral-900 font-black tracking-wide"
      >
        R.R.
      </a>
      <nav>
        <ul className="flex items-center gap-8 text-base font-medium">
          <li>
            <a href="/" className="hover:text-neutral-600">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-neutral-600 focus:text-neutral-500">
              About Us
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-neutral-600 focus:text-neutral-500">
              Services
            </a>
          </li>
          <li>
            <a href="#portifolio" className="hover:text-neutral-600 focus:text-neutral-500">
              Portifólio
            </a>
          </li>
          <li>
            <a href="#contactme" className="hover:text-neutral-600 focus:text-neutral-500">
              Contact Me
            </a>
          </li>
          <li className="border-l-2 border-neutral-600 h-5" />
          <li>
            <a href="#phone" className="hover:text-neutral-600">
              <i className="bx bxs-phone pr-1 text-lg align-middle"></i>
              081 99241-5105
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
