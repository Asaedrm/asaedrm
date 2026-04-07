use crate::data::SkillData;
use leptos::prelude::*;

#[component]
pub fn SkillModal(skill: SkillData) -> impl IntoView {
    let skill_id = skill.id.clone();
    let skill_icon = skill.icon.clone();
    let skill_color = skill.color.clone();

    view! {
        <dialog id=skill_id class="modal modal-bottom sm:modal-middle">
            <div class="modal-box border border-primary/10 bg-base-200">
                <div class="flex flex-col items-center gap-2 mb-6">
                    <i class=format!("{} text-6xl", skill_icon) style=format!("color: {}", skill_color)></i>
                    <h3 class="text-2xl font-black uppercase tracking-tighter">{skill.name}</h3>
                </div>
                <p class="py-4 text-sm opacity-80 leading-relaxed font-medium">
                    {skill.description}
                </p>
                <div class="mt-4">
                    <h4 class="text-[10px] font-black uppercase opacity-40 mb-3 tracking-[0.2em]">Proyectos Relevantes</h4>
                    <ul class="list bg-base-100 rounded-2xl border border-white/5">
                        {if skill.projects.is_empty() {
                            view! {
                                <li class="list-row p-4 text-center opacity-50 italic text-xs">
                                    "✨ Trabajando en nuevos retos con esta tecnología..."
                                </li>
                            }.into_any()
                        } else {
                            skill.projects.into_iter().map(|p| view! {
                                <li class="list-row p-4 border-b border-white/5 last:border-none">
                                    <div>
                                        <div class="text-primary font-black text-xs uppercase tracking-tight">{p.name}</div>
                                        <div class="text-[11px] opacity-60 leading-tight">{p.description}</div>
                                    </div>
                                </li>
                            }).collect_view().into_any()
                        }}
                    </ul>
                </div>
                <div class="modal-action">
                    <form method="dialog" class="w-full">
                        <button class="btn btn-primary btn-sm w-full uppercase font-black">Cerrar</button>
                    </form>
                </div>
            </div>
            <form method="dialog" class="modal-backdrop bg-black/70 backdrop-blur-sm">
                <button>close</button>
            </form>
        </dialog>
    }
}
