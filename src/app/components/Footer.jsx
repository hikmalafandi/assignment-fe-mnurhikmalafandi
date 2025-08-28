export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center px-4">
        {/* Bagian kiri */}
        <p className="text-sm">&copy; 2025 Sho.co. All rights reserved.</p>

        {/* Bagian kanan - sosial media */}
        {/* <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Facebook
          </a>
        </div> */}
      </div>
    </footer>
  );
}
