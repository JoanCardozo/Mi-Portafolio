import { useState, useEffect } from 'react';
import './App.css';
import Mi_foto from './assets/Mi_foto.png';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaDownload,
  FaArrowRight,
  FaPalette,
  FaCubes,
  FaKeyboard,
  FaFileExcel,
  FaMicrosoft,
  FaHandshake,
  FaPuzzlePiece,
  FaClipboardCheck,
  FaGraduationCap,
  FaComments,
  FaRocket,
  FaSyncAlt,
  FaBullseye,
} from 'react-icons/fa';
import { SiScrumalliance } from 'react-icons/si';
import Proyecto1 from './assets/proyecto1.png';
import Proyecto2 from './assets/proyecto2.png';

// ===================================================
// DATOS: NAVEGACIÓN
// ===================================================
const ENLACES_NAV = [
  { id: 'proyectos', etiqueta: 'Proyectos' },
  { id: 'experiencia', etiqueta: 'Experiencia' },
  { id: 'habilidades', etiqueta: 'Habilidades' },
  { id: 'contacto', etiqueta: 'Contacto' },
];

// ===================================================
// DATOS: NAVEGACIÓN LATERAL 
// ===================================================
const SECCIONES_LATERAL = [
  { id: 'inicio', etiqueta: 'Inicio' },
  { id: 'proyectos', etiqueta: 'Proyectos' },
  { id: 'experiencia', etiqueta: 'Experiencia' },
  { id: 'habilidades', etiqueta: 'Habilidades' },
  { id: 'contacto', etiqueta: 'Contacto' },
];

// ===================================================
// DATOS: EXPERIENCIA LABORAL
// ===================================================
const EXPERIENCIAS = [
  {
    id: 1,
    puesto: 'Aprendiz Programador',
    empresa: 'Aviatur',
    periodo: '2023 - 2024',
    detalle: [
      'Desarrollé API REST en C# y .NET para sincronización OAuth con Google y Facebook, reduciendo fricción en el flujo de autenticación y habilitando login social multiplataforma.',
      'Rediseñé componentes de la página principal en Figma e integré los cambios en el ciclo de desarrollo: refinamiento de backlog, estimación de historias y demos de sprint bajo SCRUM.',
      'Ejecuté migración de sistema legacy a arquitectura moderna, reduciendo deuda técnica e impacto en funcionalidades activas bajo mentorship del Ingeniero Líder.',
      'Automatice la validación del flujo crítico de compra con C# y Selenium WebDriver, eliminando pruebas manuales repetitivas y detectando regresiones antes de producción.',
    ],
  },
  {
    id: 2,
    puesto: 'Técnico de Transcripción',
    empresa: 'SAS Servicios y Asesorías (FOMAG)',
    periodo: '2024 - 2024 (8 meses)',
    detalle: [
      'Procesé 1,200 registros técnicos mensuales en Horus, reduciendo el tiempo de ciclo de 8 a 2 minutos por registro (75% de mejora) con tasa de error cero bajo mi responsabilidad.',
      'Migré reportes manuales a flujos automatizados en Excel (tablas dinámicas, fórmulas avanzadas), eliminando re-trabajo y reduciendo errores humanos en procesamiento administrativo.',
      'Gestioné un backlog estable de 10 incapacidades activas con un flujo de 4 consultas/día, sosteniendo un SLA de resolución de 2 días para docentes a nivel nacional.',
      'Asumí responsabilidad exclusiva de Valle del Cauca y Vichada, priorizando casos críticos y garantizando continuidad operativa para las regiones de mayor volumen de incidencias.',
    ],
  },
  {
    id: 3,
    puesto: 'Desarrollo Profesional Continuo',
    empresa: 'Autoformación',
    periodo: '2025 - 2026 (En curso)',
    detalle: [
      'Adopté Git y GitHub como flujo estándar de trabajo: branches por feature, commits semánticos y revisión de cambios antes de merge.',
      'Construí servicios backend con Node.js: HTTP servers, middleware, manejo asíncrono (async/await) y consumo de APIs externas.',
      'Desarrollé interfaces con React.js aplicando arquitectura por componentes, hooks y patrones de composición.',
      'Diseñé APIs REST con contratos claros, validación de entradas, manejo estructurado de errores y documentación básica con OpenAPI.',
      'Entregué dashboard de gestión de tareas en React con CRUD completo, filtros dinámicos y persistencia de estado.',
      'Actualmente desarrollando videojuego 2D pixel art en Unity con C#: física de personaje, sistema de colisiones y arquitectura de escenas.',
    ],
  },
];

