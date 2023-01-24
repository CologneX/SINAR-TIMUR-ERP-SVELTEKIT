import { Toast, toastStore } from '@skeletonlabs/skeleton';
import type { ToastSettings } from '@skeletonlabs/skeleton';

export function triggerToast(pesan, type): void {
    const t: ToastSettings = {
        message: pesan,
        // Optional: Presets for primary | secondary | tertiary | warning
        preset: type,
        classes: 'postion: bottom-right',
        // Optional: The auto-hide settings
        autohide: true,
        timeout: 5000,
        
        // Optional: Adds a custom action button
    };
    toastStore.trigger(t);
}