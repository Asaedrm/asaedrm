mod components;
mod data;

use crate::components::skill_badge::SkillBadge;
use leptos::mount::mount_to_body;
use leptos::prelude::*;

#[component]
fn App() -> impl IntoView {
    view! {
        <div class="min-h-screen lg:h-screen lg:overflow-hidden bg-base-100 text-base-content font-mono p-4 md:p-8 lg:p-12 flex items-center justify-center">
            <style>
                ".icon-react { color: #61DAFB; border-color: #61DAFB; }
                 .icon-next { color: #ffffff; border-color: #444444; }
                 .icon-ts { color: #3178C6; border-color: #3178C6; }
                 .icon-tail { color: #06B6D4; border-color: #06B6D4; }
                 .icon-rust { color: #CE412B; border-color: #CE412B; }
                 .icon-nest { color: #E0234E; border-color: #E0234E; }
                 .icon-aws { color: #FF9900; border-color: #FF9900; }
                 .icon-git { color: #F05032; border-color: #F05032; }
                 .badge-node { background-color: #1a1a1a; border-color: #339933; color: #339933; }"
            </style>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 max-w-7xl w-full h-full lg:max-h-[90vh]">

                // --- COLUMNA IZQUIERDA: BIO & SKILLS ---
                <div class="lg:col-span-6 flex flex-col justify-start gap-8 lg:gap-10">
                    <div class="space-y-4 lg:space-y-6">
                        // Título: Ajustado de 7xl a 4xl en mobile
                        <h1 class="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-primary leading-tight lg:leading-none">
                           "Asaed Reyes"
                        </h1>

                        <div class="flex flex-col md:flex-row md:items-center gap-4">
                            // Subtítulo: Ajustado de 3xl a lg en mobile
                            <h3 class="text-lg md:text-xl text-neutral-500 font-bold uppercase tracking-widest">
                                "Senior Frontend Engineer"
                            </h3>
                            // Badge: Texto pequeño y padding normalizado
                            <div class="badge badge-accent badge-md lg:badge-lg gap-2 p-4 lg:p-3 text-[10px] font-black animate-pulse w-fit">
                              <span class="relative flex h-2 w-2">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-content opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-accent-content"></span>
                              </span>
                              "DISPONIBLE PARA NUEVOS RETOS"
                            </div>
                        </div>

                        <div class="divider my-2"></div>

                        // Párrafo Bio: Ajustado de 3xl a base (tamaño normal) en mobile
                        <p class="text-base md:text-lg leading-relaxed font-medium max-w-prose opacity-90">
                           "Ingeniero con +4 años de experiencia liderando arquitecturas Microfrontend. Especializado en escalar productos financieros mediante librerías de componentes core y optimización de flujos críticos."
                        </p>
                    </div>

                    // STACK TÉCNICO
                    <div class="space-y-6">
                        <div>
                            <h2 class="text-xs font-black mb-4 opacity-70 uppercase tracking-widest flex items-center gap-4">
                                <span class="w-8 h-1 bg-primary"></span> "Frontend & Lead"
                            </h2>
                            <div class="flex flex-wrap gap-2">
                                <SkillBadge icon_class="devicon-react-original" name="React" color_class="icon-react" />
                                <SkillBadge icon_class="devicon-nextjs-plain" name="Next.js" color_class="icon-next" />
                                <SkillBadge icon_class="devicon-typescript-plain" name="TS" color_class="icon-ts" />
                                <SkillBadge icon_class="devicon-tailwindcss-original" name="Tailwind" color_class="icon-tail" />
                                <SkillBadge icon_class="devicon-rust-original" name="Leptos" color_class="icon-rust" />
                            </div>
                        </div>

                        <div>
                            <h2 class="text-xs font-black mb-4 opacity-70 uppercase tracking-widest flex items-center gap-4">
                                <span class="w-8 h-1 bg-secondary"></span> "Backend & Cloud"
                            </h2>
                            <div class="flex flex-wrap gap-2">
                                <SkillBadge icon_class="devicon-nestjs-original" name="NestJS" color_class="icon-nest" />
                                <SkillBadge icon_class="devicon-amazonwebservices-plain-wordmark" name="AWS" color_class="icon-aws" />
                                <SkillBadge icon_class="devicon-git-plain" name="Git" color_class="icon-git" />
                            </div>
                        </div>
                    </div>
                </div>


                // --- COLUMNA DERECHA: EXPERIENCIA REAL (KUBO) ---
                <div class="lg:col-span-6 bg-base-300/30 rounded-[2rem] lg:rounded-[3rem] p-6 lg:p-10 border border-white/5 shadow-2xl flex flex-col h-full overflow-hidden">
                    <div class="mb-6 lg:mb-8">
                        <h2 class="text-2xl font-black italic underline decoration-secondary decoration-4 lg:decoration-8 mb-4 uppercase">"EXPERIENCIA_"</h2>
                        <div class="flex items-center gap-3">
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
                            <p class="text-sm font-bold text-secondary uppercase tracking-widest">"Kubo Financiero | 2022 - Actualidad"</p>
                        </div>
                    </div>

                    <ul class="list p-0 space-y-6 overflow-y-auto pr-2 custom-scroll">
                        <li class="list-row p-0 border-none items-start gap-4 lg:gap-6">
                            <div class="text-secondary text-xl lg:text-lg font-bold italic">"01"</div>
                            <div class="space-y-1">
                                <div class="text-base lg:text-base font-black uppercase tracking-tighter text-primary">"Core UI & Microfrontends"</div>
                                <div class="text-sm lg:text-sm opacity-75 font-medium leading-relaxed">
                                  "Liderazgo técnico de librería de componentes (React + Tailwind) distribuida vía Module Federation para unificar el branding corporativo."
                                </div>
                            </div>
                        </li>

                        <li class="list-row p-0 border-none items-start gap-4 lg:gap-6">
                            <div class="text-secondary text-xl lg:text-lg font-bold italic">"02"</div>
                            <div class="space-y-1">
                                <div class="text-base lg:text-base font-black uppercase tracking-tighter text-primary">"Portal Público & Gestión"</div>
                                <div class="text-sm lg:text-sm opacity-75 font-medium leading-relaxed">
                                    "Migración de servicios clave (Inversiones, Créditos, Transferencias) a arquitectura microfrontend y reemplazo de sistemas legacy."
                                </div>
                            </div>
                        </li>

                        <li class="list-row p-0 border-none items-start gap-4 lg:gap-6">
                            <div class="text-secondary text-xl lg:text-lg font-bold italic">"03"</div>
                            <div class="space-y-1">
                                <div class="text-base lg:text-base font-black uppercase tracking-tighter text-primary">"Product Growth & UX"</div>
                                <div class="text-sm lg:text-sm opacity-75 font-medium leading-relaxed">
                                    "Implementación de Onboarding multistep con validación en tiempo real, aumentando la retención considerablemente."
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div class="mt-auto pt-8">
                        <div class="flex flex-row items-center gap-4 lg:gap-6 w-full">
                            <a href="mailto:asaedreyesmedina@gmail.com"
                                class="btn btn-primary rounded-xl lg:rounded-2xl flex-grow h-12 lg:h-14 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] transition-transform">
                                <i class="devicon-google-plain text-lg"></i>
                                <span>"Contactar"</span>
                            </a>
                            <a href="https://www.linkedin.com/in/asaed-reyes-medina/" target="_blank" class="text-[#0077B5] hover:scale-110 transition-all">
                                <i class="devicon-linkedin-plain text-3xl lg:text-4xl"></i>
                            </a>
                            <a href="https://github.com/Asaedrm" target="_blank" class="text-white hover:scale-110 transition-all">
                                <i class="devicon-github-original text-3xl lg:text-4xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

fn main() {
    mount_to_body(App);
}