// ===================================================
// DATOS: PROYECTOS
// ===================================================
const PROYECTOS = [
  {
    id: 1,
    numero: 'PROYECTO / 01',
    titulo: 'Dashboard de Gestión de Tareas y Productividad',
    descripcion:
      'Un aplicativo web interactivo para la gestión del tiempo y análisis de productividad personal. Cuenta con un panel analítico en tiempo real y un sistema robusto de configuración de usuario enfocado en las mejores prácticas de desarrollo frontend.',
    imagen: Proyecto1,
    tecnologias: ['React', 'Vite', 'JavaScript ES6+', 'Context API', 'CSS3'],
    linkDemo: 'https://dashboard-de-gesti-n-de-tareas-y-product-joan-cardozos-projects.vercel.app',
    linkRepo: 'https://github.com/JoanCardozo/Dashboard-de-Gesti-n-de-Tareas-y-Productividad',
  },
  {
    id: 2,
    numero: 'PROYECTO / 02',
    titulo: 'Demo Videojuego de Plataforma 2D',
    descripcion:
      'Diseñé e implementé la primera versión jugable de un juego 2D estilo Pixel Art utilizando Unity y C#, aplicando principios de Programación Orientada a Objetos para estructurar la lógica del juego, el control de personaje, la detección de colisiones y la gestión de estados.',
    imagen: Proyecto2,
    tecnologias: ['Unity Engine', 'C#', 'POO', 'Pixel Art', 'Física 2D'],
    linkDemo: 'https://youtu.be/dGTI2Q7l8t8',
    linkRepo: 'https://github.com/JoanCardozo/Demo-Videojuego-de-Plataformas-2D',
  },
];

// ===================================================
// DATOS: STACK TÉCNICO
// Logos desde CDN 
// ===================================================
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

// Centro
const STACK_CENTRO = {
  id: 'dotnet',
  nombre: '.NET',
  img: `${DEVICON}/dotnetcore/dotnetcore-original.svg`,
  color: '#512bd4',
  blurb: 'Creación de APIs REST y servicios backend.',
};

// Anillo interno 
const STACK_INTERNO = [
  { id: 'csharp', nombre: 'C#', img: `${DEVICON}/csharp/csharp-original.svg`, color: '#a179dc', blurb: 'Lógica de negocio y aplicaciones backend.' },
  { id: 'sqlserver', nombre: 'SQL Server', img: `${DEVICON}/microsoftsqlserver/microsoftsqlserver-plain.svg`, color: '#cc2927', blurb: 'Modelado y persistencia de datos.' },
  { id: 'apis', nombre: 'APIs', img: 'https://cdn.simpleicons.org/openapiinitiative/6BA539', color: '#6ba539', blurb: 'Diseño de endpoints, contratos y documentación.' },
  { id: 'azure', nombre: 'Azure', img: `${DEVICON}/azure/azure-original.svg`, color: '#0078d4', blurb: 'Despliegue y servicios en la nube.' },
  { id: 'poo', nombre: 'POO', Icono: FaCubes, color: '#4c7cff', blurb: 'Estructuración de lógica orientada a objetos.' },
  { id: 'scrum', nombre: 'SCRUM', Icono: SiScrumalliance, color: '#009fda', blurb: 'Backlog, sprints y ceremonias ágiles.' },
];

