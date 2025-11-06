function Footer() {
  return (
    <div>
      <footer className="bg-gray-600 text-gray-200 py-6 mt-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          {/* Left - Brand or Logo */}
          <div className="text-lg font-semibold mb-4 md:mb-0">
            © {new Date().getFullYear()} Employee
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
