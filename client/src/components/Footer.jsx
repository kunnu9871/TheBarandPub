const Footer = () => {
  return (
    <footer className="bg-cBlack text-white w-full border-t-2 border-cWhite">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2024 THE Bar & Cafe. All rights reserved.</p>
        <ul className="flex justify-center space-x-6 mt-4">
          <li>
            <a href="#" className="hover:text-pink-500">
              Facebook
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              Instagram
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