// Anillo externo 
const STACK_EXTERNO = [
  { id: 'html5', nombre: 'HTML5', img: `${DEVICON}/html5/html5-original.svg`, color: '#e34f26', blurb: 'Marcado semántico y accesible.' },
  { id: 'css3', nombre: 'CSS3', img: `${DEVICON}/css3/css3-original.svg`, color: '#1572b6', blurb: 'Estilos, layouts responsive y diseño visual.' },
  { id: 'javascript', nombre: 'JavaScript', img: `${DEVICON}/javascript/javascript-original.svg`, color: '#f7df1e', blurb: 'Lógica de cliente y consumo de APIs.' },
  { id: 'react', nombre: 'React', img: `${DEVICON}/react/react-original.svg`, color: '#61dafb', blurb: 'Aplicativos y páginas web con componentes.' },
  { id: 'bootstrap', nombre: 'Bootstrap', img: `${DEVICON}/bootstrap/bootstrap-original.svg`, color: '#7952b3', blurb: 'Maquetado rápido con sistema de grillas.' },
  { id: 'diseno', nombre: 'Sist. Diseño', Icono: FaPalette, color: '#ff6b4d', blurb: 'Interfaces consistentes con variables y tokens.' },
  { id: 'unity', nombre: 'Unity', img: `${DEVICON}/unity/unity-original.svg`, color: '#222222', blurb: 'Creación y manejo de videojuegos 2D.' },
  { id: 'git', nombre: 'Git/GitHub', img: `${DEVICON}/git/git-original.svg`, color: '#f05033', blurb: 'Control de versiones y trabajo colaborativo.' },
  { id: 'excel', nombre: 'Excel', Icono: FaFileExcel, color: '#217346', blurb: 'Tablas dinámicas y automatización de reportes.' },
  { id: 'office', nombre: 'Office 365', Icono: FaMicrosoft, color: '#ea3e23', blurb: 'Documentación y gestión administrativa.' },
  { id: 'transcripcion', nombre: 'Transcripción', Icono: FaKeyboard, color: '#4c7cff', blurb: 'Procesamiento y transcripción de registros técnicos.' },
  { id: 'figma', nombre: 'Figma', img: `${DEVICON}/figma/figma-original.svg`, color: '#a259ff', blurb: 'Rediseño de componentes de interfaz.' },
];

// Posición en elipse 
function posElipse(indice, total, rx, ry, inicio = -90) {
  const ang = (inicio + (indice * 360) / total) * (Math.PI / 180);
  return { x: 50 + rx * Math.cos(ang), y: 50 + ry * Math.sin(ang) };
}

const NODOS_STACK = [
  ...STACK_INTERNO.map((n, i) => ({ ...n, ...posElipse(i, STACK_INTERNO.length, 23, 23, -60), anillo: 'interno' })),
  ...STACK_EXTERNO.map((n, i) => ({ ...n, ...posElipse(i, STACK_EXTERNO.length, 43, 41), anillo: 'externo' })),
];

// ===================================================
// DATOS: HERRAMIENTAS DE IA
// ===================================================
const HERRAMIENTAS_IA = [
  {
    id: 'chatgpt',
    nombre: 'ChatGPT',
    img: 'https://cdn.simpleicons.org/openai/111111',
    texto: 'GPT',
    color: '#10a37f',
    blurb: 'Ideas rápidas, resolución de problemas y comparación de enfoques.',
    x: 7.5,
    y: 46.7,
  },
  {
    id: 'claude',
    nombre: 'Claude',
    img: 'https://cdn.simpleicons.org/claude/d97757',
    texto: 'CL',
    color: '#d97757',
    blurb: 'Arquitectura, dudas técnicas, análisis de soluciones y documentación.',
    x: 92.5,
    y: 46.7,
  },
  {
    id: 'gemini',
    nombre: 'Gemini',
    img: 'https://cdn.simpleicons.org/googlegemini/8E75B2',
    texto: 'GE',
    color: '#7c4dff',
    blurb: 'Búsquedas técnicas y redacción de documentación.',
    x: 50,
    y: 83.3,
  },
];

// ===================================================
// DATOS: HABILIDADES BLANDAS
// ===================================================
const HABILIDADES_BLANDAS = [
  { nombre: 'Trabajo en equipo', Icono: FaHandshake },
  { nombre: 'Resolución de problemas', Icono: FaPuzzlePiece },
  { nombre: 'Responsabilidad', Icono: FaClipboardCheck },
  { nombre: 'Aprendizaje continuo', Icono: FaGraduationCap },
  { nombre: 'Comunicación asertiva', Icono: FaComments },
  { nombre: 'Proactividad', Icono: FaRocket },
  { nombre: 'Adaptabilidad', Icono: FaSyncAlt },
  { nombre: 'Atención al detalle', Icono: FaBullseye },
];

