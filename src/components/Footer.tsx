export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} Mike Ling. All right reserved.</p>
      </div>
    </footer>
  );
}
