<?php
function get_svg_icon($type)
{
    $icons = [
        'check' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M9 16.2l-2.5-2.5 1.4-1.4 1.1 1.1 3.5-3.5 1.4 1.4-4.9 4.9z" /></svg>',
        'send' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z" /></svg>',
        'square' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M6 6h12v12H6z" /></svg>'
    ];

    return $icons[$type] ?? '';
}