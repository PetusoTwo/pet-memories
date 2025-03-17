'use client'
import Image from 'next/image';
import Link from 'next/link';
import hero from '@/assets/heroimg.jpeg'
export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
          {/* Contenido principal */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              Manteniendo vivos los
              <span className="block text-purple-600 mt-2">recuerdos de tu mascota</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Un espacio dedicado a honrar y preservar los momentos especiales 
              compartidos con nuestros fieles compañeros. Porque ellos siempre 
              serán parte de nuestra familia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/crear-memoria"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-500/30"
              >
                Crear memoria
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </Link>
              <Link 
                href="/galeria"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 transition-all shadow-lg hover:shadow-gray-200/50"
              >
                Ver galería
              </Link>
            </div>
          </div>

          {/* Imagen destacada */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl transform lg:translate-y-6">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
            <Image
              src={hero}
              alt="GATO"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Características */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Galería de Recuerdos</h3>
            <p className="text-gray-600">Crea álbumes personalizados con tus fotos y videos más especiales.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Historias</h3>
            <p className="text-gray-600">Comparte historias y momentos especiales que viviste con tu mascota.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Comunidad de Apoyo</h3>
            <p className="text-gray-600">Conecta con otros dueños que comprenden tu experiencia.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 