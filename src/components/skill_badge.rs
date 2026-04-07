use crate::components::skill_modal::SkillModal;
use crate::data::get_skill_details;
use leptos::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::HtmlDialogElement;

#[component]
pub fn SkillBadge(
    icon_class: &'static str,
    name: &'static str,
    color_class: &'static str,
) -> impl IntoView {
    let skill = get_skill_details(name);
    let modal_id = skill.id.clone();

    view! {
        <>
            <button
                // Ajustes:
                // - p-4 en mobile (cómodo para tocar) y p-2 en desktop (más compacto)
                // - text-sm en mobile y text-[10px] en desktop
                // - gap-2 para mantener equilibrio
                class=format!(
                    "btn btn-outline p-4 lg:p-2 text-sm lg:text-[10px] font-black border-2 gap-2 \
                     hover:scale-105 transition-all duration-200 h-auto min-h-0 uppercase \
                     tracking-tighter w-fit {}",
                    color_class
                )
                on:click=move |_| {
                    let doc = web_sys::window().unwrap().document().unwrap();
                    if let Some(el) = doc.get_element_by_id(&modal_id) {
                        let dialog = el.unchecked_into::<HtmlDialogElement>();
                        let _ = dialog.show_modal();
                    }
                }
            >
                // Icono: text-xl en mobile, text-base en desktop
                <i class=format!("{} text-xl lg:text-base", icon_class)></i>
                {name}
            </button>

            <SkillModal skill=skill />
        </>
    }
}
