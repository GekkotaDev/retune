use tauri::Manager;
use window_vibrancy::apply_tabbed;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            let window = app.get_webview_window("main").unwrap();

            #[cfg(target_os = "windows")]
            let _ = apply_tabbed(&window, Some(true));

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
