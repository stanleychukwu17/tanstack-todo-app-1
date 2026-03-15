export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="text-center">
      <p className="text-sm">&copy; {year} Your name here. All rights reserved.</p>
    </footer>
  )
}
