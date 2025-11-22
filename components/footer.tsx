export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black text-blue-400 mb-4">TIENDA MASCOTERA</h3>
            <p className="text-slate-300">Todo para tu mascota, porque ellos son todo. 🐾</p>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold mb-4">Seguinos</h4>
            <div className="space-y-2">
              <a href="#" className="block text-slate-300 hover:text-blue-400 transition-colors">
                📱 @tiendamascotera
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <div className="space-y-2">
              <a href="#" className="block text-slate-300 hover:text-blue-400 transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="block text-slate-300 hover:text-blue-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="block text-slate-300 hover:text-blue-400 transition-colors">
                Botón de Arrepentimiento
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p className="mb-2">© 2025 Tienda Mascotera. Todos los derechos reservados.</p>
          <p>Tratamiento de datos personales según Ley 25.326 de Protección de Datos Personales.</p>
        </div>
      </div>
    </footer>
  )
}