// ===================================================
// COMPONENTE: LOGO 
// ===================================================
function Logo({ nodo }) {
  const [fallo, setFallo] = useState(false);
  const Icono = nodo.Icono;

  if (nodo.img && !fallo) {
    return <img src={nodo.img} alt={nodo.nombre} loading="lazy" onError={() => setFallo(true)} />;
  }
  if (Icono) {
    return <Icono style={{ color: nodo.color }} />;
  }
  return (
    <span className="logo-texto" style={{ color: nodo.color }}>
      {nodo.texto || nodo.nombre.slice(0, 2)}
    </span>
  );
}

function App() {
  const [tarjetaAbierta, setTarjetaAbierta] = useState(null);
  const [seccionActiva, setSeccionActiva] = useState('inicio');
  const [idiomaActual, setIdiomaActual] = useState('es');
  const [navScrolleado, setNavScrolleado] = useState(false);
  const [nodoActivo, setNodoActivo] = useState(null);
  const [iaActiva, setIaActiva] = useState(null);
  const [progreso, setProgreso] = useState(0);

  // ===================================================
  // EFECTOS
  // ===================================================

  // Scroll: navbar con fondo + barra de progreso
  useEffect(() => {
    const alScrollear = () => {
      setNavScrolleado(window.scrollY > 40);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgreso(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    alScrollear();
    window.addEventListener('scroll', alScrollear, { passive: true });
    return () => window.removeEventListener('scroll', alScrollear);
  }, []);

  // Detecta qué sección está visible
  useEffect(() => {
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) setSeccionActiva(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    SECCIONES_LATERAL.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observador.observe(el);
    });

    return () => observador.disconnect();
  }, []);

  useEffect(() => {
    const comprobarCookie = () => {
      const match = document.cookie.match(/(^| )googtrans=([^;]+)/);
      if (match && match[2].includes('/en')) {
        setIdiomaActual('en');
      }
    };
    const t = setTimeout(comprobarCookie, 500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const observador = new MutationObserver(() => {
      if (document.body.style.top) document.body.style.top = '0px';
    });
    observador.observe(document.body, { attributes: true, attributeFilter: ['style'] });
    return () => observador.disconnect();
  }, []);

  const cambiarIdiomaPro = () => {
    const nuevoIdioma = idiomaActual === 'es' ? 'en' : 'es';
    setIdiomaActual(nuevoIdioma);

    const googleSelect = document.querySelector('.goog-te-combo');
    if (googleSelect) {
      googleSelect.value = nuevoIdioma;
      googleSelect.dispatchEvent(new Event('change'));
    }
  };

  const irASeccion = (id) => {
    setSeccionActiva(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Helpers para tooltips de la constelación
  const claseHorizontal = (x) => (x < 22 ? 'izquierda' : x > 78 ? 'derecha' : 'centro');
  const claseVertical = (y) => (y > 62 ? 'arriba' : 'abajo');

  const nodoStackActivo =
    nodoActivo === STACK_CENTRO.id
      ? { ...STACK_CENTRO, x: 50, y: 50 }
      : NODOS_STACK.find((n) => n.id === nodoActivo);

  return (
    <div className="layout-principal">
      <div className="capa-fondo" />

      {/* ===================== BARRA DE PROGRESO ===================== */}
      <div className="barra-progreso" style={{ width: `${progreso}%` }} />

      {/* ===================== NAVEGACIÓN LATERAL ===================== */}
      <nav className="nav-lateral" aria-label="Secciones">
        {SECCIONES_LATERAL.map((s) => (
          <button
            key={s.id}
            className={`nav-lateral-punto ${seccionActiva === s.id ? 'activo' : ''}`}
            onClick={() => irASeccion(s.id)}
            aria-label={s.etiqueta}
          >
            <span className="nav-lateral-etiqueta">{s.etiqueta}</span>
          </button>
        ))}
      </nav>

      {/* ===================== NAVBAR ===================== */}
      <header className={`nav-bar ${navScrolleado ? 'nav-bar--scrolled' : ''}`}>
        <div className="nav-inner">
          <button className="nav-logo" onClick={() => irASeccion('inicio')}>
            <span className="nav-logo-dot" />
            Joan Cardozo
          </button>

          <nav className="nav-links">
            {ENLACES_NAV.map((enlace) => (
              <button
                key={enlace.id}
                className={seccionActiva === enlace.id ? 'activo' : ''}
                onClick={() => irASeccion(enlace.id)}
              >
                {enlace.etiqueta}
              </button>
            ))}
          </nav>

          <div className="nav-right">
            <button className="boton-idioma notranslate" onClick={cambiarIdiomaPro}>
              {idiomaActual === 'es' ? 'EN' : 'ES'}
            </button>
          </div>
        </div>
      </header>

      <div id="google_translate_element" style={{ display: 'none' }}></div>

      <main className="contenido-principal">
        {/* ===================== INICIO ===================== */}
        <section id="inicio" className="seccion-inicio">
          <div className="bloque-texto">
            <span className="insignia-disponible">
              <span className="punto-verde"></span>
              Disponible para nuevos proyectos
            </span>

            <h1 className="titulo-principal">
              Joan
              <span className="resaltado">Cardozo</span>
            </h1>

            <p className="rol-principal">Desarrollador de Software · Freelance</p>

            <p className="descripcion">
              Desarrollador backend que construye sistemas funcionales, legibles y listos para
              escalar, con base técnica en C# / .NET y React. Trabajo bajo la marca{' '}
              <strong>Desarrollador JC</strong>, creando sitios, aplicaciones web y APIs a medida
              para pequeñas y medianas empresas.
            </p>

            <div className="fila-botones">
              <button className="btn-primario" onClick={() => irASeccion('proyectos')}>
                Ver mi trabajo →
              </button>
              <a
                className="btn-secundario"
                href={`${import.meta.env.BASE_URL}CV_Joan_Cardozo.pdf`}
                download
              >
                Descargar CV <FaDownload />
              </a>
            </div>

            <div className="fila-social">
              <a
                href="https://www.linkedin.com/in/joan-stiven-cardozo-avila-99a15732a/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/JoanCardozo" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="bloque-foto">
            <img src={Mi_foto} alt="Joan Cardozo" className="foto-perfil" />
          </div>
        </section>

        {/* ===================== PROYECTOS ===================== */}
        <section id="proyectos" className="seccion-envoltura">
          <span className="etiqueta-ojo">Proyectos</span>
          <h2 className="titulo-seccion">
            Proyectos <span className="acento">recientes.</span>
          </h2>

          <div className="lista-proyectos">
            {PROYECTOS.map((proyecto, i) => (
              <div key={proyecto.id} className={`fila-proyecto ${i % 2 === 1 ? 'invertida' : ''}`}>
                <div className="proyecto-visual">
                  <div className="proyecto-visual-marco">
                    <img src={proyecto.imagen} alt={proyecto.titulo} />
                  </div>
                </div>

                <div className="proyecto-info">
                  <span className="proyecto-numero">{proyecto.numero}</span>
                  <h3>{proyecto.titulo}</h3>
                  <p>{proyecto.descripcion}</p>

                  <div className="proyecto-tags">
                    {proyecto.tecnologias.map((tech, idx) => (
                      <span key={idx}>{tech}</span>
                    ))}
                  </div>

                  <div className="proyecto-enlaces">
                    <a href={proyecto.linkDemo} target="_blank" rel="noopener noreferrer">
                      Ver demo <FaArrowRight />
                    </a>
                    <a href={proyecto.linkRepo} target="_blank" rel="noopener noreferrer">
                      Ver código <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== EXPERIENCIA ===================== */}
        <section id="experiencia" className="seccion-envoltura">
          <span className="etiqueta-ojo">Experiencia</span>
          <h2 className="titulo-seccion">
            Mi <span className="acento">trayectoria.</span>
          </h2>

          <div className="linea-tiempo">
            {EXPERIENCIAS.map((exp) => {
              const abierto = tarjetaAbierta === exp.id;
              return (
                <div
                  key={exp.id}
                  className={`item-tiempo ${abierto ? 'abierto' : ''}`}
                  onClick={() => setTarjetaAbierta(abierto ? null : exp.id)}
                >
                  <div className="item-tiempo-cabecera">
                    <h3>{exp.puesto}</h3>
                    <span className="item-tiempo-periodo">{exp.periodo}</span>
                  </div>
                  <p className="item-tiempo-empresa">{exp.empresa}</p>

                  {abierto && (
                    <div className="item-tiempo-detalle">
                      <ul className="lista-experiencia">
                        {exp.detalle.map((linea, idx) => (
                          <li key={idx}>{linea}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================== HABILIDADES ===================== */}
        <section id="habilidades" className="seccion-envoltura">
          <span className="etiqueta-ojo">Habilidades</span>
          <h2 className="titulo-seccion">
            Stack <span className="acento">técnico.</span>
          </h2>

          {/* CONSTELACIÓN */}
          <div className="stack-contenedor" onMouseLeave={() => setNodoActivo(null)}>
            {/* Anillos + líneas */}
            <svg className="stack-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <ellipse cx="50" cy="50" rx="43" ry="41" className="anillo-externo" />
              <ellipse cx="50" cy="50" rx="23" ry="23" className="anillo-interno" />
              {nodoStackActivo && nodoStackActivo.id !== STACK_CENTRO.id && (
                <line
                  x1="50"
                  y1="50"
                  x2={nodoStackActivo.x}
                  y2={nodoStackActivo.y}
                  className="linea-activa"
                  style={{ stroke: nodoStackActivo.color === '#222222' ? '#cfcfd6' : nodoStackActivo.color }}
                />
              )}
            </svg>

            {/* Hub central */}
            <div
              className={`stack-nodo stack-hub ${nodoActivo === STACK_CENTRO.id ? 'activo' : ''}`}
              style={{ left: '50%', top: '50%', '--nodo-color': STACK_CENTRO.color }}
              onMouseEnter={() => setNodoActivo(STACK_CENTRO.id)}
              onClick={() => setNodoActivo(STACK_CENTRO.id)}
              onFocus={() => setNodoActivo(STACK_CENTRO.id)}
              onBlur={() => setNodoActivo(null)}
              tabIndex={0}
            >
              <div className="stack-circulo">
                <Logo nodo={STACK_CENTRO} />
              </div>
              <span className="stack-etiqueta">{STACK_CENTRO.nombre}</span>

              {nodoActivo === STACK_CENTRO.id && (
                <div className="orbita-tooltip centro abajo">
                  <strong>{STACK_CENTRO.nombre}</strong>
                  <p>{STACK_CENTRO.blurb}</p>
                </div>
              )}
            </div>

            {/* Nodos */}
            {NODOS_STACK.map((nodo) => {
              const activo = nodoActivo === nodo.id;
              return (
                <div
                  key={nodo.id}
                  className={`stack-nodo ${nodo.anillo} ${activo ? 'activo' : ''}`}
                  style={{ left: `${nodo.x}%`, top: `${nodo.y}%`, '--nodo-color': nodo.color }}
                  onMouseEnter={() => setNodoActivo(nodo.id)}
                  onClick={() => setNodoActivo(nodo.id)}
                  onFocus={() => setNodoActivo(nodo.id)}
                  onBlur={() => setNodoActivo(null)}
                  tabIndex={0}
                >
                  <div className="stack-circulo">
                    <Logo nodo={nodo} />
                  </div>
                  <span className="stack-etiqueta">{nodo.nombre}</span>

                  {activo && (
                    <div className={`orbita-tooltip ${claseHorizontal(nodo.x)} ${claseVertical(nodo.y)}`}>
                      <strong>{nodo.nombre}</strong>
                      <p>{nodo.blurb}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* HERRAMIENTAS DE IA */}
          <div className="ia-seccion">
            <div className="ia-texto">
              <span className="etiqueta-ojo">IA / Desarrollo aumentado</span>
              <h3 className="ia-titulo">
                Herramientas de <span className="acento">IA.</span>
              </h3>
              <p>
                Integradas en mi flujo para explorar, programar, revisar y documentar con criterio
                técnico.
              </p>
            </div>

            <div className="ia-escena" onMouseLeave={() => setIaActiva(null)}>
              <svg className="ia-svg" viewBox="0 0 600 300" aria-hidden="true">
                <path
                  id="ia-orbita"
                  d="M 45 140 A 255 110 0 1 1 555 140 A 255 110 0 1 1 45 140"
                  className="ia-orbita"
                />
                <circle r="4" className="ia-punto">
                  <animateMotion dur="9s" repeatCount="indefinite">
                    <mpath href="#ia-orbita" />
                  </animateMotion>
                </circle>
              </svg>

              {/* Nodo central AI */}
              <div className="ia-centro" style={{ left: '50%', top: '46.7%' }}>
                <span>AI</span>
              </div>

              {HERRAMIENTAS_IA.map((herramienta) => {
                const activo = iaActiva === herramienta.id;
                return (
                  <div
                    key={herramienta.id}
                    className={`ia-nodo-envoltura ${activo ? 'activo' : ''}`}
                    style={{ left: `${herramienta.x}%`, top: `${herramienta.y}%`, '--nodo-color': herramienta.color }}
                    onMouseEnter={() => setIaActiva(herramienta.id)}
                    onClick={() => setIaActiva(herramienta.id)}
                    onFocus={() => setIaActiva(herramienta.id)}
                    onBlur={() => setIaActiva(null)}
                    tabIndex={0}
                  >
                    <div className="ia-nodo">
                      <Logo nodo={herramienta} />
                    </div>
                    <span className="ia-nombre">{herramienta.nombre}</span>

                    {activo && (
                      <div className={`orbita-tooltip ${claseHorizontal(herramienta.x)} abajo`}>
                        <strong>{herramienta.nombre}</strong>
                        <p>{herramienta.blurb}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* HABILIDADES BLANDAS */}
          <h3 className="subtitulo-bloque">Habilidades blandas</h3>
          <div className="rejilla-blandas">
            {HABILIDADES_BLANDAS.map((skill, i) => {
              const Icono = skill.Icono;
              return (
                <div key={i} className="tarjeta-blanda">
                  <span className="tarjeta-blanda-icono">
                    <Icono />
                  </span>
                  <span>{skill.nombre}</span>
                </div>
              );
            })}
          </div>

          {/* IDIOMAS */}
          <h3 className="subtitulo-bloque">Idiomas</h3>
          <div className="bloque-idioma">
            <div className="emoji-idioma">🗣️</div>
            <div className="info-idioma">
              <div className="encabezado-idioma">
                <h4>Inglés</h4>
                <span className="badge-nivel">B1 INTERMEDIO</span>
              </div>
              <p>
                Capacidad para leer documentación técnica, participar en chats de equipo y
                comprender tutoriales avanzados en inglés.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== CONTACTO ===================== */}
        <section id="contacto" className="seccion-contacto">
          <div className="seccion-envoltura">
            <div className="bloque-cta-contacto">
              <span className="marca-agua">JC</span>
              <span className="etiqueta-ojo">Contacto</span>
              <h2 className="titulo-contacto">¿Hablamos?</h2>

              <div className="contenedor-metodos">
                <a
                  href="https://wa.me/573239913688"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tarjeta-contacto"
                >
                  <FaWhatsapp /> WhatsApp
                </a>

                <a href="mailto:j.stiven.cardavi@gmail.com" className="tarjeta-contacto">
                  <FaEnvelope /> j.stiven.cardavi@gmail.com
                </a>

                <a
                  href="https://www.linkedin.com/in/joan-stiven-cardozo-avila-99a15732a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tarjeta-contacto"
                >
                  <FaLinkedin /> LinkedIn
                </a>

                <a
                  href="https://github.com/JoanCardozo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tarjeta-contacto"
                >
                  <FaGithub /> GitHub
                </a>

                <a
                  href={`${import.meta.env.BASE_URL}CV_Joan_Cardozo.pdf`}
                  download
                  className="tarjeta-contacto"
                >
                  <FaDownload /> Descargar CV
                </a>
              </div>
            </div>

            <div className="disponibilidad-badge">
              <span className="punto-verde"></span>
              Disponible para nuevos proyectos y ofertas
            </div>
          </div>
        </section>
      </main>

      <footer className="pie-pagina">
        <span>© 2026 Joan Cardozo — Desarrollador JC</span>
        <span>Software a medida · Web · APIs</span>
      </footer>
    </div>
  );
}

export default App;
