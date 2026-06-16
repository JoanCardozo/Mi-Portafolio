import { useState, useEffect } from 'react';
import './App.css';
import Mi_foto from './assets/Mi_foto.png';
import { FaHome, FaBriefcase, FaStar, FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Proyecto1 from './assets/proyecto1.png';
import Proyecto2 from './assets/proyecto2.png';

// ===================================================
// CONFIGURACIÓN DE PARTICULAS (TSPARTICLES)
// ===================================================
const opcionesParticulas = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" }, 
      onHover: { enable: true, mode: "repulse" }, 
      resize: true,
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 100, duration: 0.4 },
    },
  },
  particles: {
    color: { value: "#00ffcc" }, 
    links: {
      color: "#00ffcc",
      distance: 150,
      enable: true,
      opacity: 0.15, 
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "out" },
      random: false,
      speed: 1, 
      straight: false,
    },
    number: {
      density: { enable: true, area: 800 },
      value: 80, 
    },
    opacity: { value: 0.2 }, 
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
};

function App() {
  const [init, setInit] = useState(false);
  const [tarjetaAbierta, setTarjetaAbierta] = useState(null);
  const [seccionActiva, setSeccionActiva] = useState('inicio');

  // ===================================================
  // ESTADO INTERACTIVO: CONTROL DE HABILIDADES
  // ===================================================
  const [habilidadesExpandidas, setHabilidadesExpandidas] = useState({
    backend: false,
    frontend: false,
    videojuegos: false,
    herramientas: false
  });

  useEffect(() => {
    if (!init) {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    }
  }, [init]);

  const toggleCategoriaHabilidad = (categoria) => {
    setHabilidadesExpandidas(prev => ({
      ...prev,
      [categoria]: !prev[categoria]
    }));
  };

  // ===================================================
  // DATOS: EXPERIENCIA LABORAL
  // ===================================================
  const experiencias = [
    {
      id: 1,
      puesto: "Aprendiz Programador",
      empresa: "Aviatur",
      periodo: "2023 - 2024",
      descripcion: (
        <ul className="lista-experiencia">
          <li>Desarrollo de funcionalidades utilizando (.NET y C#) para la resolución de requerimientos técnicos.</li>
          <li>Gestión de tareas y flujo de trabajo bajo la metodología ágil (SCRUM) utilizando (Jira).</li>
          <li>Diseño y optimización de base de datos en (SQL Server), incluyendo la creación de procedimientos almacenados</li>
          <li>Levantamiento y documentación técnica de requerimientos para asegurar la escalabilidad del software.</li>
          <li>Modelado y diseño de sistemas, participando en las fases iniciales de arquitectura de software.</li>
        </ul>
      )
    },
    {
      id: 2,
      puesto: "Tecnico de Transcripcion",
      empresa: "SAS Servicios y Asesorias (FOMAG)",
      periodo: "2024 - 2024 (8 meses)",
      descripcion: (
        <ul className="lista-experiencia">
          <li>Gestión integral de incapacidades a nivel nacional, con responsabilidad directa sobre las zonas de Valle del Cauca y Vichada.</li>
          <li>Uso avanzado del aplicativo Horus y Excel para la organización, auditoría y transcripción de registros médicos.</li>
          <li>Soporte y atención directa a docentes a nivel nacional, resolviendo incidencias y problemas técnicos con sus trámites de incapacidad.</li>
          <li>Manejo y consulta de bases de datos para asegurar la integridad de la información de los docentes vinculados al FOMAG.</li>
          <li>Optimización de los tiempos de respuesta en el procesedimiento de Transcripcion</li>
        </ul>
      )
    }
  ];

  // ===================================================
  // DATOS: PROYECTOS
  // ===================================================
  const proyectos = [
    {
      id: 1,
      titulo: "Dashboard de Gestión de Tareas y Productividad",
      descripcion: "Un aplicativo web interactivo para la gestión del tiempo y análisis de productividad personal. El proyecto cuenta con un panel analítico avanzado en tiempo real y un sistema robusto de configuración de usuario enfocado en las mejores prácticas de desarrollo frontend.",
      imagen: Proyecto1,
      tecnologias: ["React", "Vite", "JavaScript (ES6+)", "Context API / State Management", "CSS3 / Variables Globales"],
      linkDemo: "https://dashboard-de-gesti-n-de-tareas-y-product-joan-cardozos-projects.vercel.app",
      linkRepo: "https://github.com/JoanCardozo/Dashboard-de-Gesti-n-de-Tareas-y-Productividad"
    },
    {
      id: 2,
      titulo: "Demo Videojuego de Plataforma 2D",
      descripcion: "Proyecto personal enfocado en el desarrollo de videojuegos, donde diseñé e implementé la primera versión jugable de un juego 2D estilo Pixel Art utilizando Unity y C#. Durante el desarrollo apliqué principios de Programación Orientada a Objetos (POO) para estructurar la lógica del juego, así como sistemas de control de personaje, detección de colisiones, interacción con el entorno y gestión de estados. También trabajé en la creación e integración de sprites, animaciones mediante Animator, configuración de Colliders, diseño de niveles y mecánicas principales de jugabilidad.",
      imagen: Proyecto2,
      tecnologias: ["Unity Engine", "C#", "Programación Orientada a Objetos (POO)", "Pixel Art y manejo de Sprites", "Animator y sistemas de animación", "Colliders y detección de colisiones", "Diseño de niveles", "Gestión de estados y condiciones de juego", "Física 2D", "Mecánicas de gameplay"],
      linkDemo: "https://youtu.be/dGTI2Q7l8t8",
      linkRepo: "https://github.com/JoanCardozo/Demo-Videojuego-de-Plataformas-2D"
    }
  ];

  // ===================================================
  // DATOS: HABILIDADES TÉCNICAS (ORGANIZADAS POR CATEGORÍAS)
  // ===================================================
  const categoriasHabilidades = {
    backend: {
      titulo: "Backend Development",
      items: [
        { nombre: "C#", nivel: 5 },
        { nombre: ".NET", nivel: 4 },
        { nombre: "SQL SERVER", nivel: 3 },
        { nombre: "APIS", nivel: 3 },
      ]
    },
    frontend: {
      titulo: "Frontend Development",
      items: [
        { nombre: "HTML 5", nivel: 5 },
        { nombre: "CSS", nivel: 5 },
        { nombre: "Javascript", nivel: 4 },
        { nombre: "React", nivel: 3 },
        { nombre: "Bootstrap", nivel: 3 },
        { nombre: "Sistemas de Diseño", nivel: 4 }
      ]
    },
    videojuegos: {
      titulo: "Videojuegos & Motores",
      items: [
        { nombre: "Programacion orientada a Objetos (POO)", nivel: 4 },
        { nombre: "Unity Engine", nivel: 4 }
      ]
    },
    herramientas: {
      titulo: "Herramientas & Otras Competencias",
      items: [
        { nombre: "Git / GitHub", nivel: 3 },
        { nombre: "SCRUM", nivel: 2 },
        { nombre: "Excel", nivel: 4 },
        { nombre: "Microsoft Office 365", nivel: 4 },
        { nombre: "Transcripcion", nivel: 4 },
        { nombre: "Figma", nivel: 3 },
        { nombre: "Azure", nivel: 3 }
      ]
    }
  };

  return (
    <div className="layout-principal">

      {init && (
        <div className="capa-fondo">
          <Particles
            id="tsparticles"
            options={opcionesParticulas}
          />
        </div>
      )}

      {/* ===================================================
          ESTRUCTURA: BARRA LATERAL NAV
          =================================================== */}
      <nav className="barra-lateral">
        <div className="mini-avatar-contenedor">
          <img
            src={`${import.meta.env.BASE_URL}Letra.png`}
            alt="Letra"
            className="mini-avatar"
          />
        </div>
        <FaHome className={`iconos ${seccionActiva === 'inicio' ? 'activo' : ''}`} onClick={() => setSeccionActiva('inicio')}
          title="Inicio"
        />
        <FaBriefcase className={`iconos ${seccionActiva === 'experiencia' ? 'activo' : ''}`} onClick={() => setSeccionActiva('experiencia')}
          title="Experiencia"
        />
        <FaStar className={`iconos ${seccionActiva === 'habilidades' ? 'activo' : ''}`} onClick={() => setSeccionActiva('habilidades')}
          title="Habilidades"
        />
        <FaEnvelope className={`iconos ${seccionActiva === 'contacto' ? 'activo' : ''}`} onClick={() => setSeccionActiva('contacto')}
          title="Contacto"
        />

        <div style={{ marginTop: 'auto', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <a href="https://www.linkedin.com/in/joan-stiven-cardozo-avila-99a15732a/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="iconos" title="LinkedIn" /></a>
          <a href="https://github.com/JoanCardozo" target="_blank" rel="noopener noreferrer"><FaGithub className="iconos" title="GitHub" /></a>
        </div>
      </nav>

      {/* ===================================================
          ESTRUCTURA: VISTAS PRINCIPALES DEL CONTENIDO
          =================================================== */}
      <main className="contenido-principal">
        
        {/* --- SECCIÓN INICIO --- */}
        {seccionActiva === 'inicio' && (
          <section className="seccion-inicio">
            <div className="bloque-texto">
              <h1 className="titulo-principal">Soy <span className="resaltado">Joan</span>, <br />Programador de Software</h1>
              <p className="descripcion">
                Desarrollador Backend que construye sistemas funcionales, legibles y listos
                para escalar. Con base técnica en C# / .NET y React.
              </p>
              <button className="btn-primario" onClick={() => setSeccionActiva('experiencia')}>Ver mi trabajo →</button>
            </div>
            <div className="bloque-foto">
              <img src={Mi_foto} alt="Mi perfil" className="foto-perfil" />
            </div>
          </section>
        )}

        {/* --- SECCIÓN EXPERIENCIA LABORAL --- */}
        {seccionActiva === 'experiencia' && (
          <section className="seccion-experiencia">
            <h2 className="subtitulo">Mi Experiencia</h2>
            <div className="contenedor-tarjetas">
              {experiencias.map((exp) => (
                <div
                  key={exp.id}
                  className={`tarjeta ${tarjetaAbierta === exp.id ? 'expandida' : ''}`}
                  onClick={() => setTarjetaAbierta(exp.id)}
                >
                  <h3>{exp.puesto}</h3>
                  <p className="empresa">{exp.empresa}</p>

                  {tarjetaAbierta === exp.id && (
                    <div className="detalle-experiencia">
                      <div>{exp.descripcion}</div>
                      <p><strong>Periodo:</strong> {exp.periodo}</p>
                      <button onClick={(e) => {
                        e.stopPropagation(); 
                        setTarjetaAbierta(null);
                      }}>Cerrar</button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* --- SECCIÓN INTEGRADA: BLOQUE PROYECTOS --- */}
            <div className="seccion-proyectos-bloque">
              <h2 className="subtitulo-proyectos">Mis Proyectos</h2>

              <div className="grid-proyectos-componente">
                {proyectos.map((proyecto) => (
                  <TarjetaProyecto key={proyecto.id} proyecto={proyecto} />
                ))}
              </div>
            </div>

            {tarjetaAbierta && <div className="overlay" onClick={() => setTarjetaAbierta(null)}></div>}
          </section>
        )}

        {/* --- SECCIÓN HABILIDADES COMPLETA --- */}
        {seccionActiva === 'habilidades' && (
          <section className="seccion-habilidades">
            <h2 className="titulo-principal">Mis <span className="resaltado">Habilidades</span></h2>
            
            {Object.keys(categoriasHabilidades).map((claveCat) => {
              const categoria = categoriasHabilidades[claveCat];
              const abierta = habilidadesExpandidas[claveCat];
              
              // Muestra un límite de 4 elementos por defecto si no está expandido
              const habilidadesVisibles = abierta 
                ? categoria.items 
                : categoria.items.slice(0, 4);

              return (
                <div key={claveCat} className="bloque-categoria-habilidad" style={{ width: '100%', marginBottom: '35px' }}>
                  <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '15px', textAlign: 'left', borderLeft: '3px solid var(--color-primario)', paddingLeft: '12px', fontWeight: '600' }}>
                    {categoria.titulo}
                  </h3>

                  <div className="lista-habilidades">
                    {habilidadesVisibles.map((habilidad, idx) => (
                      <div key={idx} className="item-habilidad">
                        <span title={habilidad.nombre}>{habilidad.nombre}</span>
                        <SistemaEstrellas nivel={habilidad.nivel} />
                      </div>
                    ))}
                  </div>

                  {categoria.items.length > 4 && (
                    <span 
                      className="trigger-ver-mas" 
                      onClick={() => toggleCategoriaHabilidad(claveCat)}
                    >
                      {abierta ? "Ver menos habilidades ↑" : "Ver todas las habilidades ↓"}
                    </span>
                  )}
                </div>
              );
            })}

            {/* --- SUB-SECCIÓN HABILIDADES BLANDAS --- */}
            <h3 className="subtitulo-proyectos" style={{ marginTop: '20px' }}>Habilidades Blandas</h3>
            <div className="contenedor-soft-skills">
              <div className="skill-blanda">
                <span className="icono-soft">🤝</span>
                <p>Trabajo en equipo</p>
              </div>
              <div className="skill-blanda">
                <span className="icono-soft">🧠</span>
                <p>Resolución de problemas</p>
              </div>
              <div className="skill-blanda">
                <span className="icono-soft">🎯</span>
                <p>Responsabilidad</p>
              </div>
              <div className="skill-blanda">
                <span className="icono-soft">📚</span>
                <p>Aprendizaje continuo</p>
              </div>
              <div className="skill-blanda">
                <span className="icono-soft">💬</span>
                <p>Comunicación Asertiva</p>
              </div>
              <div className="skill-blanda">
                <span className="icono-soft">🚀</span>
                <p>Proactividad</p>
              </div>
              <div className="skill-blanda">
                <span className="icono-soft">🔄</span>
                <p>Adaptabilidad</p>
              </div>
              <div className="skill-blanda">
                <span className="icono-soft">🔍</span>
                <p>Atención al Detalle</p>
              </div>
            </div>

            {/* --- SUB-SECCIÓN IDIOMAS --- */}
            <h3 className="subtitulo-proyectos">Idiomas</h3>
            <div className="contenedor-idiomas">
              <div className="bloque-idioma">
                <div className="emoji-idioma">🗣️</div>
                <div className="info-idioma">
                  <div className="encabezado-idioma">
                    <h4>Ingles</h4>
                    <span className="badge-nivel">B1 INTERMEDIO</span>
                  </div>
                  <p>Capacidad para leer documentación técnica, participar en chats de equipo
                    y comprender tutoriales avanzados en inglés.</p>
                </div>
              </div>
            </div>

          </section>
        )}

        {/* --- SECCIÓN CONTACTO --- */}
        {seccionActiva === 'contacto' && (
          <section className="seccion-contacto">
            <h2>Contactame</h2>
            <p className="sub-contacto">¿Tienes un proyecto en mente? ¡Hablemos!</p>

            <div className="contenedor-metodos">
              <a href="https://wa.me/573506606850" target="_blank" rel="noopener noreferrer" className="tarjeta-contacto">
                <div className="circulo-icono wa"><FaWhatsapp /></div>
                <div className="info">
                  <span>WhatsApp</span>
                  <p>¡Contáctame por WhatsApp!</p>
                </div>
              </a>

              <a href="mailto:j.stiven.cardavi@gmail.com" className="tarjeta-contacto">
                <div className="circulo-icono email"><FaEnvelope /></div>
                <div className="info">
                  <span>Email</span>
                  <p>¡Contáctame por correo electrónico!</p>
                </div>
              </a>

              <div className="tarjeta-contacto no-link">
                <div className="circulo-icono loc">📍</div>
                <div className="info">
                  <span>Ubicacion</span>
                  <p>Bogotá, Colombia</p>
                </div>
              </div>
            </div>

            <div className="disponibilidad-badge">
              <span className="punto-verde"></span>Disponible para nuevos proyectos y Ofertas
            </div>
          </section>
        )}

      </main>

      {init && (
        <Particles
          id="tsparticles"
          className="fondo-particulas"
          options={opcionesParticulas}
        />
      )}
    </div>
  )
}

// ===================================================
// SUB-COMPONENTE: SISTEMA DE RENDERIZADO DE ESTRELLAS
// ===================================================
const SistemaEstrellas = ({ nivel }) => {
  return (
    <div className="estrellas-contenedor">
      {[1, 2, 3, 4, 5].map((estrella) => (
        <FaStar
          key={estrella}
          className={estrella <= nivel ? "estrella-llena" : "estrella-vacia"}
        />
      ))}
    </div>
  );
};

// ===================================================
// SUB-COMPONENTE: TARJETA DE PROYECTO INDIVIDUAL
// ===================================================
const TarjetaProyecto = ({ proyecto }) => {
  const [expandido, setExpandido] = useState(false);

  return (
    <div className="tarjeta-proyecto-individual">
      <div className="capa-imagen-proyecto">
        <img src={proyecto.imagen} alt={proyecto.titulo} className="img-proyecto" />
      </div>

      <div className="cuerpo-tarjeta-proyecto">
        <h3>{proyecto.titulo}</h3>
        
        <p className={`descripcion-proyecto ${expandido ? 'abierta' : 'comprimida'}`}>
          {proyecto.descripcion}
        </p>

        <div className={`tecnologias-proyecto-tags ${expandido ? 'abierta' : 'comprimida'}`}>
          {proyecto.tecnologias.map((tech, index) => (
            <span key={index} className="tag-tech-neon">{tech}</span>
          ))}
        </div>

        <span 
          className="trigger-ver-mas" 
          onClick={() => setExpandido(!expandido)}
        >
          {expandido ? "Ver menos ↑" : "Ver más ↓"}
        </span>

        <div className="botones-proyecto-enlaces">
          <a href={proyecto.linkDemo} target="_blank" rel="noopener noreferrer" className="btn-proyecto-accion">Ver Demo</a>
          <a href={proyecto.linkRepo} target="_blank" rel="noopener noreferrer" className="btn-proyecto-accion">Ver Código</a>
        </div>
      </div>
    </div>
  );
};

export default App;