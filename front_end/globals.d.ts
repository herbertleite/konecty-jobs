// globals.d.ts

import React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            // Adicione aqui as definições para os elementos JSX que você utiliza
            // Exemplo para <div> e <h1>:
            div: React.HTMLAttributes<HTMLDivElement>;
            h1: React.HTMLAttributes<HTMLHeadingElement>;
        }
    }
}
