
import React from 'react';
import { Wrench, Home, Building2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent } from '@/components/ui/card';

const MaintenanceServicesSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
              Servicios de Mantenimiento
            </h2>
            <p className="text-sm md:text-xl text-gray-700 max-w-3xl mx-auto">
              Ofrecemos servicio técnico especializado para equipos de gimnasio en Cali
            </p>
          </div>
          
          {isMobile ? (
            // Mobile layout - horizontally scrollable cards
            <div className="overflow-x-auto pb-4 hide-scrollbar">
              <div className="flex space-x-4 px-1 w-max">
                {/* Servicio a Domicilio */}
                <Card className="w-[260px] shadow-md border border-gray-100 transition-all hover:shadow-lg shrink-0">
                  <CardContent className="pt-6">
                    <div className="text-gym-blue p-2 bg-gym-blue/10 rounded-full inline-block mb-3">
                      <Home className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Mantenimiento a Domicilio</h3>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-3">
                      Servicio personalizado en la comodidad de tu hogar. Nuestros técnicos van a tu casa.
                    </p>
                    <ul className="mb-2 space-y-1">
                      <li className="flex items-center text-xs">
                        <CheckCircle className="h-3 w-3 text-gym-blue mr-1 flex-shrink-0" />
                        <span>Diagnóstico completo</span>
                      </li>
                      <li className="flex items-center text-xs">
                        <CheckCircle className="h-3 w-3 text-gym-blue mr-1 flex-shrink-0" />
                        <span>Lubricación de partes</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                {/* Reparación de Máquinas */}
                <Card className="w-[260px] shadow-md border border-gray-100 transition-all hover:shadow-lg shrink-0">
                  <CardContent className="pt-6">
                    <div className="text-gym-blue p-2 bg-gym-blue/10 rounded-full inline-block mb-3">
                      <Wrench className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Reparación de Máquinas</h3>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-3">
                      Soluciones profesionales para todo tipo de equipos de gimnasio.
                    </p>
                    <ul className="mb-2 space-y-1">
                      <li className="flex items-center text-xs">
                        <CheckCircle className="h-3 w-3 text-gym-blue mr-1 flex-shrink-0" />
                        <span>Reparación de motores</span>
                      </li>
                      <li className="flex items-center text-xs">
                        <CheckCircle className="h-3 w-3 text-gym-blue mr-1 flex-shrink-0" />
                        <span>Cambio de piezas</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                {/* Servicio para Gimnasios */}
                <Card className="w-[260px] shadow-md border border-gray-100 transition-all hover:shadow-lg shrink-0">
                  <CardContent className="pt-6">
                    <div className="text-gym-blue p-2 bg-gym-blue/10 rounded-full inline-block mb-3">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Servicio para Gimnasios</h3>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-3">
                      Mantenimiento preventivo y correctivo para gimnasios comerciales.
                    </p>
                    <ul className="mb-2 space-y-1">
                      <li className="flex items-center text-xs">
                        <CheckCircle className="h-3 w-3 text-gym-blue mr-1 flex-shrink-0" />
                        <span>Contratos de mantenimiento</span>
                      </li>
                      <li className="flex items-center text-xs">
                        <CheckCircle className="h-3 w-3 text-gym-blue mr-1 flex-shrink-0" />
                        <span>Servicio urgente</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            // Desktop layout - grid
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Servicio a Domicilio */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 transition-all hover:shadow-xl">
                <div className="text-gym-blue p-3 bg-gym-blue/10 rounded-full inline-block mb-4">
                  <Home className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Mantenimiento a Domicilio</h3>
                <p className="text-gray-600 mb-4">
                  Servicio personalizado en la comodidad de tu hogar. Nuestros técnicos van a tu casa para mantener tus equipos en óptimas condiciones.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gym-blue mr-2" />
                    <span>Diagnóstico completo</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gym-blue mr-2" />
                    <span>Lubricación de partes móviles</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gym-blue mr-2" />
                    <span>Ajuste de piezas y componentes</span>
                  </li>
                </ul>
              </div>
              
              {/* Reparación de Máquinas */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 transition-all hover:shadow-xl">
                <div className="text-gym-blue p-3 bg-gym-blue/10 rounded-full inline-block mb-4">
                  <Wrench className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Reparación de Máquinas</h3>
                <p className="text-gray-600 mb-4">
                  Soluciones profesionales para todo tipo de equipos de gimnasio, desde caminadoras hasta máquinas multifuncionales.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gym-blue mr-2" />
                    <span>Reparación de motores</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gym-blue mr-2" />
                    <span>Cambio de piezas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gym-blue mr-2" />
                    <span>Restauración de sistemas electrónicos</span>
                  </li>
                </ul>
              </div>
              
              {/* Servicio para Gimnasios */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 transition-all hover:shadow-xl">
                <div className="text-gym-blue p-3 bg-gym-blue/10 rounded-full inline-block mb-4">
                  <Building2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Servicio para Gimnasios</h3>
                <p className="text-gray-600 mb-4">
                  Mantenimiento preventivo y correctivo para gimnasios comerciales. Garantizamos el funcionamiento óptimo de todos tus equipos.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gym-blue mr-2" />
                    <span>Contratos de mantenimiento</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gym-blue mr-2" />
                    <span>Servicio técnico urgente</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gym-blue mr-2" />
                    <span>Asesoría especializada</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
          
          <div className="text-center mt-6 md:mt-12">
            <Button asChild size={isMobile ? "default" : "lg"} className="bg-gym-blue hover:bg-gym-blue-dark">
              <Link to="/contacto">
                Solicitar Servicio
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceServicesSection;
