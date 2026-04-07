#[derive(Clone)]
pub struct Project {
    pub name: String,
    pub description: String,
}

#[derive(Clone)]
pub struct SkillData {
    pub id: String,
    pub name: String,
    pub icon: String,
    pub color: String,
    pub description: String,
    pub projects: Vec<Project>,
}

pub fn get_skill_details(name: &str) -> SkillData {
    match name {
        "React" => SkillData {
            id: "modal_react".to_string(),
            name: "React".to_string(),
            icon: "devicon-react-original".to_string(),
            color: "#61DAFB".to_string(),
            description: "Especialista en arquitecturas Microfrontend y creación de librerías de componentes core para branding unificado.".to_string(),
            projects: vec![
                Project { name: "Core UI Library".to_string(), description: "Sistema de diseño distribuido vía Module Federation.".to_string() },
            ],
        },
        "Next.js" => SkillData {
            id: "modal_next".to_string(),
            name: "Next.js".to_string(),
            icon: "devicon-nextjs-plain".to_string(),
            color: "#ffffff".to_string(),
            description: "Implementación de SSR y optimización de Web Vitals para productos financieros de alto tráfico.".to_string(),
            projects: vec![
                Project { name: "Portal Público Kubo".to_string(), description: "Migración de servicios legacy a Next.js.".to_string() },
            ],
        },
        "TS" => SkillData {
            id: "modal_ts".to_string(),
            name: "TypeScript".to_string(),
            icon: "devicon-typescript-plain".to_string(),
            color: "#3178C6".to_string(),
            description: "Desarrollo basado en tipos estrictos para garantizar la robustez y mantenibilidad de aplicaciones a gran escala.".to_string(),
            projects: vec![],
        },
        "Tailwind" => SkillData {
            id: "modal_tail".to_string(),
            name: "Tailwind CSS".to_string(),
            icon: "devicon-tailwindcss-original".to_string(),
            color: "#06B6D4".to_string(),
            description: "Diseño de sistemas visuales modernos, minimalistas y altamente performantes mediante utility-first CSS.".to_string(),
            projects: vec![],
        },
        "Leptos" => SkillData {
            id: "modal_rust".to_string(),
            name: "Rust / Leptos".to_string(),
            icon: "devicon-rust-original".to_string(),
            color: "#CE412B".to_string(),
            description: "Construcción de interfaces web de ultra-alto rendimiento aprovechando la seguridad y velocidad de WebAssembly.".to_string(),
            projects: vec![
                Project { name: "Este Portafolio".to_string(), description: "Desarrollado con Leptos (CSR) y Rust.".to_string() },
            ],
        },
        "NestJS" => SkillData {
            id: "modal_nest".to_string(),
            name: "NestJS".to_string(),
            icon: "devicon-nestjs-original".to_string(),
            color: "#E0234E".to_string(),
            description: "Arquitectura de microservicios y APIs REST escalables con enfoque en seguridad y gestión de datos.".to_string(),
            projects: vec![
                Project { name: "S3 API Manager".to_string(), description: "Backend para gestión de archivos en AWS S3.".to_string() },
            ],
        },
        "AWS" => SkillData {
            id: "modal_aws".to_string(),
            name: "AWS".to_string(),
            icon: "devicon-amazonwebservices-plain-wordmark".to_string(),
            color: "#FF9900".to_string(),
            description: "Gestión de infraestructura cloud, almacenamiento S3 y automatización de despliegues con CI/CD en AWS Amplify.".to_string(),
            projects: vec![],
        },
        "Git" => SkillData {
            id: "modal_git".to_string(),
            name: "Git".to_string(),
            icon: "devicon-git-plain".to_string(),
            color: "#F05032".to_string(),
            description: "Control de versiones avanzado y flujos de trabajo colaborativos en entornos profesionales.".to_string(),
            projects: vec![],
        },
        _ => SkillData {
            id: format!("modal_{}", name.to_lowercase().replace('.', "_")),
            name: name.to_string(),
            icon: "devicon-code-plain".to_string(), // Icono genérico de código en lugar de Rust
            color: "#888888".to_string(),
            description: "Dominando esta tecnología para crear soluciones innovadoras.".to_string(),
            projects: vec![],
        },
    }
}
