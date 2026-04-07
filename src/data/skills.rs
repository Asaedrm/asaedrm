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
            description:
                "Especialista en arquitecturas Microfrontend y librerías de componentes core."
                    .to_string(),
            projects: vec![Project {
                name: "Core UI Library".to_string(),
                description: "Sistema de diseño vía Module Federation.".to_string(),
            }],
        },
        // ... puedes añadir Next.js, NestJS, etc. siguiendo este formato .to_string()
        _ => SkillData {
            id: format!("modal_{}", name.to_lowercase().replace('.', "_")),
            name: name.to_string(),
            icon: "devicon-rust-original".to_string(),
            color: "#CE412B".to_string(),
            description: "Dominando esta tecnología para soluciones de alto rendimiento."
                .to_string(),
            projects: vec![],
        },
    }
}
