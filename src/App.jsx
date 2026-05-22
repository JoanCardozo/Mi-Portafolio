import { useState, useEffect } from 'react';
import './App.css';
import Mi_foto from './assets/Mi_foto.png';
import { FaHome, FaBriefcase, FaStar, FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const opcionesParticulas = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" }, // Añade partículas al hacer clic
      onHover: { enable: true, mode: "repulse" }, // Las partículas se alejan del mouse
      resize: true,
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 100, duration: 0.4 },
    },
  },
  particles: {
    color: { value: "#00ffcc" }, // color neón
    links: {
      color: "#00ffcc",
      distance: 150,
      enable: true,
      opacity: 0.15, // tenue
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "out" },
      random: false,
      speed: 1, // Movimiento muy lento y suave
      straight: false,
    },
    number: {
      density: { enable: true, area: 800 },
      value: 80, // Cantidad de partículas
    },
    opacity: { value: 0.2 }, // Partículas tenues
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
};

function App() {
  const [init, setInit] = useState(false);
  const [tarjetaAbierta, setTarjetaAbierta] = useState(null);
  const [seccionActiva, setSeccionActiva] = useState('inicio');

  useEffect(() => {
    if (!init) {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    }
  }, [init]);


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

  const proyectos = [
    {
      id: 1,
      titulo: "Dashboard de Gestión de Tareas y Productividad",
      descripcion: "Un aplicativo web interactivo para la gestión del tiempo y análisis de productividad personal. El proyecto cuenta con un panel analítico avanzado en tiempo real y un sistema robusto de configuración de usuario enfocado en las mejores prácticas de desarrollo frontend.",
      imagen: "/Proyecto1.png",
      tecnologias: ["React", "Vite", "JavaScript (ES6+)", "Context API / State Management", "CSS3 / Variables Globales"],
      linkDemo: "https://dashboard-de-gesti-n-de-tareas-y-product-joan-cardozos-projects.vercel.app",
      linkRepo: "https://github.com/JoanCardozo/Dashboard-de-Gesti-n-de-Tareas-y-Productividad"
    }
  ]



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

        />
        <FaStar className={`iconos ${seccionActiva === 'habilidades' ? 'activo' : ''}`} onClick={() => setSeccionActiva('habilidades')}
          title="Habilidades"
        />
        <FaEnvelope className={`iconos ${seccionActiva === 'contacto' ? 'activo' : ''}`} onClick={() => setSeccionActiva('contacto')}
          title="Contacto"
        />

        {/*Redes sociales */}
        <div style={{ marginTop: 'auto', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <a href="https://www.linkedin.com/in/joan-stiven-cardozo-avila-99a15732a/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="iconos" title="LinkedIn" /></a>
          <a href="https://github.com/JoanCardozo" target="_blank" rel="noopener noreferrer"><FaGithub className="iconos" title="GitHub" /></a>
        </div>
      </nav>

      <main className="contenido-principal">
        {/* Sección de inicio */}
        {seccionActiva === 'inicio' && (
          <section className="seccion-inicio">
            <div className="bloque-texto">
              <h1 className="titulo-principal">Soy <span className="resaltado">Joan</span>, <br />Programador de Software</h1>
              <p className="descripcion">
                Técnico en programación orientado al desarrollo de aplicaciones de escritorio y web.
                Especializado en tecnologías como (C#, .NET y SQL Server) para crear soluciones eficientes.
              </p>
              <button className="btn-primario" onClick={() => setSeccionActiva('experiencia')}>Ver mi trabajo →</button>
            </div>
            <div className="bloque-foto">
              <img src={Mi_foto} alt="Mi perfil" className="foto-perfil" />
            </div>
          </section>
        )}
        {/* Sección de experiencia */}
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

                  {/* Solo se muestra si la tarjeta está abierta */}
                  {tarjetaAbierta === exp.id && (
                    <div className="detalle-experiencia">
                      <p>{exp.descripcion}</p>
                      <p><strong>Periodo:</strong> {exp.periodo}</p>
                      <button onClick={(e) => {
                        e.stopPropagation(); // Evita que el clic se confunda
                        setTarjetaAbierta(null);
                      }}>Cerrar</button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* --- INICIO DE LA NUEVA SECCIÓN DE PROYECTOS --- */}
            <div className="seccion-proyectos-bloque">
              <h2 className="subtitulo-proyectos">Mis Proyectos</h2>

              <div className="grid-proyectos-componente">
                {proyectos.map((proyecto) => (
                  <div key={proyecto.id} className="tarjeta-proyecto-individual">

                    {/* Contenedor de la imagen */}
                    <div className="capa-imagen-proyecto">
                      {proyecto.imagen && !proyecto.imagen.includes("placeholder") ? (
                        <img src={proyecto.imagen} alt={proyecto.titulo} className="img-proyecto" />
                      ) : (
                        <div className="fallback-imagen-neon">
                          <span>{proyecto.titulo.substring(0, 2).toUpperCase()}</span>
                        </div>
                      )}
                    </div>

                    {/* Cuerpo de la tarjeta */}
                    <div className="cuerpo-tarjeta-proyecto">
                      <h3>{proyecto.titulo}</h3>
                      <p>{proyecto.descripcion}</p>

                      <div className="tecnologias-proyecto-tags">
                        {proyecto.tecnologias.map((tech, index) => (
                          <span key={index} className="tag-tech-neon">{tech}</span>
                        ))}
                      </div>

                      <div className="botones-proyecto-enlaces">
                        <a href={proyecto.linkDemo} target="_blank" rel="noopener noreferrer" className="btn-proyecto-accion">Ver Demo</a>
                        <a href={proyecto.linkRepo} target="_blank" rel="noopener noreferrer" className="btn-proyecto-accion">Ver Código</a>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
            {/* --- FIN DE LA SECCIÓN DE PROYECTOS --- */}

            {/* Fondo oscuro para cuando una tarjeta se abre (opcional) */}
            {tarjetaAbierta && <div className="overlay" onClick={() => setTarjetaAbierta(null)}></div>}
          </section>
        )}

        {seccionActiva === 'habilidades' && (
          <section className="seccion-habilidades">
            <h2 className="titulo-seccion">Mis <span className="resaltado">Habilidades</span></h2>
            <div className="lista-habilidades">

              <div className="item-habilidad">
                <span>HTML 5</span>
                <SistemaEstrellas nivel={5} />
              </div>

              <div className="item-habilidad">
                <span>CSS</span>
                <SistemaEstrellas nivel={4} />
              </div>

              <div className="item-habilidad">
                <span>C#</span>
                <SistemaEstrellas nivel={4} />
              </div>

              <div className="item-habilidad">
                <span>.NET</span>
                <SistemaEstrellas nivel={4} />
              </div>

              <div className="item-habilidad">
                <span>Javascript</span>
                <SistemaEstrellas nivel={3} />
              </div>

              <div className="item-habilidad">
                <span>SQL SERVER</span>
                <SistemaEstrellas nivel={3} />
              </div>

              <div className="item-habilidad">
                <span>Bootstrap</span>
                <SistemaEstrellas nivel={3} />
              </div>

              <div className="item-habilidad">
                <span>Git / GitHub</span>
                <SistemaEstrellas nivel={3} />
              </div>

              <div className="item-habilidad">
                <span>Programacion orientada a Objetos (POO)</span>
                <SistemaEstrellas nivel={4} />
              </div>
              <div className="item-habilidad">
                <span>React</span>
                <SistemaEstrellas nivel={3} />
              </div>

              <div className="item-habilidad">
                <span>SCRUM</span>
                <SistemaEstrellas nivel={2} />
              </div>

              <div className="item-habilidad">
                <span>APIS</span>
                <SistemaEstrellas nivel={3} />
              </div>

              <div className="item-habilidad">
                <span>Excel</span>
                <SistemaEstrellas nivel={4} />
              </div>

              <div className="item-habilidad">
                <span>Microsoft Office 365</span>
                <SistemaEstrellas nivel={4} />
              </div>

              <div className="item-habilidad">
                <span>Sistemas de Diseño</span>
                <SistemaEstrellas nivel={4} />
              </div>

              <div className="item-habilidad">
                <span>Transcripcion</span>
                <SistemaEstrellas nivel={4} />
              </div>
            </div>

            {/* Seccion Habilidades Blandas */}
            <h3 className="subtitulo-seccion">Habilidades Blandas</h3>
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

            {/* Seccion IDIOMAS */}
            <h3 className="subtitulo-seccion">Idiomas</h3>
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

        {seccionActiva === 'contacto' && (
          <section className="seccion-contacto">
            <h2>Contactame</h2>
            <p className="sub-contacto">¿Tienes un proyecto en mente? ¡Hablemos!</p>

            <div className="contenedor-metodos">

              {/* Whatsapp Directo */}
              <a href="https://wa.me/573506606850" target="_blank" rel="noopener noreferrer" className="tarjeta-contacto">
                <div className="circulo-icono wa"><FaWhatsapp /></div>
                <div className="info">
                  <span>WhatsApp</span>
                  <p>¡Contáctame por WhatsApp!</p>
                </div>
              </a>

              {/* Correo Electronico */}
              <a href="mailto:j.stiven.cardavi@gmail.com" className="tarjeta-contacto">
                <div className="circulo-icono email"><FaEnvelope /></div>
                <div className="info">
                  <span>Email</span>
                  <p>¡Contáctame por correo electrónico!</p>
                </div>
              </a>

              {/*ubicacion */}
              <div className="tarjeta-contacto no-link">
                <div className="circulo-icono loc">📍</div>
                <div className="info">
                  <span>Ubicacion</span>
                  <p>Bogotá, Colombia</p>
                </div>
              </div>
            </div>

            {/*Disponibilidad */}
            <div className="disponibilidad-badge">
              <span className="punto-verde"></span>Disponible para nuevos proyectos y Ofertas
            </div>

          </section>
        )}

      </main>

      {/* Particulas de fondo */}
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

export default App

