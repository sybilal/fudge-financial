import { animate, state, style, transition, trigger } from "@angular/animations";

export let movelogo =
    // the fade-in/fade-out animation.
    trigger('movelogo', [
        state('raised', style({ transform: 'translate(-50%,-957%)' })),
        state('cent', style({ transform: 'translate(-50%, -600%)' })),
        transition('cent => raised', animate('1000ms')),
    ]);


export let raiseContent =
    // the fade-in/fade-out animation.
    trigger('raiseContent', [
        state('shown', style({ transform: 'translate(-50%,-230%)', opacity: 1 })),
        state('hidden', style({ transform: 'translate(-50%,0%);', opacity: 0 })),
        transition('hidden => shown', animate('1000ms')),
    ]);
export let raiseButton =
    // the fade-in/fade-out animation.
    trigger('raiseButton', [
        state('shown', style({ transform: 'translate(-50%,-500%)', opacity: 1 })),
        state('hidden', style({ transform: 'translate(-50%,0%);', opacity: 0 })),
        transition('hidden => shown', animate('1000ms')),
    ]);

export let fadeOut =
    // the fade-in/fade-out animation.
    trigger('fadeOut', [
        state('shown', style({ opacity: 1 })),
        state('hidden', style({ opacity: 0 })),
        transition('shown => hidden', animate('1000ms')),
    ]);