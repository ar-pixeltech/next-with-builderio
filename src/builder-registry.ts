// builder-registry.ts
import { Builder } from '@builder.io/react';
import dynamic from 'next/dynamic';

// Dynamically import both components
const HeaderLayout = dynamic(() => import('./components/HeaderLayout'));
const FooterLayout = dynamic(() => import('./components/FooterLayout'));

// Register HeaderLayout
Builder.registerComponent(HeaderLayout, {
    name: 'HeaderLayout',
    inputs: [
        {
            name: 'text',
            type: 'string',
            defaultValue: 'Next+Builder',
        },
    ],
    defaults: {
        // defaultStyles can go here
    },
    /* For more information on options: 
           * https://www.builder.io/c/docs/register-components-options
           */
});

// Register FooterLayout
Builder.registerComponent(FooterLayout, {
    name: 'FooterLayout',
    inputs: [
        {
            name: 'text',
            type: 'string',
            defaultValue: 'Next+Builder',
        },
    ],
    defaults: {
        // default styles can go here
    },
});
