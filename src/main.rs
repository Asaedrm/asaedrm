use leptos::mount::mount_to_body;
use leptos::prelude::*;

#[component]
fn SkillBadge(
    icon_class: &'static str,
    name: &'static str,
    color_class: &'static str,
) -> impl IntoView {
    view! {
        // Ajuste: text-sm en mobile, lg:text-[11px] en desktop (manteniendo tu diseño original)
        // Se cambió h-auto por py-3 en mobile para que sea fácil de tocar
        <button class=format!("btn btn-outline py-3 px-4 lg:p-4 text-sm lg:text-[11px] font-black border-2 gap-3 hover:scale-105 transition-all duration-200 h-auto min-h-0 uppercase tracking-tighter {}", color_class)>
            <i class=format!("{} text-xl lg:text-base", icon_class)></i>
            {name}
        </button>
    }
}

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
                <div class="lg:col-span-6 flex flex-col justify-start gap-8">
                    <div class="space-y-4">
                        // Ajuste: text-4xl en mobile, text-5xl en tablet, text-7xl en desktop
                        <h1 class="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-primary leading-none">
                           "Asaed Reyes"
                        </h1>

                        <div class="flex flex-col md:flex-row md:items-center gap-4">
                            // Ajuste: text-lg (normal) en mobile, sigue siendo compacto en desktop
                            <h3 class="text-lg md:text-xl text-neutral-500 font-bold uppercase tracking-widest">
                                Senior Frontend Engineer
                            </h3>
                            // Ajuste: p-2 para un badge normal
                            <div class="badge badge-accent gap-2 p-4 md:p-3 text-xs font-black animate-pulse w-fit">
                              <span class="relative flex h-2 w-2">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-content opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-accent-content"></span>
                              </span>
                              DISPONIBLE PARA NUEVOS RETOS
                            </div>
                        </div>

                        <div class="divider my-2"></div>

                        // Ajuste: text-base (normal/estándar) en mobile/tablet, text-lg en desktop
                        <p class="text-base md:text-lg leading-relaxed font-medium max-w-prose">
                           "Ingeniero con +4 años de experiencia liderando arquitecturas Microfrontend. Especializado en escalar productos financieros mediante librerías de componentes core y optimización de flujos críticos."
                        </p>
                    </div>

                    <div class="space-y-6">
                        <div>
                            <h2 class="text-xs font-black mb-3 opacity-70 uppercase tracking-widest flex items-center gap-4">
                                <span class="w-12 h-1 bg-primary"></span> Frontend & Lead
                            </h2>
                            <div class="flex flex-wrap gap-3 lg:gap-2">
                                <SkillBadge icon_class="devicon-react-original" name="React" color_class="icon-react" />
                                <SkillBadge icon_class="devicon-nextjs-plain" name="Next.js" color_class="icon-next" />
                                <SkillBadge icon_class="devicon-typescript-plain" name="TS" color_class="icon-ts" />
                                <SkillBadge icon_class="devicon-tailwindcss-original" name="Tailwind" color_class="icon-tail" />
                                <SkillBadge icon_class="devicon-rust-original" name="Leptos" color_class="icon-rust" />
                                <button class="btn btn-outline py-3 px-4 lg:p-4 text-sm lg:text-[11px] font-black border-2 border-neutral-content/30 text-neutral-content/70 h-auto min-h-0 uppercase tracking-tighter">
                                    Module Federation
                                </button>
                            </div>
                        </div>

                        <div>
                            <h2 class="text-xs font-black mb-3 opacity-70 uppercase tracking-widest flex items-center gap-4">
                                <span class="w-12 h-1 bg-secondary"></span> Backend & Cloud
                            </h2>
                            <div class="flex flex-wrap gap-3 lg:gap-2">
                                <SkillBadge icon_class="devicon-nestjs-original" name="NestJS" color_class="icon-nest" />
                                <SkillBadge icon_class="devicon-amazonwebservices-plain-wordmark" name="AWS" color_class="icon-aws" />
                                <SkillBadge icon_class="devicon-git-plain" name="Git" color_class="icon-git" />
                                <button class="btn badge-node py-3 px-4 lg:p-4 text-sm lg:text-[11px] font-black border-2 gap-3 hover:scale-105 transition-all h-auto min-h-0 uppercase tracking-tighter">
                                    <i class="devicon-nodejs-plain colored text-xl lg:text-base"></i> Node.js
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                // --- COLUMNA DERECHA: EXPERIENCIA ---
                <div class="lg:col-span-6 bg-base-300/30 rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 border border-white/5 shadow-2xl flex flex-col h-full overflow-hidden">
                    <div class="mb-6">
                        <h2 class="text-2xl font-black italic underline decoration-secondary decoration-4 md:decoration-8 mb-2 uppercase">EXPERIENCIA_</h2>
                        <div class="flex items-center gap-3">
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                            <p class="text-xs md:text-sm font-bold text-secondary uppercase tracking-widest">Kubo Financiero | 2022 - Actualidad</p>
                        </div>
                    </div>

                    <ul class="list p-0 space-y-6 overflow-y-auto pr-2 custom-scroll">
                        <li class="list-row p-0 border-none items-start gap-4">
                            <div class="text-secondary text-lg font-bold italic">01</div>
                            <div class="space-y-1">
                                <div class="text-base font-black uppercase tracking-tighter text-primary">Core UI & Microfrontends</div>
                                <div class="text-sm opacity-75 font-medium leading-relaxed">
                                  "Liderazgo técnico de librería de componentes (React + Tailwind) distribuida vía Module Federation para unificar el branding corporativo."
                                </div>
                            </div>
                        </li>

                        <li class="list-row p-0 border-none items-start gap-4">
                            <div class="text-secondary text-lg font-bold italic">02</div>
                            <div class="space-y-1">
                                <div class="text-base font-black uppercase tracking-tighter text-primary">Portal Público & Gestión</div>
                                <div class="text-sm opacity-75 font-medium leading-relaxed">
                                    "Migración de servicios clave (Inversiones, Créditos, Transferencias) a arquitectura microfrontend y reemplazo de sistemas legacy de gestión de cartera."
                                </div>
                            </div>
                        </li>

                        <li class="list-row p-0 border-none items-start gap-4">
                            <div class="text-secondary text-lg font-bold italic">03</div>
                            <div class="space-y-1">
                                <div class="text-base font-black uppercase tracking-tighter text-primary">Product Growth & UX</div>
                                <div class="text-sm opacity-75 font-medium leading-relaxed">
                                    "Implementación de Onboarding multistep con validación en tiempo real, aumentando la retención y reduciendo un 20% el tiempo de desembolso."
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div class="mt-auto pt-6 flex gap-3">
                        <a href="mailto:asaedreyesmedina@gmail.com" class="btn btn-primary flex-1 text-sm h-12 font-black rounded-xl uppercase tracking-widest">
                            Contactar
                        </a>
                        <a href="https://github.com" target="_blank" class="btn btn-outline px-6 text-sm h-12 font-black rounded-xl">
                           <i class="devicon-github-original text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    }
}
fn main() {
    mount_to_body(App);
}
